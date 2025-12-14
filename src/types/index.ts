export interface AudioItem {
  src: string
  title?: string
  artist?: string
  album?: string
  artwork?: {
    src: string
    sizes: string
    type: string
  }[]
  type?: 'm3u8' | 'm3u8text' | 'default'
}

export interface AudioPlayerProps {
  audioList: AudioItem[]
  showPlayButton?: boolean
  showPrevButton?: boolean
  showNextButton?: boolean
  showVolumeButton?: boolean
  showProgressBar?: boolean
  beforePlay?: (fullback: any) => Promise<boolean> | boolean
  beforePrev?: () => Promise<boolean> | boolean
  beforeNext?: () => Promise<boolean> | boolean
  isLoop?: boolean
  isAutoPlayNext?: boolean
  progressInterval?: number
  showPlaybackRate?: boolean
  showPlayLoading?: boolean
  playbackRates?: number[]
  themeColor?: string
  disabledProgressDrag?: boolean
  disabledProgressClick?: boolean
}
