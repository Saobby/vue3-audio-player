import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import type { AudioPlayerProps, AudioItem } from '../types'
import Hls from 'hls.js'

type EmitType = {
  (e: 'timeupdate'): void
  (e: 'play'): void
  (e: 'pause'): void
  (e: 'play-next'): void
  (e: 'play-prev'): void
  (e: 'play-error', error: any): void
  (e: 'ended', event: Event): void
  (e: 'durationchange', event: Event): void
}

export function useAudioPlayer(props: AudioPlayerProps, emit: EmitType) {
  const audio = ref<HTMLAudioElement>()
  const isPlaying = ref(false)
  const isLoading = ref(false)
  const isDragging = ref(false)
  const currentTime = ref('0')
  const duration = ref(0)
  const currentVolume = ref(1)
  const playbackRate = ref(1)
  const currentPlayIndex = ref(0)
  const isShowErrorMessage = ref(false)
  const noticeMessage = ref('')
  const timer = ref<number | null>(null)

  let hls: Hls | null = null
  let blobUrl: string | null = null

  const formatTime = (second: number) => {
    let minute = Math.floor(second / 60)
    let sec = Math.ceil(second % 60)
    if (sec >= 60) {
      minute++
      sec = 0
    }
    return `${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }

  const currentTimeFormatted = computed(() => {
    return currentTime.value ? formatTime(Number(currentTime.value)) : '00:00'
  })

  const durationFormatted = computed(() => {
    return duration.value ? formatTime(duration.value) : '00:00'
  })

  const handleShowErrorMessage = (opts: { message: string; duration?: number }) => {
    noticeMessage.value = opts.message
    isShowErrorMessage.value = true
    setTimeout(() => {
      isShowErrorMessage.value = false
    }, opts.duration || 3000)
  }

  const clearTimer = () => {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  }

  const playing = () => {
    if (!audio.value || isDragging.value) return
    currentTime.value = String(audio.value.currentTime)
    emit('timeupdate')
  }

  const play = async (opts: { currentTime?: number } = {}) => {
    return new Promise(async (resolve, reject) => {
      isLoading.value = true

      const handlePlay = async () => {
        updateMediaMetadata()

        try {
          await audio.value?.play()
          await nextTick()

          if (opts?.currentTime) {
            audio.value!.currentTime = opts.currentTime
          }

          if (timer.value) {
            currentTime.value = String(audio.value?.currentTime)
          } else {
            timer.value = window.setInterval(playing, props.progressInterval)
          }

          isPlaying.value = true
          isLoading.value = false
          if (audio.value) {
            audio.value.playbackRate = playbackRate.value
          }

          emit('play')
          resolve(audio.value)
        } catch (error: any) {
          handleShowErrorMessage({
            message: error.message
          })

          if (error.code === 9 && props.isAutoPlayNext) {
            setTimeout(() => {
              playNext()
            }, 3000)
          }

          isLoading.value = false
          try {
            emit('play-error', error)
          } catch (e) {
            // Protect against errors thrown inside event listeners
            // so the hook doesn't cause an unhandled Vue error.
            console.error('Error in play-error listener:', e)
          }
          reject(error)
        }
      }

      if (props.beforePlay) {
        props.beforePlay((state: boolean) => {
          if (state !== false) {
            handlePlay()
          }
        })
        return
      }

      handlePlay()
    })
  }

  const pause = () => {
    audio.value?.pause()
    isPlaying.value = false
    emit('pause')
  }

  const playNext = async () => {
    if (props.beforeNext) {
      const canNext = await props.beforeNext()
      if (!canNext) return
    }

    if (currentPlayIndex.value >= props.audioList.length - 1) {
      if (props.isLoop) {
        currentPlayIndex.value = 0
      } else {
        return
      }
    } else {
      currentPlayIndex.value++
    }

    emit('play-next')
    await nextTick()
    await play()
  }

  const playPrev = async () => {
    if (props.beforePrev) {
      const canPrev = await props.beforePrev()
      if (!canPrev) return
    }

    if (currentPlayIndex.value <= 0) {
      if (props.isLoop) {
        currentPlayIndex.value = props.audioList.length - 1
      } else {
        return
      }
    } else {
      currentPlayIndex.value--
    }

    emit('play-prev')
    await nextTick()
    await play()
  }

  const handleSetPlaybackRate = (rate: number) => {
    if (!audio.value) return
    playbackRate.value = rate
    audio.value.playbackRate = rate
  }

  const handleVolumeChange = (volume: number) => {
    if (!audio.value) return
    currentVolume.value = volume
    audio.value.volume = volume
  }

  const handleTimeUpdate = (time: number) => {
    if (!audio.value) return
    currentTime.value = String(time)
    audio.value.currentTime = time
  }

  const onEnded = (event: Event) => {
    emit('ended', event)
    if (props.isAutoPlayNext) {
      playNext()
    }
  }

  const onDurationchange = (event: Event) => {
    if (!audio.value) return
    duration.value = audio.value.duration
    emit('durationchange', event)
  }

  const updateMediaMetadata = () => {
    if ('mediaSession' in navigator) {
      const currentAudio = props.audioList[currentPlayIndex.value] as AudioItem
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentAudio.title,
        artist: currentAudio.artist,
        album: currentAudio.album,
        artwork: currentAudio.artwork
      })

      navigator.mediaSession.setActionHandler('play', () => {
        const p = play()
        if (p && typeof (p as Promise<any>).catch === 'function') {
          ;(p as Promise<any>).catch((err: any) => {
            try {
              emit('play-error', err)
            } catch (e) {
              console.error('Error in play-error listener (mediaSession play):', e)
            }
          })
        }
      })

      navigator.mediaSession.setActionHandler('pause', () => {
        try {
          pause()
        } catch (e) {
          console.error('Error in mediaSession pause handler:', e)
        }
      })

      navigator.mediaSession.setActionHandler('previoustrack', () => {
        const p = playPrev()
        if (p && typeof (p as Promise<any>).catch === 'function') {
          ;(p as Promise<any>).catch((err: any) => {
            try {
              emit('play-error', err)
            } catch (e) {
              console.error('Error in play-error listener (mediaSession prev):', e)
            }
          })
        }
      })

      navigator.mediaSession.setActionHandler('nexttrack', () => {
        const p = playNext()
        if (p && typeof (p as Promise<any>).catch === 'function') {
          ;(p as Promise<any>).catch((err: any) => {
            try {
              emit('play-error', err)
            } catch (e) {
              console.error('Error in play-error listener (mediaSession next):', e)
            }
          })
        }
      })
    }
  }

  const destroyHls = () => {
    if (hls) {
      try {
        try {
          ;(hls as any).stopLoad()
        } catch (e) {
        }
        try {
          hls.detachMedia()
        } catch (e) {
        }
        hls.destroy()
        console.log("hls destroyed")
      } catch (e) {
      }
      hls = null
    }
    if (blobUrl) {
      const urlToRevoke = blobUrl
      blobUrl = null
      setTimeout(() => {
        try {
          URL.revokeObjectURL(urlToRevoke)
        } catch (e) {
        }
      }, 200)
    }
  }

  const setupSource = () => {
    if (!audio.value) return
    const current = props.audioList?.[currentPlayIndex.value]
    const src = current?.src

    try {
      audio.value.pause()
      audio.value.removeAttribute('src')
      audio.value.load()
    } catch (e) {
    }

    destroyHls()

    if (!src) return

    if ((current as AudioItem)?.type === 'm3u8' || (current as AudioItem)?.type === 'm3u8text') {
      if (Hls.isSupported()) {
        hls = new Hls()
        hls.attachMedia(audio.value)
        if ((current as AudioItem)?.type === 'm3u8'){
          hls.loadSource(src)  // m3u8 链接
        }else{
          blobUrl = URL.createObjectURL(new Blob([src], { type: 'application/vnd.apple.mpegurl' }))
          hls.loadSource(blobUrl)  // m3u8 文本内容
        }
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
        })
        hls.on(Hls.Events.ERROR, (_, data) => {
          const msg = data?.details || data?.type || 'hls error'
          handleShowErrorMessage({ message: `HLS error: ${msg}` })  // 显示 hls 的错误消息
          try {
            emit('play-error', data)
          } catch (e) {
            console.error('Error in play-error listener (HLS):', e)
          }
        })
      } else if (audio.value.canPlayType('application/vnd.apple.mpegurl')) {
        if ((current as AudioItem)?.type === 'm3u8') {
          audio.value.src = src // m3u8 链接
        } else {
          blobUrl = URL.createObjectURL(new Blob([src], { type: 'application/vnd.apple.mpegurl' }))
          audio.value.src = blobUrl  // m3u8 文本内容
        }
      } else {
        handleShowErrorMessage({ message: '当前浏览器不支持 m3u8 播放' })
      }
    } else {
      // 普通音频
      audio.value.src = src
    }

    if (audio.value) {
      audio.value.volume = currentVolume.value
      audio.value.playbackRate = playbackRate.value
    }
  }

  onMounted(() => {
    if (audio.value) {
      audio.value.volume = currentVolume.value
      audio.value.playbackRate = playbackRate.value
    }

    watch(
      [() => audio.value, () => currentPlayIndex.value, () => props.audioList],
      () => {
        setupSource()
      },
      { immediate: true }
    )
  })

  onBeforeUnmount(() => {
    clearTimer()
    destroyHls()
  })

  return {
    audio,
    isPlaying,
    isLoading,
    currentTime,
    duration,
    currentTimeFormatted,
    durationFormatted,
    currentVolume,
    playbackRate,
    currentPlayIndex,
    isShowErrorMessage,
    noticeMessage,
    play,
    pause,
    playNext,
    playPrev,
    handleSetPlaybackRate,
    handleVolumeChange,
    handleTimeUpdate,
    handleProgressStart: () => (isDragging.value = true),
    handleProgressEnd: () => (isDragging.value = false),
    handleProgressMove: playing,
    handleProgressClick: playing,
    onEnded,
    onDurationchange
  }
}
