import { defineComponent as ft, ref as ge, createElementBlock as de, openBlock as oe, normalizeStyle as Me, createElementVNode as le, createVNode as ke, withModifiers as it, toDisplayString as St, Transition as bn, withCtx as _n, withDirectives as lt, Fragment as hi, renderList as Dn, vShow as ct, createCommentVNode as Pt, normalizeClass as lr, renderSlot as Gt, unref as H, onBeforeUnmount as Pi, watch as Cn, computed as Le, onMounted as yo, nextTick as Us, provide as Pn, createBlock as As, mergeProps as ki, createTextVNode as Eo, resolveDynamicComponent as To, toHandlers as vo } from "vue";
const So = ["onClick"], xo = /* @__PURE__ */ ft({
  __name: "PlaybackRate",
  props: {
    themeColor: {},
    playbackRate: {},
    playbackRates: {}
  },
  emits: ["change"],
  setup(a, { emit: e }) {
    const t = e, s = ge(!1), i = () => {
      s.value = !s.value;
    }, r = (n) => {
      t("change", n), s.value = !1;
    };
    return (n, o) => (oe(), de("div", {
      class: "vue-audio-player__play-rate",
      style: Me({ color: a.themeColor })
    }, [
      le("span", {
        onClick: it(i, ["stop"])
      }, St(a.playbackRate.toFixed(1) + "x"), 1),
      ke(bn, { name: "fade-rate" }, {
        default: _n(() => [
          lt(le("div", {
            class: "vue-audio-player__play-rate__dropdown",
            style: Me({ backgroundColor: a.themeColor })
          }, [
            (oe(!0), de(hi, null, Dn(a.playbackRates, (c) => (oe(), de("div", {
              key: "pr_" + c,
              onClick: it((l) => r(c), ["stop"])
            }, St(c.toFixed(1) + "x"), 9, So))), 128))
          ], 4), [
            [ct, s.value]
          ])
        ]),
        _: 1
      })
    ], 4));
  }
}), Ve = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [s, i] of e)
    t[s] = i;
  return t;
}, Ao = /* @__PURE__ */ Ve(xo, [["__scopeId", "data-v-e667ee00"]]), Lo = {}, Io = {
  class: "vue-audio-player__play-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
};
function Ro(a, e) {
  return oe(), de("svg", Io, [...e[0] || (e[0] = [
    le("path", { d: "M744.4353125 43.919375L280.94 425.3525 280.94 104.4359375a38.5096875 38.5096875 0 1 0-77.47875-0.916875l0 816.5034375a38.5096875 38.5096875 0 1 0 77.47875 0L280.94 596.35625l463.4953125 383.7253125a45.845625 45.845625 0 0 0 76.1034375-33.92625L820.53875 77.845625a45.845625 45.845625 0 0 0-76.1034375-33.92625z" }, null, -1)
  ])]);
}
const bo = /* @__PURE__ */ Ve(Lo, [["render", Ro]]), _o = {}, Do = {
  class: "vue-audio-player__play-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
};
function Co(a, e) {
  return oe(), de("svg", Do, [...e[0] || (e[0] = [
    le("path", { d: "M512 8.97941504c277.81531056 0 503.02058496 225.20527562 503.02058496 503.02058496s-225.20527562 503.02058496-503.02058496 503.02058496S8.97941504 789.81531056 8.97941504 512 234.18468944 8.97941504 512 8.97941504z m-70.12698734 325.48390806c-26.63050141 0-48.23079685 21.60029545-48.23079807 48.23079686v253.81827015a48.23079685 48.23079685 0 0 0 74.26951062 40.56712988l199.46245688-128.1518906a48.23079685 48.23079685 0 0 0-0.35507283-81.37097702l-199.46245689-125.66637833a48.23079685 48.23079685 0 0 0-25.71322921-7.42695094z" }, null, -1)
  ])]);
}
const Po = /* @__PURE__ */ Ve(_o, [["render", Co]]), ko = {}, wo = {
  class: "vue-audio-player__play-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
};
function Oo(a, e) {
  return oe(), de("svg", wo, [...e[0] || (e[0] = [
    le("path", { d: "M512 1012.62222187C234.38222187 1012.62222187 11.37777813 789.61777813 11.37777813 512S234.38222187 11.37777813 512 11.37777813s500.62222187 223.0044448 500.62222187 500.62222187-223.0044448 500.62222187-500.62222187 500.62222187z m136.53333333-682.66666667c-27.30666667 0-45.51111147 18.2044448-45.51111146 45.51111147v273.06666666c0 27.30666667 18.2044448 45.51111147 45.51111146 45.51111147s45.51111147-18.2044448 45.51111147-45.51111147V375.46666667c0-27.30666667-18.2044448-45.51111147-45.51111147-45.51111147zM375.46666667 329.9555552c-27.30666667 0-45.51111147 18.2044448-45.51111147 45.51111147v273.06666666c0 27.30666667 18.2044448 45.51111147 45.51111147 45.51111147s45.51111147-18.2044448 45.51111146-45.51111147V375.46666667c0-27.30666667-18.2044448-45.51111147-45.51111146-45.51111147z" }, null, -1)
  ])]);
}
const Fo = /* @__PURE__ */ Ve(ko, [["render", Oo]]), Mo = {}, No = {
  class: "vue-audio-player__play-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
};
function Bo(a, e) {
  return oe(), de("svg", No, [...e[0] || (e[0] = [
    le("path", { d: "M279.5646875 980.080625L743.06 598.6475 743.06 919.5640625a38.5096875 38.5096875 0 1 0 77.47875 0.916875l0-816.5034375a38.5096875 38.5096875 0 1 0-77.47875 0L743.06 427.64375l-463.4953125-383.7253125a45.845625 45.845625 0 0 0-76.1034375 33.92625L203.46125 946.154375a45.845625 45.845625 0 0 0 76.1034375 33.92625z" }, null, -1)
  ])]);
}
const $o = /* @__PURE__ */ Ve(Mo, [["render", Bo]]), Uo = {}, Go = {
  class: "vue-audio-player__play-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
};
function Ko(a, e) {
  return oe(), de("svg", Go, [...e[0] || (e[0] = [
    le("path", { d: "M1009.6852389 501.04265842v72.84551793c-12.28886699 137.14708366-93.42867683 254.45999047-208.60559588 317.12488904L762.68733667 817.14116381A318.92799715 318.92799715 0 0 0 928.10158763 537.46541682a319.0112165 319.0112165 0 0 0-175.15102891-284.80766635l38.33682717-73.87190158c120.33657856 61.22241365 205.74836509 181.25385159 218.39785301 322.25680953z m-165.69165255 27.96202667a248.96745017 248.96745017 0 0 1-120.17013874 213.51559395l-38.55874617-74.0660827a165.77487189 165.77487189 0 0 0 75.50856761-139.44951125 165.77487189 165.77487189 0 0 0-78.03291762-141.08617842l38.44778667-74.01060238a248.96745017 248.96745017 0 0 1 122.80544825 215.0967808zM625.26285255 162.75206827V872.89877618c0 56.72851683-70.04376747 84.24670094-109.29601764 42.94168462l-182.44667619-166.55159523H110.71162937a83.2203173 83.2203173 0 0 1-83.2203173-83.2203173V388.44556857a83.2203173 83.2203173 0 0 1 78.31031808-83.0816165l5.60350208-0.1387008 224.9167781 3.74491478 179.67266474-189.13204224c39.22451001-41.33275762 109.2960165-13.78683221 109.29601764 42.94168348z" }, null, -1)
  ])]);
}
const Vo = /* @__PURE__ */ Ve(Uo, [["render", Ko]]), Ho = { class: "play-controls" }, Yo = {
  key: 1,
  class: "vue-audio-player__play-loading"
}, Wo = /* @__PURE__ */ ft({
  __name: "PlayControls",
  props: {
    showPrev: { type: Boolean },
    showNext: { type: Boolean },
    showPlay: { type: Boolean },
    showLoading: { type: Boolean },
    isPlaying: { type: Boolean },
    isLoading: { type: Boolean },
    themeColor: {},
    isLoop: { type: Boolean },
    currentIndex: {},
    total: {}
  },
  emits: ["play", "pause", "prev", "next"],
  setup(a, { emit: e }) {
    const t = a, s = e, i = () => {
      t.currentIndex <= 0 && !t.isLoop || s("prev");
    }, r = () => {
      t.currentIndex >= t.total - 1 && !t.isLoop || s("next");
    };
    return (n, o) => (oe(), de("div", Ho, [
      a.showPrev ? (oe(), de("div", {
        key: 0,
        class: lr(["vue-audio-player__play-prev", { disable: !a.isLoop && a.currentIndex === 0 }]),
        onClick: it(i, ["stop"]),
        style: Me({ color: a.themeColor })
      }, [
        Gt(n.$slots, "play-prev", {}, () => [
          ke(H(bo))
        ], !0)
      ], 6)) : Pt("", !0),
      a.isLoading && a.showLoading ? (oe(), de("div", Yo, [
        (oe(), de(hi, null, Dn(8, (c) => le("span", {
          key: c,
          style: Me({ backgroundColor: a.themeColor })
        }, null, 4)), 64))
      ])) : (oe(), de(hi, { key: 2 }, [
        !a.isPlaying && a.showPlay ? (oe(), de("div", {
          key: 0,
          class: "vue-audio-player__play-start",
          onClick: o[0] || (o[0] = it((c) => s("play"), ["stop"])),
          style: Me({ color: a.themeColor })
        }, [
          Gt(n.$slots, "play-start", {}, () => [
            ke(H(Po))
          ], !0)
        ], 4)) : a.showPlay ? (oe(), de("div", {
          key: 1,
          class: "vue-audio-player__play-pause",
          onClick: o[1] || (o[1] = it((c) => s("pause"), ["stop"])),
          style: Me({ color: a.themeColor })
        }, [
          Gt(n.$slots, "play-pause", {}, () => [
            ke(H(Fo))
          ], !0)
        ], 4)) : Pt("", !0)
      ], 64)),
      a.showNext ? (oe(), de("div", {
        key: 3,
        class: lr(["vue-audio-player__play-next", { disable: !a.isLoop && a.currentIndex === a.total - 1 }]),
        onClick: it(r, ["stop"]),
        style: Me({ color: a.themeColor })
      }, [
        Gt(n.$slots, "play-next", {}, () => [
          ke(H($o))
        ], !0)
      ], 6)) : Pt("", !0)
    ]));
  }
}), kn = /* @__PURE__ */ Ve(Wo, [["__scopeId", "data-v-da3df3ed"]]);
function qo(a, e) {
  const t = ge(null), s = ge(null), i = (c) => {
    if (!t.value) return;
    const l = t.value.getBoundingClientRect(), u = c.clientY - l.top, h = l.height;
    let d = 1 - u / h;
    d > 1 && (d = 1), d < 0 && (d = 0), e("volumeChange", d);
  }, r = (c) => {
    i(c);
  }, n = () => {
    document.addEventListener("mousemove", r), document.addEventListener("mouseup", o);
  }, o = () => {
    document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", o);
  };
  return s.value && s.value.addEventListener("mousedown", n), Pi(() => {
    s.value && s.value.removeEventListener("mousedown", n), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", o);
  }), {
    volumeWrap: t,
    volumeBar: s,
    handleVolumeClick: i
  };
}
const jo = { class: "vue-audio-player__play-volume-icon-wrap" }, Xo = /* @__PURE__ */ ft({
  __name: "VolumeControl",
  props: {
    themeColor: {},
    volume: {}
  },
  emits: ["volumeChange"],
  setup(a, { emit: e }) {
    const t = a, s = e, i = ge(!1), { volumeWrap: r, volumeBar: n, handleVolumeClick: o } = qo(t, s), c = () => {
      i.value = !i.value;
    };
    return (l, u) => (oe(), de("div", jo, [
      ke(H(Vo), {
        class: "vue-audio-player__play-icon",
        style: Me({ color: a.themeColor }),
        onClick: it(c, ["stop"])
      }, null, 8, ["style"]),
      ke(bn, { name: "fade-volume" }, {
        default: _n(() => [
          lt(le("div", {
            ref_key: "volumeWrap",
            ref: r,
            class: "vue-audio-player__play-volume-wrap",
            onClick: u[0] || (u[0] = it(
              //@ts-ignore
              (...h) => H(o) && H(o)(...h),
              ["stop"]
            ))
          }, [
            le("div", {
              ref_key: "volumeBar",
              ref: n,
              class: "vue-audio-player__play-volume",
              style: Me({
                height: a.volume * 100 + "%",
                backgroundColor: a.themeColor
              })
            }, null, 4)
          ], 512), [
            [ct, i.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}), wn = /* @__PURE__ */ Ve(Xo, [["__scopeId", "data-v-50ba1133"]]);
function zo(a, e) {
  const t = ge(null), s = ge(null), i = ge(null), r = () => {
    if (!s.value || !i.value || !a.duration) return;
    const u = Number(a.currentTime) / a.duration * 100;
    s.value.style.width = `${u}%`, i.value.style.left = `${u}%`;
  }, n = (u) => {
    if (a.disabledClick || !t.value || !a.duration) return;
    const h = t.value.getBoundingClientRect(), g = (u.clientX - h.left) / h.width * a.duration;
    e("timeUpdate", g), e("progressClick", u);
  }, o = (u) => {
    a.disabledDrag || (e("progressStart", u), u instanceof MouseEvent ? (document.addEventListener("mousemove", c), document.addEventListener("mouseup", l)) : (document.addEventListener("touchmove", c), document.addEventListener("touchend", l)));
  }, c = (u) => {
    if (!t.value || !a.duration) return;
    const h = t.value.getBoundingClientRect();
    let f = ((u instanceof MouseEvent ? u.clientX : u.touches[0].clientX) - h.left) / h.width * a.duration;
    f < 0 && (f = 0), f > a.duration && (f = a.duration), e("timeUpdate", f), e("progressMove", u);
  }, l = (u) => {
    e("progressEnd", u), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", c), document.removeEventListener("touchend", l);
  };
  return Cn(() => a.currentTime, r), Pi(() => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", c), document.removeEventListener("touchend", l);
  }), {
    progressWrap: t,
    progress: s,
    progressPoint: i,
    handleProgressClick: n,
    handleProgressStart: o
  };
}
const Qo = /* @__PURE__ */ ft({
  __name: "ProgressBar",
  props: {
    currentTime: {},
    duration: {},
    themeColor: {},
    disabledDrag: { type: Boolean },
    disabledClick: { type: Boolean }
  },
  emits: ["timeUpdate", "progressStart", "progressEnd", "progressMove", "progressClick"],
  setup(a, { emit: e }) {
    const t = a, s = e, { progressWrap: i, progress: r, progressPoint: n, handleProgressClick: o, handleProgressStart: c } = zo(t, s);
    return (l, u) => (oe(), de("div", {
      ref_key: "progressWrap",
      ref: i,
      class: "vue-audio-player__progress-wrap",
      style: Me({
        cursor: a.disabledClick ? "auto" : "pointer"
      }),
      onClick: u[2] || (u[2] = it(
        //@ts-ignore
        (...h) => H(o) && H(o)(...h),
        ["stop"]
      ))
    }, [
      le("div", {
        ref_key: "progress",
        ref: r,
        class: "vue-audio-player__progress",
        style: Me({
          backgroundColor: a.themeColor
        })
      }, null, 4),
      le("div", {
        ref_key: "progressPoint",
        ref: n,
        class: "vue-audio-player__progress-point",
        style: Me({
          backgroundColor: a.themeColor,
          boxShadow: `0 0 10px 0 ${a.themeColor}`,
          cursor: a.disabledDrag ? "auto" : "pointer"
        }),
        onMousedown: u[0] || (u[0] = //@ts-ignore
        (...h) => H(c) && H(c)(...h)),
        onTouchstart: u[1] || (u[1] = //@ts-ignore
        (...h) => H(c) && H(c)(...h))
      }, null, 36)
    ], 4));
  }
}), On = /* @__PURE__ */ Ve(Qo, [["__scopeId", "data-v-4dedf8eb"]]), Zo = { class: "vue-audio-player__time-wrap" }, Jo = { class: "vue-audio-player__current-time" }, el = { class: "vue-audio-player__duration" }, tl = /* @__PURE__ */ ft({
  __name: "TimeDisplay",
  props: {
    currentTime: {},
    duration: {}
  },
  setup(a) {
    return (e, t) => (oe(), de("div", Zo, [
      le("div", Jo, St(a.currentTime), 1),
      le("div", el, St(a.duration), 1)
    ]));
  }
}), Fn = /* @__PURE__ */ Ve(tl, [["__scopeId", "data-v-2df0268a"]]), $ = Number.isFinite || function(a) {
  return typeof a == "number" && isFinite(a);
}, sl = Number.isSafeInteger || function(a) {
  return typeof a == "number" && Math.abs(a) <= il;
}, il = Number.MAX_SAFE_INTEGER || 9007199254740991;
let Y = /* @__PURE__ */ (function(a) {
  return a.NETWORK_ERROR = "networkError", a.MEDIA_ERROR = "mediaError", a.KEY_SYSTEM_ERROR = "keySystemError", a.MUX_ERROR = "muxError", a.OTHER_ERROR = "otherError", a;
})({}), _ = /* @__PURE__ */ (function(a) {
  return a.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", a.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", a.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", a.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", a.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", a.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_PARSING_ERROR = "levelParsingError", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.FRAG_GAP = "fragGap", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.ASSET_LIST_LOAD_ERROR = "assetListLoadError", a.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", a.ASSET_LIST_PARSING_ERROR = "assetListParsingError", a.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.ATTACH_MEDIA_ERROR = "attachMediaError", a.UNKNOWN = "unknown", a;
})({}), m = /* @__PURE__ */ (function(a) {
  return a.MEDIA_ATTACHING = "hlsMediaAttaching", a.MEDIA_ATTACHED = "hlsMediaAttached", a.MEDIA_DETACHING = "hlsMediaDetaching", a.MEDIA_DETACHED = "hlsMediaDetached", a.MEDIA_ENDED = "hlsMediaEnded", a.STALL_RESOLVED = "hlsStallResolved", a.BUFFER_RESET = "hlsBufferReset", a.BUFFER_CODECS = "hlsBufferCodecs", a.BUFFER_CREATED = "hlsBufferCreated", a.BUFFER_APPENDING = "hlsBufferAppending", a.BUFFER_APPENDED = "hlsBufferAppended", a.BUFFER_EOS = "hlsBufferEos", a.BUFFERED_TO_END = "hlsBufferedToEnd", a.BUFFER_FLUSHING = "hlsBufferFlushing", a.BUFFER_FLUSHED = "hlsBufferFlushed", a.MANIFEST_LOADING = "hlsManifestLoading", a.MANIFEST_LOADED = "hlsManifestLoaded", a.MANIFEST_PARSED = "hlsManifestParsed", a.LEVEL_SWITCHING = "hlsLevelSwitching", a.LEVEL_SWITCHED = "hlsLevelSwitched", a.LEVEL_LOADING = "hlsLevelLoading", a.LEVEL_LOADED = "hlsLevelLoaded", a.LEVEL_UPDATED = "hlsLevelUpdated", a.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", a.LEVELS_UPDATED = "hlsLevelsUpdated", a.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", a.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", a.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", a.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", a.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", a.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", a.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", a.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", a.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", a.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", a.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", a.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", a.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", a.CUES_PARSED = "hlsCuesParsed", a.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", a.INIT_PTS_FOUND = "hlsInitPtsFound", a.FRAG_LOADING = "hlsFragLoading", a.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", a.FRAG_LOADED = "hlsFragLoaded", a.FRAG_DECRYPTED = "hlsFragDecrypted", a.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", a.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", a.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", a.FRAG_PARSED = "hlsFragParsed", a.FRAG_BUFFERED = "hlsFragBuffered", a.FRAG_CHANGED = "hlsFragChanged", a.FPS_DROP = "hlsFpsDrop", a.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", a.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", a.ERROR = "hlsError", a.DESTROYING = "hlsDestroying", a.KEY_LOADING = "hlsKeyLoading", a.KEY_LOADED = "hlsKeyLoaded", a.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", a.BACK_BUFFER_REACHED = "hlsBackBufferReached", a.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", a.ASSET_LIST_LOADING = "hlsAssetListLoading", a.ASSET_LIST_LOADED = "hlsAssetListLoaded", a.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", a.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", a.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", a.INTERSTITIAL_STARTED = "hlsInterstitialStarted", a.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", a.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", a.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", a.INTERSTITIAL_ENDED = "hlsInterstitialEnded", a.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", a.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", a.EVENT_CUE_ENTER = "hlsEventCueEnter", a;
})({});
var Z = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, V = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
class Lt {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class rl {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new Lt(e), this.fast_ = new Lt(t), this.defaultTTFB_ = i, this.ttfb_ = new Lt(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new Lt(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new Lt(t, i.getEstimate(), i.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new Lt(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, i = e / 1e3, r = s / i;
    this.fast_.sample(i, r), this.slow_.sample(i, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  get defaultEstimate() {
    return this.defaultEstimate_;
  }
  destroy() {
  }
}
function nl(a, e, t) {
  return (e = ol(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function re() {
  return re = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t) ({}).hasOwnProperty.call(t, s) && (a[s] = t[s]);
    }
    return a;
  }, re.apply(null, arguments);
}
function cr(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function se(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cr(Object(t), !0).forEach(function(s) {
      nl(a, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : cr(Object(t)).forEach(function(s) {
      Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return a;
}
function al(a, e) {
  if (typeof a != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(a, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function ol(a) {
  var e = al(a, "string");
  return typeof e == "symbol" ? e : e + "";
}
class Be {
  constructor(e, t) {
    this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
    const s = `[${e}]:`;
    this.trace = at, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s);
  }
}
const at = function() {
}, ll = {
  trace: at,
  debug: at,
  log: at,
  warn: at,
  info: at,
  error: at
};
function di() {
  return re({}, ll);
}
function cl(a, e) {
  const t = self.console[a];
  return t ? t.bind(self.console, `${e ? "[" + e + "] " : ""}[${a}] >`) : at;
}
function ur(a, e, t) {
  return e[a] ? e[a].bind(e) : cl(a, t);
}
const fi = di();
function ul(a, e, t) {
  const s = di();
  if (typeof console == "object" && a === !0 || typeof a == "object") {
    const i = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    ];
    i.forEach((r) => {
      s[r] = ur(r, a, t);
    });
    try {
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.15`);
    } catch {
      return di();
    }
    i.forEach((r) => {
      fi[r] = ur(r, a);
    });
  } else
    re(fi, s);
  return s;
}
const ie = fi;
function ht(a = !0) {
  return typeof self > "u" ? void 0 : (a || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function hl(a) {
  return typeof self < "u" && a === self.ManagedMediaSource;
}
function Mn(a, e) {
  const t = Object.keys(a), s = Object.keys(e), i = t.length, r = s.length;
  return !i || !r || i === r && !t.some((n) => s.indexOf(n) === -1);
}
function we(a, e = !1) {
  if (typeof TextDecoder < "u") {
    const l = new TextDecoder("utf-8").decode(a);
    if (e) {
      const u = l.indexOf("\0");
      return u !== -1 ? l.substring(0, u) : l;
    }
    return l.replace(/\0/g, "");
  }
  const t = a.length;
  let s, i, r, n = "", o = 0;
  for (; o < t; ) {
    if (s = a[o++], s === 0 && e)
      return n;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        n += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        i = a[o++], n += String.fromCharCode((s & 31) << 6 | i & 63);
        break;
      case 14:
        i = a[o++], r = a[o++], n += String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | (r & 63) << 0);
        break;
    }
  }
  return n;
}
function ve(a) {
  let e = "";
  for (let t = 0; t < a.length; t++) {
    let s = a[t].toString(16);
    s.length < 2 && (s = "0" + s), e += s;
  }
  return e;
}
function Nn(a) {
  return Uint8Array.from(a.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
function dl(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Gs = { exports: {} }, hr;
function fl() {
  return hr || (hr = 1, (function(a, e) {
    (function(t) {
      var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
        // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
        // E.g
        // With opts.alwaysNormalize = false (default, spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
        // With opts.alwaysNormalize = true (not spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
        buildAbsoluteURL: function(c, l, u) {
          if (u = u || {}, c = c.trim(), l = l.trim(), !l) {
            if (!u.alwaysNormalize)
              return c;
            var h = o.parseURL(c);
            if (!h)
              throw new Error("Error trying to parse base URL.");
            return h.path = o.normalizePath(
              h.path
            ), o.buildURLFromParts(h);
          }
          var d = o.parseURL(l);
          if (!d)
            throw new Error("Error trying to parse relative URL.");
          if (d.scheme)
            return u.alwaysNormalize ? (d.path = o.normalizePath(d.path), o.buildURLFromParts(d)) : l;
          var g = o.parseURL(c);
          if (!g)
            throw new Error("Error trying to parse base URL.");
          if (!g.netLoc && g.path && g.path[0] !== "/") {
            var f = i.exec(g.path);
            g.netLoc = f[1], g.path = f[2];
          }
          g.netLoc && !g.path && (g.path = "/");
          var p = {
            // 2c) Otherwise, the embedded URL inherits the scheme of
            // the base URL.
            scheme: g.scheme,
            netLoc: d.netLoc,
            path: null,
            params: d.params,
            query: d.query,
            fragment: d.fragment
          };
          if (!d.netLoc && (p.netLoc = g.netLoc, d.path[0] !== "/"))
            if (!d.path)
              p.path = g.path, d.params || (p.params = g.params, d.query || (p.query = g.query));
            else {
              var y = g.path, E = y.substring(0, y.lastIndexOf("/") + 1) + d.path;
              p.path = o.normalizePath(E);
            }
          return p.path === null && (p.path = u.alwaysNormalize ? o.normalizePath(d.path) : d.path), o.buildURLFromParts(p);
        },
        parseURL: function(c) {
          var l = s.exec(c);
          return l ? {
            scheme: l[1] || "",
            netLoc: l[2] || "",
            path: l[3] || "",
            params: l[4] || "",
            query: l[5] || "",
            fragment: l[6] || ""
          } : null;
        },
        normalizePath: function(c) {
          for (c = c.split("").reverse().join("").replace(r, ""); c.length !== (c = c.replace(n, "")).length; )
            ;
          return c.split("").reverse().join("");
        },
        buildURLFromParts: function(c) {
          return c.scheme + c.netLoc + c.path + c.params + c.query + c.fragment;
        }
      };
      a.exports = o;
    })();
  })(Gs)), Gs.exports;
}
var wi = fl();
class Oi {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var ne = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class Bn {
  constructor(e) {
    this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, typeof e == "string" && (e = {
      url: e
    }), this.base = e, ml(this, "stats");
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let i;
    s.length === 1 ? i = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : i = parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i];
  }
  get baseurl() {
    return this.base.url;
  }
  get byteRange() {
    return this._byteRange === null ? [] : this._byteRange;
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get elementaryStreams() {
    return this._streams === null && (this._streams = {
      [ne.AUDIO]: null,
      [ne.VIDEO]: null,
      [ne.AUDIOVIDEO]: null
    }), this._streams;
  }
  set elementaryStreams(e) {
    this._streams = e;
  }
  get hasStats() {
    return this._stats !== null;
  }
  get hasStreams() {
    return this._streams !== null;
  }
  get stats() {
    return this._stats === null && (this._stats = new Oi()), this._stats;
  }
  set stats(e) {
    this._stats = e;
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = wi.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[ne.AUDIO] = null, e[ne.VIDEO] = null, e[ne.AUDIOVIDEO] = null;
  }
}
function fe(a) {
  return a.sn !== "initSegment";
}
class Ks extends Bn {
  constructor(e, t) {
    super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get byteLength() {
    if (this.hasStats) {
      const e = this.stats.total;
      if (e)
        return e;
    }
    if (this.byteRange.length) {
      const e = this.byteRange[0], t = this.byteRange[1];
      if ($(e) && $(t))
        return t - e;
    }
    return null;
  }
  get bitrate() {
    return this.byteLength ? this.byteLength * 8 / this.duration : this._bitrate ? this._bitrate : null;
  }
  set bitrate(e) {
    this._bitrate = e;
  }
  get decryptdata() {
    var e;
    const {
      levelkeys: t
    } = this;
    if (!t || t.NONE)
      return null;
    if (t.identity)
      this._decryptdata || (this._decryptdata = t.identity.getDecryptData(this.sn));
    else if (!((e = this._decryptdata) != null && e.keyId)) {
      const s = Object.keys(t);
      if (s.length === 1) {
        const i = this._decryptdata = t[s[0]] || null;
        i && (this._decryptdata = i.getDecryptData(this.sn, t));
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null)
      return null;
    const e = $(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      var t;
      const s = Object.keys(this.levelkeys), i = s.length;
      if (i > 1 || i === 1 && (t = this.levelkeys[s[0]]) != null && t.encrypted)
        return !0;
    }
    return !1;
  }
  get programDateTime() {
    return this._programDateTime === null && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime;
  }
  set programDateTime(e) {
    if (!$(e)) {
      this._programDateTime = this.rawProgramDateTime = null;
      return;
    }
    this._programDateTime = e;
  }
  get ref() {
    return fe(this) ? (this._ref || (this._ref = {
      base: this.base,
      start: this.start,
      duration: this.duration,
      sn: this.sn,
      programDateTime: this.programDateTime
    }), this._ref) : null;
  }
  addStart(e) {
    this.setStart(this.start + e);
  }
  setStart(e) {
    this.start = e, this._ref && (this._ref.start = e);
  }
  setDuration(e) {
    this.duration = e, this._ref && (this._ref.duration = e);
  }
  setKeyFormat(e) {
    const t = this.levelkeys;
    if (t) {
      var s;
      const i = t[e];
      i && !((s = this._decryptdata) != null && s.keyId) && (this._decryptdata = i.getDecryptData(this.sn, t));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, i, r, n = !1) {
    const {
      elementaryStreams: o
    } = this, c = o[e];
    if (!c) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: r,
        partial: n
      };
      return;
    }
    c.startPTS = Math.min(c.startPTS, t), c.endPTS = Math.max(c.endPTS, s), c.startDTS = Math.min(c.startDTS, i), c.endDTS = Math.max(c.endDTS, r);
  }
}
class gl extends Bn {
  constructor(e, t, s, i, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
    const n = e.enumeratedString("BYTERANGE");
    n && this.setByteRange(n, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
function $n(a, e) {
  const t = Object.getPrototypeOf(a);
  if (t) {
    const s = Object.getOwnPropertyDescriptor(t, e);
    return s || $n(t, e);
  }
}
function ml(a, e) {
  const t = $n(a, e);
  t && (t.enumerable = !0, Object.defineProperty(a, e, t));
}
const dr = Math.pow(2, 32) - 1, pl = [].push, Un = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function me(a) {
  return String.fromCharCode.apply(null, a);
}
function Gn(a, e) {
  const t = a[e] << 8 | a[e + 1];
  return t < 0 ? 65536 + t : t;
}
function q(a, e) {
  const t = Kn(a, e);
  return t < 0 ? 4294967296 + t : t;
}
function fr(a, e) {
  let t = q(a, e);
  return t *= Math.pow(2, 32), t += q(a, e + 4), t;
}
function Kn(a, e) {
  return a[e] << 24 | a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3];
}
function yl(a) {
  const e = a.byteLength;
  for (let t = 0; t < e; ) {
    const s = q(a, t);
    if (s > 8 && a[t + 4] === 109 && a[t + 5] === 111 && a[t + 6] === 111 && a[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function Q(a, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = a.byteLength;
  for (let i = 0; i < s; ) {
    const r = q(a, i), n = me(a.subarray(i + 4, i + 8)), o = r > 1 ? i + r : s;
    if (n === e[0])
      if (e.length === 1)
        t.push(a.subarray(i + 8, o));
      else {
        const c = Q(a.subarray(i + 8, o), e.slice(1));
        c.length && pl.apply(t, c);
      }
    i = o;
  }
  return t;
}
function El(a) {
  const e = [], t = a[0];
  let s = 8;
  const i = q(a, s);
  s += 4;
  let r = 0, n = 0;
  t === 0 ? (r = q(a, s), n = q(a, s + 4), s += 8) : (r = fr(a, s), n = fr(a, s + 8), s += 16), s += 2;
  let o = a.length + n;
  const c = Gn(a, s);
  s += 2;
  for (let l = 0; l < c; l++) {
    let u = s;
    const h = q(a, u);
    u += 4;
    const d = h & 2147483647;
    if ((h & 2147483648) >>> 31 === 1)
      return ie.warn("SIDX has hierarchical references (not supported)"), null;
    const f = q(a, u);
    u += 4, e.push({
      referenceSize: d,
      subsegmentDuration: f,
      // unscaled
      info: {
        duration: f / i,
        start: o,
        end: o + d - 1
      }
    }), o += d, u += 4, s = u;
  }
  return {
    earliestPresentationTime: r,
    timescale: i,
    version: t,
    referencesCount: c,
    references: e
  };
}
function Vn(a) {
  const e = [], t = Q(a, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], n = Q(r, ["tkhd"])[0];
    if (n) {
      let o = n[0];
      const c = q(n, o === 0 ? 12 : 20), l = Q(r, ["mdia", "mdhd"])[0];
      if (l) {
        o = l[0];
        const u = q(l, o === 0 ? 12 : 20), h = Q(r, ["mdia", "hdlr"])[0];
        if (h) {
          const d = me(h.subarray(8, 12)), g = {
            soun: ne.AUDIO,
            vide: ne.VIDEO
          }[d], f = Q(r, ["mdia", "minf", "stbl", "stsd"])[0], p = Tl(f);
          g ? (e[c] = {
            timescale: u,
            type: g,
            stsd: p
          }, e[g] = se({
            timescale: u,
            id: c
          }, p)) : e[c] = {
            timescale: u,
            type: d,
            stsd: p
          };
        }
      }
    }
  }
  return Q(a, ["moov", "mvex", "trex"]).forEach((i) => {
    const r = q(i, 4), n = e[r];
    n && (n.default = {
      duration: q(i, 12),
      flags: q(i, 20)
    });
  }), e;
}
function Tl(a) {
  const e = a.subarray(8), t = e.subarray(86), s = me(e.subarray(4, 8));
  let i = s, r;
  const n = s === "enca" || s === "encv";
  if (n) {
    const l = Q(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    Q(l, ["sinf"]).forEach((h) => {
      const d = Q(h, ["schm"])[0];
      if (d) {
        const g = me(d.subarray(4, 8));
        if (g === "cbcs" || g === "cenc") {
          const f = Q(h, ["frma"])[0];
          f && (i = me(f));
        }
      }
    });
  }
  const o = i;
  switch (i) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const c = Q(t, ["avcC"])[0];
      c && c.length > 3 && (i += "." + ts(c[1]) + ts(c[2]) + ts(c[3]), r = es(o === "avc1" ? "dva1" : "dvav", t));
      break;
    }
    case "mp4a": {
      const c = Q(e, [s])[0], l = Q(c.subarray(28), ["esds"])[0];
      if (l && l.length > 7) {
        let u = 4;
        if (l[u++] !== 3)
          break;
        u = Vs(l, u), u += 2;
        const h = l[u++];
        if (h & 128 && (u += 2), h & 64 && (u += l[u++]), l[u++] !== 4)
          break;
        u = Vs(l, u);
        const d = l[u++];
        if (d === 64)
          i += "." + ts(d);
        else
          break;
        if (u += 12, l[u++] !== 5)
          break;
        u = Vs(l, u);
        const g = l[u++];
        let f = (g & 248) >> 3;
        f === 31 && (f += 1 + ((g & 7) << 3) + ((l[u] & 224) >> 5)), i += "." + f;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const c = Q(t, ["hvcC"])[0];
      if (c && c.length > 12) {
        const l = c[1], u = ["", "A", "B", "C"][l >> 6], h = l & 31, d = q(c, 2), g = (l & 32) >> 5 ? "H" : "L", f = c[12], p = c.subarray(6, 12);
        i += "." + u + h, i += "." + vl(d).toString(16).toUpperCase(), i += "." + g + f;
        let y = "";
        for (let E = p.length; E--; ) {
          const T = p[E];
          (T || y) && (y = "." + T.toString(16).toUpperCase() + y);
        }
        i += y;
      }
      r = es(o == "hev1" ? "dvhe" : "dvh1", t);
      break;
    }
    case "dvh1":
    case "dvhe":
    case "dvav":
    case "dva1":
    case "dav1": {
      i = es(i, t) || i;
      break;
    }
    case "vp09": {
      const c = Q(t, ["vpcC"])[0];
      if (c && c.length > 6) {
        const l = c[4], u = c[5], h = c[6] >> 4 & 15;
        i += "." + qe(l) + "." + qe(u) + "." + qe(h);
      }
      break;
    }
    case "av01": {
      const c = Q(t, ["av1C"])[0];
      if (c && c.length > 2) {
        const l = c[1] >>> 5, u = c[1] & 31, h = c[2] >>> 7 ? "H" : "M", d = (c[2] & 64) >> 6, g = (c[2] & 32) >> 5, f = l === 2 && d ? g ? 12 : 10 : d ? 10 : 8, p = (c[2] & 16) >> 4, y = (c[2] & 8) >> 3, E = (c[2] & 4) >> 2, T = c[2] & 3;
        i += "." + l + "." + qe(u) + h + "." + qe(f) + "." + p + "." + y + E + T + "." + qe(1) + "." + qe(1) + "." + qe(1) + "." + 0, r = es("dav1", t);
      }
      break;
    }
  }
  return {
    codec: i,
    encrypted: n,
    supplemental: r
  };
}
function es(a, e) {
  const t = Q(e, ["dvvC"]), s = t.length ? t[0] : Q(e, ["dvcC"])[0];
  if (s) {
    const i = s[2] >> 1 & 127, r = s[2] << 5 & 32 | s[3] >> 3 & 31;
    return a + "." + qe(i) + "." + qe(r);
  }
}
function vl(a) {
  let e = 0;
  for (let t = 0; t < 32; t++)
    e |= (a >> t & 1) << 31 - t;
  return e >>> 0;
}
function Vs(a, e) {
  const t = e + 5;
  for (; a[e++] & 128 && e < t; )
    ;
  return e;
}
function ts(a) {
  return ("0" + a.toString(16).toUpperCase()).slice(-2);
}
function qe(a) {
  return (a < 10 ? "0" : "") + a;
}
function Sl(a, e) {
  if (!a || !e)
    return;
  const t = e.keyId;
  t && e.isCommonEncryption && Hn(a, (s, i) => {
    const r = s.subarray(8, 24);
    r.some((n) => n !== 0) || (ie.log(`[eme] Patching keyId in 'enc${i ? "a" : "v"}>sinf>>tenc' box: ${ve(r)} -> ${ve(t)}`), s.set(t, 8));
  });
}
function xl(a) {
  const e = [];
  return Hn(a, (t) => e.push(t.subarray(8, 24))), e;
}
function Hn(a, e) {
  Q(a, ["moov", "trak"]).forEach((s) => {
    const i = Q(s, ["mdia", "minf", "stbl", "stsd"])[0];
    if (!i) return;
    const r = i.subarray(8);
    let n = Q(r, ["enca"]);
    const o = n.length > 0;
    o || (n = Q(r, ["encv"])), n.forEach((c) => {
      const l = o ? c.subarray(28) : c.subarray(78);
      Q(l, ["sinf"]).forEach((h) => {
        const d = Yn(h);
        d && e(d, o);
      });
    });
  });
}
function Yn(a) {
  const e = Q(a, ["schm"])[0];
  if (e) {
    const t = me(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc") {
      const s = Q(a, ["schi", "tenc"])[0];
      if (s)
        return s;
    }
  }
}
function Al(a, e, t) {
  const s = {}, i = Q(a, ["moof", "traf"]);
  for (let r = 0; r < i.length; r++) {
    const n = i[r], o = Q(n, ["tfhd"])[0], c = q(o, 4), l = e[c];
    if (!l)
      continue;
    s[c] || (s[c] = {
      start: NaN,
      duration: 0,
      sampleCount: 0,
      timescale: l.timescale,
      type: l.type
    });
    const u = s[c], h = Q(n, ["tfdt"])[0];
    if (h) {
      const v = h[0];
      let S = q(h, 4);
      v === 1 && (S === dr ? t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time") : (S *= dr + 1, S += q(h, 8))), $(S) && (!$(u.start) || S < u.start) && (u.start = S);
    }
    const d = l.default, g = q(o, 0) | (d == null ? void 0 : d.flags);
    let f = (d == null ? void 0 : d.duration) || 0;
    g & 8 && (g & 2 ? f = q(o, 12) : f = q(o, 8));
    const p = Q(n, ["trun"]);
    let y = u.start || 0, E = 0, T = f;
    for (let v = 0; v < p.length; v++) {
      const S = p[v], x = q(S, 4), D = u.sampleCount;
      u.sampleCount += x;
      const A = S[3] & 1, R = S[3] & 4, b = S[2] & 1, L = S[2] & 2, C = S[2] & 4, F = S[2] & 8;
      let B = 8, K = x;
      for (A && (B += 4), R && x && (!(S[B + 1] & 1) && u.keyFrameIndex === void 0 && (u.keyFrameIndex = D), B += 4, b ? (T = q(S, B), B += 4) : T = f, L && (B += 4), F && (B += 4), y += T, E += T, K--); K--; )
        b ? (T = q(S, B), B += 4) : T = f, L && (B += 4), C && (S[B + 1] & 1 || u.keyFrameIndex === void 0 && (u.keyFrameIndex = u.sampleCount - (K + 1), u.keyFrameStart = y), B += 4), F && (B += 4), y += T, E += T;
      !E && f && (E += f * x);
    }
    u.duration += E;
  }
  if (!Object.keys(s).some((r) => s[r].duration)) {
    let r = 1 / 0, n = 0;
    const o = Q(a, ["sidx"]);
    for (let c = 0; c < o.length; c++) {
      const l = El(o[c]);
      if (l != null && l.references) {
        r = Math.min(r, l.earliestPresentationTime / l.timescale);
        const u = l.references.reduce((h, d) => h + d.info.duration || 0, 0);
        n = Math.max(n, u + l.earliestPresentationTime / l.timescale);
      }
    }
    n && $(n) && Object.keys(s).forEach((c) => {
      s[c].duration || (s[c].duration = n * s[c].timescale - s[c].start);
    });
  }
  return s;
}
function Ll(a) {
  const e = {
    valid: null,
    remainder: null
  }, t = Q(a, ["moof"]);
  if (t.length < 2)
    return e.remainder = a, e;
  const s = t[t.length - 1];
  return e.valid = a.slice(0, s.byteOffset - 8), e.remainder = a.slice(s.byteOffset - 8), e;
}
function Ne(a, e) {
  const t = new Uint8Array(a.length + e.length);
  return t.set(a), t.set(e, a.length), t;
}
function gr(a, e) {
  const t = [], s = e.samples, i = e.timescale, r = e.id;
  let n = !1;
  return Q(s, ["moof"]).map((c) => {
    const l = c.byteOffset - 8;
    Q(c, ["traf"]).map((h) => {
      const d = Q(h, ["tfdt"]).map((g) => {
        const f = g[0];
        let p = q(g, 4);
        return f === 1 && (p *= Math.pow(2, 32), p += q(g, 8)), p / i;
      })[0];
      return d !== void 0 && (a = d), Q(h, ["tfhd"]).map((g) => {
        const f = q(g, 4), p = q(g, 0) & 16777215, y = (p & 1) !== 0, E = (p & 2) !== 0, T = (p & 8) !== 0;
        let v = 0;
        const S = (p & 16) !== 0;
        let x = 0;
        const D = (p & 32) !== 0;
        let A = 8;
        f === r && (y && (A += 8), E && (A += 4), T && (v = q(g, A), A += 4), S && (x = q(g, A), A += 4), D && (A += 4), e.type === "video" && (n = Fs(e.codec)), Q(h, ["trun"]).map((R) => {
          const b = R[0], L = q(R, 0) & 16777215, C = (L & 1) !== 0;
          let F = 0;
          const B = (L & 4) !== 0, K = (L & 256) !== 0;
          let N = 0;
          const w = (L & 512) !== 0;
          let U = 0;
          const k = (L & 1024) !== 0, G = (L & 2048) !== 0;
          let W = 0;
          const M = q(R, 4);
          let O = 8;
          C && (F = q(R, O), O += 4), B && (O += 4);
          let j = F + l;
          for (let J = 0; J < M; J++) {
            if (K ? (N = q(R, O), O += 4) : N = v, w ? (U = q(R, O), O += 4) : U = x, k && (O += 4), G && (b === 0 ? W = q(R, O) : W = Kn(R, O), O += 4), e.type === ne.VIDEO) {
              let z = 0;
              for (; z < U; ) {
                const ee = q(s, j);
                if (j += 4, Il(n, s[j])) {
                  const xe = s.subarray(j, j + ee);
                  Fi(xe, n ? 2 : 1, a + W / i, t);
                }
                j += ee, z += ee + 4;
              }
            }
            a += N / i;
          }
        }));
      });
    });
  }), t;
}
function Fs(a) {
  if (!a)
    return !1;
  const e = a.substring(0, 4);
  return e === "hvc1" || e === "hev1" || // Dolby Vision
  e === "dvh1" || e === "dvhe";
}
function Il(a, e) {
  if (a) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function Fi(a, e, t, s) {
  const i = Wn(a);
  let r = 0;
  r += e;
  let n = 0, o = 0, c = 0;
  for (; r < i.length; ) {
    n = 0;
    do {
      if (r >= i.length)
        break;
      c = i[r++], n += c;
    } while (c === 255);
    o = 0;
    do {
      if (r >= i.length)
        break;
      c = i[r++], o += c;
    } while (c === 255);
    const l = i.length - r;
    let u = r;
    if (o < l)
      r += o;
    else if (o > l) {
      ie.error(`Malformed SEI payload. ${o} is too small, only ${l} bytes left to parse.`);
      break;
    }
    if (n === 4) {
      if (i[u++] === 181) {
        const d = Gn(i, u);
        if (u += 2, d === 49) {
          const g = q(i, u);
          if (u += 4, g === 1195456820) {
            const f = i[u++];
            if (f === 3) {
              const p = i[u++], y = 31 & p, E = 64 & p, T = E ? 2 + y * 3 : 0, v = new Uint8Array(T);
              if (E) {
                v[0] = p;
                for (let S = 1; S < T; S++)
                  v[S] = i[u++];
              }
              s.push({
                type: f,
                payloadType: n,
                pts: t,
                bytes: v
              });
            }
          }
        }
      }
    } else if (n === 5 && o > 16) {
      const h = [];
      for (let f = 0; f < 16; f++) {
        const p = i[u++].toString(16);
        h.push(p.length == 1 ? "0" + p : p), (f === 3 || f === 5 || f === 7 || f === 9) && h.push("-");
      }
      const d = o - 16, g = new Uint8Array(d);
      for (let f = 0; f < d; f++)
        g[f] = i[u++];
      s.push({
        payloadType: n,
        pts: t,
        uuid: h.join(""),
        userData: we(g),
        userDataBytes: g
      });
    }
  }
}
function Wn(a) {
  const e = a.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    a[s] === 0 && a[s + 1] === 0 && a[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return a;
  const i = e - t.length, r = new Uint8Array(i);
  let n = 0;
  for (s = 0; s < i; n++, s++)
    n === t[0] && (n++, t.shift()), r[s] = a[n];
  return r;
}
function Rl(a) {
  const e = a[0];
  let t = "", s = "", i = 0, r = 0, n = 0, o = 0, c = 0, l = 0;
  if (e === 0) {
    for (; me(a.subarray(l, l + 1)) !== "\0"; )
      t += me(a.subarray(l, l + 1)), l += 1;
    for (t += me(a.subarray(l, l + 1)), l += 1; me(a.subarray(l, l + 1)) !== "\0"; )
      s += me(a.subarray(l, l + 1)), l += 1;
    s += me(a.subarray(l, l + 1)), l += 1, i = q(a, 12), r = q(a, 16), o = q(a, 20), c = q(a, 24), l = 28;
  } else if (e === 1) {
    l += 4, i = q(a, l), l += 4;
    const h = q(a, l);
    l += 4;
    const d = q(a, l);
    for (l += 4, n = 2 ** 32 * h + d, sl(n) || (n = Number.MAX_SAFE_INTEGER, ie.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = q(a, l), l += 4, c = q(a, l), l += 4; me(a.subarray(l, l + 1)) !== "\0"; )
      t += me(a.subarray(l, l + 1)), l += 1;
    for (t += me(a.subarray(l, l + 1)), l += 1; me(a.subarray(l, l + 1)) !== "\0"; )
      s += me(a.subarray(l, l + 1)), l += 1;
    s += me(a.subarray(l, l + 1)), l += 1;
  }
  const u = a.subarray(l, a.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: n,
    presentationTimeDelta: r,
    eventDuration: o,
    id: c,
    payload: u
  };
}
function bl(a, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(a, 4), i = 0, s = 8; i < t; i++)
    r.set(e[i], s), s += e[i].byteLength;
  return r;
}
function _l(a, e, t) {
  if (a.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  s = 0, i = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const n = new Uint8Array(4);
  return t.byteLength > 0 && new DataView(n.buffer).setUint32(0, t.byteLength, !1), bl(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    a,
    // 16 bytes
    r,
    i,
    n,
    t
  );
}
function Dl(a) {
  const e = [];
  if (a instanceof ArrayBuffer) {
    const t = a.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const i = new DataView(a, s), r = Cl(i);
      e.push(r), s += r.size;
    }
  }
  return e;
}
function Cl(a) {
  const e = a.getUint32(0), t = a.byteOffset, s = a.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (a.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const r = a.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: t,
      size: e
    };
  const n = a.buffer, o = ve(new Uint8Array(n, t + 12, 16));
  let c = null, l = null, u = 0;
  if (r === 0)
    u = 28;
  else {
    const d = a.getUint32(28);
    if (!d || s < 32 + d * 16)
      return {
        offset: t,
        size: e
      };
    c = [];
    for (let g = 0; g < d; g++)
      c.push(new Uint8Array(n, t + 32 + g * 16, 16));
    u = 32 + d * 16;
  }
  if (!u)
    return {
      offset: t,
      size: e
    };
  const h = a.getUint32(u);
  return e - 32 < h ? {
    offset: t,
    size: e
  } : (l = new Uint8Array(n, t + u + 4, h), {
    version: r,
    systemId: o,
    kids: c,
    data: l,
    offset: t,
    size: e
  });
}
const qn = () => /\(Windows.+Firefox\//i.test(navigator.userAgent), Mt = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    dav1: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Mi(a, e) {
  const t = Mt[e];
  return !!t && !!t[a.slice(0, 4)];
}
function Wt(a, e, t = !0) {
  return !a.split(",").some((s) => !Ni(s, e, t));
}
function Ni(a, e, t = !0) {
  var s;
  const i = ht(t);
  return (s = i == null ? void 0 : i.isTypeSupported(qt(a, e))) != null ? s : !1;
}
function qt(a, e) {
  return `${e}/mp4;codecs=${a}`;
}
function mr(a) {
  if (a) {
    const e = a.substring(0, 4);
    return Mt.video[e];
  }
  return 2;
}
function Ls(a) {
  const e = qn();
  return a.split(",").reduce((t, s) => {
    const r = e && Fs(s) ? 9 : Mt.video[s];
    return r ? (r * 2 + t) / (t ? 3 : 2) : (Mt.audio[s] + t) / (t ? 2 : 1);
  }, 0);
}
const Hs = {};
function Pl(a, e = !0) {
  if (Hs[a])
    return Hs[a];
  const t = {
    // Idealy fLaC and Opus would be first (spec-compliant) but
    // some browsers will report that fLaC is supported then fail.
    // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"],
    // Replace audio codec info if browser does not support mp4a.40.34,
    // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
    "mp4a.40.34": ["mp3"]
  }[a];
  for (let i = 0; i < t.length; i++) {
    var s;
    if (Ni(t[i], "audio", e))
      return Hs[a] = t[i], t[i];
    if (t[i] === "mp3" && (s = ht(e)) != null && s.isTypeSupported("audio/mpeg"))
      return "";
  }
  return a;
}
const kl = /flac|opus|mp4a\.40\.34/i;
function Is(a, e = !0) {
  return a.replace(kl, (t) => Pl(t.toLowerCase(), e));
}
function wl(a, e) {
  const t = [];
  if (a) {
    const s = a.split(",");
    for (let i = 0; i < s.length; i++)
      Mi(s[i], "video") || t.push(s[i]);
  }
  return e && t.push(e), t.join(",");
}
function ms(a, e) {
  if (a && (a.length > 4 || ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(a) !== -1) && (pr(a, "audio") || pr(a, "video")))
    return a;
  if (e) {
    const t = e.split(",");
    if (t.length > 1) {
      if (a) {
        for (let s = t.length; s--; )
          if (t[s].substring(0, 4) === a.substring(0, 4))
            return t[s];
      }
      return t[0];
    }
  }
  return e || a;
}
function pr(a, e) {
  return Mi(a, e) && Ni(a, e);
}
function Ol(a) {
  const e = a.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    s.length > 2 && s[0] === "avc1" && (e[t] = `avc1.${parseInt(s[1]).toString(16)}${("000" + parseInt(s[2]).toString(16)).slice(-4)}`);
  }
  return e.join(",");
}
function Fl(a) {
  if (a.startsWith("av01.")) {
    const e = a.split("."), t = ["0", "111", "01", "01", "01", "0"];
    for (let s = e.length; s > 4 && s < 10; s++)
      e[s] = t[s - 4];
    return e.join(".");
  }
  return a;
}
function yr(a) {
  const e = ht(a) || {
    isTypeSupported: () => !1
  };
  return {
    mpeg: e.isTypeSupported("audio/mpeg"),
    mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"')
  };
}
function gi(a) {
  return a.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
const Ml = {
  supported: !0,
  powerEfficient: !0,
  smooth: !0
  // keySystemAccess: null,
}, Nl = {
  supported: !1,
  smooth: !1,
  powerEfficient: !1
  // keySystemAccess: null,
}, jn = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [Ml]
};
function Xn(a, e) {
  return {
    supported: !1,
    configurations: e,
    decodingInfoResults: [Nl],
    error: a
  };
}
function Bl(a, e, t, s, i, r) {
  const n = a.videoCodec, o = a.audioCodec ? a.audioGroups : null, c = r == null ? void 0 : r.audioCodec, l = r == null ? void 0 : r.channels, u = l ? parseInt(l) : c ? 1 / 0 : 2;
  let h = null;
  if (o != null && o.length)
    try {
      o.length === 1 && o[0] ? h = e.groups[o[0]].channels : h = o.reduce((d, g) => {
        if (g) {
          const f = e.groups[g];
          if (!f)
            throw new Error(`Audio track group ${g} not found`);
          Object.keys(f.channels).forEach((p) => {
            d[p] = (d[p] || 0) + f.channels[p];
          });
        }
        return d;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return n !== void 0 && // Force media capabilities check for HEVC to avoid failure on Windows
  (n.split(",").some((d) => Fs(d)) || a.width > 1920 && a.height > 1088 || a.height > 1920 && a.width > 1088 || a.frameRate > Math.max(s, 30) || a.videoRange !== "SDR" && a.videoRange !== t || a.bitrate > Math.max(i, 8e6)) || !!h && $(u) && Object.keys(h).some((d) => parseInt(d) > u);
}
function zn(a, e, t, s = {}) {
  const i = a.videoCodec;
  if (!i && !a.audioCodec || !t)
    return Promise.resolve(jn);
  const r = [], n = $l(a), o = n.length, c = Ul(a, e, o > 0), l = c.length;
  for (let u = o || 1 * l || 1; u--; ) {
    const h = {
      type: "media-source"
    };
    if (o && (h.video = n[u % o]), l) {
      h.audio = c[u % l];
      const d = h.audio.bitrate;
      h.video && d && (h.video.bitrate -= d);
    }
    r.push(h);
  }
  if (i) {
    const u = navigator.userAgent;
    if (i.split(",").some((h) => Fs(h)) && qn())
      return Promise.resolve(Xn(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${u})`), r));
  }
  return Promise.all(r.map((u) => {
    const h = Kl(u);
    return s[h] || (s[h] = t.decodingInfo(u));
  })).then((u) => ({
    supported: !u.some((h) => !h.supported),
    configurations: r,
    decodingInfoResults: u
  })).catch((u) => ({
    supported: !1,
    configurations: r,
    decodingInfoResults: [],
    error: u
  }));
}
function $l(a) {
  var e;
  const t = (e = a.videoCodec) == null ? void 0 : e.split(","), s = Qn(a), i = a.width || 640, r = a.height || 480, n = a.frameRate || 30, o = a.videoRange.toLowerCase();
  return t ? t.map((c) => {
    const l = {
      contentType: qt(Fl(c), "video"),
      width: i,
      height: r,
      bitrate: s,
      framerate: n
    };
    return o !== "sdr" && (l.transferFunction = o), l;
  }) : [];
}
function Ul(a, e, t) {
  var s;
  const i = (s = a.audioCodec) == null ? void 0 : s.split(","), r = Qn(a);
  return i && a.audioGroups ? a.audioGroups.reduce((n, o) => {
    var c;
    const l = o ? (c = e.groups[o]) == null ? void 0 : c.tracks : null;
    return l ? l.reduce((u, h) => {
      if (h.groupId === o) {
        const d = parseFloat(h.channels || "");
        i.forEach((g) => {
          const f = {
            contentType: qt(g, "audio"),
            bitrate: t ? Gl(g, r) : r
          };
          d && (f.channels = "" + d), u.push(f);
        });
      }
      return u;
    }, n) : n;
  }, []) : [];
}
function Gl(a, e) {
  if (e <= 1)
    return 1;
  let t = 128e3;
  return a === "ec-3" ? t = 768e3 : a === "ac-3" && (t = 64e4), Math.min(e / 2, t);
}
function Qn(a) {
  return Math.ceil(Math.max(a.bitrate * 0.9, a.averageBitrate) / 1e3) * 1e3 || 1;
}
function Kl(a) {
  let e = "";
  const {
    audio: t,
    video: s
  } = a;
  if (s) {
    const i = gi(s.contentType);
    e += `${i}_r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction || "sd"}_${Math.ceil(s.bitrate / 1e5)}`;
  }
  if (t) {
    const i = gi(t.contentType);
    e += `${s ? "_" : ""}${i}_c${t.channels}`;
  }
  return e;
}
const mi = ["NONE", "TYPE-0", "TYPE-1", null];
function Vl(a) {
  return mi.indexOf(a) > -1;
}
const Rs = ["SDR", "PQ", "HLG"];
function Hl(a) {
  return !!a && Rs.indexOf(a) > -1;
}
var ps = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function Er(a) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = a, i = s < e / 2;
  return e && i ? t ? ps.v2 : ps.Yes : ps.No;
}
class Tr {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class jt {
  constructor(e) {
    if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((s) => !!s).map((s) => s.substring(0, 4)).join(","), "supplemental" in e) {
      var t;
      this.supplemental = e.supplemental;
      const s = (t = e.supplemental) == null ? void 0 : t.videoCodec;
      s && s !== e.videoCodec && (this.codecSet += `,${s.substring(0, 4)}`);
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return vr(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return vr(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function vr(a, e) {
  return !e || !a ? !1 : a.indexOf(e) !== -1;
}
function Yl() {
  if (typeof matchMedia == "function") {
    const a = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (a.media !== e.media)
      return a.matches === !0;
  }
  return !1;
}
function Wl(a, e) {
  let t = !1, s = [];
  if (a && (t = a !== "SDR", s = [a]), e) {
    s = e.allowedVideoRanges || Rs.slice(0);
    const i = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : i && Yl(), t || (s = ["SDR"]);
  }
  return {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
const ql = (a) => {
  const e = /* @__PURE__ */ new WeakSet();
  return (t, s) => {
    if (a && (s = a(t, s)), typeof s == "object" && s !== null) {
      if (e.has(s))
        return;
      e.add(s);
    }
    return s;
  };
}, ae = (a, e) => JSON.stringify(a, ql(e));
function jl(a, e, t, s, i) {
  const r = Object.keys(a), n = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, c = i == null ? void 0 : i.videoCodec, l = n && parseInt(n) === 2;
  let u = !1, h = !1, d = 1 / 0, g = 1 / 0, f = 1 / 0, p = 1 / 0, y = 0, E = [];
  const {
    preferHDR: T,
    allowedVideoRanges: v
  } = Wl(e, i);
  for (let R = r.length; R--; ) {
    const b = a[r[R]];
    u || (u = b.channels[2] > 0), d = Math.min(d, b.minHeight), g = Math.min(g, b.minFramerate), f = Math.min(f, b.minBitrate), v.filter((C) => b.videoRanges[C] > 0).length > 0 && (h = !0);
  }
  d = $(d) ? d : 0, g = $(g) ? g : 0;
  const S = Math.max(1080, d), x = Math.max(30, g);
  f = $(f) ? f : t, t = Math.max(f, t), h || (e = void 0);
  const D = r.length > 1;
  return {
    codecSet: r.reduce((R, b) => {
      const L = a[b];
      if (b === R)
        return R;
      if (E = h ? v.filter((C) => L.videoRanges[C] > 0) : [], D) {
        if (L.minBitrate > t)
          return Ye(b, `min bitrate of ${L.minBitrate} > current estimate of ${t}`), R;
        if (!L.hasDefaultAudio)
          return Ye(b, "no renditions with default or auto-select sound found"), R;
        if (o && b.indexOf(o.substring(0, 4)) % 5 !== 0)
          return Ye(b, `audio codec preference "${o}" not found`), R;
        if (n && !l) {
          if (!L.channels[n])
            return Ye(b, `no renditions with ${n} channel sound found (channels options: ${Object.keys(L.channels)})`), R;
        } else if ((!o || l) && u && L.channels[2] === 0)
          return Ye(b, "no renditions with stereo sound found"), R;
        if (L.minHeight > S)
          return Ye(b, `min resolution of ${L.minHeight} > maximum of ${S}`), R;
        if (L.minFramerate > x)
          return Ye(b, `min framerate of ${L.minFramerate} > maximum of ${x}`), R;
        if (!E.some((C) => L.videoRanges[C] > 0))
          return Ye(b, `no variants with VIDEO-RANGE of ${ae(E)} found`), R;
        if (c && b.indexOf(c.substring(0, 4)) % 5 !== 0)
          return Ye(b, `video codec preference "${c}" not found`), R;
        if (L.maxScore < y)
          return Ye(b, `max score of ${L.maxScore} < selected max of ${y}`), R;
      }
      return R && (Ls(b) >= Ls(R) || L.fragmentError > a[R].fragmentError) ? R : (p = L.minIndex, y = L.maxScore, b);
    }, void 0),
    videoRanges: E,
    preferHDR: T,
    minFramerate: g,
    minBitrate: f,
    minIndex: p
  };
}
function Ye(a, e) {
  ie.log(`[abr] start candidates with "${a}" ignored because ${e}`);
}
function Zn(a) {
  return a.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const i = t.channels || "2";
    return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function Xl(a, e, t, s) {
  return a.slice(t, s + 1).reduce((i, r, n) => {
    if (!r.codecSet)
      return i;
    const o = r.audioGroups;
    let c = i[r.codecSet];
    c || (i[r.codecSet] = c = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      minIndex: n,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !o,
      fragmentError: 0
    }), c.minBitrate = Math.min(c.minBitrate, r.bitrate);
    const l = Math.min(r.height, r.width);
    return c.minHeight = Math.min(c.minHeight, l), c.minFramerate = Math.min(c.minFramerate, r.frameRate), c.minIndex = Math.min(c.minIndex, n), c.maxScore = Math.max(c.maxScore, r.score), c.fragmentError += r.fragmentError, c.videoRanges[r.videoRange] = (c.videoRanges[r.videoRange] || 0) + 1, o && o.forEach((u) => {
      if (!u)
        return;
      const h = e.groups[u];
      h && (c.hasDefaultAudio = c.hasDefaultAudio || e.hasDefaultAudio ? h.hasDefault : h.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(h.channels).forEach((d) => {
        c.channels[d] = (c.channels[d] || 0) + h.channels[d];
      }));
    }), i;
  }, {});
}
function Sr(a) {
  if (!a)
    return a;
  const {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: r
  } = a;
  return {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: r
  };
}
function Xe(a, e, t) {
  if ("attrs" in a) {
    const s = e.indexOf(a);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (vt(a, i, t))
      return s;
  }
  return -1;
}
function vt(a, e, t) {
  const {
    groupId: s,
    name: i,
    lang: r,
    assocLang: n,
    default: o
  } = a, c = a.forced;
  return (s === void 0 || e.groupId === s) && (i === void 0 || e.name === i) && (r === void 0 || zl(r, e.lang)) && (r === void 0 || e.assocLang === n) && (o === void 0 || e.default === o) && (c === void 0 || e.forced === c) && (!("characteristics" in a) || Ql(a.characteristics || "", e.characteristics)) && (t === void 0 || t(a, e));
}
function zl(a, e = "--") {
  return a.length === e.length ? a === e : a.startsWith(e) || e.startsWith(a);
}
function Ql(a, e = "") {
  const t = a.split(","), s = e.split(",");
  return t.length === s.length && !t.some((i) => s.indexOf(i) === -1);
}
function Tt(a, e) {
  const {
    audioCodec: t,
    channels: s
  } = a;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function Zl(a, e, t, s, i) {
  const r = e[s], o = e.reduce((d, g, f) => {
    const p = g.uri;
    return (d[p] || (d[p] = [])).push(f), d;
  }, {})[r.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const c = r.videoRange, l = r.frameRate, u = r.codecSet.substring(0, 4), h = xr(e, s, (d) => {
    if (d.videoRange !== c || d.frameRate !== l || d.codecSet.substring(0, 4) !== u)
      return !1;
    const g = d.audioGroups, f = t.filter((p) => !g || g.indexOf(p.groupId) !== -1);
    return Xe(a, f, i) > -1;
  });
  return h > -1 ? h : xr(e, s, (d) => {
    const g = d.audioGroups, f = t.filter((p) => !g || g.indexOf(p.groupId) !== -1);
    return Xe(a, f, i) > -1;
  });
}
function xr(a, e, t) {
  for (let s = e; s > -1; s--)
    if (t(a[s]))
      return s;
  for (let s = e + 1; s < a.length; s++)
    if (t(a[s]))
      return s;
  return -1;
}
function bs(a, e) {
  var t;
  return !!a && a !== ((t = e.loadLevelObj) == null ? void 0 : t.uri);
}
class Jl extends Be {
  constructor(e) {
    super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.supportedCache = {}, this.bwEstimator = void 0, this._abandonRulesCheck = (t) => {
      var s;
      const {
        fragCurrent: i,
        partCurrent: r,
        hls: n
      } = this, {
        autoLevelEnabled: o,
        media: c
      } = n;
      if (!i || !c)
        return;
      const l = performance.now(), u = r ? r.stats : i.stats, h = r ? r.duration : i.duration, d = l - u.loading.start, g = n.minAutoLevel, f = i.level, p = this._nextAutoLevel;
      if (u.aborted || u.loaded && u.loaded === u.total || f <= g) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!o)
        return;
      const y = p > -1 && p !== f, E = !!t || y;
      if (!E && (c.paused || !c.playbackRate || !c.readyState))
        return;
      const T = n.mainForwardBufferInfo;
      if (!E && T === null)
        return;
      const v = this.bwEstimator.getEstimateTTFB(), S = Math.abs(c.playbackRate);
      if (d <= Math.max(v, 1e3 * (h / (S * 2))))
        return;
      const x = T ? T.len / S : 0, D = u.loading.first ? u.loading.first - u.loading.start : -1, A = u.loaded && D > -1, R = this.getBwEstimate(), b = n.levels, L = b[f], C = Math.max(u.loaded, Math.round(h * (i.bitrate || L.averageBitrate) / 8));
      let F = A ? d - D : d;
      F < 1 && A && (F = Math.min(d, u.loaded * 8 / R));
      const B = A ? u.loaded * 1e3 / F : 0, K = v / 1e3, N = B ? (C - u.loaded) / B : C * 8 / R + K;
      if (N <= x)
        return;
      const w = B ? B * 8 : R, U = ((s = (t == null ? void 0 : t.details) || this.hls.latestLevelDetails) == null ? void 0 : s.live) === !0, k = this.hls.config.abrBandWidthUpFactor;
      let G = Number.POSITIVE_INFINITY, W;
      for (W = f - 1; W > g; W--) {
        const J = b[W].maxBitrate, z = !b[W].details || U;
        if (G = this.getTimeToLoadFrag(K, w, h * J, z), G < Math.min(x, h + K))
          break;
      }
      if (G >= N || G > h * 10)
        return;
      A ? this.bwEstimator.sample(d - Math.min(v, D), u.loaded) : this.bwEstimator.sampleTTFB(d);
      const M = b[W].maxBitrate;
      this.getBwEstimate() * k > M && this.resetEstimator(M);
      const O = this.findBestLevel(M, g, W, 0, x, 1, 1);
      O > -1 && (W = O), this.warn(`Fragment ${i.sn}${r ? " part " + r.index : ""} of level ${f} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${x.toFixed(3)} s
      Estimated load time for current fragment: ${N.toFixed(3)} s
      Estimated load time for down switch fragment: ${G.toFixed(3)} s
      TTFB estimate: ${D | 0} ms
      Current BW estimate: ${$(R) ? R | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${W} @ ${M | 0} bps`), n.nextLoadLevel = n.nextAutoLevel = W, this.clearTimer();
      const j = () => {
        if (this.clearTimer(), this.fragCurrent === i && this.hls.loadLevel === W && W > 0) {
          const J = this.getStarvationDelay();
          if (this.warn(`Aborting inflight request ${W > 0 ? "and switching down" : ""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${J.toFixed(3)} s`), i.abortRequests(), this.fragCurrent = this.partCurrent = null, W > g) {
            let z = this.findBestLevel(this.hls.levels[g].bitrate, g, W, 0, J, 1, 1);
            z === -1 && (z = g), this.hls.nextLoadLevel = this.hls.nextAutoLevel = z, this.resetEstimator(this.hls.levels[z].bitrate);
          }
        }
      };
      y || N > G * 2 ? j() : this.timer = self.setInterval(j, G * 1e3), n.trigger(m.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: i,
        part: r,
        stats: u
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new rl(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = this.supportedCache = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.supportedCache = {}, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var i;
        this.fragCurrent = s, this.partCurrent = (i = t.part) != null ? i : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case _.BUFFER_ADD_CODEC_ERROR:
        case _.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case _.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: i,
            partCurrent: r
          } = this;
          if (s && i && s.sn === i.sn && s.level === i.level) {
            const n = performance.now(), o = r ? r.stats : s.stats, c = n - o.loading.start, l = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && l > -1) {
              const h = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(c - Math.min(h, l), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(c);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, i) {
    const r = e + s / t, n = i ? e + this.lastLevelLoadSec : 0;
    return r + n;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: i
    } = t.stats, r = i.end - i.first;
    $(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === V.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, n = this.hls.levels[t.level], o = (n.loaded ? n.loaded.bytes : 0) + i.loaded, c = (n.loaded ? n.loaded.duration : 0) + r;
        n.loaded = {
          bytes: o,
          duration: c
        }, n.realBitrate = Math.round(8 * o / c);
      }
      if (t.bitrateTest) {
        const r = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(m.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = i != null && i.stats.loaded ? i.stats : s.stats;
    if (r.aborted || this.ignoreFragment(s))
      return;
    const n = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== V.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, i, 1, 1);
    if (r > -1)
      return r;
    const n = this.hls.firstLevel, o = Math.min(Math.max(n, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${n} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), i = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !i || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = s && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const n = this.hls.levels;
      if (n.length > Math.max(e, r) && n[e].loadError <= n[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this;
    if (s.levels.length <= 1)
      return s.loadLevel;
    const {
      maxAutoLevel: i,
      config: r,
      minAutoLevel: n
    } = s, o = t ? t.duration : e ? e.duration : 0, c = this.getBwEstimate(), l = this.getStarvationDelay();
    let u = r.abrBandWidthFactor, h = r.abrBandWidthUpFactor;
    if (l) {
      const y = this.findBestLevel(c, n, i, l, 0, u, h);
      if (y >= 0)
        return this.rebufferNotice = -1, y;
    }
    let d = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!l) {
      const y = this.bitrateTestDelay;
      y && (d = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - y, this.info(`bitrate test took ${Math.round(1e3 * y)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`), u = h = 1);
    }
    const g = this.findBestLevel(c, n, i, l, d, u, h);
    if (this.rebufferNotice !== g && (this.rebufferNotice = g, this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${g}`)), g > -1)
      return g;
    const f = s.levels[n], p = s.loadLevelObj;
    return p && (f == null ? void 0 : f.bitrate) < p.bitrate ? n : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, i = e.mainForwardBufferInfo;
    return (i ? i.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, i, r, n, o) {
    var c;
    const l = i + r, u = this.lastLoadedFragLevel, h = u === -1 ? this.hls.firstLevel : u, {
      fragCurrent: d,
      partCurrent: g
    } = this, {
      levels: f,
      allAudioTracks: p,
      loadLevel: y,
      config: E
    } = this.hls;
    if (f.length === 1)
      return 0;
    const T = f[h], v = !!((c = this.hls.latestLevelDetails) != null && c.live), S = y === -1 || u === -1;
    let x, D = "SDR", A = (T == null ? void 0 : T.frameRate) || 0;
    const {
      audioPreference: R,
      videoPreference: b
    } = E, L = this.audioTracksByGroup || (this.audioTracksByGroup = Zn(p));
    let C = -1;
    if (S) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const w = this.codecTiers || (this.codecTiers = Xl(f, L, t, s)), U = jl(w, D, e, R, b), {
        codecSet: k,
        videoRanges: G,
        minFramerate: W,
        minBitrate: M,
        minIndex: O,
        preferHDR: j
      } = U;
      C = O, x = k, D = j ? G[G.length - 1] : G[0], A = W, e = Math.max(e, M), this.log(`picked start tier ${ae(U)}`);
    } else
      x = T == null ? void 0 : T.codecSet, D = T == null ? void 0 : T.videoRange;
    const F = g ? g.duration : d ? d.duration : 0, B = this.bwEstimator.getEstimateTTFB() / 1e3, K = [];
    for (let w = s; w >= t; w--) {
      var N;
      const U = f[w], k = w > h;
      if (!U)
        continue;
      if (E.useMediaCapabilities && !U.supportedResult && !U.supportedPromise) {
        const z = navigator.mediaCapabilities;
        typeof (z == null ? void 0 : z.decodingInfo) == "function" && Bl(U, L, D, A, e, R) ? (U.supportedPromise = zn(U, L, z, this.supportedCache), U.supportedPromise.then((ee) => {
          if (!this.hls)
            return;
          U.supportedResult = ee;
          const xe = this.hls.levels, Ee = xe.indexOf(U);
          ee.error ? this.warn(`MediaCapabilities decodingInfo error: "${ee.error}" for level ${Ee} ${ae(ee)}`) : ee.supported ? ee.decodingInfoResults.some((Oe) => Oe.smooth === !1 || Oe.powerEfficient === !1) && this.log(`MediaCapabilities decodingInfo for level ${Ee} not smooth or powerEfficient: ${ae(ee)}`) : (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Ee} ${ae(ee)}`), Ee > -1 && xe.length > 1 && (this.log(`Removing unsupported level ${Ee}`), this.hls.removeLevel(Ee), this.hls.loadLevel === -1 && (this.hls.nextLoadLevel = 0)));
        }).catch((ee) => {
          this.warn(`Error handling MediaCapabilities decodingInfo: ${ee}`);
        })) : U.supportedResult = jn;
      }
      if ((x && U.codecSet !== x || D && U.videoRange !== D || k && A > U.frameRate || !k && A > 0 && A < U.frameRate || (N = U.supportedResult) != null && (N = N.decodingInfoResults) != null && N.some((z) => z.smooth === !1)) && (!S || w !== C)) {
        K.push(w);
        continue;
      }
      const G = U.details, W = (g ? G == null ? void 0 : G.partTarget : G == null ? void 0 : G.averagetargetduration) || F;
      let M;
      k ? M = o * e : M = n * e;
      const O = F && i >= F * 2 && r === 0 ? U.averageBitrate : U.maxBitrate, j = this.getTimeToLoadFrag(B, M, O * W, G === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        M >= O && // no level change, or new level has no error history
        (w === u || U.loadError === 0 && U.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (j <= B || !$(j) || v && !this.bitrateTestDelay || j < l)
      ) {
        const z = this.forcedAutoLevel;
        return w !== y && (z === -1 || z !== y) && (K.length && this.trace(`Skipped level(s) ${K.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${f[K[0]].codecs}" ${f[K[0]].videoRange}; not compatible with "${x}" ${D}`), this.info(`switch candidate:${h}->${w} adjustedbw(${Math.round(M)})-bitrate=${Math.round(M - O)} ttfb:${B.toFixed(1)} avgDuration:${W.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${j.toFixed(1)} firstSelection:${S} codecSet:${U.codecSet} videoRange:${U.videoRange} hls.loadLevel:${y}`)), S && (this.firstSelection = w), w;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const t = this.deriveNextAutoLevel(e);
    this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t);
  }
  deriveNextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls;
    return Math.min(Math.max(e, s), t);
  }
}
const Jn = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(a, e) {
    let t = 0, s = a.length - 1, i = null, r = null;
    for (; t <= s; ) {
      i = (t + s) / 2 | 0, r = a[i];
      const n = e(r);
      if (n > 0)
        t = i + 1;
      else if (n < 0)
        s = i - 1;
      else
        return r;
    }
    return null;
  }
};
function ec(a, e, t) {
  if (e === null || !Array.isArray(a) || !a.length || !$(e))
    return null;
  const s = a[0].programDateTime;
  if (e < (s || 0))
    return null;
  const i = a[a.length - 1].endProgramDateTime;
  if (e >= (i || 0))
    return null;
  for (let r = 0; r < a.length; ++r) {
    const n = a[r];
    if (sc(e, t, n))
      return n;
  }
  return null;
}
function xt(a, e, t = 0, s = 0, i = 5e-3) {
  let r = null;
  if (a) {
    r = e[1 + a.sn - e[0].sn] || null;
    const o = a.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), r && a.level !== r.level && r.end <= a.end && (r = e[2 + a.sn - e[0].sn] || null);
  } else t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!a || a.level === r.level) && Ar(t, s, r) === 0 || tc(r, a, Math.min(i, s))))
    return r;
  const n = Jn.search(e, Ar.bind(null, t, s));
  return n && (n !== a || !r) ? n : r;
}
function tc(a, e, t) {
  if (e && e.start === 0 && e.level < a.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((i, r) => (r[0] === "INF" && (i += parseFloat(r[1])), i), t);
    return a.start <= s;
  }
  return !1;
}
function Ar(a = 0, e = 0, t) {
  if (t.start <= a && t.start + t.duration > a)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= a ? 1 : t.start - s > a && t.start ? -1 : 0;
}
function sc(a, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > a;
}
function ea(a, e, t) {
  if (a && a.startCC <= e && a.endCC >= e) {
    let s = a.fragments;
    const {
      fragmentHint: i
    } = a;
    i && (s = s.concat(i));
    let r;
    return Jn.search(s, (n) => n.cc < e ? 1 : n.cc > e ? -1 : (r = n, n.end <= t ? 1 : n.start > t ? -1 : 0)), r || null;
  }
  return null;
}
function _s(a) {
  switch (a.details) {
    case _.FRAG_LOAD_TIMEOUT:
    case _.KEY_LOAD_TIMEOUT:
    case _.LEVEL_LOAD_TIMEOUT:
    case _.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function ta(a) {
  return a.details.startsWith("key");
}
function sa(a) {
  return ta(a) && !!a.frag && !a.frag.decryptdata;
}
function Lr(a, e) {
  const t = _s(e);
  return a.default[`${t ? "timeout" : "error"}Retry`];
}
function Bi(a, e) {
  const t = a.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * a.retryDelayMs, a.maxRetryDelayMs);
}
function Ir(a) {
  return se(se({}, a), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Ds(a, e, t, s) {
  if (!a)
    return !1;
  const i = s == null ? void 0 : s.code, r = e < a.maxNumRetry && (ic(i) || !!t);
  return a.shouldRetry ? a.shouldRetry(a, e, t, s, r) : r;
}
function ic(a) {
  return pi(a) || !!a && (a < 400 || a > 499);
}
function pi(a) {
  return a === 0 && navigator.onLine === !1;
}
var Te = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, De = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  MoveAllAlternatesMatchingKey: 4
};
class rc extends Be {
  constructor(e) {
    super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.ERROR, this.onError, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.ERROR, this.onError, this), e.off(m.ERROR, this.onErrorOut, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null;
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === V.MAIN ? e.level : this.getVariantIndex();
  }
  getVariantIndex() {
    var e;
    const t = this.hls, s = t.currentLevel;
    return (e = t.loadLevelObj) != null && e.details || s === -1 ? t.loadLevel : s;
  }
  variantHasKey(e, t) {
    if (e) {
      var s;
      if ((s = e.details) != null && s.hasKey(t))
        return !0;
      const i = e.audioGroups;
      if (i)
        return this.hls.allAudioTracks.filter((n) => i.indexOf(n.groupId) >= 0).some((n) => {
          var o;
          return (o = n.details) == null ? void 0 : o.hasKey(t);
        });
    }
    return !1;
  }
  onManifestLoading() {
    this.playlistError = 0;
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s;
    if (t.fatal)
      return;
    const i = this.hls, r = t.context;
    switch (t.details) {
      case _.FRAG_LOAD_ERROR:
      case _.FRAG_LOAD_TIMEOUT:
      case _.KEY_LOAD_ERROR:
      case _.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case _.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = kt();
          return;
        }
      // falls through
      case _.FRAG_GAP:
      case _.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = Te.SendAlternateToPenaltyBox;
        return;
      }
      case _.LEVEL_EMPTY_ERROR:
      case _.LEVEL_PARSING_ERROR:
        {
          var n;
          const c = t.parent === V.MAIN ? t.level : i.loadLevel;
          t.details === _.LEVEL_EMPTY_ERROR && ((n = t.context) != null && (n = n.levelDetails) != null && n.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case _.LEVEL_LOAD_ERROR:
      case _.LEVEL_LOAD_TIMEOUT:
        typeof (r == null ? void 0 : r.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
        return;
      case _.AUDIO_TRACK_LOAD_ERROR:
      case _.AUDIO_TRACK_LOAD_TIMEOUT:
      case _.SUBTITLE_LOAD_ERROR:
      case _.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (r) {
          const c = i.loadLevelObj;
          if (c && (r.type === Z.AUDIO_TRACK && c.hasAudioGroup(r.groupId) || r.type === Z.SUBTITLE_TRACK && c.hasSubtitleGroup(r.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, i.loadLevel), t.errorAction.action = Te.SendAlternateToPenaltyBox, t.errorAction.flags = De.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case _.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        t.errorAction = {
          action: Te.SendAlternateToPenaltyBox,
          flags: De.MoveAllAlternatesMatchingHDCP
        };
        return;
      case _.KEY_SYSTEM_SESSION_UPDATE_FAILED:
      case _.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
      case _.KEY_SYSTEM_NO_SESSION:
        t.errorAction = {
          action: Te.SendAlternateToPenaltyBox,
          flags: De.MoveAllAlternatesMatchingKey
        };
        return;
      case _.BUFFER_ADD_CODEC_ERROR:
      case _.REMUX_ALLOC_ERROR:
      case _.BUFFER_APPEND_ERROR:
        if (!t.errorAction) {
          var o;
          t.errorAction = this.getLevelSwitchAction(t, (o = t.level) != null ? o : i.loadLevel);
        }
        return;
      case _.INTERNAL_EXCEPTION:
      case _.BUFFER_APPENDING_ERROR:
      case _.BUFFER_FULL_ERROR:
      case _.LEVEL_SWITCH_ERROR:
      case _.BUFFER_STALLED_ERROR:
      case _.BUFFER_SEEK_OVER_HOLE:
      case _.BUFFER_NUDGE_ON_STALL:
        t.errorAction = kt();
        return;
    }
    t.type === Y.KEY_SYSTEM_ERROR && (t.levelRetry = !1, t.errorAction = kt());
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, i = Lr(s.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (Ds(i, r, _s(e), e.response))
      return {
        action: Te.RetryRequest,
        flags: De.None,
        retryConfig: i,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return i && (o.retryConfig = i, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: n
    } = t.config, o = Lr(ta(e) ? n : r, e), c = t.levels.reduce((u, h) => u + h.fragmentError, 0);
    if (i && (e.details !== _.FRAG_GAP && i.fragmentError++, !sa(e) && Ds(o, c, _s(e), e.response)))
      return {
        action: Te.RetryRequest,
        flags: De.None,
        retryConfig: o,
        retryCount: c
      };
    const l = this.getLevelSwitchAction(e, s);
    return o && (l.retryConfig = o, l.retryCount = c), l;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i) {
      var r, n;
      const l = e.details;
      i.loadError++, l === _.BUFFER_APPEND_ERROR && i.fragmentError++;
      let u = -1;
      const {
        levels: h,
        loadLevel: d,
        minAutoLevel: g,
        maxAutoLevel: f
      } = s;
      !s.autoLevelEnabled && !s.config.preserveManualLevelOnError && (s.loadLevel = -1);
      const p = (r = e.frag) == null ? void 0 : r.type, E = (p === V.AUDIO && l === _.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (l === _.BUFFER_ADD_CODEC_ERROR || l === _.BUFFER_APPEND_ERROR)) && h.some(({
        audioCodec: D
      }) => i.audioCodec !== D), v = e.sourceBufferName === "video" && (l === _.BUFFER_ADD_CODEC_ERROR || l === _.BUFFER_APPEND_ERROR) && h.some(({
        codecSet: D,
        audioCodec: A
      }) => i.codecSet !== D && i.audioCodec === A), {
        type: S,
        groupId: x
      } = (n = e.context) != null ? n : {};
      for (let D = h.length; D--; ) {
        const A = (D + d) % h.length;
        if (A !== d && A >= g && A <= f && h[A].loadError === 0) {
          var o, c;
          const R = h[A];
          if (l === _.FRAG_GAP && p === V.MAIN && e.frag) {
            const b = h[A].details;
            if (b) {
              const L = xt(e.frag, b.fragments, e.frag.start);
              if (L != null && L.gap)
                continue;
            }
          } else {
            if (S === Z.AUDIO_TRACK && R.hasAudioGroup(x) || S === Z.SUBTITLE_TRACK && R.hasSubtitleGroup(x))
              continue;
            if (p === V.AUDIO && (o = i.audioGroups) != null && o.some((b) => R.hasAudioGroup(b)) || p === V.SUBTITLE && (c = i.subtitleGroups) != null && c.some((b) => R.hasSubtitleGroup(b)) || E && i.audioCodec === R.audioCodec || v && i.codecSet === R.codecSet || !E && i.codecSet !== R.codecSet)
              continue;
          }
          u = A;
          break;
        }
      }
      if (u > -1 && s.loadLevel !== u)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: Te.SendAlternateToPenaltyBox,
          flags: De.None,
          nextAutoLevel: u
        };
    }
    return {
      action: Te.SendAlternateToPenaltyBox,
      flags: De.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case Te.DoNothing:
        break;
      case Te.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== _.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: i
    } = s, r = s.nextAutoLevel;
    switch (i) {
      case De.None:
        this.switchLevel(e, r);
        break;
      case De.MoveAllAlternatesMatchingHDCP: {
        const c = this.getVariantLevelIndex(e.frag), l = t.levels[c], u = l == null ? void 0 : l.attrs["HDCP-LEVEL"];
        if (s.hdcpLevel = u, u === "NONE")
          this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
        else if (u) {
          t.maxHdcpLevel = mi[mi.indexOf(u) - 1], s.resolved = !0, this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
          break;
        }
      }
      // eslint-disable-next-line no-fallthrough
      case De.MoveAllAlternatesMatchingKey: {
        const c = e.decryptdata;
        if (c) {
          const l = this.hls.levels, u = l.length;
          for (let d = u; d--; )
            if (this.variantHasKey(l[d], c)) {
              var n, o;
              this.log(`Banned key found in level ${d} (${l[d].bitrate}bps) or audio group "${(n = l[d].audioGroups) == null ? void 0 : n.join(",")}" (${(o = e.frag) == null ? void 0 : o.type} fragment) ${ve(c.keyId || [])}`), l[d].fragmentError++, l[d].loadError++, this.log(`Removing level ${d} with key error (${e.error})`), this.hls.removeLevel(d);
            }
          const h = e.frag;
          if (this.hls.levels.length < u)
            s.resolved = !0;
          else if (h && h.type !== V.MAIN) {
            const d = h.decryptdata;
            d && !c.matches(d) && (s.resolved = !0);
          }
        }
        break;
      }
    }
    s.resolved || this.switchLevel(e, r);
  }
  switchLevel(e, t) {
    if (t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === _.BUFFER_ADD_CODEC_ERROR && e.mimeType && e.sourceBufferName !== "audiovideo")) {
      const s = gi(e.mimeType), i = this.hls.levels;
      for (let r = i.length; r--; )
        i[r][`${e.sourceBufferName}Codec`] === s && (this.log(`Removing level ${r} for ${e.details} ("${s}" not supported)`), this.hls.removeLevel(r));
    }
  }
}
function kt(a) {
  const e = {
    action: Te.DoNothing,
    flags: De.None
  };
  return a && (e.resolved = !0), e;
}
var pe = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class nc {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this));
  }
  destroy() {
    this._unregisterListeners(), this.hls = // @ts-ignore
    this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let i = s.length; i--; ) {
        const r = s[i];
        if (!r)
          break;
        if (r.start <= e && e <= r.end && r.loaded)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, !0);
  }
  getFragAtPos(e, t, s) {
    const {
      fragments: i
    } = this, r = Object.keys(i);
    for (let n = r.length; n--; ) {
      const o = i[r[n]];
      if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
        const c = o.body;
        if (c.start <= e && e <= c.end)
          return c;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i, r) {
    this.timeRanges && (this.timeRanges[e] = t);
    const n = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const c = this.fragments[o];
      if (!c || n >= c.body.sn)
        return;
      if (!c.buffered && (!c.loaded || r)) {
        c.body.type === s && this.removeFragment(c.body);
        return;
      }
      const l = c.range[e];
      if (l) {
        if (l.time.length === 0) {
          this.removeFragment(c.body);
          return;
        }
        l.time.some((u) => {
          const h = !this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return h && this.removeFragment(c.body), h;
        });
      }
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges;
    if (!t || e.frag.sn === "initSegment")
      return;
    const s = e.frag, i = It(s), r = this.fragments[i];
    if (!r || r.buffered && s.gap)
      return;
    const n = !s.relurl;
    Object.keys(t).forEach((o) => {
      const c = s.elementaryStreams[o];
      if (!c)
        return;
      const l = t[o], u = n || c.partial === !0;
      r.range[o] = this.getBufferedTimes(s, e.part, u, l);
    }), r.loaded = null, Object.keys(r.range).length ? (this.bufferedEnd(r, s), ss(r) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(r.body);
  }
  bufferedEnd(e, t) {
    e.buffered = !0, (e.body.endList = t.endList || e.body.endList) && (this.endListFragments[e.body.type] = e);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = Rr(s, (i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = It(e);
    let i = this.fragments[s];
    !i && t && (i = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, this.bufferedEnd(i, e));
  }
  getBufferedTimes(e, t, s, i) {
    const r = {
      time: [],
      partial: s
    }, n = e.start, o = e.end, c = e.minEndPTS || o, l = e.maxStartPTS || n;
    for (let u = 0; u < i.length; u++) {
      const h = i.start(u) - this.bufferPadding, d = i.end(u) + this.bufferPadding;
      if (l >= h && c <= d) {
        r.time.push({
          startPTS: Math.max(n, i.start(u)),
          endPTS: Math.min(o, i.end(u))
        });
        break;
      } else if (n < d && o > h) {
        const g = Math.max(n, i.start(u)), f = Math.min(o, i.end(u));
        f > g && (r.partial = !0, r.time.push({
          startPTS: g,
          endPTS: f
        }));
      } else if (o <= h)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, i, r, n = 0;
    const {
      bufferPadding: o,
      fragments: c
    } = this;
    return Object.keys(c).forEach((l) => {
      const u = c[l];
      u && ss(u) && (i = u.body.start - o, r = u.body.end + o, e >= i && e <= r && (s = Math.min(e - i, r - e), n <= s && (t = u.body, n = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || ss(t));
  }
  getState(e) {
    const t = It(e), s = this.fragments[t];
    return s ? s.buffered ? ss(s) ? pe.PARTIAL : pe.OK : pe.APPENDING : pe.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let i, r;
    for (let n = 0; n < s.length; n++) {
      if (i = s.start(n) - this.bufferPadding, r = s.end(n) + this.bufferPadding, e >= i && t <= r)
        return !0;
      if (t <= i)
        return !1;
    }
    return !1;
  }
  onManifestLoading() {
    this.removeAllFragments();
  }
  onFragLoaded(e, t) {
    if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
      return;
    const s = t.frag, i = t.part ? null : t, r = It(s);
    this.fragments[r] = {
      body: s,
      appendedPTS: null,
      loaded: i,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: r,
      type: n
    } = t;
    if (s.sn === "initSegment")
      return;
    const o = s.type;
    if (i) {
      let l = this.activePartLists[o];
      l || (this.activePartLists[o] = l = []), l.push(i);
    }
    this.timeRanges = r;
    const c = r[n];
    this.detectEvictedFragments(n, c, o, i);
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = It(e);
    return !!this.fragments[t];
  }
  hasFragments(e) {
    const {
      fragments: t
    } = this, s = Object.keys(t);
    if (!e)
      return s.length > 0;
    for (let i = s.length; i--; ) {
      const r = t[s[i]];
      if ((r == null ? void 0 : r.body.type) === e)
        return !0;
    }
    return !1;
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, i, r) {
    i && !this.hasGaps || Object.keys(this.fragments).forEach((n) => {
      const o = this.fragments[n];
      if (!o)
        return;
      const c = o.body;
      c.type !== s || i && !c.gap || c.start < t && c.end > e && (o.buffered || r) && this.removeFragment(c);
    });
  }
  removeFragment(e) {
    const t = It(e);
    e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = Rr(s, (r) => r.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    var e;
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
    const t = (e = this.hls) == null || (e = e.latestLevelDetails) == null ? void 0 : e.partList;
    t && t.forEach((s) => s.clearElementaryStreamInfo());
  }
}
function ss(a) {
  var e, t, s;
  return a.buffered && !!(a.body.gap || (e = a.range.video) != null && e.partial || (t = a.range.audio) != null && t.partial || (s = a.range.audiovideo) != null && s.partial);
}
function It(a) {
  return `${a.type}_${a.level}_${a.sn}`;
}
function Rr(a, e) {
  return a.filter((t) => {
    const s = e(t);
    return s || t.clearElementaryStreamInfo(), s;
  });
}
var dt = {
  cbc: 0,
  ctr: 1
};
class ac {
  constructor(e, t, s) {
    this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s;
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case dt.cbc:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case dt.ctr:
        return this.subtle.decrypt(
          {
            name: "AES-CTR",
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          t,
          e
        );
      default:
        throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    }
  }
}
function oc(a) {
  const e = a.byteLength, t = e && new DataView(a.buffer).getUint8(e - 1);
  return t ? a.slice(0, e - t) : a;
}
class lc {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let i = 0; i < 4; i++)
      s[i] = t.getUint32(i * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], r = s[1], n = s[2], o = s[3], c = this.invSubMix, l = c[0], u = c[1], h = c[2], d = c[3], g = new Uint32Array(256);
    let f = 0, p = 0, y = 0;
    for (y = 0; y < 256; y++)
      y < 128 ? g[y] = y << 1 : g[y] = y << 1 ^ 283;
    for (y = 0; y < 256; y++) {
      let E = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
      E = E >>> 8 ^ E & 255 ^ 99, e[f] = E, t[E] = f;
      const T = g[f], v = g[T], S = g[v];
      let x = g[E] * 257 ^ E * 16843008;
      i[f] = x << 24 | x >>> 8, r[f] = x << 16 | x >>> 16, n[f] = x << 8 | x >>> 24, o[f] = x, x = S * 16843009 ^ v * 65537 ^ T * 257 ^ f * 16843008, l[E] = x << 24 | x >>> 8, u[E] = x << 16 | x >>> 16, h[E] = x << 8 | x >>> 24, d[E] = x, f ? (f = T ^ g[g[g[S ^ T]]], p ^= g[g[p]]) : f = p = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, i = 0;
    for (; i < t.length && s; )
      s = t[i] === this.key[i], i++;
    if (s)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const n = this.ksRows = (r + 6 + 1) * 4;
    let o, c;
    const l = this.keySchedule = new Uint32Array(n), u = this.invKeySchedule = new Uint32Array(n), h = this.sBox, d = this.rcon, g = this.invSubMix, f = g[0], p = g[1], y = g[2], E = g[3];
    let T, v;
    for (o = 0; o < n; o++) {
      if (o < r) {
        T = l[o] = t[o];
        continue;
      }
      v = T, o % r === 0 ? (v = v << 8 | v >>> 24, v = h[v >>> 24] << 24 | h[v >>> 16 & 255] << 16 | h[v >>> 8 & 255] << 8 | h[v & 255], v ^= d[o / r | 0] << 24) : r > 6 && o % r === 4 && (v = h[v >>> 24] << 24 | h[v >>> 16 & 255] << 16 | h[v >>> 8 & 255] << 8 | h[v & 255]), l[o] = T = (l[o - r] ^ v) >>> 0;
    }
    for (c = 0; c < n; c++)
      o = n - c, c & 3 ? v = l[o] : v = l[o - 4], c < 4 || o <= 4 ? u[c] = v : u[c] = f[h[v >>> 24]] ^ p[h[v >>> 16 & 255]] ^ y[h[v >>> 8 & 255]] ^ E[h[v & 255]], u[c] = u[c] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, r = this.invKeySchedule, n = this.invSBox, o = this.invSubMix, c = o[0], l = o[1], u = o[2], h = o[3], d = this.uint8ArrayToUint32Array_(s);
    let g = d[0], f = d[1], p = d[2], y = d[3];
    const E = new Int32Array(e), T = new Int32Array(E.length);
    let v, S, x, D, A, R, b, L, C, F, B, K, N, w;
    const U = this.networkToHostOrderSwap;
    for (; t < E.length; ) {
      for (C = U(E[t]), F = U(E[t + 1]), B = U(E[t + 2]), K = U(E[t + 3]), A = C ^ r[0], R = K ^ r[1], b = B ^ r[2], L = F ^ r[3], N = 4, w = 1; w < i; w++)
        v = c[A >>> 24] ^ l[R >> 16 & 255] ^ u[b >> 8 & 255] ^ h[L & 255] ^ r[N], S = c[R >>> 24] ^ l[b >> 16 & 255] ^ u[L >> 8 & 255] ^ h[A & 255] ^ r[N + 1], x = c[b >>> 24] ^ l[L >> 16 & 255] ^ u[A >> 8 & 255] ^ h[R & 255] ^ r[N + 2], D = c[L >>> 24] ^ l[A >> 16 & 255] ^ u[R >> 8 & 255] ^ h[b & 255] ^ r[N + 3], A = v, R = S, b = x, L = D, N = N + 4;
      v = n[A >>> 24] << 24 ^ n[R >> 16 & 255] << 16 ^ n[b >> 8 & 255] << 8 ^ n[L & 255] ^ r[N], S = n[R >>> 24] << 24 ^ n[b >> 16 & 255] << 16 ^ n[L >> 8 & 255] << 8 ^ n[A & 255] ^ r[N + 1], x = n[b >>> 24] << 24 ^ n[L >> 16 & 255] << 16 ^ n[A >> 8 & 255] << 8 ^ n[R & 255] ^ r[N + 2], D = n[L >>> 24] << 24 ^ n[A >> 16 & 255] << 16 ^ n[R >> 8 & 255] << 8 ^ n[b & 255] ^ r[N + 3], T[t] = U(v ^ g), T[t + 1] = U(D ^ f), T[t + 2] = U(x ^ p), T[t + 3] = U(S ^ y), g = C, f = F, p = B, y = K, t = t + 4;
    }
    return T.buffer;
  }
}
class cc {
  constructor(e, t, s) {
    this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s;
  }
  expandKey() {
    const e = uc(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: e
    }, !1, ["encrypt", "decrypt"]);
  }
}
function uc(a) {
  switch (a) {
    case dt.cbc:
      return "AES-CBC";
    case dt.ctr:
      return "AES-CTR";
    default:
      throw new Error(`[FastAESKey] invalid aes mode ${a}`);
  }
}
const hc = 16;
class $i {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? oc(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s, i) {
    return this.useSoftware ? new Promise((r, n) => {
      const o = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      this.softwareDecrypt(o, t, s, i);
      const c = this.flush();
      c ? r(c.buffer) : n(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s, i) {
    const {
      currentIV: r,
      currentResult: n,
      remainderData: o
    } = this;
    if (i !== dt.cbc || t.byteLength !== 16)
      return ie.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o && (e = Ne(o, e), this.remainderData = null);
    const c = this.getValidChunk(e);
    if (!c.length)
      return null;
    r && (s = r);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new lc()), l.expandKey(t);
    const u = n;
    return this.currentResult = l.decrypt(c.buffer, 0, s), this.currentIV = c.slice(-16).buffer, u || null;
  }
  webCryptoDecrypt(e, t, s, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s, i));
      this.key = t, this.fastAesKey = new cc(this.subtle, t, i);
    }
    return this.fastAesKey.expandKey().then((r) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new ac(this.subtle, new Uint8Array(s), i).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (ie.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s, i)));
  }
  onWebCryptoError(e, t, s, i) {
    const r = this.enableSoftwareAES;
    if (r) {
      this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, i);
      const n = this.flush();
      if (n)
        return n.buffer;
    }
    throw new Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % hc;
    return s !== e.length && (t = e.slice(0, s), this.remainderData = e.slice(s)), t;
  }
  logOnce(e) {
    this.logEnabled && (ie.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const br = Math.pow(2, 17);
class dc {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new tt({
        type: Y.NETWORK_ERROR,
        details: _.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          c(Dr(e));
          return;
        } else
          e.gap = !1;
      const l = this.loader = r ? new r(i) : new n(i), u = _r(e);
      e.loader = l;
      const h = Ir(i.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : br
      };
      e.stats = l.stats;
      const g = {
        onSuccess: (f, p, y, E) => {
          this.resetLoader(e, l);
          let T = f.data;
          y.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(T.slice(0, 16)), T = T.slice(16)), o({
            frag: e,
            part: null,
            payload: T,
            networkDetails: E
          });
        },
        onError: (f, p, y, E) => {
          this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: se({
              url: s,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: y,
            stats: E
          }));
        },
        onAbort: (f, p, y) => {
          this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: y,
            stats: f
          }));
        },
        onTimeout: (f, p, y) => {
          this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: y,
            stats: f
          }));
        }
      };
      t && (g.onProgress = (f, p, y, E) => t({
        frag: e,
        part: null,
        payload: y,
        networkDetails: E
      })), l.load(u, d, g);
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        c(Dr(e, t));
        return;
      }
      const l = this.loader = r ? new r(i) : new n(i), u = _r(e, t);
      e.loader = l;
      const h = Ir(i.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: br
      };
      t.stats = l.stats, l.load(u, d, {
        onSuccess: (g, f, p, y) => {
          this.resetLoader(e, l), this.updateStatsFromPart(e, t);
          const E = {
            frag: e,
            part: t,
            payload: g.data,
            networkDetails: y
          };
          s(E), o(E);
        },
        onError: (g, f, p, y) => {
          this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: se({
              url: u.url,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: p,
            stats: y
          }));
        },
        onAbort: (g, f, p) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: g
          }));
        },
        onTimeout: (g, f, p) => {
          this.resetLoader(e, l), c(new tt({
            type: Y.NETWORK_ERROR,
            details: _.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: p,
            stats: g
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, r = i.total;
    if (s.loaded += i.loaded, r) {
      const c = Math.round(e.duration / t.duration), l = Math.min(Math.round(s.loaded / r), c), h = (c - l) * Math.round(s.loaded / l);
      s.total = s.loaded + h;
    } else
      s.total = Math.max(s.loaded, s.total);
    const n = s.loading, o = i.loading;
    n.start ? n.first += o.first - o.start : (n.start = o.start, n.first = o.first), n.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function _r(a, e = null) {
  const t = e || a, s = {
    frag: a,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if ($(i) && $(r)) {
    var n;
    let o = i, c = r;
    if (a.sn === "initSegment" && fc((n = a.decryptdata) == null ? void 0 : n.method)) {
      const l = r - i;
      l % 16 && (c = r + (16 - l % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = c;
  }
  return s;
}
function Dr(a, e) {
  const t = new Error(`GAP ${a.gap ? "tag" : "attribute"} found`), s = {
    type: Y.MEDIA_ERROR,
    details: _.FRAG_GAP,
    fatal: !1,
    frag: a,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || a).stats.aborted = !0, new tt(s);
}
function fc(a) {
  return a === "AES-128" || a === "AES-256";
}
class tt extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class ia extends Be {
  constructor(e, t) {
    super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
class Ui {
  constructor(e, t, s, i = 0, r = -1, n = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = is(), this.buffering = {
      audio: is(),
      video: is(),
      audiovideo: is()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = r, this.partial = n;
  }
}
function is() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
const Cr = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class X {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    if (e) {
      const s = X.getBuffered(e);
      for (let i = s.length; i--; )
        if (t >= s.start(i) && t <= s.end(i))
          return !0;
    }
    return !1;
  }
  static bufferedRanges(e) {
    if (e) {
      const t = X.getBuffered(e);
      return X.timeRangesToArray(t);
    }
    return [];
  }
  static timeRangesToArray(e) {
    const t = [];
    for (let s = 0; s < e.length; s++)
      t.push({
        start: e.start(s),
        end: e.end(s)
      });
    return t;
  }
  static bufferInfo(e, t, s) {
    if (e) {
      const i = X.bufferedRanges(e);
      if (i.length)
        return X.bufferedInfo(i, t, s);
    }
    return {
      len: 0,
      start: t,
      end: t,
      bufferedIndex: -1
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.length > 1 && e.sort((u, h) => u.start - h.start || h.end - u.end);
    let i = -1, r = [];
    if (s)
      for (let u = 0; u < e.length; u++) {
        t >= e[u].start && t <= e[u].end && (i = u);
        const h = r.length;
        if (h) {
          const d = r[h - 1].end;
          e[u].start - d < s ? e[u].end > d && (r[h - 1].end = e[u].end) : r.push(e[u]);
        } else
          r.push(e[u]);
      }
    else
      r = e;
    let n = 0, o, c = t, l = t;
    for (let u = 0; u < r.length; u++) {
      const h = r[u].start, d = r[u].end;
      if (i === -1 && t >= h && t <= d && (i = u), t + s >= h && t < d)
        c = h, l = d, n = l - t;
      else if (t + s < h) {
        o = h;
        break;
      }
    }
    return {
      len: n,
      start: c || 0,
      end: l || 0,
      nextStart: o,
      buffered: e,
      bufferedIndex: i
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered || Cr;
    } catch (t) {
      return ie.log("failed to get media.buffered", t), Cr;
    }
  }
}
const ra = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Pr(a) {
  return ra.test(a);
}
function yi(a, e) {
  if (a.variableList !== null || a.hasVariableRefs) {
    const t = a.variableList;
    return e.replace(ra, (s) => {
      const i = s.substring(2, s.length - 1), r = t == null ? void 0 : t[i];
      return r === void 0 ? (a.playlistParsingError || (a.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r;
    });
  }
  return e;
}
function kr(a, e, t) {
  let s = a.variableList;
  s || (a.variableList = s = {});
  let i, r;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const n = new self.URL(t).searchParams;
      if (n.has(i))
        r = n.get(i);
      else
        throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`);
    } catch (n) {
      a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${n.message}`));
    }
  } else
    i = e.NAME, r = e.VALUE;
  i in s ? a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = r || "";
}
function gc(a, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = a.variableList;
    i || (a.variableList = i = {}), i[s] = t[s];
  } else
    a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
const mc = /^(\d+)x(\d+)$/, wr = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ce {
  constructor(e, t) {
    typeof e == "string" && (e = ce.parseAttrList(e, t)), re(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        s[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return s;
    }
    return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  enumeratedStringList(e, t) {
    const s = this[e];
    return (s ? s.split(/[ ,]+/) : []).reduce((i, r) => (i[r.toLowerCase()] = !0, i), t);
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = mc.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e, t) {
    let s;
    const i = {};
    for (wr.lastIndex = 0; (s = wr.exec(e)) !== null; ) {
      const n = s[1].trim();
      let o = s[2];
      const c = o.indexOf('"') === 0 && o.lastIndexOf('"') === o.length - 1;
      let l = !1;
      if (c)
        o = o.slice(1, -1);
      else
        switch (n) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            l = !0;
        }
      if (t && (c || l))
        o = yi(t, o);
      else if (!l && !c)
        switch (n) {
          case "CLOSED-CAPTIONS":
            if (o === "NONE")
              break;
          // falls through
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            ie.warn(`${e}: attribute ${n} is missing quotes`);
        }
      i[n] = o;
    }
    return i;
  }
}
const pc = "com.apple.hls.interstitial";
function yc(a) {
  return a !== "ID" && a !== "CLASS" && a !== "CUE" && a !== "START-DATE" && a !== "DURATION" && a !== "END-DATE" && a !== "END-ON-NEXT";
}
function Ec(a) {
  return a === "SCTE35-OUT" || a === "SCTE35-IN" || a === "SCTE35-CMD";
}
class na {
  constructor(e, t, s = 0) {
    var i;
    if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (i = t == null ? void 0 : t.tagOrder) != null ? i : s, t) {
      const r = t.attr;
      for (const n in r)
        if (Object.prototype.hasOwnProperty.call(e, n) && e[n] !== r[n]) {
          ie.warn(`DATERANGE tag attribute: "${n}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = n;
          break;
        }
      e = re(new ce({}), r, e);
    }
    if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const r = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
      $(r.getTime()) && (this._endDate = r);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get cue() {
    const e = this._cue;
    return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: !1,
      post: !1,
      once: !1
    }) : e;
  }
  get startTime() {
    const {
      tagAnchor: e
    } = this;
    return e === null || e.programDateTime === null ? (ie.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    const e = this._endDate || this._dateAtEnd;
    if (e)
      return e;
    const t = this.duration;
    return t !== null ? this._dateAtEnd = new Date(this._startDate.getTime() + t * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if ($(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isInterstitial() {
    return this.class === pc;
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && $(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
  }
}
const Tc = 10;
class vc {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1;
  }
  hasKey(e) {
    return this.encryptedFragments.some((t) => {
      let s = t.decryptdata;
      return s || (t.setKeyFormat(e.keyFormat), s = t.decryptdata), !!s && e.matches(s);
    });
  }
  get hasProgramDateTime() {
    return this.fragments.length ? $(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || Tc;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get fragmentStart() {
    return this.fragments.length ? this.fragments[0].start : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get maxPartIndex() {
    const e = this.partList;
    if (e) {
      const t = this.lastPartIndex;
      if (t !== -1) {
        for (let s = e.length; s--; )
          if (e[s].index > t)
            return e[s].index;
        return t;
      }
    }
    return 0;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
  get expired() {
    if (this.live && this.age && this.misses < 3) {
      const e = this.partEnd - this.fragmentStart;
      return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
    }
    return !1;
  }
}
function Cs(a, e) {
  return a.length === e.length ? !a.some((t, s) => t !== e[s]) : !1;
}
function Or(a, e) {
  return !a && !e ? !0 : !a || !e ? !1 : Cs(a, e);
}
function wt(a) {
  return a === "AES-128" || a === "AES-256" || a === "AES-256-CTR";
}
function Gi(a) {
  switch (a) {
    case "AES-128":
    case "AES-256":
      return dt.cbc;
    case "AES-256-CTR":
      return dt.ctr;
    default:
      throw new Error(`invalid full segment method ${a}`);
  }
}
function Ki(a) {
  return Uint8Array.from(atob(a), (e) => e.charCodeAt(0));
}
function Ei(a) {
  return Uint8Array.from(unescape(encodeURIComponent(a)), (e) => e.charCodeAt(0));
}
function Sc(a) {
  const e = Ei(a).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function aa(a) {
  const e = function(s, i, r) {
    const n = s[i];
    s[i] = s[r], s[r] = n;
  };
  e(a, 0, 3), e(a, 1, 2), e(a, 4, 5), e(a, 6, 7);
}
function oa(a) {
  const e = a.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const r = i[0] === "base64", n = i[1];
      r ? (s.splice(-1, 1), t = Ki(n)) : t = Sc(n);
    }
  }
  return t;
}
const Ps = typeof self < "u" ? self : void 0;
var ue = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, Se = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function ys(a) {
  switch (a) {
    case Se.FAIRPLAY:
      return ue.FAIRPLAY;
    case Se.PLAYREADY:
      return ue.PLAYREADY;
    case Se.WIDEVINE:
      return ue.WIDEVINE;
    case Se.CLEARKEY:
      return ue.CLEARKEY;
  }
}
function Ys(a) {
  switch (a) {
    case ue.FAIRPLAY:
      return Se.FAIRPLAY;
    case ue.PLAYREADY:
      return Se.PLAYREADY;
    case ue.WIDEVINE:
      return Se.WIDEVINE;
    case ue.CLEARKEY:
      return Se.CLEARKEY;
  }
}
function Kt(a) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = a, s = e ? [ue.FAIRPLAY, ue.WIDEVINE, ue.PLAYREADY, ue.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[ue.WIDEVINE] && t && s.push(ue.WIDEVINE), s;
}
const la = (function(a) {
  return Ps != null && (a = Ps.navigator) != null && a.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
})();
function xc(a, e, t, s) {
  let i;
  switch (a) {
    case ue.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case ue.WIDEVINE:
    case ue.PLAYREADY:
      i = ["cenc"];
      break;
    case ue.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${a}`);
  }
  return Ac(i, e, t, s);
}
function Ac(a, e, t, s) {
  return [{
    initDataTypes: a,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs=${r}`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs=${r}`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function Lc(a) {
  var e;
  return !!a && (a.sessionType === "persistent-license" || !!((e = a.sessionTypes) != null && e.some((t) => t === "persistent-license")));
}
function ca(a) {
  const e = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), n = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (n) {
    const o = n.childNodes[0] ? n.childNodes[0].nodeValue : n.getAttribute("VALUE");
    if (o) {
      const c = Ki(o).subarray(0, 16);
      return aa(c), c;
    }
  }
  return null;
}
let Rt = {};
class ut {
  static clearKeyUriToKeyIdMap() {
    Rt = {};
  }
  static setKeyIdForUri(e, t) {
    Rt[e] = t;
  }
  static addKeyIdForUri(e) {
    const t = Object.keys(Rt).length % Number.MAX_SAFE_INTEGER, s = new Uint8Array(16);
    return new DataView(s.buffer, 12, 4).setUint32(0, t), Rt[e] = s, s;
  }
  constructor(e, t, s, i = [1], r = null, n) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !wt(e), n != null && n.startsWith("0x") && (this.keyId = new Uint8Array(Nn(n)));
  }
  matches(e) {
    return e.uri === this.uri && e.method === this.method && e.encrypted === this.encrypted && e.keyFormat === this.keyFormat && Cs(e.keyFormatVersions, this.keyFormatVersions) && Or(e.iv, this.iv) && Or(e.keyId, this.keyId);
  }
  isSupported() {
    if (this.method) {
      if (wt(this.method) || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case Se.FAIRPLAY:
        case Se.WIDEVINE:
        case Se.PLAYREADY:
        case Se.CLEARKEY:
          return ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e, t) {
    if (!this.encrypted || !this.uri)
      return null;
    if (wt(this.method)) {
      let r = this.iv;
      return r || (typeof e != "number" && (ie.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0), r = Rc(e)), new ut(this.method, this.uri, "identity", this.keyFormatVersions, r);
    }
    if (this.keyId) {
      const r = Rt[this.uri];
      if (r && !Cs(this.keyId, r) && ut.setKeyIdForUri(this.uri, this.keyId), this.pssh)
        return this;
    }
    const s = oa(this.uri);
    if (s)
      switch (this.keyFormat) {
        case Se.WIDEVINE:
          if (this.pssh = s, !this.keyId) {
            const r = Dl(s.buffer);
            if (r.length) {
              var i;
              const n = r[0];
              this.keyId = (i = n.kids) != null && i.length ? n.kids[0] : null;
            }
          }
          this.keyId || (this.keyId = Fr(t));
          break;
        case Se.PLAYREADY: {
          const r = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = _l(r, null, s), this.keyId = ca(s);
          break;
        }
        default: {
          let r = s.subarray(0, 16);
          if (r.length !== 16) {
            const n = new Uint8Array(16);
            n.set(r, 16 - r.length), r = n;
          }
          this.keyId = r;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let r;
      r = Ic(t), r || (r = Fr(t), r || (r = Rt[this.uri])), r && (this.keyId = r, ut.setKeyIdForUri(this.uri, r));
    }
    return this;
  }
}
function Ic(a) {
  const e = a == null ? void 0 : a[Se.WIDEVINE];
  return e ? e.keyId : null;
}
function Fr(a) {
  const e = a == null ? void 0 : a[Se.PLAYREADY];
  if (e) {
    const t = oa(e.uri);
    if (t)
      return ca(t);
  }
  return null;
}
function Rc(a) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = a >> 8 * (15 - t) & 255;
  return e;
}
const Mr = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Nr = /#EXT-X-MEDIA:(.*)/g, bc = /^#EXT(?:INF|-X-TARGETDURATION):/m, Ws = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), _c = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class ze {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static resolve(e, t) {
    return wi.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return bc.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = Pr(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    if (Mr.lastIndex = 0, !e.startsWith("#EXTM3U"))
      return i.playlistParsingError = new Error("no EXTM3U delimiter"), i;
    let n;
    for (; (n = Mr.exec(e)) != null; )
      if (n[1]) {
        var o;
        const l = new ce(n[1], i), u = yi(i, n[2]), h = {
          attrs: l,
          bitrate: l.decimalInteger("BANDWIDTH") || l.decimalInteger("AVERAGE-BANDWIDTH"),
          name: l.NAME,
          url: ze.resolve(u, t)
        }, d = l.decimalResolution("RESOLUTION");
        d && (h.width = d.width, h.height = d.height), Ur(l.CODECS, h);
        const g = l["SUPPLEMENTAL-CODECS"];
        g && (h.supplemental = {}, Ur(g, h.supplemental)), (o = h.unknownCodecs) != null && o.length || r.push(h), i.levels.push(h);
      } else if (n[3]) {
        const l = n[3], u = n[4];
        switch (l) {
          case "SESSION-DATA": {
            const h = new ce(u, i), d = h["DATA-ID"];
            d && (i.sessionData === null && (i.sessionData = {}), i.sessionData[d] = h);
            break;
          }
          case "SESSION-KEY": {
            const h = Br(u, t, i);
            h.encrypted && h.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(h)) : ie.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
            break;
          }
          case "DEFINE": {
            {
              const h = new ce(u, i);
              kr(i, h, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const h = new ce(u, i);
            i.contentSteering = {
              uri: ze.resolve(h["SERVER-URI"], t),
              pathwayId: h["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = $r(u);
            break;
          }
        }
      }
    const c = r.length > 0 && r.length < i.levels.length;
    return i.levels = c ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const r = {}, n = s.levels, o = {
      AUDIO: n.map((l) => ({
        id: l.attrs.AUDIO,
        audioCodec: l.audioCodec
      })),
      SUBTITLES: n.map((l) => ({
        id: l.attrs.SUBTITLES,
        textCodec: l.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let c = 0;
    for (Nr.lastIndex = 0; (i = Nr.exec(e)) !== null; ) {
      const l = new ce(i[1], s), u = l.TYPE;
      if (u) {
        const h = o[u], d = r[u] || [];
        r[u] = d;
        const g = l.LANGUAGE, f = l["ASSOC-LANGUAGE"], p = l.CHANNELS, y = l.CHARACTERISTICS, E = l["INSTREAM-ID"], T = {
          attrs: l,
          bitrate: 0,
          id: c++,
          groupId: l["GROUP-ID"] || "",
          name: l.NAME || g || "",
          type: u,
          default: l.bool("DEFAULT"),
          autoselect: l.bool("AUTOSELECT"),
          forced: l.bool("FORCED"),
          lang: g,
          url: l.URI ? ze.resolve(l.URI, t) : ""
        };
        if (f && (T.assocLang = f), p && (T.channels = p), y && (T.characteristics = y), E && (T.instreamId = E), h != null && h.length) {
          const v = ze.findGroup(h, T.groupId) || h[0];
          Gr(T, v, "audioCodec"), Gr(T, v, "textCodec");
        }
        d.push(T);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, i, r, n) {
    var o;
    const c = {
      url: t
    }, l = new vc(t), u = l.fragments, h = [];
    let d = null, g = 0, f = 0, p = 0, y = 0, E = 0, T = null, v = new Ks(i, c), S, x, D, A = -1, R = !1, b = null, L;
    if (Ws.lastIndex = 0, l.m3u8 = e, l.hasVariableRefs = Pr(e), ((o = Ws.exec(e)) == null ? void 0 : o[0]) !== "#EXTM3U")
      return l.playlistParsingError = new Error("Missing format identifier #EXTM3U"), l;
    for (; (S = Ws.exec(e)) !== null; ) {
      R && (R = !1, v = new Ks(i, c), v.playlistOffset = p, v.setStart(p), v.sn = g, v.cc = y, E && (v.bitrate = E), v.level = s, d && (v.initSegment = d, d.rawProgramDateTime && (v.rawProgramDateTime = d.rawProgramDateTime, d.rawProgramDateTime = null), b && (v.setByteRange(b), b = null)));
      const K = S[1];
      if (K) {
        v.duration = parseFloat(K);
        const N = (" " + S[2]).slice(1);
        v.title = N || null, v.tagList.push(N ? ["INF", K, N] : ["INF", K]);
      } else if (S[3]) {
        if ($(v.duration)) {
          v.playlistOffset = p, v.setStart(p), D && Vr(v, D, l), v.sn = g, v.level = s, v.cc = y, u.push(v);
          const N = (" " + S[3]).slice(1);
          v.relurl = yi(l, N), Ti(v, T, h), T = v, p += v.duration, g++, f = 0, R = !0;
        }
      } else {
        if (S = S[0].match(_c), !S) {
          ie.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (x = 1; x < S.length && S[x] === void 0; x++)
          ;
        const N = (" " + S[x]).slice(1), w = (" " + S[x + 1]).slice(1), U = S[x + 2] ? (" " + S[x + 2]).slice(1) : null;
        switch (N) {
          case "BYTERANGE":
            T ? v.setByteRange(w, T) : v.setByteRange(w);
            break;
          case "PROGRAM-DATE-TIME":
            v.rawProgramDateTime = w, v.tagList.push(["PROGRAM-DATE-TIME", w]), A === -1 && (A = u.length);
            break;
          case "PLAYLIST-TYPE":
            l.type && Je(l, N, S), l.type = w.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            l.startSN !== 0 ? Je(l, N, S) : u.length > 0 && Hr(l, N, S), g = l.startSN = parseInt(w);
            break;
          case "SKIP": {
            l.skippedSegments && Je(l, N, S);
            const k = new ce(w, l), G = k.decimalInteger("SKIPPED-SEGMENTS");
            if ($(G)) {
              l.skippedSegments += G;
              for (let M = G; M--; )
                u.push(null);
              g += G;
            }
            const W = k.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            W && (l.recentlyRemovedDateranges = (l.recentlyRemovedDateranges || []).concat(W.split("	")));
            break;
          }
          case "TARGETDURATION":
            l.targetduration !== 0 && Je(l, N, S), l.targetduration = Math.max(parseInt(w), 1);
            break;
          case "VERSION":
            l.version !== null && Je(l, N, S), l.version = parseInt(w);
            break;
          case "INDEPENDENT-SEGMENTS":
            break;
          case "ENDLIST":
            l.live || Je(l, N, S), l.live = !1;
            break;
          case "#":
            (w || U) && v.tagList.push(U ? [w, U] : [w]);
            break;
          case "DISCONTINUITY":
            y++, v.tagList.push(["DIS"]);
            break;
          case "GAP":
            v.gap = !0, v.tagList.push([N]);
            break;
          case "BITRATE":
            v.tagList.push([N, w]), E = parseInt(w) * 1e3, $(E) ? v.bitrate = E : E = 0;
            break;
          case "DATERANGE": {
            const k = new ce(w, l), G = new na(k, l.dateRanges[k.ID], l.dateRangeTagCount);
            l.dateRangeTagCount++, G.isValid || l.skippedSegments ? l.dateRanges[G.id] = G : ie.warn(`Ignoring invalid DATERANGE tag: "${w}"`), v.tagList.push(["EXT-X-DATERANGE", w]);
            break;
          }
          case "DEFINE": {
            {
              const k = new ce(w, l);
              "IMPORT" in k ? gc(l, k, n) : kr(l, k, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            l.startCC !== 0 ? Je(l, N, S) : u.length > 0 && Hr(l, N, S), l.startCC = y = parseInt(w);
            break;
          case "KEY": {
            const k = Br(w, t, l);
            if (k.isSupported()) {
              if (k.method === "NONE") {
                D = void 0;
                break;
              }
              D || (D = {});
              const G = D[k.keyFormat];
              G != null && G.matches(k) || (G && (D = re({}, D)), D[k.keyFormat] = k);
            } else
              ie.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${w}"`);
            break;
          }
          case "START":
            l.startTimeOffset = $r(w);
            break;
          case "MAP": {
            const k = new ce(w, l);
            if (v.duration) {
              const G = new Ks(i, c);
              Kr(G, k, s, D), d = G, v.initSegment = d, d.rawProgramDateTime && !v.rawProgramDateTime && (v.rawProgramDateTime = d.rawProgramDateTime);
            } else {
              const G = v.byteRangeEndOffset;
              if (G) {
                const W = v.byteRangeStartOffset;
                b = `${G - W}@${W}`;
              } else
                b = null;
              Kr(v, k, s, D), d = v, R = !0;
            }
            d.cc = y;
            break;
          }
          case "SERVER-CONTROL": {
            L && Je(l, N, S), L = new ce(w), l.canBlockReload = L.bool("CAN-BLOCK-RELOAD"), l.canSkipUntil = L.optionalFloat("CAN-SKIP-UNTIL", 0), l.canSkipDateRanges = l.canSkipUntil > 0 && L.bool("CAN-SKIP-DATERANGES"), l.partHoldBack = L.optionalFloat("PART-HOLD-BACK", 0), l.holdBack = L.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            l.partTarget && Je(l, N, S);
            const k = new ce(w);
            l.partTarget = k.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let k = l.partList;
            k || (k = l.partList = []);
            const G = f > 0 ? k[k.length - 1] : void 0, W = f++, M = new ce(w, l), O = new gl(M, v, c, W, G);
            k.push(O), v.duration += O.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const k = new ce(w, l);
            l.preloadHint = k;
            break;
          }
          case "RENDITION-REPORT": {
            const k = new ce(w, l);
            l.renditionReports = l.renditionReports || [], l.renditionReports.push(k);
            break;
          }
          default:
            ie.warn(`line parsed but not handled: ${S}`);
            break;
        }
      }
    }
    T && !T.relurl ? (u.pop(), p -= T.duration, l.partList && (l.fragmentHint = T)) : l.partList && (Ti(v, T, h), v.cc = y, l.fragmentHint = v, D && Vr(v, D, l)), l.targetduration || (l.playlistParsingError = new Error("Missing Target Duration"));
    const C = u.length, F = u[0], B = u[C - 1];
    if (p += l.skippedSegments * l.targetduration, p > 0 && C && B) {
      l.averagetargetduration = p / C;
      const K = B.sn;
      l.endSN = K !== "initSegment" ? K : 0, l.live || (B.endList = !0), A > 0 && (Cc(u, A), F && h.unshift(F));
    }
    return l.fragmentHint && (p += l.fragmentHint.duration), l.totalduration = p, h.length && l.dateRangeTagCount && F && ua(h, l), l.endCC = y, l;
  }
}
function ua(a, e) {
  let t = a.length;
  if (!t)
    if (e.hasProgramDateTime) {
      const o = e.fragments[e.fragments.length - 1];
      a.push(o), t++;
    } else
      return;
  const s = a[t - 1], i = e.live ? 1 / 0 : e.totalduration, r = Object.keys(e.dateRanges);
  for (let o = r.length; o--; ) {
    const c = e.dateRanges[r[o]], l = c.startDate.getTime();
    c.tagAnchor = s.ref;
    for (let u = t; u--; ) {
      var n;
      if (((n = a[u]) == null ? void 0 : n.sn) < e.startSN)
        break;
      const h = Dc(e, l, a, u, i);
      if (h !== -1) {
        c.tagAnchor = e.fragments[h].ref;
        break;
      }
    }
  }
}
function Dc(a, e, t, s, i) {
  const r = t[s];
  if (r) {
    const o = r.programDateTime;
    if (e >= o || s === 0) {
      var n;
      const c = (((n = t[s + 1]) == null ? void 0 : n.start) || i) - r.start;
      if (e <= o + c * 1e3) {
        const l = t[s].sn - a.startSN;
        if (l < 0)
          return -1;
        const u = a.fragments;
        if (u.length > t.length) {
          const d = (t[s + 1] || u[u.length - 1]).sn - a.startSN;
          for (let g = d; g > l; g--) {
            const f = u[g].programDateTime;
            if (e >= f && e < f + u[g].duration * 1e3)
              return g;
          }
        }
        return l;
      }
    }
  }
  return -1;
}
function Br(a, e, t) {
  var s, i;
  const r = new ce(a, t), n = (s = r.METHOD) != null ? s : "", o = r.URI, c = r.hexadecimalInteger("IV"), l = r.KEYFORMATVERSIONS, u = (i = r.KEYFORMAT) != null ? i : "identity";
  o && r.IV && !c && ie.error(`Invalid IV: ${r.IV}`);
  const h = o ? ze.resolve(o, e) : "", d = (l || "1").split("/").map(Number).filter(Number.isFinite);
  return new ut(n, h, u, d, c, r.KEYID);
}
function $r(a) {
  const t = new ce(a).decimalFloatingPoint("TIME-OFFSET");
  return $(t) ? t : null;
}
function Ur(a, e) {
  let t = (a || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const i = t.filter((r) => Mi(r, s));
    i.length && (e[`${s}Codec`] = i.map((r) => r.split("/")[0]).join(","), t = t.filter((r) => i.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function Gr(a, e, t) {
  const s = e[t];
  s && (a[t] = s);
}
function Cc(a, e) {
  let t = a[e];
  for (let s = e; s--; ) {
    const i = a[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function Ti(a, e, t) {
  a.rawProgramDateTime ? t.push(a) : e != null && e.programDateTime && (a.programDateTime = e.endProgramDateTime);
}
function Kr(a, e, t, s) {
  a.relurl = e.URI, e.BYTERANGE && a.setByteRange(e.BYTERANGE), a.level = t, a.sn = "initSegment", s && (a.levelkeys = s), a.initSegment = null;
}
function Vr(a, e, t) {
  a.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(a);
}
function Je(a, e, t) {
  a.playlistParsingError = new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`);
}
function Hr(a, e, t) {
  a.playlistParsingError = new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`);
}
function qs(a, e) {
  const t = e.startPTS;
  if ($(t)) {
    let s = 0, i;
    e.sn > a.sn ? (s = t - a.start, i = a) : (s = a.start - t, i = e), i.duration !== s && i.setDuration(s);
  } else e.sn > a.sn ? a.cc === e.cc && a.minEndPTS ? e.setStart(a.start + (a.minEndPTS - a.start)) : e.setStart(a.start + a.duration) : e.setStart(Math.max(a.start - e.duration, 0));
}
function ha(a, e, t, s, i, r, n) {
  s - t <= 0 && (n.warn("Fragment should have a positive duration", e), s = t + e.duration, r = i + e.duration);
  let c = t, l = s;
  const u = e.startPTS, h = e.endPTS;
  if ($(u)) {
    const E = Math.abs(u - t);
    a && E > a.totalduration ? n.warn(`media timestamps and playlist times differ by ${E}s for level ${e.level} ${a.url}`) : $(e.deltaPTS) ? e.deltaPTS = Math.max(E, e.deltaPTS) : e.deltaPTS = E, c = Math.max(t, u), t = Math.min(t, u), i = e.startDTS !== void 0 ? Math.min(i, e.startDTS) : i, l = Math.min(s, h), s = Math.max(s, h), r = e.endDTS !== void 0 ? Math.max(r, e.endDTS) : r;
  }
  const d = t - e.start;
  e.start !== 0 && e.setStart(t), e.setDuration(s - e.start), e.startPTS = t, e.maxStartPTS = c, e.startDTS = i, e.endPTS = s, e.minEndPTS = l, e.endDTS = r;
  const g = e.sn;
  if (!a || g < a.startSN || g > a.endSN)
    return 0;
  let f;
  const p = g - a.startSN, y = a.fragments;
  for (y[p] = e, f = p; f > 0; f--)
    qs(y[f], y[f - 1]);
  for (f = p; f < y.length - 1; f++)
    qs(y[f], y[f + 1]);
  return a.fragmentHint && qs(y[y.length - 1], a.fragmentHint), a.PTSKnown = a.alignedSliding = !0, d;
}
function Pc(a, e, t) {
  if (a === e)
    return;
  let s = null;
  const i = a.fragments;
  for (let u = i.length - 1; u >= 0; u--) {
    const h = i[u].initSegment;
    if (h) {
      s = h;
      break;
    }
  }
  a.fragmentHint && delete a.fragmentHint.endPTS;
  let r;
  Oc(a, e, (u, h, d, g) => {
    if ((!e.startCC || e.skippedSegments) && h.cc !== u.cc) {
      const f = u.cc - h.cc;
      for (let p = d; p < g.length; p++)
        g[p].cc += f;
      e.endCC = g[g.length - 1].cc;
    }
    $(u.startPTS) && $(u.endPTS) && (h.setStart(h.startPTS = u.startPTS), h.startDTS = u.startDTS, h.maxStartPTS = u.maxStartPTS, h.endPTS = u.endPTS, h.endDTS = u.endDTS, h.minEndPTS = u.minEndPTS, h.setDuration(u.endPTS - u.startPTS), h.duration && (r = h), e.PTSKnown = e.alignedSliding = !0), u.hasStreams && (h.elementaryStreams = u.elementaryStreams), h.loader = u.loader, u.hasStats && (h.stats = u.stats), u.initSegment && (h.initSegment = u.initSegment, s = u.initSegment);
  });
  const n = e.fragments, o = e.fragmentHint ? n.concat(e.fragmentHint) : n;
  if (s && o.forEach((u) => {
    var h;
    u && (!u.initSegment || u.initSegment.relurl === ((h = s) == null ? void 0 : h.relurl)) && (u.initSegment = s);
  }), e.skippedSegments) {
    if (e.deltaUpdateFailed = n.some((u) => !u), e.deltaUpdateFailed) {
      t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let u = e.skippedSegments; u--; )
        n.shift();
      e.startSN = n[0].sn;
    } else {
      e.canSkipDateRanges && (e.dateRanges = kc(a.dateRanges, e, t));
      const u = a.fragments.filter((h) => h.rawProgramDateTime);
      if (a.hasProgramDateTime && !e.hasProgramDateTime)
        for (let h = 1; h < o.length; h++)
          o[h].programDateTime === null && Ti(o[h], o[h - 1], u);
      ua(u, e);
    }
    e.endCC = n[n.length - 1].cc;
  }
  if (!e.startCC) {
    var c;
    const u = ga(a, e.startSN - 1);
    e.startCC = (c = u == null ? void 0 : u.cc) != null ? c : n[0].cc;
  }
  wc(a.partList, e.partList, (u, h) => {
    h.elementaryStreams = u.elementaryStreams, h.stats = u.stats;
  }), r ? ha(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS, t) : da(a, e), n.length && (e.totalduration = e.edge - n[0].start), e.driftStartTime = a.driftStartTime, e.driftStart = a.driftStart;
  const l = e.advancedDateTime;
  if (e.advanced && l) {
    const u = e.edge;
    e.driftStart || (e.driftStartTime = l, e.driftStart = u), e.driftEndTime = l, e.driftEnd = u;
  } else
    e.driftEndTime = a.driftEndTime, e.driftEnd = a.driftEnd, e.advancedDateTime = a.advancedDateTime;
  e.requestScheduled === -1 && (e.requestScheduled = a.requestScheduled);
}
function kc(a, e, t) {
  const {
    dateRanges: s,
    recentlyRemovedDateranges: i
  } = e, r = re({}, a);
  i && i.forEach((c) => {
    delete r[c];
  });
  const o = Object.keys(r).length;
  return o ? (Object.keys(s).forEach((c) => {
    const l = r[c], u = new na(s[c].attr, l);
    u.isValid ? (r[c] = u, l || (u.tagOrder += o)) : t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${ae(s[c].attr)}"`);
  }), r) : s;
}
function wc(a, e, t) {
  if (a && e) {
    let s = 0;
    for (let i = 0, r = a.length; i <= r; i++) {
      const n = a[i], o = e[i + s];
      n && o && n.index === o.index && n.fragment.sn === o.fragment.sn ? t(n, o) : s--;
    }
  }
}
function Oc(a, e, t) {
  const s = e.skippedSegments, i = Math.max(a.startSN, e.startSN) - e.startSN, r = (a.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(a.endSN, e.endSN)) - e.startSN, n = e.startSN - a.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, c = a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments;
  for (let l = i; l <= r; l++) {
    const u = c[n + l];
    let h = o[l];
    if (s && !h && u && (h = e.fragments[l] = u), u && h) {
      t(u, h, l, o);
      const d = u.relurl, g = h.relurl;
      if (d && Fc(d, g)) {
        e.playlistParsingError = Yr(`media sequence mismatch ${h.sn}:`, a, e, u, h);
        return;
      } else if (u.cc !== h.cc) {
        e.playlistParsingError = Yr(`discontinuity sequence mismatch (${u.cc}!=${h.cc})`, a, e, u, h);
        return;
      }
    }
  }
}
function Yr(a, e, t, s, i) {
  return new Error(`${a} ${i.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`);
}
function da(a, e, t = !0) {
  const s = e.startSN + e.skippedSegments - a.startSN, i = a.fragments, r = s >= 0;
  let n = 0;
  if (r && s < i.length)
    n = i[s].start;
  else if (r && e.startSN === a.endSN + 1)
    n = a.fragmentEnd;
  else if (r && t)
    n = a.fragmentStart + s * e.levelTargetDuration;
  else if (!e.skippedSegments && e.fragmentStart === 0)
    n = a.fragmentStart;
  else
    return;
  vi(e, n);
}
function vi(a, e) {
  if (e) {
    const t = a.fragments;
    for (let s = a.skippedSegments; s < t.length; s++)
      t[s].addStart(e);
    a.fragmentHint && a.fragmentHint.addStart(e);
  }
}
function fa(a, e = 1 / 0) {
  let t = 1e3 * a.targetduration;
  if (a.updated) {
    const s = a.fragments;
    if (s.length && t * 4 > e) {
      const r = s[s.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function ga(a, e, t) {
  if (!a)
    return null;
  let s = a.fragments[e - a.startSN];
  return s || (s = a.fragmentHint, s && s.sn === e) ? s : e < a.startSN && t && t.sn === e ? t : null;
}
function Wr(a, e, t) {
  return a ? ma(a.partList, e, t) : null;
}
function ma(a, e, t) {
  if (a)
    for (let s = a.length; s--; ) {
      const i = a[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function pa(a) {
  a.forEach((e, t) => {
    var s;
    (s = e.details) == null || s.fragments.forEach((i) => {
      i.level = t, i.initSegment && (i.initSegment.level = t);
    });
  });
}
function Fc(a, e) {
  return a !== e && e ? qr(a) !== qr(e) : !1;
}
function qr(a) {
  return a.replace(/\?[^?]*$/, "");
}
function Vt(a, e) {
  for (let s = 0, i = a.length; s < i; s++) {
    var t;
    if (((t = a[s]) == null ? void 0 : t.cc) === e)
      return a[s];
  }
  return null;
}
function Mc(a, e) {
  return !!(a && e.startCC < a.endCC && e.endCC > a.startCC);
}
function jr(a, e) {
  const t = a.start + e;
  a.startPTS = t, a.setStart(t), a.endPTS = t + a.duration;
}
function ya(a, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    jr(t[s], a);
  e.fragmentHint && jr(e.fragmentHint, a), e.alignedSliding = !0;
}
function Nc(a, e) {
  a && (Ea(e, a), e.alignedSliding || ks(e, a), !e.alignedSliding && !e.skippedSegments && da(a, e, !1));
}
function Ea(a, e) {
  if (!Mc(e, a))
    return;
  const t = Math.min(e.endCC, a.endCC), s = Vt(e.fragments, t), i = Vt(a.fragments, t);
  if (!s || !i)
    return;
  ie.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const r = s.start - i.start;
  ya(r, a);
}
function ks(a, e) {
  if (!a.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = a.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let i, r;
  const n = Math.min(e.endCC, a.endCC);
  e.startCC < n && a.startCC < n && (i = Vt(s, n), r = Vt(t, n)), (!i || !r) && (i = s[Math.floor(s.length / 2)], r = Vt(t, i.cc) || t[Math.floor(t.length / 2)]);
  const o = i.programDateTime, c = r.programDateTime;
  if (!o || !c)
    return;
  const l = (c - o) / 1e3 - (r.start - i.start);
  ya(l, a);
}
function Ie(a, e, t) {
  be(a, e, t), a.addEventListener(e, t);
}
function be(a, e, t) {
  a.removeEventListener(e, t);
}
const Bc = {
  toString: function(a) {
    let e = "";
    const t = a.length;
    for (let s = 0; s < t; s++)
      e += `[${a.start(s).toFixed(3)}-${a.end(s).toFixed(3)}]`;
    return e;
  }
}, P = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class Vi extends ia {
  constructor(e, t, s, i, r) {
    super(i, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = P.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => {
      const {
        config: n,
        fragCurrent: o,
        media: c,
        mediaBuffer: l,
        state: u
      } = this, h = c ? c.currentTime : 0, d = X.bufferInfo(l || c, h, n.maxBufferHole), g = !d.len;
      if (this.log(`Media seeking to ${$(h) ? h.toFixed(3) : h}, state: ${u}, ${g ? "out of" : "in"} buffer`), this.state === P.ENDED)
        this.resetLoadingState();
      else if (o) {
        const f = n.maxFragLookUpTolerance, p = o.start - f, y = o.start + o.duration + f;
        if (g || y < d.start || p > d.end) {
          const E = h > y;
          (h < p || E) && (E && o.loader && (this.log(`Cancelling fragment load for seek (sn: ${o.sn})`), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
      }
      if (c) {
        this.fragmentTracker.removeFragmentsInRange(h, 1 / 0, this.playlistType, !0);
        const f = this.lastCurrentTime;
        if (h > f && (this.lastCurrentTime = h), !this.loadingParts) {
          const p = Math.max(d.end, h), y = this.shouldLoadParts(this.getLevelDetails(), p);
          y && (this.log(`LL-Part loading ON after seeking to ${h.toFixed(2)} with buffer @${p.toFixed(2)}`), this.loadingParts = y);
        }
      }
      this.hls.hasEnoughToStart || (this.log(`Setting ${g ? "startPosition" : "nextLoadPosition"} to ${h} for seek without enough to start`), this.nextLoadPosition = h, g && (this.startPosition = h)), g && this.state === P.IDLE && this.tickImmediate();
    }, this.onMediaEnded = () => {
      this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0;
    }, this.playlistType = r, this.hls = e, this.fragmentLoader = new dc(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new $i(e.config);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  startLoad(e) {
  }
  stopLoad() {
    if (this.state === P.STOPPED)
      return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = P.STOPPED;
  }
  get startPositionValue() {
    const {
      nextLoadPosition: e,
      startPosition: t
    } = this;
    return t === -1 && e ? e : t;
  }
  get bufferingEnabled() {
    return this.buffering;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  get inFlightFrag() {
    return {
      frag: this.fragCurrent,
      state: this.state
    };
  }
  _streamEnded(e, t) {
    if (t.live || !this.media)
      return !1;
    const s = e.end || 0, i = this.config.timelineOffset || 0;
    if (s <= i)
      return !1;
    const r = e.buffered;
    this.config.maxBufferHole && r && r.length > 1 && (e = X.bufferedInfo(r, e.start, 0));
    const n = e.nextStart;
    if (n && n > i && n < t.edge || this.media.currentTime < e.start)
      return !1;
    const c = t.partList;
    if (c != null && c.length) {
      const u = c[c.length - 1];
      return X.isBuffered(this.media, u.start + u.duration / 2);
    }
    const l = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(l);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null)
      return this.levelLastLoaded.details;
  }
  get timelineOffset() {
    const e = this.config.timelineOffset;
    if (e) {
      var t;
      return ((t = this.getLevelDetails()) == null ? void 0 : t.appliedTimelineOffset) || e;
    }
    return 0;
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    Ie(s, "seeking", this.onMediaSeeking), Ie(s, "ended", this.onMediaEnded);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === P.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (i !== null) {
      if (i.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), be(i, "seeking", this.onMediaSeeking), be(i, "ended", this.onMediaEnded), this.keyLoader && !s && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, s) {
        this.resetLoadingState(), this.resetTransmuxer();
        return;
      }
      this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1;
  }
  onError(e, t) {
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset;
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
  }
  onHandlerDestroyed() {
    this.state = P.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this.startFragRequested = !0, this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (r) => {
      const n = r.frag;
      if (this.fragContextChanged(n)) {
        this.warn(`${n.type} sn: ${n.sn}${r.part ? " part: " + r.part.index : ""} of ${this.fragInfo(n, !1, r.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(n);
        return;
      }
      n.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, i).then((r) => {
      if (!r)
        return;
      const n = this.state, o = r.frag;
      if (this.fragContextChanged(o)) {
        (n === P.FRAG_LOADING || !this.fragCurrent && n === P.PARSING) && (this.fragmentTracker.removeFragment(o), this.state = P.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(m.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === P.STOPPED || this.state === P.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === pe.APPENDING) {
      const r = e.type, n = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, n ? n.len : this.config.maxBufferLength), c = this.backtrackFragment;
      ((c ? e.sn - c.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), s.getState(e) === pe.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  waitForLive(e) {
    const t = e.details;
    return (t == null ? void 0 : t.live) && t.type !== "EVENT" && (this.levelLastLoaded !== e || t.expired);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const i = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(m.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      const i = s == null ? void 0 : s.frag;
      if (!i || this.fragContextChanged(i) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        frag: r,
        payload: n
      } = s, o = r.decryptdata;
      if (n && n.byteLength > 0 && o != null && o.key && o.iv && wt(o.method)) {
        const c = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(n), o.key.buffer, o.iv.buffer, Gi(o.method)).catch((l) => {
          throw i.trigger(m.ERROR, {
            type: Y.MEDIA_ERROR,
            details: _.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: r
          }), l;
        }).then((l) => {
          const u = self.performance.now();
          return i.trigger(m.FRAG_DECRYPTED, {
            frag: r,
            payload: l,
            stats: {
              tstart: c,
              tdecrypt: u
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === P.STOPPED || this.state === P.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state !== P.STOPPED && (this.state = P.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  unhandledEncryptionError(e, t) {
    var s, i;
    const r = e.tracks;
    if (r && !t.encrypted && ((s = r.audio) != null && s.encrypted || (i = r.video) != null && i.encrypted) && (!this.config.emeEnabled || !this.keyLoader.emeController)) {
      const n = this.media, o = new Error(`Encrypted track with no key in ${this.fragInfo(t)} (media ${n ? "attached mediaKeys: " + n.mediaKeys : "detached"})`);
      return this.warn(o.message), !n || n.mediaKeys ? !1 : (this.hls.trigger(m.ERROR, {
        type: Y.KEY_SYSTEM_ERROR,
        details: _.KEY_SYSTEM_NO_KEYS,
        fatal: !1,
        error: o,
        frag: t
      }), this.resetTransmuxer(), !0);
    }
    return !1;
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    const s = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${s ? Bc.toString(X.getBuffered(s)) : "(detached)"})`), fe(e)) {
      var i;
      if (e.type !== V.SUBTITLE) {
        const n = e.elementaryStreams;
        if (!Object.keys(n).some((o) => !!n[o])) {
          this.state = P.IDLE;
          return;
        }
      }
      const r = (i = this.levels) == null ? void 0 : i[e.level];
      r != null && r.fragmentError && (this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`), r.fragmentError = 0);
    }
    this.state = P.IDLE;
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: i,
      partsLoaded: r
    } = e, n = !r || r.length === 0 || r.some((c) => !c), o = new Ui(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
    t.flush(o);
  }
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var r;
    this.fragCurrent = e;
    const n = t.details;
    if (!this.levels || !n)
      throw new Error(`frag load aborted, missing level${n ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((r = e.decryptdata) != null && r.key)) {
      if (this.log(`Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = P.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
        if (!this.fragContextChanged(d.frag))
          return this.hls.trigger(m.KEY_LOADED, d), this.state === P.KEY_LOADING && (this.state = P.IDLE), d;
      }), this.hls.trigger(m.KEY_LOADING, {
        frag: e
      }), this.fragCurrent === null)
        return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
    } else e.encrypted || (o = this.keyLoader.loadClear(e, n.encryptedFragments, this.startFragRequested), o && this.log("[eme] blocking frag load until media-keys acquired"));
    const c = this.fragPrevious;
    if (fe(e) && (!c || e.sn !== c.sn)) {
      const d = this.shouldLoadParts(t.details, e.end);
      d !== this.loadingParts && (this.log(`LL-Part loading ${d ? "ON" : "OFF"} loading sn ${c == null ? void 0 : c.sn}->${e.sn}`), this.loadingParts = d);
    }
    if (s = Math.max(e.start, s || 0), this.loadingParts && fe(e)) {
      const d = n.partList;
      if (d && i) {
        s > n.fragmentEnd && n.fragmentHint && (e = n.fragmentHint);
        const g = this.getNextPart(d, e, s);
        if (g > -1) {
          const f = d[g];
          e = this.fragCurrent = f.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${f.index} (${g}/${d.length - 1}) of ${this.fragInfo(e, !1, f)}) cc: ${e.cc} [${n.startSN}-${n.endSN}], target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = f.start + f.duration, this.state = P.FRAG_LOADING;
          let p;
          return o ? p = o.then((y) => !y || this.fragContextChanged(y.frag) ? null : this.doFragPartsLoad(e, f, t, i)).catch((y) => this.handleFragLoadError(y)) : p = this.doFragPartsLoad(e, f, t, i).catch((y) => this.handleFragLoadError(y)), this.hls.trigger(m.FRAG_LOADING, {
            frag: e,
            part: f,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : p;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    if (fe(e) && this.loadingParts) {
      var l;
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${(l = n.partList) == null ? void 0 : l.filter((d) => d.loaded).map((d) => `[${d.start}-${d.end}]`)}`), this.loadingParts = !1;
    } else if (!e.url)
      return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + n.startSN + "-" + n.endSN + "]"}, target: ${parseFloat(s.toFixed(3))}`), $(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = P.FRAG_LOADING;
    const u = this.config.progressive && e.type !== V.SUBTITLE;
    let h;
    return u && o ? h = o.then((d) => !d || this.fragContextChanged(d.frag) ? null : this.fragmentLoader.load(e, i)).catch((d) => this.handleFragLoadError(d)) : h = Promise.all([this.fragmentLoader.load(e, u ? i : void 0), o]).then(([d]) => (!u && i && i(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(m.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((r, n) => {
      var o;
      const c = [], l = (o = s.details) == null ? void 0 : o.partList, u = (h) => {
        this.fragmentLoader.loadPart(e, h, i).then((d) => {
          c[h.index] = d;
          const g = d.part;
          this.hls.trigger(m.FRAG_LOADED, d);
          const f = Wr(s.details, e.sn, h.index + 1) || ma(l, e.sn, h.index + 1);
          if (f)
            u(f);
          else
            return r({
              frag: e,
              part: g,
              partsLoaded: c
            });
        }).catch(n);
      };
      u(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      t.frag && t.details === _.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : t.frag && t.type === Y.KEY_SYSTEM_ERROR ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag)) : this.hls.trigger(m.ERROR, t);
    } else
      this.hls.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== P.PARSING) {
      !this.fragCurrent && this.state !== P.STOPPED && this.state !== P.ERROR && (this.state = P.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: r
    } = t, n = self.performance.now();
    s.stats.parsing.end = n, i && (i.stats.parsing.end = n);
    const o = this.getLevelDetails(), l = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end);
    l !== this.loadingParts && (this.log(`LL-Part loading ${l ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = l), this.updateLevelTiming(s, i, r, e.partial);
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e)
        return this.loadingParts;
      if (e.partList) {
        var s;
        const r = e.partList[0];
        if (r.fragment.type === V.SUBTITLE)
          return !1;
        const n = r.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
        if (t >= n) {
          var i;
          if ((this.hls.hasEnoughToStart ? ((i = this.media) == null ? void 0 : i.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > r.start - r.fragment.duration)
            return !0;
        }
      }
    }
    return !1;
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: i,
      sn: r,
      part: n
    } = e;
    if (!(t != null && t[i]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], c = o.details, l = n > -1 ? Wr(c, r, n) : null, u = l ? l.fragment : ga(c, r, s);
    return u ? (s && s !== u && (u.stats = s.stats), {
      frag: u,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, r) {
    if (this.state !== P.PARSING)
      return;
    const {
      data1: n,
      data2: o
    } = e;
    let c = n;
    if (o && (c = Ne(n, o)), !c.length)
      return;
    const l = this.initPTS[t.cc], u = l ? -l.baseTime / l.timescale : void 0, h = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      offset: u,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(m.BUFFER_APPENDING, h), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!X.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = X.bufferInfo(t, s, 0), r = e.duration, n = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - n, i.end - n), s + n);
    e.start - o > n && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    var s;
    const i = this.getLoadPosition();
    if (!$(i))
      return null;
    const n = this.lastCurrentTime > i || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, i, t, n);
  }
  getFwdBufferInfoAtPos(e, t, s, i) {
    const r = X.bufferInfo(e, t, i);
    if (r.len === 0 && r.nextStart !== void 0) {
      const n = this.fragmentTracker.getBufferedFrag(t, s);
      if (n && (r.nextStart <= n.end || n.gap)) {
        const o = Math.max(Math.min(r.nextStart, n.end) - t, i);
        return X.bufferInfo(e, t, o);
      }
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, i = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, i);
    return r >= i ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = V.MAIN) {
    const s = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: r
    } = this, n = s[0].start, o = r.lowLatencyMode && !!t.partList;
    let c = null;
    if (t.live) {
      const h = r.initialLiveManifestSize;
      if (i < h)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${h})`), null;
      if (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < n) {
        var l;
        o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), c = this.getInitialLiveFragment(t);
        const d = this.hls.startPosition, g = this.hls.liveSyncPosition, f = c ? (d !== -1 && d >= n ? d : g) || c.start : e;
        this.log(`Setting startPosition to ${f} to match start frag at live edge. mainStart: ${d} liveSyncPosition: ${g} frag.start: ${(l = c) == null ? void 0 : l.start}`), this.startPosition = this.nextLoadPosition = f;
      }
    } else e <= n && (c = s[0]);
    if (!c) {
      const h = this.loadingParts ? t.partEnd : t.fragmentEnd;
      c = this.getFragmentAtPosition(e, h, t);
    }
    let u = this.filterReplacedPrimary(c, t);
    if (!u && c) {
      const h = c.sn - t.startSN;
      u = this.filterReplacedPrimary(s[h + 1] || null, t);
    }
    return this.mapToInitFragWhenRequired(u);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === pe.OK || s === pe.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, r) {
    let n = null;
    if (e.gap && (n = this.getNextFragment(this.nextLoadPosition, t), n && !n.gap && s.nextStart)) {
      const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i, 0);
      if (o !== null && s.len + o.len >= r) {
        const c = n.sn;
        return this.loopSn !== c && (this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${c}`), this.loopSn = c), null;
      }
    }
    return this.loopSn = void 0, n;
  }
  get primaryPrefetch() {
    if (Xr(this.config)) {
      var e;
      if ((e = this.hls.interstitialsManager) == null || (e = e.playingItem) == null ? void 0 : e.event)
        return !0;
    }
    return !1;
  }
  filterReplacedPrimary(e, t) {
    if (!e)
      return e;
    if (Xr(this.config) && e.type !== V.SUBTITLE) {
      const s = this.hls.interstitialsManager, i = s == null ? void 0 : s.bufferingItem;
      if (i) {
        const n = i.event;
        if (n) {
          if (n.appendInPlace || Math.abs(e.start - i.start) > 1 || i.start === 0)
            return null;
        } else if (e.end <= i.start && (t == null ? void 0 : t.live) === !1 || e.start > i.end && i.nextEvent && (i.nextEvent.appendInPlace || e.start - i.end > 1))
          return null;
      }
      const r = s == null ? void 0 : s.playerQueue;
      if (r)
        for (let n = r.length; n--; ) {
          const o = r[n].interstitial;
          if (o.appendInPlace && e.start >= o.startTime && e.end <= o.resumeTime)
            return null;
        }
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !e.initSegment.data && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, r = !1, n = !0;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      if (n = n && !l.independent, i > -1 && s < l.start)
        break;
      const u = l.loaded;
      u ? i = -1 : (r || (l.independent || n) && l.fragment === t) && (l.fragment !== t && this.warn(`Need buffer at ${s} but next unloaded part starts at ${l.start}`), i = o), r = u;
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    let s;
    for (let i = e.length; i--; ) {
      if (s = e[i], !s.loaded)
        return !1;
      if (t > s.start)
        return !0;
    }
    return !1;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e) {
    const t = e.fragments, s = this.fragPrevious;
    let i = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = ec(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const n = t[r - e.startSN];
          s.cc === n.cc && (i = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = ea(e, s.cc, s.end), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (i = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return i;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: i
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: n,
      endSN: o
    } = s;
    const {
      fragmentHint: c
    } = s, {
      maxFragLookUpTolerance: l
    } = i, u = s.partList, h = !!(this.loadingParts && u != null && u.length && c);
    h && !this.bitrateTest && u[u.length - 1].fragment.sn === c.sn && (n = n.concat(c), o = c.sn);
    let d;
    if (e < t) {
      var g;
      const p = e < this.lastCurrentTime || e > t - l || (g = this.media) != null && g.paused || !this.startFragRequested ? 0 : l;
      d = xt(r, n, e, p);
    } else
      d = n[n.length - 1];
    if (d) {
      const f = d.sn - s.startSN, p = this.fragmentTracker.getState(d);
      if ((p === pe.OK || p === pe.PARTIAL && d.gap) && (r = d), r && d.sn === r.sn && (!h || u[0].fragment.sn > d.sn || !s.live) && d.level === r.level) {
        const E = n[f + 1];
        d.sn < o && this.fragmentTracker.getState(E) !== pe.OK ? d = E : d = null;
      }
    }
    return d;
  }
  alignPlaylists(e, t, s) {
    const i = e.fragments.length;
    if (!i)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragmentStart, n = !t, o = e.alignedSliding && $(r);
    if (n || !o && !r) {
      Nc(s, e);
      const c = e.fragmentStart;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${i}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    s < t && (s = -1);
    const i = this.timelineOffset;
    if (s === -1) {
      const r = this.startTimeOffset !== null, n = r ? this.startTimeOffset : e.startTimeOffset;
      n !== null && $(n) ? (s = t + n, n < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${n} found in ${r ? "multivariant" : "media"} playlist`), this.startPosition = s) : e.live ? (s = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${s}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = s = 0), this.lastCurrentTime = s + i;
    }
    this.nextLoadPosition = s + i;
  }
  getLoadPosition() {
    var e;
    const {
      media: t
    } = this;
    let s = 0;
    return (e = this.hls) != null && e.hasEnoughToStart && t ? s = t.currentTime : this.nextLoadPosition >= 0 && (s = this.nextLoadPosition), s;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.type === this.playlistType && fe(e) && e.stats.aborted && (this.log(`Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== P.FRAG_LOADING_WAITING_RETRY) && (this.state = P.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    var s;
    if (t.chunkMeta && !t.frag) {
      const E = this.getCurrentContext(t.chunkMeta);
      E && (t.frag = E.frag);
    }
    const i = t.frag;
    if (!i || i.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(i)) {
      var r;
      this.warn(`Frag load error must match current frag to retry ${i.url} > ${(r = this.fragCurrent) == null ? void 0 : r.url}`);
      return;
    }
    const n = t.details === _.FRAG_GAP;
    n && this.fragmentTracker.fragBuffered(i, !0);
    const o = t.errorAction;
    if (!o) {
      this.state = P.ERROR;
      return;
    }
    const {
      action: c,
      flags: l,
      retryCount: u = 0,
      retryConfig: h
    } = o, d = !!h, g = d && c === Te.RetryRequest, f = d && !o.resolved && l === De.MoveAllAlternatesMatchingHost, p = (s = this.hls.latestLevelDetails) == null ? void 0 : s.live;
    if (!g && f && fe(i) && !i.endList && p && !sa(t))
      this.resetFragmentErrors(e), this.treatAsGap(i), o.resolved = !0;
    else if ((g || f) && u < h.maxNumRetry) {
      var y;
      const E = pi((y = t.response) == null ? void 0 : y.code), T = Bi(h, u);
      if (this.resetStartWhenNotLoaded(), this.retryDate = self.performance.now() + T, this.state = P.FRAG_LOADING_WAITING_RETRY, o.resolved = !0, E) {
        this.log("Waiting for connection (offline)"), this.retryDate = 1 / 0, t.reason = "offline";
        return;
      }
      this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${u + 1}/${h.maxNumRetry} in ${T}ms`);
    } else if (h)
      if (this.resetFragmentErrors(e), u < h.maxNumRetry)
        !n && c !== Te.RemoveAlternatePermanently && (o.resolved = !0);
      else {
        this.warn(`${t.details} reached or exceeded max retry (${u})`);
        return;
      }
    else c === Te.SendAlternateToPenaltyBox ? this.state = P.WAITING_LEVEL : this.state = P.ERROR;
    this.tickImmediate();
  }
  checkRetryDate() {
    const e = self.performance.now(), t = this.retryDate, s = t === 1 / 0;
    (!t || e >= t || s && !pi(0)) && (s && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state = P.IDLE);
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === P.PARSING || this.state === P.PARSED) {
      const t = e.frag, s = e.parent, i = this.getFwdBufferInfo(this.mediaBuffer, s), r = i && i.len > 0.5;
      r && this.reduceMaxBufferLength(i.len, (t == null ? void 0 : t.duration) || 10);
      const n = !r;
      return n && this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), n;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === V.AUDIO && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.state !== P.STOPPED && (this.state = P.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = X.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === P.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== P.STOPPED && (this.state = P.IDLE);
  }
  resetStartWhenNotLoaded() {
    if (!this.hls.hasEnoughToStart) {
      this.startFragRequested = !1;
      const e = this.levelLastLoaded, t = e ? e.details : null;
      t != null && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.log(`Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${e.level === -1 ? "<removed>" : e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    const r = s.details;
    if (!r) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((c, l) => {
      const u = e.elementaryStreams[l];
      if (u) {
        const h = u.endPTS - u.startPTS;
        if (h <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${l} duration reliably (${h})`), c || !1;
        const d = i ? 0 : ha(r, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS, this);
        return this.hls.trigger(m.LEVEL_PTS_UPDATED, {
          details: r,
          level: s,
          drift: d,
          type: l,
          frag: e,
          start: u.startPTS,
          end: u.endPTS
        }), !0;
      }
      return c;
    }, !1)) {
      var o;
      const c = ((o = this.transmuxer) == null ? void 0 : o.error) === null;
      if ((s.fragmentError === 0 || c && (s.fragmentError < 2 || e.endList)) && this.treatAsGap(e, s), c) {
        const l = new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if (this.warn(l.message), this.hls.trigger(m.ERROR, {
          type: Y.MEDIA_ERROR,
          details: _.FRAG_PARSING_ERROR,
          fatal: !1,
          error: l,
          frag: e,
          reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"`
        }), !this.hls)
          return;
        this.resetTransmuxer();
      }
    }
    this.state = P.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`), this.hls.trigger(m.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  playlistLabel() {
    return this.playlistType === V.MAIN ? "level" : "track";
  }
  fragInfo(e, t = !0, s) {
    var i, r;
    return `${this.playlistLabel()} ${e.level} (${s ? "part" : "frag"}:[${((i = t && !s ? e.startPTS : (s || e).start) != null ? i : NaN).toFixed(3)}-${((r = t && !s ? e.endPTS : (s || e).end) != null ? r : NaN).toFixed(3)}]${s && e.type === "main" ? "INDEPENDENT=" + (s.independent ? "YES" : "NO") : ""}`;
  }
  treatAsGap(e, t) {
    t && t.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0);
  }
  resetTransmuxer() {
    var e;
    (e = this.transmuxer) == null || e.reset();
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function Xr(a) {
  return !!a.interstitialsController && a.enableInterstitialPlayback !== !1;
}
class Ta {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = $c(e, t);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function $c(a, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const r = a[i];
    t.set(r, s), s += r.length;
  }
  return t;
}
var js = { exports: {} }, zr;
function Uc() {
  return zr || (zr = 1, (function(a) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function s() {
    }
    Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
    function i(c, l, u) {
      this.fn = c, this.context = l, this.once = u || !1;
    }
    function r(c, l, u, h, d) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var g = new i(u, h || c, d), f = t ? t + l : l;
      return c._events[f] ? c._events[f].fn ? c._events[f] = [c._events[f], g] : c._events[f].push(g) : (c._events[f] = g, c._eventsCount++), c;
    }
    function n(c, l) {
      --c._eventsCount === 0 ? c._events = new s() : delete c._events[l];
    }
    function o() {
      this._events = new s(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var l = [], u, h;
      if (this._eventsCount === 0) return l;
      for (h in u = this._events)
        e.call(u, h) && l.push(t ? h.slice(1) : h);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
    }, o.prototype.listeners = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      if (!h) return [];
      if (h.fn) return [h.fn];
      for (var d = 0, g = h.length, f = new Array(g); d < g; d++)
        f[d] = h[d].fn;
      return f;
    }, o.prototype.listenerCount = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      return h ? h.fn ? 1 : h.length : 0;
    }, o.prototype.emit = function(l, u, h, d, g, f) {
      var p = t ? t + l : l;
      if (!this._events[p]) return !1;
      var y = this._events[p], E = arguments.length, T, v;
      if (y.fn) {
        switch (y.once && this.removeListener(l, y.fn, void 0, !0), E) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, u), !0;
          case 3:
            return y.fn.call(y.context, u, h), !0;
          case 4:
            return y.fn.call(y.context, u, h, d), !0;
          case 5:
            return y.fn.call(y.context, u, h, d, g), !0;
          case 6:
            return y.fn.call(y.context, u, h, d, g, f), !0;
        }
        for (v = 1, T = new Array(E - 1); v < E; v++)
          T[v - 1] = arguments[v];
        y.fn.apply(y.context, T);
      } else {
        var S = y.length, x;
        for (v = 0; v < S; v++)
          switch (y[v].once && this.removeListener(l, y[v].fn, void 0, !0), E) {
            case 1:
              y[v].fn.call(y[v].context);
              break;
            case 2:
              y[v].fn.call(y[v].context, u);
              break;
            case 3:
              y[v].fn.call(y[v].context, u, h);
              break;
            case 4:
              y[v].fn.call(y[v].context, u, h, d);
              break;
            default:
              if (!T) for (x = 1, T = new Array(E - 1); x < E; x++)
                T[x - 1] = arguments[x];
              y[v].fn.apply(y[v].context, T);
          }
      }
      return !0;
    }, o.prototype.on = function(l, u, h) {
      return r(this, l, u, h, !1);
    }, o.prototype.once = function(l, u, h) {
      return r(this, l, u, h, !0);
    }, o.prototype.removeListener = function(l, u, h, d) {
      var g = t ? t + l : l;
      if (!this._events[g]) return this;
      if (!u)
        return n(this, g), this;
      var f = this._events[g];
      if (f.fn)
        f.fn === u && (!d || f.once) && (!h || f.context === h) && n(this, g);
      else {
        for (var p = 0, y = [], E = f.length; p < E; p++)
          (f[p].fn !== u || d && !f[p].once || h && f[p].context !== h) && y.push(f[p]);
        y.length ? this._events[g] = y.length === 1 ? y[0] : y : n(this, g);
      }
      return this;
    }, o.prototype.removeAllListeners = function(l) {
      var u;
      return l ? (u = t ? t + l : l, this._events[u] && n(this, u)) : (this._events = new s(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, a.exports = o;
  })(js)), js.exports;
}
var Gc = Uc(), Hi = /* @__PURE__ */ dl(Gc);
const Xt = "1.6.15", Nt = {};
function Kc() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Vc() {
  const a = Nt[Xt];
  if (a)
    return a.clientCount++, a;
  const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(e), i = {
    worker: new self.Worker(t),
    objectURL: t,
    clientCount: 1
  };
  return Nt[Xt] = i, i;
}
function Hc(a) {
  const e = Nt[a];
  if (e)
    return e.clientCount++, e;
  const t = new self.URL(a, self.location.href).href, i = {
    worker: new self.Worker(t),
    scriptURL: t,
    clientCount: 1
  };
  return Nt[a] = i, i;
}
function Yc(a) {
  const e = Nt[a || Xt];
  if (e && e.clientCount-- === 1) {
    const {
      worker: s,
      objectURL: i
    } = e;
    delete Nt[a || Xt], i && self.URL.revokeObjectURL(i), s.terminate();
  }
}
function va(a, e) {
  return e + 10 <= a.length && a[e] === 51 && a[e + 1] === 68 && a[e + 2] === 73 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128;
}
function Yi(a, e) {
  return e + 10 <= a.length && a[e] === 73 && a[e + 1] === 68 && a[e + 2] === 51 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128;
}
function Ms(a, e) {
  let t = 0;
  return t = (a[e] & 127) << 21, t |= (a[e + 1] & 127) << 14, t |= (a[e + 2] & 127) << 7, t |= a[e + 3] & 127, t;
}
function zt(a, e) {
  const t = e;
  let s = 0;
  for (; Yi(a, e); ) {
    s += 10;
    const i = Ms(a, e + 6);
    s += i, va(a, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return a.subarray(t, t + s);
}
function Wc(a, e, t, s) {
  const i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], r = e[t + 2], n = r >> 2 & 15;
  if (n > 12) {
    const g = new Error(`invalid ADTS sampling index:${n}`);
    a.emit(m.ERROR, m.ERROR, {
      type: Y.MEDIA_ERROR,
      details: _.FRAG_PARSING_ERROR,
      fatal: !0,
      error: g,
      reason: g.message
    });
    return;
  }
  const o = (r >> 6 & 3) + 1, c = e[t + 3] >> 6 & 3 | (r & 1) << 2, l = "mp4a.40." + o, u = i[n];
  let h = n;
  (o === 5 || o === 29) && (h -= 3);
  const d = [o << 3 | (h & 14) >> 1, (h & 1) << 7 | c << 3];
  return ie.log(`manifest codec:${s}, parsed codec:${l}, channels:${c}, rate:${u} (ADTS object type:${o} sampling index:${n})`), {
    config: d,
    samplerate: u,
    channelCount: c,
    codec: l,
    parsedCodec: l,
    manifestCodec: s
  };
}
function Sa(a, e) {
  return a[e] === 255 && (a[e + 1] & 246) === 240;
}
function xa(a, e) {
  return a[e + 1] & 1 ? 7 : 9;
}
function Wi(a, e) {
  return (a[e + 3] & 3) << 11 | a[e + 4] << 3 | (a[e + 5] & 224) >>> 5;
}
function qc(a, e) {
  return e + 5 < a.length;
}
function ws(a, e) {
  return e + 1 < a.length && Sa(a, e);
}
function jc(a, e) {
  return qc(a, e) && Sa(a, e) && Wi(a, e) <= a.length - e;
}
function Xc(a, e) {
  if (ws(a, e)) {
    const t = xa(a, e);
    if (e + t >= a.length)
      return !1;
    const s = Wi(a, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === a.length || ws(a, i);
  }
  return !1;
}
function Aa(a, e, t, s, i) {
  if (!a.samplerate) {
    const r = Wc(e, t, s, i);
    if (!r)
      return;
    re(a, r);
  }
}
function La(a) {
  return 1024 * 9e4 / a;
}
function zc(a, e) {
  const t = xa(a, e);
  if (e + t <= a.length) {
    const s = Wi(a, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function Ia(a, e, t, s, i) {
  const r = La(a.samplerate), n = s + i * r, o = zc(e, t);
  let c;
  if (o) {
    const {
      frameLength: h,
      headerLength: d
    } = o, g = d + h, f = Math.max(0, t + g - e.length);
    f ? (c = new Uint8Array(g - d), c.set(e.subarray(t + d, e.length), 0)) : c = e.subarray(t + d, t + g);
    const p = {
      unit: c,
      pts: n
    };
    return f || a.samples.push(p), {
      sample: p,
      length: g,
      missing: f
    };
  }
  const l = e.length - t;
  return c = new Uint8Array(l), c.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: c,
      pts: n
    },
    length: l,
    missing: -1
  };
}
function Qc(a, e) {
  return Yi(a, e) && Ms(a, e + 6) + 10 <= a.length - e;
}
function Zc(a) {
  return a instanceof ArrayBuffer ? a : a.byteOffset == 0 && a.byteLength == a.buffer.byteLength ? a.buffer : new Uint8Array(a).buffer;
}
function Xs(a, e = 0, t = 1 / 0) {
  return Jc(a, e, t, Uint8Array);
}
function Jc(a, e, t, s) {
  const i = eu(a);
  let r = 1;
  "BYTES_PER_ELEMENT" in s && (r = s.BYTES_PER_ELEMENT);
  const n = tu(a) ? a.byteOffset : 0, o = (n + a.byteLength) / r, c = (n + e) / r, l = Math.floor(Math.max(0, Math.min(c, o))), u = Math.floor(Math.min(l + Math.max(t, 0), o));
  return new s(i, l, u - l);
}
function eu(a) {
  return a instanceof ArrayBuffer ? a : a.buffer;
}
function tu(a) {
  return a && a.buffer instanceof ArrayBuffer && a.byteLength !== void 0 && a.byteOffset !== void 0;
}
function su(a) {
  const e = {
    key: a.type,
    description: "",
    data: "",
    mimeType: null,
    pictureType: null
  }, t = 3;
  if (a.size < 2)
    return;
  if (a.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
  }
  const s = a.data.subarray(1).indexOf(0);
  if (s === -1)
    return;
  const i = we(Xs(a.data, 1, s)), r = a.data[2 + s], n = a.data.subarray(3 + s).indexOf(0);
  if (n === -1)
    return;
  const o = we(Xs(a.data, 3 + s, n));
  let c;
  return i === "-->" ? c = we(Xs(a.data, 4 + s + n)) : c = Zc(a.data.subarray(4 + s + n)), e.mimeType = i, e.pictureType = r, e.description = o, e.data = c, e;
}
function iu(a) {
  if (a.size < 2)
    return;
  const e = we(a.data, !0), t = new Uint8Array(a.data.subarray(e.length + 1));
  return {
    key: a.type,
    info: e,
    data: t.buffer
  };
}
function ru(a) {
  if (a.size < 2)
    return;
  if (a.type === "TXXX") {
    let t = 1;
    const s = we(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = we(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = we(a.data.subarray(1));
  return {
    key: a.type,
    info: "",
    data: e
  };
}
function nu(a) {
  if (a.type === "WXXX") {
    if (a.size < 2)
      return;
    let t = 1;
    const s = we(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = we(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = we(a.data);
  return {
    key: a.type,
    info: "",
    data: e
  };
}
function au(a) {
  return a.type === "PRIV" ? iu(a) : a.type[0] === "W" ? nu(a) : a.type === "APIC" ? su(a) : ru(a);
}
function ou(a) {
  const e = String.fromCharCode(a[0], a[1], a[2], a[3]), t = Ms(a, 4), s = 10;
  return {
    type: e,
    size: t,
    data: a.subarray(s, s + t)
  };
}
const rs = 10, lu = 10;
function Ra(a) {
  let e = 0;
  const t = [];
  for (; Yi(a, e); ) {
    const s = Ms(a, e + 6);
    a[e + 5] >> 6 & 1 && (e += rs), e += rs;
    const i = e + s;
    for (; e + lu < i; ) {
      const r = ou(a.subarray(e)), n = au(r);
      n && t.push(n), e += r.size + rs;
    }
    va(a, e) && (e += rs);
  }
  return t;
}
function ba(a) {
  return a && a.key === "PRIV" && a.info === "com.apple.streaming.transportStreamTimestamp";
}
function cu(a) {
  if (a.data.byteLength === 8) {
    const e = new Uint8Array(a.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}
function qi(a) {
  const e = Ra(a);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (ba(s))
      return cu(s);
  }
}
let Pe = /* @__PURE__ */ (function(a) {
  return a.audioId3 = "org.id3", a.dateRange = "com.apple.quicktime.HLS", a.emsg = "https://aomedia.org/emsg/ID3", a.misbklv = "urn:misb:KLV:bin:1910.1", a;
})({});
function je(a = "", e = 9e4) {
  return {
    type: a,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class ji {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = Ne(this.cachedData, e), this.cachedData = null);
    let s = zt(e, 0), i = s ? s.length : 0, r;
    const n = this._audioTrack, o = this._id3Track, c = s ? qi(s) : void 0, l = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && $(c)) && (this.basePTS = uu(c, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Pe.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < l; ) {
      if (this.canParse(e, i)) {
        const u = this.appendFrame(n, e, i);
        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, i += u.length, r = i) : i = l;
      } else Qc(e, i) ? (s = zt(e, i), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: Pe.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), i += s.length, r = i) : i++;
      if (i === l && r !== l) {
        const u = e.slice(r);
        this.cachedData ? this.cachedData = Ne(this.cachedData, u) : this.cachedData = u;
      }
    }
    return {
      audioTrack: n,
      videoTrack: je(),
      id3Track: o,
      textTrack: je()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: je(),
      id3Track: this._id3Track,
      textTrack: je()
    };
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = void 0;
  }
}
const uu = (a, e, t) => {
  if ($(a))
    return a * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
let ns = null;
const hu = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], du = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], fu = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], gu = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function _a(a, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const r = Da(e, t);
  if (r && t + r.frameLength <= e.length) {
    const n = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + i * n, c = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return a.config = [], a.channelCount = r.channelCount, a.samplerate = r.sampleRate, a.samples.push(c), {
      sample: c,
      length: r.frameLength,
      missing: 0
    };
  }
}
function Da(a, e) {
  const t = a[e + 1] >> 3 & 3, s = a[e + 1] >> 1 & 3, i = a[e + 2] >> 4 & 15, r = a[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && r !== 3) {
    const n = a[e + 2] >> 1 & 1, o = a[e + 3] >> 6, c = t === 3 ? 3 - s : s === 3 ? 3 : 4, l = hu[c * 14 + i - 1] * 1e3, h = du[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], d = o === 3 ? 1 : 2, g = fu[t][s], f = gu[s], p = g * 8 * f, y = Math.floor(g * l / h + n) * f;
    if (ns === null) {
      const v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      ns = v ? parseInt(v[1]) : 0;
    }
    return !!ns && ns <= 87 && s === 2 && l >= 224e3 && o === 0 && (a[e + 3] = a[e + 3] | 128), {
      sampleRate: h,
      channelCount: d,
      frameLength: y,
      samplesPerFrame: p
    };
  }
}
function Xi(a, e) {
  return a[e] === 255 && (a[e + 1] & 224) === 224 && (a[e + 1] & 6) !== 0;
}
function Ca(a, e) {
  return e + 1 < a.length && Xi(a, e);
}
function mu(a, e) {
  return Xi(a, e) && 4 <= a.length - e;
}
function Pa(a, e) {
  if (e + 1 < a.length && Xi(a, e)) {
    const s = Da(a, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const r = e + i;
    return r === a.length || Ca(a, r);
  }
  return !1;
}
class pu extends ji {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e, t) {
    if (!e)
      return !1;
    const s = zt(e, 0);
    let i = (s == null ? void 0 : s.length) || 0;
    if (Pa(e, i))
      return !1;
    for (let r = e.length; i < r; i++)
      if (Xc(e, i))
        return t.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return jc(e, t);
  }
  appendFrame(e, t, s) {
    Aa(e, this.observer, t, s, e.manifestCodec);
    const i = Ia(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const ka = (a, e) => {
  let t = 0, s = 5;
  e += s;
  const i = new Uint32Array(1), r = new Uint32Array(1), n = new Uint8Array(1);
  for (; s > 0; ) {
    n[0] = a[e];
    const o = Math.min(s, 8), c = 8 - o;
    r[0] = 4278190080 >>> 24 + c << c, i[0] = (n[0] & r[0]) >> c, t = t ? t << o | i[0] : i[0], e += 1, s -= o;
  }
  return t;
};
class yu extends ji {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const i = wa(e, t, s, this.basePTS, this.frameIndex);
    if (i !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: i,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = zt(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && qi(t) !== void 0 && // check the bsid to confirm ac-3
    ka(e, s) < 16;
  }
}
function wa(a, e, t, s, i) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], c = e[t + 4] & 63, u = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][c * 3 + r] * 2;
  if (t + u > e.length)
    return -1;
  const h = e[t + 6] >> 5;
  let d = 0;
  h === 2 ? d += 2 : (h & 1 && h !== 1 && (d += 2), h & 4 && (d += 2));
  const g = (e[t + 6] << 8 | e[t + 7]) >> 12 - d & 1, p = [2, 1, 2, 3, 3, 4, 4, 5][h] + g, y = e[t + 5] >> 3, E = e[t + 5] & 7, T = new Uint8Array([r << 6 | y << 1 | E >> 2, (E & 3) << 6 | h << 3 | g << 2 | c >> 4, c << 4 & 224]), v = 1536 / o * 9e4, S = s + i * v, x = e.subarray(t, t + u);
  return a.config = T, a.channelCount = p, a.samplerate = o, a.samples.push({
    unit: x,
    pts: S
  }), u;
}
class Eu extends ji {
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = zt(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && qi(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    ka(e, s) <= 16)
      return !1;
    for (let i = e.length; s < i; s++)
      if (Pa(e, s))
        return ie.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return mu(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return _a(e, t, s, this.basePTS, this.frameIndex);
  }
}
const Tu = /\/emsg[-/]ID3/i;
class vu {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const r = this.videoTrack = je("video", 1), n = this.audioTrack = je("audio", 1), o = this.txtTrack = je("text", 1);
    if (this.id3Track = je("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const c = Vn(e);
    if (c.video) {
      const {
        id: l,
        timescale: u,
        codec: h,
        supplemental: d
      } = c.video;
      r.id = l, r.timescale = o.timescale = u, r.codec = h, r.supplemental = d;
    }
    if (c.audio) {
      const {
        id: l,
        timescale: u,
        codec: h
      } = c.audio;
      n.id = l, n.timescale = u, n.codec = h;
    }
    o.id = Un.text, r.sampleDuration = 0, r.duration = n.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return yl(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = Ne(this.remainderData, e));
      const o = Ll(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const n = this.extractID3Track(i, t);
    return r.samples = gr(t, i), {
      videoTrack: i,
      audioTrack: this.audioTrack,
      id3Track: n,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const i = this.extractID3Track(t, this.timeOffset);
    return s.samples = gr(e, t), {
      videoTrack: t,
      audioTrack: je(),
      id3Track: i,
      textTrack: je()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = Q(e.samples, ["emsg"]);
      i && i.forEach((r) => {
        const n = Rl(r);
        if (Tu.test(n.schemeIdUri)) {
          const o = Qr(n, t);
          let c = n.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : n.eventDuration / n.timeScale;
          c <= 1e-3 && (c = Number.POSITIVE_INFINITY);
          const l = n.payload;
          s.samples.push({
            data: l,
            len: l.byteLength,
            dts: o,
            pts: o,
            type: Pe.emsg,
            duration: c
          });
        } else if (this.config.enableEmsgKLVMetadata && n.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
          const o = Qr(n, t);
          s.samples.push({
            data: n.payload,
            len: n.payload.byteLength,
            dts: o,
            pts: o,
            type: Pe.misbklv,
            duration: Number.POSITIVE_INFINITY
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
    this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
  }
}
function Qr(a, e) {
  return $(a.presentationTime) ? a.presentationTime / a.timeScale : e + a.presentationTimeDelta / a.timeScale;
}
class Su {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new $i(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, dt.cbc);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const r = i.subarray(16, i.length - i.length % 16), n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(n).then((o) => {
      const c = new Uint8Array(o);
      i.set(c, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    }).catch(s);
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      s.set(e.subarray(r, r + 16), i);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      e.set(s.subarray(i, i + 16), r);
    return e;
  }
  decryptAvcSample(e, t, s, i, r) {
    const n = Wn(r.data), o = this.getAvcEncryptedData(n);
    this.decryptBuffer(o.buffer).then((c) => {
      r.data = this.getAvcDecryptedUnit(n, c), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
    }).catch(i);
  }
  decryptAvcSamples(e, t, s, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const r = e[t].units;
      for (; !(s >= r.length); s++) {
        const n = r[s];
        if (!(n.data.length <= 48 || n.type !== 1 && n.type !== 5) && (this.decryptAvcSample(e, t, s, i, n), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
class Oa {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      i = r[r.length - 1];
    }
    return i;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, i = s.length;
        if (i) {
          const r = s[i - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
  }
  parseNALu(e, t, s) {
    const i = t.byteLength;
    let r = e.naluState || 0;
    const n = r, o = [];
    let c = 0, l, u, h, d = -1, g = 0;
    for (r === -1 && (d = 0, g = this.getNALuType(t, 0), r = 0, c = 1); c < i; ) {
      if (l = t[c++], !r) {
        r = l ? 0 : 1;
        continue;
      }
      if (r === 1) {
        r = l ? 0 : 2;
        continue;
      }
      if (!l)
        r = 3;
      else if (l === 1) {
        if (u = c - r - 1, d >= 0) {
          const f = {
            data: t.subarray(d, u),
            type: g
          };
          o.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (n && c <= 4 - n && f.state && (f.data = f.data.subarray(0, f.data.byteLength - n)), u > 0 && (f.data = Ne(f.data, t.subarray(0, u)), f.state = 0));
        }
        c < i ? (h = this.getNALuType(t, c), d = c, g = h, r = 0) : r = -1;
      } else
        r = 0;
    }
    if (d >= 0 && r >= 0) {
      const f = {
        data: t.subarray(d, i),
        type: g,
        state: r
      };
      o.push(f);
    }
    if (o.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = Ne(f.data, t));
    }
    return e.naluState = r, o;
  }
}
class Ht {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, i = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    i.set(e.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && ie.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if ((this.word & 2147483648 >>> e) !== 0)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
}
class xu extends Oa {
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let n = this.VideoSample, o, c = !1;
    s.data = null, n && r.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, h;
      switch (l.type) {
        // NDR
        case 1: {
          let p = !1;
          o = !0;
          const y = l.data;
          if (c && y.length > 4) {
            const E = this.readSliceType(y);
            (E === 2 || E === 4 || E === 7 || E === 9) && (p = !0);
          }
          if (p) {
            var d;
            (d = n) != null && d.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null);
          }
          n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.frame = !0, n.key = p;
          break;
        }
        case 5:
          o = !0, (u = n) != null && u.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        // SEI
        case 6: {
          o = !0, Fi(l.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var g, f;
          o = !0, c = !0;
          const p = l.data, y = this.readSPS(p);
          if (!e.sps || e.width !== y.width || e.height !== y.height || ((g = e.pixelRatio) == null ? void 0 : g[0]) !== y.pixelRatio[0] || ((f = e.pixelRatio) == null ? void 0 : f[1]) !== y.pixelRatio[1]) {
            e.width = y.width, e.height = y.height, e.pixelRatio = y.pixelRatio, e.sps = [p];
            const E = p.subarray(1, 4);
            let T = "avc1.";
            for (let v = 0; v < 3; v++) {
              let S = E[v].toString(16);
              S.length < 2 && (S = "0" + S), T += S;
            }
            e.codec = T;
          }
          break;
        }
        // PPS
        case 8:
          o = !0, e.pps = [l.data];
          break;
        // AUD
        case 9:
          o = !0, e.audFound = !0, (h = n) != null && h.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        // Filler Data
        case 12:
          o = !0;
          break;
        default:
          o = !1;
          break;
      }
      n && o && n.units.push(l);
    }), i && n && (this.pushAccessUnit(n, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return e[t] & 31;
  }
  readSliceType(e) {
    const t = new Ht(e);
    return t.readUByte(), t.readUEG(), t.readUEG();
  }
  /**
   * The scaling list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e, t) {
    let s = 8, i = 8, r;
    for (let n = 0; n < e; n++)
      i !== 0 && (r = t.readEG(), i = (s + r + 256) % 256), s = i === 0 ? s : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS(e) {
    const t = new Ht(e);
    let s = 0, i = 0, r = 0, n = 0, o, c, l;
    const u = t.readUByte.bind(t), h = t.readBits.bind(t), d = t.readUEG.bind(t), g = t.readBoolean.bind(t), f = t.skipBits.bind(t), p = t.skipEG.bind(t), y = t.skipUEG.bind(t), E = this.skipScalingList.bind(this);
    u();
    const T = u();
    if (h(5), f(3), u(), y(), T === 100 || T === 110 || T === 122 || T === 244 || T === 44 || T === 83 || T === 86 || T === 118 || T === 128) {
      const R = d();
      if (R === 3 && f(1), y(), y(), f(1), g())
        for (c = R !== 3 ? 8 : 12, l = 0; l < c; l++)
          g() && (l < 6 ? E(16, t) : E(64, t));
    }
    y();
    const v = d();
    if (v === 0)
      d();
    else if (v === 1)
      for (f(1), p(), p(), o = d(), l = 0; l < o; l++)
        p();
    y(), f(1);
    const S = d(), x = d(), D = h(1);
    D === 0 && f(1), f(1), g() && (s = d(), i = d(), r = d(), n = d());
    let A = [1, 1];
    if (g() && g())
      switch (u()) {
        case 1:
          A = [1, 1];
          break;
        case 2:
          A = [12, 11];
          break;
        case 3:
          A = [10, 11];
          break;
        case 4:
          A = [16, 11];
          break;
        case 5:
          A = [40, 33];
          break;
        case 6:
          A = [24, 11];
          break;
        case 7:
          A = [20, 11];
          break;
        case 8:
          A = [32, 11];
          break;
        case 9:
          A = [80, 33];
          break;
        case 10:
          A = [18, 11];
          break;
        case 11:
          A = [15, 11];
          break;
        case 12:
          A = [64, 33];
          break;
        case 13:
          A = [160, 99];
          break;
        case 14:
          A = [4, 3];
          break;
        case 15:
          A = [3, 2];
          break;
        case 16:
          A = [2, 1];
          break;
        case 255: {
          A = [u() << 8 | u(), u() << 8 | u()];
          break;
        }
      }
    return {
      width: Math.ceil((S + 1) * 16 - s * 2 - i * 2),
      height: (2 - D) * (x + 1) * 16 - (D ? 2 : 4) * (r + n),
      pixelRatio: A
    };
  }
}
class Au extends Oa {
  constructor(...e) {
    super(...e), this.initVPS = null;
  }
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let n = this.VideoSample, o, c = !1;
    s.data = null, n && r.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, h;
      switch (l.type) {
        // NON-IDR, NON RANDOM ACCESS SLICE
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), n.frame = !0, o = !0;
          break;
        // CRA, BLA (random access picture)
        case 16:
        case 17:
        case 18:
        case 21:
          if (o = !0, c) {
            var d;
            (d = n) != null && d.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null);
          }
          n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        // IDR
        case 19:
        case 20:
          o = !0, (u = n) != null && u.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        // SEI
        case 39:
          o = !0, Fi(
            l.data,
            2,
            // NALu header size
            s.pts,
            t.samples
          );
          break;
        // VPS
        case 32:
          o = !0, e.vps || (typeof e.params != "object" && (e.params = {}), e.params = re(e.params, this.readVPS(l.data)), this.initVPS = l.data), e.vps = [l.data];
          break;
        // SPS
        case 33:
          if (o = !0, c = !0, e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], l.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
            const g = this.readSPS(l.data);
            e.width = g.width, e.height = g.height, e.pixelRatio = g.pixelRatio, e.codec = g.codecString, e.sps = [], typeof e.params != "object" && (e.params = {});
            for (const f in g.params)
              e.params[f] = g.params[f];
          }
          this.pushParameterSet(e.sps, l.data, e.vps), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0;
          break;
        // PPS
        case 34:
          if (o = !0, typeof e.params == "object") {
            if (!e.pps) {
              e.pps = [];
              const g = this.readPPS(l.data);
              for (const f in g)
                e.params[f] = g[f];
            }
            this.pushParameterSet(e.pps, l.data, e.vps);
          }
          break;
        // ACCESS UNIT DELIMITER
        case 35:
          o = !0, e.audFound = !0, (h = n) != null && h.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        default:
          o = !1;
          break;
      }
      n && o && n.units.push(l);
    }), i && n && (this.pushAccessUnit(n, e), this.VideoSample = null);
  }
  pushParameterSet(e, t, s) {
    (s && s[0] === this.initVPS || !s && !e.length) && e.push(t);
  }
  getNALuType(e, t) {
    return (e[t] & 126) >>> 1;
  }
  ebsp2rbsp(e) {
    const t = new Uint8Array(e.byteLength);
    let s = 0;
    for (let i = 0; i < e.byteLength; i++)
      i >= 2 && e[i] === 3 && e[i - 1] === 0 && e[i - 2] === 0 || (t[s] = e[i], s++);
    return new Uint8Array(t.buffer, 0, s);
  }
  pushAccessUnit(e, t) {
    super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
  }
  readVPS(e) {
    const t = new Ht(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s = t.readBits(3), i = t.readBoolean();
    return {
      numTemporalLayers: s + 1,
      temporalIdNested: i
    };
  }
  readSPS(e) {
    const t = new Ht(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s = t.readBits(3);
    t.readBoolean();
    const i = t.readBits(2), r = t.readBoolean(), n = t.readBits(5), o = t.readUByte(), c = t.readUByte(), l = t.readUByte(), u = t.readUByte(), h = t.readUByte(), d = t.readUByte(), g = t.readUByte(), f = t.readUByte(), p = t.readUByte(), y = t.readUByte(), E = t.readUByte(), T = [], v = [];
    for (let te = 0; te < s; te++)
      T.push(t.readBoolean()), v.push(t.readBoolean());
    if (s > 0)
      for (let te = s; te < 8; te++)
        t.readBits(2);
    for (let te = 0; te < s; te++)
      T[te] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), v[te] && t.readUByte();
    t.readUEG();
    const S = t.readUEG();
    S == 3 && t.skipBits(1);
    const x = t.readUEG(), D = t.readUEG(), A = t.readBoolean();
    let R = 0, b = 0, L = 0, C = 0;
    A && (R += t.readUEG(), b += t.readUEG(), L += t.readUEG(), C += t.readUEG());
    const F = t.readUEG(), B = t.readUEG(), K = t.readUEG(), N = t.readBoolean();
    for (let te = N ? 0 : s; te <= s; te++)
      t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let Ae = 0; Ae < 4; Ae++)
        for (let Fe = 0; Fe < (Ae === 3 ? 2 : 6); Fe++)
          if (!t.readBoolean())
            t.readUEG();
          else {
            const $e = Math.min(64, 1 << 4 + (Ae << 1));
            Ae > 1 && t.readEG();
            for (let At = 0; At < $e; At++)
              t.readEG();
          }
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const k = t.readUEG();
    let G = 0;
    for (let te = 0; te < k; te++) {
      let Ae = !1;
      if (te !== 0 && (Ae = t.readBoolean()), Ae) {
        te === k && t.readUEG(), t.readBoolean(), t.readUEG();
        let Fe = 0;
        for (let mt = 0; mt <= G; mt++) {
          const $e = t.readBoolean();
          let At = !1;
          $e || (At = t.readBoolean()), ($e || At) && Fe++;
        }
        G = Fe;
      } else {
        const Fe = t.readUEG(), mt = t.readUEG();
        G = Fe + mt;
        for (let $e = 0; $e < Fe; $e++)
          t.readUEG(), t.readBoolean();
        for (let $e = 0; $e < mt; $e++)
          t.readUEG(), t.readBoolean();
      }
    }
    if (t.readBoolean()) {
      const te = t.readUEG();
      for (let Ae = 0; Ae < te; Ae++) {
        for (let Fe = 0; Fe < K + 4; Fe++)
          t.readBits(1);
        t.readBits(1);
      }
    }
    let M = 0, O = 1, j = 1, J = !0, z = 1, ee = 0;
    t.readBoolean(), t.readBoolean();
    let xe = !1;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        const pt = t.readUByte(), ir = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], Jt = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        pt > 0 && pt < 16 ? (O = ir[pt - 1], j = Jt[pt - 1]) : pt === 255 && (O = t.readBits(16), j = t.readBits(16));
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), xe = t.readBoolean(), xe && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()), t.readBoolean() && (z = t.readBits(32), ee = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        const Jt = t.readBoolean(), rr = t.readBoolean();
        let Bt = !1;
        (Jt || rr) && (Bt = t.readBoolean(), Bt && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), Bt && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let nr = 0; nr <= s; nr++) {
          J = t.readBoolean();
          const po = J || t.readBoolean();
          let ar = !1;
          po ? t.readEG() : ar = t.readBoolean();
          const or = ar ? 1 : t.readUEG() + 1;
          if (Jt)
            for (let $t = 0; $t < or; $t++)
              t.readUEG(), t.readUEG(), Bt && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (rr)
            for (let $t = 0; $t < or; $t++)
              t.readUEG(), t.readUEG(), Bt && (t.readUEG(), t.readUEG()), t.skipBits(1);
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), M = t.readUEG());
    }
    let Oe = x, He = D;
    if (A) {
      let te = 1, Ae = 1;
      S === 1 ? te = Ae = 2 : S == 2 && (te = 2), Oe = x - te * b - te * R, He = D - Ae * C - Ae * L;
    }
    const gt = i ? ["A", "B", "C"][i] : "", mo = o << 24 | c << 16 | l << 8 | u;
    let Bs = 0;
    for (let te = 0; te < 32; te++)
      Bs = (Bs | (mo >> te & 1) << 31 - te) >>> 0;
    let $s = Bs.toString(16);
    return n === 1 && $s === "2" && ($s = "6"), {
      codecString: `hvc1.${gt}${n}.${$s}.${r ? "H" : "L"}${E}.B0`,
      params: {
        general_tier_flag: r,
        general_profile_idc: n,
        general_profile_space: i,
        general_profile_compatibility_flags: [o, c, l, u],
        general_constraint_indicator_flags: [h, d, g, f, p, y],
        general_level_idc: E,
        bit_depth: F + 8,
        bit_depth_luma_minus8: F,
        bit_depth_chroma_minus8: B,
        min_spatial_segmentation_idc: M,
        chroma_format_idc: S,
        frame_rate: {
          fixed: J,
          fps: ee / z
        }
      },
      width: Oe,
      height: He,
      pixelRatio: [O, j]
    };
  }
  readPPS(e) {
    const t = new Ht(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const i = t.readBoolean(), r = t.readBoolean();
    let n = 1;
    return r && i ? n = 0 : r ? n = 3 : i && (n = 2), {
      parallelismType: n
    };
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
  }
}
const ye = 188;
class ot {
  constructor(e, t, s, i) {
    this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.videoParser = null;
  }
  static probe(e, t) {
    const s = ot.syncOffset(e);
    return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(ye * 5, t - ye) + 1, i = 0;
    for (; i < s; ) {
      let r = !1, n = -1, o = 0;
      for (let c = i; c < t; c += ye)
        if (e[c] === 71 && (t - c === ye || e[c + ye] === 71)) {
          if (o++, n === -1 && (n = c, n !== 0 && (s = Math.min(n + ye * 99, e.length - ye) + 1)), r || (r = Si(e, c) === 0), r && o > 1 && (n === 0 && o > 2 || c + ye > s))
            return n;
        } else {
          if (o)
            return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: Un[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, i) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = ot.createTrack("video"), this._videoTrack.duration = i, this._audioTrack = ot.createTrack("audio", i), this._id3Track = ot.createTrack("id3"), this._txtTrack = ot.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.videoParser = null, this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let r;
    const n = this._videoTrack, o = this._audioTrack, c = this._id3Track, l = this._txtTrack;
    let u = n.pid, h = n.pesData, d = o.pid, g = c.pid, f = o.pesData, p = c.pesData, y = null, E = this.pmtParsed, T = this._pmtId, v = e.length;
    if (this.remainderData && (e = Ne(this.remainderData, e), v = e.length, this.remainderData = null), v < ye && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: n,
        id3Track: c,
        textTrack: l
      };
    const S = Math.max(0, ot.syncOffset(e));
    v -= (v - S) % ye, v < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, v, e.buffer.byteLength - v));
    let x = 0;
    for (let A = S; A < v; A += ye)
      if (e[A] === 71) {
        const R = !!(e[A + 1] & 64), b = Si(e, A), L = (e[A + 3] & 48) >> 4;
        let C;
        if (L > 1) {
          if (C = A + 5 + e[A + 4], C === A + ye)
            continue;
        } else
          C = A + 4;
        switch (b) {
          case u:
            R && (h && (r = bt(h, this.logger)) && (this.readyVideoParser(n.segmentCodec), this.videoParser !== null && this.videoParser.parsePES(n, l, r, !1)), h = {
              data: [],
              size: 0
            }), h && (h.data.push(e.subarray(C, A + ye)), h.size += A + ye - C);
            break;
          case d:
            if (R) {
              if (f && (r = bt(f, this.logger)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              f = {
                data: [],
                size: 0
              };
            }
            f && (f.data.push(e.subarray(C, A + ye)), f.size += A + ye - C);
            break;
          case g:
            R && (p && (r = bt(p, this.logger)) && this.parseID3PES(c, r), p = {
              data: [],
              size: 0
            }), p && (p.data.push(e.subarray(C, A + ye)), p.size += A + ye - C);
            break;
          case 0:
            R && (C += e[C] + 1), T = this._pmtId = Lu(e, C);
            break;
          case T: {
            R && (C += e[C] + 1);
            const F = Iu(e, C, this.typeSupported, s, this.observer, this.logger);
            u = F.videoPid, u > 0 && (n.pid = u, n.segmentCodec = F.segmentVideoCodec), d = F.audioPid, d > 0 && (o.pid = d, o.segmentCodec = F.segmentAudioCodec), g = F.id3Pid, g > 0 && (c.pid = g), y !== null && !E && (this.logger.warn(`MPEG-TS PMT found at ${A} after unknown PID '${y}'. Backtracking to sync byte @${S} to parse all TS packets.`), y = null, A = S - 188), E = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            y = b;
            break;
        }
      } else
        x++;
    x > 0 && xi(this.observer, new Error(`Found ${x} TS packet/s that do not start with 0x47`), void 0, this.logger), n.pesData = h, o.pesData = f, c.pesData = p;
    const D = {
      audioTrack: o,
      videoTrack: n,
      id3Track: c,
      textTrack: l
    };
    return i && this.extractRemainingSamples(D), D;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: i,
      textTrack: r
    } = e, n = s.pesData, o = t.pesData, c = i.pesData;
    let l;
    if (n && (l = bt(n, this.logger)) ? (this.readyVideoParser(s.segmentCodec), this.videoParser !== null && (this.videoParser.parsePES(s, r, l, !0), s.pesData = null)) : s.pesData = n, o && (l = bt(o, this.logger))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, l);
          break;
        case "mp3":
          this.parseMPEGPES(t, l);
          break;
        case "ac3":
          this.parseAC3PES(t, l);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    c && (l = bt(c, this.logger)) ? (this.parseID3PES(i, l), i.pesData = null) : i.pesData = c;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new Su(this.observer, this.config, t);
    return this.decrypt(i, r);
  }
  readyVideoParser(e) {
    this.videoParser === null && (e === "avc" ? this.videoParser = new xu() : e === "hevc" && (this.videoParser = new Au()));
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: i,
        videoTrack: r
      } = e;
      i.samples && i.segmentCodec === "aac" ? t.decryptAacSamples(i.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let r = t.data;
    if (i) {
      this.aacOverFlow = null;
      const h = i.missing, d = i.sample.unit.byteLength;
      if (h === -1)
        r = Ne(i.sample.unit, r);
      else {
        const g = d - h;
        i.sample.unit.set(r.subarray(0, h), g), e.samples.push(i.sample), s = i.missing;
      }
    }
    let n, o;
    for (n = s, o = r.length; n < o - 1 && !ws(r, n); n++)
      ;
    if (n !== s) {
      let h;
      const d = n < o - 1;
      if (d ? h = `AAC PES did not start with ADTS header,offset:${n}` : h = "No ADTS header found in AAC PES", xi(this.observer, new Error(h), d, this.logger), !d)
        return;
    }
    Aa(e, this.observer, r, n, this.audioCodec);
    let c;
    if (t.pts !== void 0)
      c = t.pts;
    else if (i) {
      const h = La(e.samplerate);
      c = i.sample.pts + h;
    } else {
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let l = 0, u;
    for (; n < o; )
      if (u = Ia(e, r, n, c, l), n += u.length, u.missing) {
        this.aacOverFlow = u;
        break;
      } else
        for (l++; n < o - 1 && !ws(r, n); n++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let r = 0, n = 0;
    const o = t.pts;
    if (o === void 0) {
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; n < i; )
      if (Ca(s, n)) {
        const c = _a(e, s, n, o, r);
        if (c)
          n += c.length, r++;
        else
          break;
      } else
        n++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, i = t.pts;
      if (i === void 0) {
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = s.length;
      let n = 0, o = 0, c;
      for (; o < r && (c = wa(e, s, o, i, n++)) > 0; )
        o += c;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = re({}, t, {
      type: this._videoTrack ? Pe.emsg : Pe.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function Si(a, e) {
  return ((a[e + 1] & 31) << 8) + a[e + 2];
}
function Lu(a, e) {
  return (a[e + 10] & 31) << 8 | a[e + 11];
}
function Iu(a, e, t, s, i, r) {
  const n = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, o = (a[e + 1] & 15) << 8 | a[e + 2], c = e + 3 + o - 4, l = (a[e + 10] & 15) << 8 | a[e + 11];
  for (e += 12 + l; e < c; ) {
    const u = Si(a, e), h = (a[e + 3] & 15) << 8 | a[e + 4];
    switch (a[e]) {
      case 207:
        if (!s) {
          zs("ADTS AAC", r);
          break;
        }
      /* falls through */
      case 15:
        n.audioPid === -1 && (n.audioPid = u);
        break;
      // Packetized metadata (ID3)
      case 21:
        n.id3Pid === -1 && (n.id3Pid = u);
        break;
      case 219:
        if (!s) {
          zs("H.264", r);
          break;
        }
      /* falls through */
      case 27:
        n.videoPid === -1 && (n.videoPid = u);
        break;
      // ISO/IEC 11172-3 (MPEG-1 audio)
      // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? r.log("MPEG audio found, not supported in this browser") : n.audioPid === -1 && (n.audioPid = u, n.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          zs("AC-3", r);
          break;
        }
      /* falls through */
      case 129:
        t.ac3 ? n.audioPid === -1 && (n.audioPid = u, n.segmentAudioCodec = "ac3") : r.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (n.audioPid === -1 && h > 0) {
          let d = e + 5, g = h;
          for (; g > 2; ) {
            switch (a[d]) {
              case 106:
                t.ac3 !== !0 ? r.log("AC-3 audio found, not supported in this browser for now") : (n.audioPid = u, n.segmentAudioCodec = "ac3");
                break;
            }
            const p = a[d + 1] + 2;
            d += p, g -= p;
          }
        }
        break;
      case 194:
      // SAMPLE-AES EC3
      /* falls through */
      case 135:
        return xi(i, new Error("Unsupported EC-3 in M2TS found"), void 0, r), n;
      case 36:
        n.videoPid === -1 && (n.videoPid = u, n.segmentVideoCodec = "hevc", r.log("HEVC in M2TS found"));
        break;
    }
    e += h + 5;
  }
  return n;
}
function xi(a, e, t, s) {
  s.warn(`parsing error: ${e.message}`), a.emit(m.ERROR, m.ERROR, {
    type: Y.MEDIA_ERROR,
    details: _.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function zs(a, e) {
  e.log(`${a} with AES-128-CBC encryption found in unencrypted stream`);
}
function bt(a, e) {
  let t = 0, s, i, r, n, o;
  const c = a.data;
  if (!a || a.size === 0)
    return null;
  for (; c[0].length < 19 && c.length > 1; )
    c[0] = Ne(c[0], c[1]), c.splice(1, 1);
  if (s = c[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (i = (s[4] << 8) + s[5], i && i > a.size - 6)
      return null;
    const u = s[7];
    u & 192 && (n = (s[9] & 14) * 536870912 + // 1 << 29
    (s[10] & 255) * 4194304 + // 1 << 22
    (s[11] & 254) * 16384 + // 1 << 14
    (s[12] & 255) * 128 + // 1 << 7
    (s[13] & 254) / 2, u & 64 ? (o = (s[14] & 14) * 536870912 + // 1 << 29
    (s[15] & 255) * 4194304 + // 1 << 22
    (s[16] & 254) * 16384 + // 1 << 14
    (s[17] & 255) * 128 + // 1 << 7
    (s[18] & 254) / 2, n - o > 60 * 9e4 && (e.warn(`${Math.round((n - o) / 9e4)}s delta between PTS and DTS, align them`), n = o)) : o = n), r = s[8];
    let h = r + 9;
    if (a.size <= h)
      return null;
    a.size -= h;
    const d = new Uint8Array(a.size);
    for (let g = 0, f = c.length; g < f; g++) {
      s = c[g];
      let p = s.byteLength;
      if (h)
        if (h > p) {
          h -= p;
          continue;
        } else
          s = s.subarray(h), p -= h, h = 0;
      d.set(s, t), t += p;
    }
    return i && (i -= r + 3), {
      data: d,
      pts: n,
      dts: o,
      len: i
    };
  }
  return null;
}
class Ru {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const rt = Math.pow(2, 32) - 1;
class I {
  static init() {
    I.types = {
      avc1: [],
      // codingname
      avcC: [],
      hvc1: [],
      hvcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in I.types)
      I.types.hasOwnProperty(e) && (I.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    I.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    I.STTS = I.STSC = I.STCO = r, I.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), I.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), I.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), I.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const n = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), c = new Uint8Array([0, 0, 0, 1]);
    I.FTYP = I.box(I.types.ftyp, n, c, n, o), I.DINF = I.box(I.types.dinf, I.box(I.types.dref, i));
  }
  static box(e, ...t) {
    let s = 8, i = t.length;
    const r = i;
    for (; i--; )
      s += t[i].byteLength;
    const n = new Uint8Array(s);
    for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = s & 255, n.set(e, 4), i = 0, s = 8; i < r; i++)
      n.set(t[i], s), s += t[i].byteLength;
    return n;
  }
  static hdlr(e) {
    return I.box(I.types.hdlr, I.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return I.box(I.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (rt + 1)), i = Math.floor(t % (rt + 1));
    return I.box(I.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return I.box(I.types.mdia, I.mdhd(e.timescale || 0, e.duration || 0), I.hdlr(e.type), I.minf(e));
  }
  static mfhd(e) {
    return I.box(I.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? I.box(I.types.minf, I.box(I.types.smhd, I.SMHD), I.DINF, I.stbl(e)) : I.box(I.types.minf, I.box(I.types.vmhd, I.VMHD), I.DINF, I.stbl(e));
  }
  static moof(e, t, s) {
    return I.box(I.types.moof, I.mfhd(e), I.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = I.trak(e[t]);
    return I.box.apply(null, [I.types.moov, I.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(s).concat(I.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = I.trex(e[t]);
    return I.box.apply(null, [I.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (rt + 1)), i = Math.floor(t % (rt + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return I.box(I.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, r;
    for (i = 0; i < t.length; i++)
      r = t[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return I.box(I.types.sdtp, s);
  }
  static stbl(e) {
    return I.box(I.types.stbl, I.stsd(e), I.box(I.types.stts, I.STTS), I.box(I.types.stsc, I.STSC), I.box(I.types.stsz, I.STSZ), I.box(I.types.stco, I.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, r, n;
    for (i = 0; i < e.sps.length; i++)
      r = e.sps[i], n = r.byteLength, t.push(n >>> 8 & 255), t.push(n & 255), t = t.concat(Array.prototype.slice.call(r));
    for (i = 0; i < e.pps.length; i++)
      r = e.pps[i], n = r.byteLength, s.push(n >>> 8 & 255), s.push(n & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = I.box(I.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), c = e.width, l = e.height, u = e.pixelRatio[0], h = e.pixelRatio[1];
    return I.box(
      I.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        c >> 8 & 255,
        c & 255,
        // width
        l >> 8 & 255,
        l & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      I.box(I.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      I.box(I.types.pasp, new Uint8Array([
        u >> 24,
        // hSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255,
        h >> 24,
        // vSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      25,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      17,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5,
      // descriptor_type
      2,
      // length
      ...t,
      6,
      1,
      2
      // GASpecificConfig)); // length + audio config descriptor
    ]);
  }
  static audioStsd(e) {
    const t = e.samplerate || 0;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount || 0,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return I.box(I.types.mp4a, I.audioStsd(e), I.box(I.types.esds, I.esds(e)));
  }
  static mp3(e) {
    return I.box(I.types[".mp3"], I.audioStsd(e));
  }
  static ac3(e) {
    return I.box(I.types["ac-3"], I.audioStsd(e), I.box(I.types.dac3, e.config));
  }
  static stsd(e) {
    const {
      segmentCodec: t
    } = e;
    if (e.type === "audio") {
      if (t === "aac")
        return I.box(I.types.stsd, I.STSD, I.mp4a(e));
      if (t === "ac3" && e.config)
        return I.box(I.types.stsd, I.STSD, I.ac3(e));
      if (t === "mp3" && e.codec === "mp3")
        return I.box(I.types.stsd, I.STSD, I.mp3(e));
    } else if (e.pps && e.sps) {
      if (t === "avc")
        return I.box(I.types.stsd, I.STSD, I.avc1(e));
      if (t === "hevc" && e.vps)
        return I.box(I.types.stsd, I.STSD, I.hvc1(e));
    } else
      throw new Error("video track missing pps or sps");
    throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
  }
  static tkhd(e) {
    const t = e.id, s = (e.duration || 0) * (e.timescale || 0), i = e.width || 0, r = e.height || 0, n = Math.floor(s / (rt + 1)), o = Math.floor(s % (rt + 1));
    return I.box(I.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      n >> 24,
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      i >> 8 & 255,
      i & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = I.sdtp(e), i = e.id, r = Math.floor(t / (rt + 1)), n = Math.floor(t % (rt + 1));
    return I.box(
      I.types.traf,
      I.box(I.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255
        // track_ID
      ])),
      I.box(I.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        n >> 24,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
      ])),
      I.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, I.box(I.types.trak, I.tkhd(e), I.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return I.box(I.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], i = s.length, r = 12 + 16 * i, n = new Uint8Array(r);
    let o, c, l, u, h, d;
    for (t += 8 + r, n.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      i >>> 24 & 255,
      i >>> 16 & 255,
      i >>> 8 & 255,
      i & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < i; o++)
      c = s[o], l = c.duration, u = c.size, h = c.flags, d = c.cts, n.set([
        l >>> 24 & 255,
        l >>> 16 & 255,
        l >>> 8 & 255,
        l & 255,
        // sample_duration
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255,
        // sample_size
        h.isLeading << 2 | h.dependsOn,
        h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync,
        h.degradPrio & 61440,
        h.degradPrio & 15,
        // sample_flags
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return I.box(I.types.trun, n);
  }
  static initSegment(e) {
    I.types || I.init();
    const t = I.moov(e);
    return Ne(I.FTYP, t);
  }
  static hvc1(e) {
    const t = e.params, s = [e.vps, e.sps, e.pps], i = 4, r = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), i - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]);
    let n = r.length;
    for (let f = 0; f < s.length; f += 1) {
      n += 3;
      for (let p = 0; p < s[f].length; p += 1)
        n += 2 + s[f][p].length;
    }
    const o = new Uint8Array(n);
    o.set(r, 0), n = r.length;
    const c = s.length - 1;
    for (let f = 0; f < s.length; f += 1) {
      o.set(new Uint8Array([32 + f | (f === c ? 128 : 0), 0, s[f].length]), n), n += 3;
      for (let p = 0; p < s[f].length; p += 1)
        o.set(new Uint8Array([s[f][p].length >> 8, s[f][p].length & 255]), n), n += 2, o.set(s[f][p], n), n += s[f][p].length;
    }
    const l = I.box(I.types.hvcC, o), u = e.width, h = e.height, d = e.pixelRatio[0], g = e.pixelRatio[1];
    return I.box(
      I.types.hvc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        u >> 8 & 255,
        u & 255,
        // width
        h >> 8 & 255,
        h & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      l,
      I.box(I.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      I.box(I.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        g >> 24,
        // vSpacing
        g >> 16 & 255,
        g >> 8 & 255,
        g & 255
      ]))
    );
  }
}
I.types = void 0;
I.HDLR_TYPES = void 0;
I.STTS = void 0;
I.STSC = void 0;
I.STCO = void 0;
I.STSZ = void 0;
I.VMHD = void 0;
I.SMHD = void 0;
I.STSD = void 0;
I.FTYP = void 0;
I.DINF = void 0;
const Fa = 9e4;
function zi(a, e, t = 1, s = !1) {
  const i = a * e * t;
  return s ? Math.round(i) : i;
}
function bu(a, e, t = 1, s = !1) {
  return zi(a, e, 1 / t, s);
}
function Ut(a, e = !1) {
  return zi(a, 1e3, 1 / Fa, e);
}
function _u(a, e = 1) {
  return zi(a, Fa, 1 / e);
}
function Zr(a) {
  const {
    baseTime: e,
    timescale: t,
    trackId: s
  } = a;
  return `${e / t} (${e}/${t}) trackId: ${s}`;
}
const Du = 10 * 1e3, Cu = 1024, Pu = 1152, ku = 1536;
let _t = null, Qs = null;
function Jr(a, e, t, s) {
  return {
    duration: e,
    size: t,
    cts: s,
    flags: {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: a ? 2 : 1,
      isNonSync: a ? 0 : 1
    }
  };
}
class Es extends Be {
  constructor(e, t, s, i) {
    if (super("mp4-remuxer", i), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextVideoTs = null, this.nextAudioTs = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, _t === null) {
      const n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      _t = n ? parseInt(n[1]) : 0;
    }
    if (Qs === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      Qs = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    const t = this._initPTS;
    (!t || !e || e.trackId !== t.trackId || e.baseTime !== t.baseTime || e.timescale !== t.timescale) && this.log(`Reset initPTS: ${t && Zr(t)} > ${e && Zr(e)}`), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    this.log("reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    this.log("ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e[0].pts, i = e.reduce((r, n) => {
      let o = n.pts, c = o - r;
      return c < -4294967296 && (t = !0, o = Ce(o, s), c = o - r), c > 0 ? r : o;
    }, s);
    return t && this.debug("PTS rollover detected"), i;
  }
  remux(e, t, s, i, r, n, o, c) {
    let l, u, h, d, g, f, p = r, y = r;
    const E = e.pid > -1, T = t.pid > -1, v = t.samples.length, S = e.samples.length > 0, x = o && v > 0 || v > 1;
    if ((!E || S) && (!T || x) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var A, R, b, L;
        const K = this.videoTrackConfig;
        (K && (t.width !== K.width || t.height !== K.height || ((A = t.pixelRatio) == null ? void 0 : A[0]) !== ((R = K.pixelRatio) == null ? void 0 : R[0]) || ((b = t.pixelRatio) == null ? void 0 : b[1]) !== ((L = K.pixelRatio) == null ? void 0 : L[1])) || !K && x || this.nextAudioTs === null && S) && this.resetInitSegment();
      }
      this.ISGenerated || (h = this.generateIS(e, t, r, n));
      const C = this.isVideoContiguous;
      let F = -1, B;
      if (x && (F = wu(t.samples), !C && this.config.forceKeyFrameOnDiscontinuity))
        if (f = !0, F > 0) {
          this.warn(`Dropped ${F} out of ${v} video samples due to a missing keyframe`);
          const K = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(F), t.dropped += F, y += (t.samples[0].pts - K) / t.inputTimeScale, B = y;
        } else F === -1 && (this.warn(`No keyframe found out of ${v} video samples`), f = !1);
      if (this.ISGenerated) {
        if (S && x) {
          const K = this.getVideoStartPts(t.samples), w = (Ce(e.samples[0].pts, K) - K) / t.inputTimeScale;
          p += Math.max(0, w), y += Math.max(0, -w);
        }
        if (S) {
          if (e.samplerate || (this.warn("regenerate InitSegment as audio detected"), h = this.generateIS(e, t, r, n)), u = this.remuxAudio(e, p, this.isAudioContiguous, n, T || x || c === V.AUDIO ? y : void 0), x) {
            const K = u ? u.endPTS - u.startPTS : 0;
            t.inputTimeScale || (this.warn("regenerate InitSegment as video detected"), h = this.generateIS(e, t, r, n)), l = this.remuxVideo(t, y, C, K);
          }
        } else x && (l = this.remuxVideo(t, y, C, 0));
        l && (l.firstKeyFrame = F, l.independent = F !== -1, l.firstKeyFramePTS = B);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (g = Ma(s, r, this._initPTS, this._initDTS)), i.samples.length && (d = Na(i, r, this._initPTS))), {
      audio: u,
      video: l,
      initSegment: h,
      independent: f,
      text: d,
      id3: g
    };
  }
  computeInitPts(e, t, s, i) {
    const r = Math.round(s * t);
    let n = Ce(e, r);
    if (n < r + t)
      for (this.log(`Adjusting PTS for rollover in timeline near ${(r - n) / t} ${i}`); n < r + t; )
        n += 8589934592;
    return n - r;
  }
  generateIS(e, t, s, i) {
    const r = e.samples, n = t.samples, o = this.typeSupported, c = {}, l = this._initPTS;
    let u = !l || i, h = "audio/mp4", d, g, f, p = -1;
    if (u && (d = g = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (h = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      c.audio = {
        id: "audio",
        container: h,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : I.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, u && (p = e.id, f = e.inputTimeScale, !l || f !== l.timescale ? d = g = this.computeInitPts(r[0].pts, f, s, "audio") : u = !1);
    }
    if (t.sps && t.pps && n.length) {
      if (t.timescale = t.inputTimeScale, c.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: I.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, u)
        if (p = t.id, f = t.inputTimeScale, !l || f !== l.timescale) {
          const y = this.getVideoStartPts(n), E = Ce(n[0].dts, y), T = this.computeInitPts(E, f, s, "video"), v = this.computeInitPts(y, f, s, "video");
          g = Math.min(g, T), d = Math.min(d, v);
        } else
          u = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(c).length)
      return this.ISGenerated = !0, u ? (l && this.warn(`Timestamps at playlist time: ${i ? "" : "~"}${s} ${d / f} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${s} offset: ${d / f} (${d}/${f}) trackId: ${p}`), this._initPTS = {
        baseTime: d,
        timescale: f,
        trackId: p
      }, this._initDTS = {
        baseTime: g,
        timescale: f,
        trackId: p
      }) : d = f = void 0, {
        tracks: c,
        initPTS: d,
        timescale: f,
        trackId: p
      };
  }
  remuxVideo(e, t, s, i) {
    const r = e.inputTimeScale, n = e.samples, o = [], c = n.length, l = this._initPTS, u = l.baseTime * r / l.timescale;
    let h = this.nextVideoTs, d = 8, g = this.videoSampleDuration, f, p, y = Number.POSITIVE_INFINITY, E = Number.NEGATIVE_INFINITY, T = !1;
    if (!s || h === null) {
      const M = u + t * r, O = n[0].pts - Ce(n[0].dts, n[0].pts);
      _t && h !== null && Math.abs(M - O - (h + u)) < 15e3 ? s = !0 : h = M - O - u;
    }
    const v = h + u;
    for (let M = 0; M < c; M++) {
      const O = n[M];
      O.pts = Ce(O.pts, v), O.dts = Ce(O.dts, v), O.dts < n[M > 0 ? M - 1 : M].dts && (T = !0);
    }
    T && n.sort(function(M, O) {
      const j = M.dts - O.dts, J = M.pts - O.pts;
      return j || J;
    }), f = n[0].dts, p = n[n.length - 1].dts;
    const S = p - f, x = S ? Math.round(S / (c - 1)) : g || e.inputTimeScale / 30;
    if (s) {
      const M = f - v, O = M > x, j = M < -1;
      if ((O || j) && (O ? this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Ut(M, !0)} ms (${M}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Ut(-M, !0)} ms (${M}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !j || v >= n[0].pts || _t)) {
        f = v;
        const J = n[0].pts - M;
        if (O)
          n[0].dts = f, n[0].pts = J;
        else {
          let z = !0;
          for (let ee = 0; ee < n.length && !(n[ee].dts > J && z); ee++) {
            const xe = n[ee].pts;
            if (n[ee].dts -= M, n[ee].pts -= M, ee < n.length - 1) {
              const Ee = n[ee + 1].pts, Oe = n[ee].pts, He = Ee <= Oe, gt = Ee <= xe;
              z = He == gt;
            }
          }
        }
        this.log(`Video: Initial PTS/DTS adjusted: ${Ut(J, !0)}/${Ut(f, !0)}, delta: ${Ut(M, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let D = 0, A = 0, R = f;
    for (let M = 0; M < c; M++) {
      const O = n[M], j = O.units, J = j.length;
      let z = 0;
      for (let ee = 0; ee < J; ee++)
        z += j[ee].data.length;
      A += z, D += J, O.length = z, O.dts < R ? (O.dts = R, R += x / 4 | 0 || 1) : R = O.dts, y = Math.min(O.pts, y), E = Math.max(O.pts, E);
    }
    p = n[c - 1].dts;
    const b = A + 4 * D + 8;
    let L;
    try {
      L = new Uint8Array(b);
    } catch (M) {
      this.observer.emit(m.ERROR, m.ERROR, {
        type: Y.MUX_ERROR,
        details: _.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: M,
        bytes: b,
        reason: `fail allocating video mdat ${b}`
      });
      return;
    }
    const C = new DataView(L.buffer);
    C.setUint32(0, b), L.set(I.types.mdat, 4);
    let F = !1, B = Number.POSITIVE_INFINITY, K = Number.POSITIVE_INFINITY, N = Number.NEGATIVE_INFINITY, w = Number.NEGATIVE_INFINITY;
    for (let M = 0; M < c; M++) {
      const O = n[M], j = O.units;
      let J = 0;
      for (let xe = 0, Ee = j.length; xe < Ee; xe++) {
        const Oe = j[xe], He = Oe.data, gt = Oe.data.byteLength;
        C.setUint32(d, gt), d += 4, L.set(He, d), d += gt, J += 4 + gt;
      }
      let z;
      if (M < c - 1)
        g = n[M + 1].dts - O.dts, z = n[M + 1].pts - O.pts;
      else {
        const xe = this.config, Ee = M > 0 ? O.dts - n[M - 1].dts : x;
        if (z = M > 0 ? O.pts - n[M - 1].pts : x, xe.stretchShortVideoTrack && this.nextAudioTs !== null) {
          const Oe = Math.floor(xe.maxBufferHole * r), He = (i ? y + i * r : this.nextAudioTs + u) - O.pts;
          He > Oe ? (g = He - Ee, g < 0 ? g = Ee : F = !0, this.log(`It is approximately ${He / 90} ms to the next segment; using duration ${g / 90} ms for the last video frame.`)) : g = Ee;
        } else
          g = Ee;
      }
      const ee = Math.round(O.pts - O.dts);
      B = Math.min(B, g), N = Math.max(N, g), K = Math.min(K, z), w = Math.max(w, z), o.push(Jr(O.key, g, J, ee));
    }
    if (o.length) {
      if (_t) {
        if (_t < 70) {
          const M = o[0].flags;
          M.dependsOn = 2, M.isNonSync = 0;
        }
      } else if (Qs && w - K < N - B && x / N < 0.025 && o[0].cts === 0) {
        this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let M = f;
        for (let O = 0, j = o.length; O < j; O++) {
          const J = M + o[O].duration, z = M + o[O].cts;
          if (O < j - 1) {
            const ee = J + o[O + 1].cts;
            o[O].duration = ee - z;
          } else
            o[O].duration = O ? o[O - 1].duration : x;
          o[O].cts = 0, M = J;
        }
      }
    }
    g = F || !g ? x : g;
    const U = p + g;
    this.nextVideoTs = h = U - u, this.videoSampleDuration = g, this.isVideoContiguous = !0;
    const W = {
      data1: I.moof(e.sequenceNumber++, f, re(e, {
        samples: o
      })),
      data2: L,
      startPTS: (y - u) / r,
      endPTS: (E + g - u) / r,
      startDTS: (f - u) / r,
      endDTS: h / r,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, W;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return Pu;
      case "ac3":
        return ku;
      default:
        return Cu;
    }
  }
  remuxAudio(e, t, s, i, r) {
    const n = e.inputTimeScale, o = e.samplerate ? e.samplerate : n, c = n / o, l = this.getSamplesPerFrame(e), u = l * c, h = this._initPTS, d = e.segmentCodec === "mp3" && this.typeSupported.mpeg, g = [], f = r !== void 0;
    let p = e.samples, y = d ? 0 : 8, E = this.nextAudioTs || -1;
    const T = h.baseTime * n / h.timescale, v = T + t * n;
    if (this.isAudioContiguous = s = s || p.length && E > 0 && (i && Math.abs(v - (E + T)) < 9e3 || Math.abs(Ce(p[0].pts, v) - (E + T)) < 20 * u), p.forEach(function(w) {
      w.pts = Ce(w.pts, v);
    }), !s || E < 0) {
      const w = p.length;
      if (p = p.filter((U) => U.pts >= 0), w !== p.length && this.warn(`Removed ${p.length - w} of ${w} samples (initPTS ${T} / ${n})`), !p.length)
        return;
      r === 0 ? E = 0 : i && !f ? E = Math.max(0, v - T) : E = p[0].pts - T;
    }
    if (e.segmentCodec === "aac") {
      const w = this.config.maxAudioFramesDrift;
      for (let U = 0, k = E + T; U < p.length; U++) {
        const G = p[U], W = G.pts, M = W - k, O = Math.abs(1e3 * M / n);
        if (M <= -w * u && f)
          U === 0 && (this.warn(`Audio frame @ ${(W / n).toFixed(3)}s overlaps marker by ${Math.round(1e3 * M / n)} ms.`), this.nextAudioTs = E = W - T, k = W);
        else if (M >= w * u && O < Du && f) {
          let j = Math.round(M / u);
          for (k = W - j * u; k < 0 && j && u; )
            j--, k += u;
          U === 0 && (this.nextAudioTs = E = k - T), this.warn(`Injecting ${j} audio frames @ ${((k - T) / n).toFixed(3)}s due to ${Math.round(1e3 * M / n)} ms gap.`);
          for (let J = 0; J < j; J++) {
            let z = Ru.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            z || (this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), z = G.unit.subarray()), p.splice(U, 0, {
              unit: z,
              pts: k
            }), k += u, U++;
          }
        }
        G.pts = k, k += u;
      }
    }
    let S = null, x = null, D, A = 0, R = p.length;
    for (; R--; )
      A += p[R].unit.byteLength;
    for (let w = 0, U = p.length; w < U; w++) {
      const k = p[w], G = k.unit;
      let W = k.pts;
      if (x !== null) {
        const O = g[w - 1];
        O.duration = Math.round((W - x) / c);
      } else if (s && e.segmentCodec === "aac" && (W = E + T), S = W, A > 0) {
        A += y;
        try {
          D = new Uint8Array(A);
        } catch (O) {
          this.observer.emit(m.ERROR, m.ERROR, {
            type: Y.MUX_ERROR,
            details: _.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: O,
            bytes: A,
            reason: `fail allocating audio mdat ${A}`
          });
          return;
        }
        d || (new DataView(D.buffer).setUint32(0, A), D.set(I.types.mdat, 4));
      } else
        return;
      D.set(G, y);
      const M = G.byteLength;
      y += M, g.push(Jr(!0, l, M, 0)), x = W;
    }
    const b = g.length;
    if (!b)
      return;
    const L = g[g.length - 1];
    E = x - T, this.nextAudioTs = E + c * L.duration;
    const C = d ? new Uint8Array(0) : I.moof(e.sequenceNumber++, S / c, re({}, e, {
      samples: g
    }));
    e.samples = [];
    const F = (S - T) / n, B = this.nextAudioTs / n, N = {
      data1: C,
      data2: D,
      startPTS: F,
      endPTS: B,
      startDTS: F,
      endDTS: B,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: b
    };
    return this.isAudioContiguous = !0, N;
  }
}
function Ce(a, e) {
  let t;
  if (e === null)
    return a;
  for (e < a ? t = -8589934592 : t = 8589934592; Math.abs(a - e) > 4294967296; )
    a += t;
  return a;
}
function wu(a) {
  for (let e = 0; e < a.length; e++)
    if (a[e].key)
      return e;
  return -1;
}
function Ma(a, e, t, s) {
  const i = a.samples.length;
  if (!i)
    return;
  const r = a.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const c = a.samples[o];
    c.pts = Ce(c.pts - t.baseTime * r / t.timescale, e * r) / r, c.dts = Ce(c.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const n = a.samples;
  return a.samples = [], {
    samples: n
  };
}
function Na(a, e, t) {
  const s = a.samples.length;
  if (!s)
    return;
  const i = a.inputTimeScale;
  for (let n = 0; n < s; n++) {
    const o = a.samples[n];
    o.pts = Ce(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  a.samples.sort((n, o) => n.pts - o.pts);
  const r = a.samples;
  return a.samples = [], {
    samples: r
  };
}
class Ou extends Be {
  constructor(e, t, s, i) {
    super("passthrough-remuxer", i), this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.isVideoContiguous = !1;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.lastEndTime = null;
    const t = this.initPTS;
    t && e && t.baseTime === e.baseTime && t.timescale === e.timescale || (this.initPTS = e);
  }
  resetNextTimestamp() {
    this.isVideoContiguous = !1, this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, i) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(e, i), this.emitInitSegment = !0;
  }
  generateInitSegment(e, t) {
    let {
      audioCodec: s,
      videoCodec: i
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const {
      audio: r,
      video: n
    } = this.initData = Vn(e);
    if (t)
      Sl(e, t);
    else {
      const c = r || n;
      c != null && c.encrypted && this.warn(`Init segment with encrypted track with has no key ("${c.codec}")!`);
    }
    r && (s = en(r, ne.AUDIO, this)), n && (i = en(n, ne.VIDEO, this));
    const o = {};
    r && n ? o.audiovideo = {
      container: "video/mp4",
      codec: s + "," + i,
      supplemental: n.supplemental,
      encrypted: n.encrypted,
      initSegment: e,
      id: "main"
    } : r ? o.audio = {
      container: "audio/mp4",
      codec: s,
      encrypted: r.encrypted,
      initSegment: e,
      id: "audio"
    } : n ? o.video = {
      container: "video/mp4",
      codec: i,
      supplemental: n.supplemental,
      encrypted: n.encrypted,
      initSegment: e,
      id: "main"
    } : this.warn("initSegment does not contain moov or trak boxes."), this.initTracks = o;
  }
  remux(e, t, s, i, r, n) {
    var o, c;
    let {
      initPTS: l,
      lastEndTime: u
    } = this;
    const h = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    $(u) || (u = this.lastEndTime = r || 0);
    const d = t.samples;
    if (!d.length)
      return h;
    const g = {
      initPTS: void 0,
      timescale: void 0,
      trackId: void 0
    };
    let f = this.initData;
    if ((o = f) != null && o.length || (this.generateInitSegment(d), f = this.initData), !((c = f) != null && c.length))
      return this.warn("Failed to generate initSegment."), h;
    this.emitInitSegment && (g.tracks = this.initTracks, this.emitInitSegment = !1);
    const p = Al(d, f, this), y = f.audio ? p[f.audio.id] : null, E = f.video ? p[f.video.id] : null, T = as(E, 1 / 0), v = as(y, 1 / 0), S = as(E, 0, !0), x = as(y, 0, !0);
    let D = r, A = 0;
    const R = y && (!E || !l && v < T || l && l.trackId === f.audio.id), b = R ? y : E;
    if (b) {
      const k = b.timescale, G = b.start - r * k, W = R ? f.audio.id : f.video.id;
      D = b.start / k, A = R ? x - v : S - T, (n || !l) && (Fu(l, D, r, A) || k !== l.timescale) && (l && this.warn(`Timestamps at playlist time: ${n ? "" : "~"}${r} ${G / k} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${r} offset: ${D - r} (${G}/${k}) trackId: ${W}`), l = null, g.initPTS = G, g.timescale = k, g.trackId = W);
    } else
      this.warn(`No audio or video samples found for initPTS at playlist time: ${r}`);
    l ? (g.initPTS = l.baseTime, g.timescale = l.timescale, g.trackId = l.trackId) : ((!g.timescale || g.trackId === void 0 || g.initPTS === void 0) && (this.warn("Could not set initPTS"), g.initPTS = D, g.timescale = 1, g.trackId = -1), this.initPTS = l = {
      baseTime: g.initPTS,
      timescale: g.timescale,
      trackId: g.trackId
    });
    const L = D - l.baseTime / l.timescale, C = L + A;
    A > 0 ? this.lastEndTime = C : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const F = !!f.audio, B = !!f.video;
    let K = "";
    F && (K += "audio"), B && (K += "video");
    const N = (f.audio ? f.audio.encrypted : !1) || (f.video ? f.video.encrypted : !1), w = {
      data1: d,
      startPTS: L,
      startDTS: L,
      endPTS: C,
      endDTS: C,
      type: K,
      hasAudio: F,
      hasVideo: B,
      nb: 1,
      dropped: 0,
      encrypted: N
    };
    h.audio = F && !B ? w : void 0, h.video = B ? w : void 0;
    const U = E == null ? void 0 : E.sampleCount;
    if (U) {
      const k = E.keyFrameIndex, G = k !== -1;
      w.nb = U, w.dropped = k === 0 || this.isVideoContiguous ? 0 : G ? k : U, w.independent = G, w.firstKeyFrame = k, G && E.keyFrameStart && (w.firstKeyFramePTS = (E.keyFrameStart - l.baseTime) / l.timescale), this.isVideoContiguous || (h.independent = G), this.isVideoContiguous || (this.isVideoContiguous = G), w.dropped && this.warn(`fmp4 does not start with IDR: firstIDR ${k}/${U} dropped: ${w.dropped} start: ${w.firstKeyFramePTS || "NA"}`);
    }
    return h.initSegment = g, h.id3 = Ma(s, r, l, l), i.samples.length && (h.text = Na(i, r, l)), h;
  }
}
function as(a, e, t = !1) {
  return (a == null ? void 0 : a.start) !== void 0 ? (a.start + (t ? a.duration : 0)) / a.timescale : e;
}
function Fu(a, e, t, s) {
  if (a === null)
    return !0;
  const i = Math.max(s, 1), r = e - a.baseTime / a.timescale;
  return Math.abs(r - t) > i;
}
function en(a, e, t) {
  const s = a.codec;
  return s && s.length > 4 ? s : e === ne.AUDIO ? s === "ec-3" || s === "ac-3" || s === "alac" ? s : s === "fLaC" || s === "Opus" ? Is(s, !1) : (t.warn(`Unhandled audio codec "${s}" in mp4 MAP`), s || "mp4a") : (t.warn(`Unhandled video codec "${s}" in mp4 MAP`), s || "avc1");
}
let st;
try {
  st = self.performance.now.bind(self.performance);
} catch {
  st = Date.now;
}
const Ts = [{
  demux: vu,
  remux: Ou
}, {
  demux: ot,
  remux: Es
}, {
  demux: pu,
  remux: Es
}, {
  demux: Eu,
  remux: Es
}];
Ts.splice(2, 0, {
  demux: yu,
  remux: Es
});
class tn {
  constructor(e, t, s, i, r, n) {
    this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = r, this.logger = n;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const r = s.transmuxing;
    r.executeStart = st();
    let n = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: c
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: l,
      discontinuity: u,
      trackSwitch: h,
      accurateTimeOffset: d,
      timeOffset: g,
      initSegmentChange: f
    } = i || o, {
      audioCodec: p,
      videoCodec: y,
      defaultInitPts: E,
      duration: T,
      initSegmentData: v
    } = c, S = Mu(n, t);
    if (S && wt(S.method)) {
      const R = this.getDecrypter(), b = Gi(S.method);
      if (R.isSync()) {
        let L = R.softwareDecrypt(n, S.key.buffer, S.iv.buffer, b);
        if (s.part > -1) {
          const F = R.flush();
          L = F && F.buffer;
        }
        if (!L)
          return r.executeEnd = st(), Zs(s);
        n = new Uint8Array(L);
      } else
        return this.asyncResult = !0, this.decryptionPromise = R.webCryptoDecrypt(n, S.key.buffer, S.iv.buffer, b).then((L) => {
          const C = this.push(L, null, s);
          return this.decryptionPromise = null, C;
        }), this.decryptionPromise;
    }
    const x = this.needsProbing(u, h);
    if (x) {
      const R = this.configureTransmuxer(n);
      if (R)
        return this.logger.warn(`[transmuxer] ${R.message}`), this.observer.emit(m.ERROR, m.ERROR, {
          type: Y.MEDIA_ERROR,
          details: _.FRAG_PARSING_ERROR,
          fatal: !1,
          error: R,
          reason: R.message
        }), r.executeEnd = st(), Zs(s);
    }
    (u || h || f || x) && this.resetInitSegment(v, p, y, T, t), (u || f || x) && this.resetInitialTimestamp(E), l || this.resetContiguity();
    const D = this.transmux(n, S, g, d, s);
    this.asyncResult = Qt(D);
    const A = this.currentTransmuxState;
    return A.contiguous = !0, A.discontinuity = !1, A.trackSwitch = !1, r.executeEnd = st(), D;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = st();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: r
    } = this;
    if (r)
      return this.asyncResult = !0, r.then(() => this.flush(e));
    const n = [], {
      timeOffset: o
    } = i;
    if (s) {
      const h = s.flush();
      h && n.push(this.push(h.buffer, null, e));
    }
    const {
      demuxer: c,
      remuxer: l
    } = this;
    if (!c || !l) {
      t.executeEnd = st();
      const h = [Zs(e)];
      return this.asyncResult ? Promise.resolve(h) : h;
    }
    const u = c.flush(o);
    return Qt(u) ? (this.asyncResult = !0, u.then((h) => (this.flushRemux(n, h, e), n))) : (this.flushRemux(n, u, e), this.asyncResult ? Promise.resolve(n) : n);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: r,
      id3Track: n,
      textTrack: o
    } = t, {
      accurateTimeOffset: c,
      timeOffset: l
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " part: " + s.part : ""} of ${this.id === V.MAIN ? "level" : "track"} ${s.level}`);
    const u = this.remuxer.remux(i, r, n, o, l, c, !0, this.id);
    e.push({
      remuxResult: u,
      chunkMeta: s
    }), s.transmuxing.executeEnd = st();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, i, r) {
    const {
      demuxer: n,
      remuxer: o
    } = this;
    !n || !o || (n.resetInitSegment(e, t, s, i), o.resetInitSegment(e, t, s, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, i, r) {
    let n;
    return t && t.method === "SAMPLE-AES" ? n = this.transmuxSampleAes(e, t, s, i, r) : n = this.transmuxUnencrypted(e, s, i, r), n;
  }
  transmuxUnencrypted(e, t, s, i) {
    const {
      audioTrack: r,
      videoTrack: n,
      id3Track: o,
      textTrack: c
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, n, o, c, t, s, !1, this.id),
      chunkMeta: i
    };
  }
  transmuxSampleAes(e, t, s, i, r) {
    return this.demuxer.demuxSampleAes(e, t, s).then((n) => ({
      remuxResult: this.remuxer.remux(n.audioTrack, n.videoTrack, n.id3Track, n.textTrack, s, i, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: i
    } = this;
    let r;
    for (let h = 0, d = Ts.length; h < d; h++) {
      var n;
      if ((n = Ts[h].demux) != null && n.probe(e, this.logger)) {
        r = Ts[h];
        break;
      }
    }
    if (!r)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, c = this.remuxer, l = r.remux, u = r.demux;
    (!c || !(c instanceof l)) && (this.remuxer = new l(s, t, i, this.logger)), (!o || !(o instanceof u)) && (this.demuxer = new u(s, t, i, this.logger), this.probe = u.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new $i(this.config)), e;
  }
}
function Mu(a, e) {
  let t = null;
  return a.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const Zs = (a) => ({
  remuxResult: {},
  chunkMeta: a
});
function Qt(a) {
  return "then" in a && a.then instanceof Function;
}
class Nu {
  constructor(e, t, s, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null;
  }
}
class Bu {
  constructor(e, t, s, i, r, n) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = n;
  }
}
let sn = 0;
class Ba {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = sn++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (c) => {
      const l = c.data, u = this.hls;
      if (!(!u || !(l != null && l.event) || l.instanceNo !== this.instanceNo))
        switch (l.event) {
          case "init": {
            var h;
            const d = (h = this.workerContext) == null ? void 0 : h.objectURL;
            d && self.URL.revokeObjectURL(d);
            break;
          }
          case "transmuxComplete": {
            this.handleTransmuxComplete(l.data);
            break;
          }
          case "flush": {
            this.onFlush(l.data);
            break;
          }
          // pass logs from the worker thread to the main logger
          case "workerLog": {
            u.logger[l.data.logType] && u.logger[l.data.logType](l.data.message);
            break;
          }
          default: {
            l.data = l.data || {}, l.data.frag = this.frag, l.data.part = this.part, l.data.id = this.id, u.trigger(l.event, l.data);
            break;
          }
        }
    }, this.onWorkerError = (c) => {
      if (!this.hls)
        return;
      const l = new Error(`${c.message}  (${c.filename}:${c.lineno})`);
      this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.INTERNAL_EXCEPTION,
        fatal: !1,
        event: "demuxerWorker",
        error: l
      });
    };
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const n = (c, l) => {
      l = l || {}, l.frag = this.frag || void 0, c === m.ERROR && (l = l, l.parent = this.id, l.part = this.part, this.error = l.error), this.hls.trigger(c, l);
    };
    this.observer = new Hi(), this.observer.on(m.FRAG_DECRYPTED, n), this.observer.on(m.ERROR, n);
    const o = yr(r.preferManagedMediaSource);
    if (this.useWorker && typeof Worker < "u") {
      const c = this.hls.logger;
      if (r.workerPath || Kc()) {
        try {
          r.workerPath ? (c.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Hc(r.workerPath)) : (c.log(`injecting Web Worker for "${t}"`), this.workerContext = Vc());
          const {
            worker: u
          } = this.workerContext;
          u.addEventListener("message", this.onWorkerMessage), u.addEventListener("error", this.onWorkerError), u.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: o,
            id: t,
            config: ae(r)
          });
        } catch (u) {
          c.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.terminateWorker(), this.error = null, this.transmuxer = new tn(this.observer, o, r, "", t, e.logger);
        }
        return;
      }
    }
    this.transmuxer = new tn(this.observer, o, r, "", t, e.logger);
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      const e = this.instanceNo;
      this.instanceNo = sn++;
      const t = this.hls.config, s = yr(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: e,
        typeSupported: s,
        id: this.id,
        config: ae(t)
      });
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      const {
        worker: e
      } = this.workerContext;
      this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), Yc(this.hls.config.workerPath);
    }
  }
  destroy() {
    if (this.workerContext)
      this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, r, n, o, c, l, u) {
    var h, d;
    l.transmuxing.start = self.performance.now();
    const {
      instanceNo: g,
      transmuxer: f
    } = this, p = n ? n.start : r.start, y = r.decryptdata, E = this.frag, T = !(E && r.cc === E.cc), v = !(E && l.level === E.level), S = E ? l.sn - E.sn : -1, x = this.part ? l.part - this.part.index : -1, D = S === 0 && l.id > 1 && l.id === (E == null ? void 0 : E.stats.chunkCount), A = !v && (S === 1 || S === 0 && (x === 1 || D && x <= 0)), R = self.performance.now();
    (v || S || r.stats.parsing.start === 0) && (r.stats.parsing.start = R), n && (x || !A) && (n.stats.parsing.start = R);
    const b = !(E && ((h = r.initSegment) == null ? void 0 : h.url) === ((d = E.initSegment) == null ? void 0 : d.url)), L = new Bu(T, A, c, v, p, b);
    if (!A || T || b) {
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === V.MAIN ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${T}
        trackSwitch: ${v}
        contiguous: ${A}
        accurateTimeOffset: ${c}
        timeOffset: ${p}
        initSegmentChange: ${b}`);
      const C = new Nu(s, i, t, o, u);
      this.configureTransmuxer(C);
    }
    if (this.frag = r, this.part = n, this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: g,
        cmd: "demux",
        data: e,
        decryptdata: y,
        chunkMeta: l,
        state: L
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const C = f.push(e, y, l, L);
      Qt(C) ? C.then((F) => {
        this.handleTransmuxComplete(F);
      }).catch((F) => {
        this.transmuxerError(F, l, "transmuxer-interface push error");
      }) : this.handleTransmuxComplete(C);
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: t,
        cmd: "flush",
        chunkMeta: e
      });
    else if (s) {
      const i = s.flush(e);
      Qt(i) ? i.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      }) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(m.ERROR, {
      type: Y.MEDIA_ERROR,
      details: _.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      part: this.part || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  configureTransmuxer(e) {
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : s && s.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const rn = 100;
class $u extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "audio-stream-controller", V.AUDIO), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = !1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
  }
  resetItem() {
    this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (super.unregisterListeners(), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this));
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r,
    trackId: n
  }) {
    if (s === V.MAIN) {
      const o = t.cc, c = this.fragCurrent;
      if (this.initPTS[o] = {
        baseTime: i,
        timescale: r,
        trackId: n
      }, this.log(`InitPTS for cc: ${o} found from main: ${i / r} (${i}/${r}) trackId: ${n}`), this.mainAnchor = t, this.state === P.WAITING_INIT_PTS) {
        const l = this.waitingData;
        (!l && !this.loadingParts || l && l.frag.cc !== o) && this.syncWithAnchor(t, l == null ? void 0 : l.frag);
      } else !this.hls.hasEnoughToStart && c && c.cc !== o ? (c.abortRequests(), this.syncWithAnchor(t, c)) : this.state === P.IDLE && this.tick();
    }
  }
  getLoadPosition() {
    return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition();
  }
  syncWithAnchor(e, t) {
    var s;
    const i = ((s = this.mainFragLoading) == null ? void 0 : s.frag) || null;
    if (t && (i == null ? void 0 : i.cc) === t.cc)
      return;
    const r = (i || e).cc, n = this.getLevelDetails(), o = this.getLoadPosition(), c = ea(n, r, o);
    c && (this.log(`Syncing with main frag at ${c.start} cc ${c.cc}`), this.startFragRequested = !1, this.nextLoadPosition = c.start, this.resetLoadingState(), this.state === P.IDLE && this.doTickIdle());
  }
  startLoad(e, t) {
    if (!this.levels) {
      this.startPosition = e, this.state = P.STOPPED;
      return;
    }
    const s = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(rn), s > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s, this.state = P.IDLE) : this.state = P.WAITING_TRACK, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case P.IDLE:
        this.doTickIdle();
        break;
      case P.WAITING_TRACK: {
        const {
          levels: e,
          trackId: t
        } = this, s = e == null ? void 0 : e[t], i = s == null ? void 0 : s.details;
        if (i && !this.waitForLive(s)) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = P.WAITING_INIT_PTS;
        }
        break;
      }
      case P.FRAG_LOADING_WAITING_RETRY: {
        this.checkRetryDate();
        break;
      }
      case P.WAITING_INIT_PTS: {
        const e = this.waitingData;
        if (e) {
          const {
            frag: t,
            part: s,
            cache: i,
            complete: r
          } = e, n = this.mainAnchor;
          if (this.initPTS[t.cc] !== void 0) {
            this.waitingData = null, this.state = P.FRAG_LOADING;
            const o = i.flush().buffer, c = {
              frag: t,
              part: s,
              payload: o,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), r && super._handleFragmentLoadComplete(c);
          } else n && n.cc !== e.frag.cc && this.syncWithAnchor(n, e.frag);
        } else
          this.state = P.IDLE;
      }
    }
    this.onTickEnd();
  }
  resetLoadingState() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    var e;
    const {
      hls: t,
      levels: s,
      media: i,
      trackId: r
    } = this, n = t.config;
    if (!this.buffering || !i && !this.primaryPrefetch && (this.startFragRequested || !n.startFragPrefetch) || !(s != null && s[r]))
      return;
    const o = s[r], c = o.details;
    if (!c || this.waitForLive(o) || this.waitForCdnTuneIn(c)) {
      this.state = P.WAITING_TRACK, this.startFragRequested = !1;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, ne.AUDIO, V.AUDIO));
    const u = this.getFwdBufferInfo(l, V.AUDIO);
    if (u === null)
      return;
    if (!this.switchingTrack && this._streamEnded(u, c)) {
      t.trigger(m.BUFFER_EOS, {
        type: "audio"
      }), this.state = P.ENDED;
      return;
    }
    const h = u.len, d = t.maxBufferLength, g = c.fragments, f = g[0].start, p = this.getLoadPosition(), y = this.flushing ? p : u.end;
    if (this.switchingTrack && i) {
      const v = p;
      c.PTSKnown && v < f && (u.end > f || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = f + 0.05);
    }
    if (h >= d && !this.switchingTrack && y < g[g.length - 1].start)
      return;
    let E = this.getNextFragment(y, c);
    if (E && this.isLoopLoading(E, y) && (E = this.getNextFragmentLoopLoading(E, c, u, V.MAIN, d)), !E) {
      this.bufferFlushed = !0;
      return;
    }
    let T = ((e = this.mainFragLoading) == null ? void 0 : e.frag) || null;
    if (!this.audioOnly && this.startFragRequested && T && fe(E) && !E.endList && (!c.live || !this.loadingParts && y < this.hls.liveSyncPosition) && (this.fragmentTracker.getState(T) === pe.OK && (this.mainFragLoading = T = null), T && fe(T))) {
      if (E.start > T.end) {
        const S = this.fragmentTracker.getFragAtPos(y, V.MAIN);
        S && S.end > T.end && (T = S, this.mainFragLoading = {
          frag: S,
          targetBufferTime: null
        });
      }
      if (E.start > T.end)
        return;
    }
    this.loadFragment(E, o, y);
  }
  onMediaDetaching(e, t) {
    this.bufferFlushed = this.flushing = !1, super.onMediaDetaching(e, t);
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new jt(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== P.STOPPED && (this.setInterval(rn), this.state = P.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval());
  }
  onManifestLoading() {
    super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = !1, this.resetItem(), this.trackId = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
    const s = this.cachedTrackLoadedData;
    s && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(m.AUDIO_TRACK_LOADED, s));
  }
  onAudioTrackLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, {
      details: r,
      id: n,
      groupId: o,
      track: c
    } = t;
    if (!i) {
      this.warn(`Audio tracks reset while loading track ${n} "${c.name}" of "${o}"`);
      return;
    }
    const l = this.mainDetails;
    if (!l || r.endCC > l.endCC || l.expired) {
      this.cachedTrackLoadedData = t, this.state !== P.STOPPED && (this.state = P.WAITING_TRACK);
      return;
    }
    this.cachedTrackLoadedData = null, this.log(`Audio track ${n} "${c.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const u = i[n];
    let h = 0;
    if (r.live || (s = u.details) != null && s.live) {
      if (this.checkLiveUpdate(r), r.deltaUpdateFailed)
        return;
      if (u.details) {
        var d;
        h = this.alignPlaylists(r, u.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
      }
      r.alignedSliding || (Ea(r, l), r.alignedSliding || ks(r, l), h = r.fragmentStart);
    }
    u.details = r, this.levelLastLoaded = u, this.startFragRequested || this.setStartPosition(l, h), this.hls.trigger(m.AUDIO_TRACK_UPDATED, {
      details: r,
      id: n,
      groupId: t.groupId
    }), this.state === P.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = P.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      config: n,
      trackId: o,
      levels: c
    } = this;
    if (!c) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const l = c[o];
    if (!l) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const u = l.details;
    if (!u) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const h = n.defaultAudioCodec || l.audioCodec || "mp4a.40.2";
    let d = this.transmuxer;
    d || (d = this.transmuxer = new Ba(this.hls, V.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const g = this.initPTS[s.cc], f = (t = s.initSegment) == null ? void 0 : t.data;
    if (g !== void 0) {
      const y = i ? i.index : -1, E = y !== -1, T = new Ui(s.level, s.sn, s.stats.chunkCount, r.byteLength, y, E);
      d.push(r, f, h, "", s, i, u.totalduration, !1, T, g);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${u.startSN} ,${u.endSN}],track ${o}`);
      const {
        cache: p
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new Ta(),
        complete: !1
      };
      p.push(new Uint8Array(r)), this.state !== P.STOPPED && (this.state = P.WAITING_INIT_PTS);
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = null;
  }
  onBufferCreated(e, t) {
    this.bufferFlushed = this.flushing = !1;
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null);
  }
  onFragLoading(e, t) {
    !this.audioOnly && t.frag.type === V.MAIN && fe(t.frag) && (this.mainFragLoading = t, this.state === P.IDLE && this.tick());
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== V.AUDIO) {
      !this.audioOnly && s.type === V.MAIN && !s.elementaryStreams.video && !s.elementaryStreams.audiovideo && (this.audioOnly = !0, this.mainFragLoading = null);
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (fe(s)) {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(m.AUDIO_TRACK_SWITCHED, se({}, r)));
    }
    this.fragBufferedComplete(s, i), this.media && this.tick();
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = P.ERROR;
      return;
    }
    switch (t.details) {
      case _.FRAG_GAP:
      case _.FRAG_PARSING_ERROR:
      case _.FRAG_DECRYPT_ERROR:
      case _.FRAG_LOAD_ERROR:
      case _.FRAG_LOAD_TIMEOUT:
      case _.KEY_LOAD_ERROR:
      case _.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.AUDIO, t);
        break;
      case _.AUDIO_TRACK_LOAD_ERROR:
      case _.AUDIO_TRACK_LOAD_TIMEOUT:
      case _.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === P.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === Z.AUDIO_TRACK && (this.state = P.IDLE);
        break;
      case _.BUFFER_ADD_CODEC_ERROR:
      case _.BUFFER_APPEND_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
        break;
      case _.BUFFER_FULL_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case _.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== ne.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ne.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === P.ENDED && (this.state = P.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, V.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: n
    } = e, o = this.getCurrentContext(n);
    if (!o) {
      this.resetWhenMissingContext(n);
      return;
    }
    const {
      frag: c,
      part: l,
      level: u
    } = o, {
      details: h
    } = u, {
      audio: d,
      text: g,
      id3: f,
      initSegment: p
    } = r;
    if (this.fragContextChanged(c) || !h) {
      this.fragmentTracker.removeFragment(c);
      return;
    }
    if (this.state = P.PARSING, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), p != null && p.tracks) {
      const y = c.initSegment || c;
      if (this.unhandledEncryptionError(p, c))
        return;
      this._bufferInitSegment(u, p.tracks, y, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
        frag: y,
        id: s,
        tracks: p.tracks
      });
    }
    if (d) {
      const {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: v
      } = d;
      l && (l.elementaryStreams[ne.AUDIO] = {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: v
      }), c.setElementaryStreamInfo(ne.AUDIO, y, E, T, v), this.bufferFragmentData(d, c, l, n);
    }
    if (f != null && (t = f.samples) != null && t.length) {
      const y = re({
        id: s,
        frag: c,
        details: h
      }, f);
      i.trigger(m.FRAG_PARSING_METADATA, y);
    }
    if (g) {
      const y = re({
        id: s,
        frag: c,
        details: h
      }, g);
      i.trigger(m.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== P.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
      return;
    const r = t.audio;
    r.id = V.AUDIO;
    const n = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${n}/${r.codec}]`), n && n.split(",").length === 1 && (r.levelCodec = n), this.hls.trigger(m.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const c = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type,
        data: o
      };
      this.hls.trigger(m.BUFFER_APPENDING, c);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.switchingTrack || i === pe.NOT_LOADED || i === pe.PARTIAL) {
      var r;
      if (!fe(e))
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = P.WAITING_INIT_PTS;
        const n = this.mainDetails;
        n && n.fragmentStart !== t.details.fragmentStart && ks(t.details, n);
      } else
        super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    if (this.media && this.bufferedTrack) {
      const {
        name: t,
        lang: s,
        assocLang: i,
        characteristics: r,
        audioCodec: n,
        channels: o
      } = this.bufferedTrack;
      vt({
        name: t,
        lang: s,
        assocLang: i,
        characteristics: r,
        audioCodec: n,
        channels: o
      }, e, Tt) || (bs(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e);
    }
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(m.AUDIO_TRACK_SWITCHED, se({}, e));
  }
}
class Qi extends Be {
  constructor(e, t) {
    super(t, e.logger), this.hls = void 0, this.canLoad = !1, this.timer = -1, this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const i = t == null ? void 0 : t.renditionReports;
    if (i) {
      let r = -1;
      for (let n = 0; n < i.length; n++) {
        const o = i[n];
        let c;
        try {
          c = new self.URL(o.URI, t.url).href;
        } catch (l) {
          this.warn(`Could not construct new URL for Rendition Report: ${l}`), c = o.URI || "";
        }
        if (c === e) {
          r = n;
          break;
        } else c === e.substring(0, c.length) && (r = n);
      }
      if (r !== -1) {
        const n = i[r], o = parseInt(n["LAST-MSN"]) || t.lastPartSn;
        let c = parseInt(n["LAST-PART"]) || t.lastPartIndex;
        if (this.hls.config.lowLatencyMode) {
          const u = Math.min(t.age - t.partTarget, t.targetduration);
          c >= 0 && u > t.partTarget && (c += 1);
        }
        const l = s && Er(s);
        return new Tr(o, c >= 0 ? c : void 0, l);
      }
    }
  }
  loadPlaylist(e) {
    this.clearTimer();
  }
  loadingPlaylist(e, t) {
    this.clearTimer();
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  getUrlWithDirectives(e, t) {
    if (t)
      try {
        return t.addDirectives(e);
      } catch (s) {
        this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`);
      }
    return e;
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: r
    } = t, n = self.performance.now(), o = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
    i.advancedDateTime = Date.now() - o;
    const c = this.hls.config.timelineOffset;
    if (c !== i.appliedTimelineOffset) {
      const u = Math.max(c || 0, 0);
      i.appliedTimelineOffset = u, i.fragments.forEach((h) => {
        h.setStart(h.playlistOffset + u);
      });
    }
    if (i.live || s != null && s.live) {
      const u = "levelInfo" in t ? t.levelInfo : t.track;
      if (i.reloaded(s), s && i.fragments.length > 0) {
        Pc(s, i, this);
        const T = i.playlistParsingError;
        if (T) {
          this.warn(T);
          const v = this.hls;
          if (!v.config.ignorePlaylistParsingErrors) {
            var l;
            const {
              networkDetails: S
            } = t;
            v.trigger(m.ERROR, {
              type: Y.NETWORK_ERROR,
              details: _.LEVEL_PARSING_ERROR,
              fatal: !1,
              url: i.url,
              error: T,
              reason: T.message,
              level: t.level || void 0,
              parent: (l = i.fragments[0]) == null ? void 0 : l.type,
              networkDetails: S,
              stats: r
            });
            return;
          }
          i.playlistParsingError = null;
        }
      }
      i.requestScheduled === -1 && (i.requestScheduled = r.loading.start);
      const h = this.hls.mainForwardBufferInfo, d = h ? h.end - h.len : 0, g = (i.edge - d) * 1e3, f = fa(i, g);
      if (i.requestScheduled + f < n ? i.requestScheduled = n : i.requestScheduled += f, this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !i.live)
        return;
      let p, y, E;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const T = this.hls.config.lowLatencyMode, v = i.lastPartSn, S = i.endSN, x = i.lastPartIndex, D = x !== -1, A = v === S;
        D ? A ? (y = S + 1, E = T ? 0 : x) : (y = v, E = T ? x + 1 : i.maxPartIndex) : y = S + 1;
        const R = i.age, b = R + i.ageHeader;
        let L = Math.min(b - i.partTarget, i.targetduration * 1.5);
        if (L > 0) {
          if (b > i.targetduration * 3)
            this.log(`Playlist last advanced ${R.toFixed(2)}s ago. Omitting segment and part directives.`), y = void 0, E = void 0;
          else if (s != null && s.tuneInGoal && b - i.partTarget > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${L} with playlist age: ${i.age}`), L = 0;
          else {
            const C = Math.floor(L / i.targetduration);
            if (y += C, E !== void 0) {
              const F = Math.round(L % i.targetduration / i.partTarget);
              E += F;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${R.toFixed(2)}s goal: ${L} skip sn ${C} to part ${E}`);
          }
          i.tuneInGoal = L;
        }
        if (p = this.getDeliveryDirectives(i, t.deliveryDirectives, y, E), T || !A) {
          i.requestScheduled = n, this.loadingPlaylist(u, p);
          return;
        }
      } else (i.canBlockReload || i.canSkipUntil) && (p = this.getDeliveryDirectives(i, t.deliveryDirectives, y, E));
      p && y !== void 0 && i.canBlockReload && (i.requestScheduled = r.loading.first + Math.max(f - o * 2, f / 2)), this.scheduleLoading(u, p, i);
    } else
      this.clearTimer();
  }
  scheduleLoading(e, t, s) {
    const i = s || e.details;
    if (!i) {
      this.loadingPlaylist(e, t);
      return;
    }
    const r = self.performance.now(), n = i.requestScheduled;
    if (r >= n) {
      this.loadingPlaylist(e, t);
      return;
    }
    const o = n - r;
    this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), o);
  }
  getDeliveryDirectives(e, t, s, i) {
    let r = Er(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, r = ps.No), new Tr(s, i, r);
  }
  checkRetry(e) {
    const t = e.details, s = _s(e), i = e.errorAction, {
      action: r,
      retryCount: n = 0,
      retryConfig: o
    } = i || {}, c = !!i && !!o && (r === Te.RetryRequest || !i.resolved && r === Te.SendAlternateToPenaltyBox);
    if (c) {
      var l;
      if (n >= o.maxNumRetry)
        return !1;
      if (s && (l = e.context) != null && l.deliveryDirectives)
        this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const u = Bi(o, n);
        this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" in ${u}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return c;
  }
}
function $a(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0; t < a.length; t++)
    if (!Zt(a[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function Zt(a, e, t) {
  const s = a["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i) => a[i] !== e[i]);
}
function Ai(a, e) {
  return e.label.toLowerCase() === a.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (a.lang || "").toLowerCase());
}
class Uu extends Qi {
  constructor(e) {
    super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, n = this.tracksInGroup[s];
    if (!n || n.groupId !== i) {
      this.warn(`Audio track with id:${s} and group:${i} not found in active group ${n == null ? void 0 : n.groupId}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`Audio track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (i == null ? void 0 : i.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((d) => d.default) && (this.selectDefaultTrack = !1), o.forEach((d, g) => {
          d.id = g;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const c = this.hls.config.audioPreference;
      if (!r && c) {
        const d = Xe(c, o, Tt);
        if (d > -1)
          r = o[d];
        else {
          const g = Xe(c, this.tracks);
          r = this.tracks[g];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const u = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(m.AUDIO_TRACKS_UPDATED, u);
      const h = this.trackId;
      if (l !== -1 && h === -1)
        this.setAudioTrack(l);
      else if (o.length && h === -1) {
        var n;
        const d = new Error(`No audio track selected for current audio group-ID(s): ${(n = this.groupIds) == null ? void 0 : n.join(",")} track count: ${o.length}`);
        this.warn(d.message), this.hls.trigger(m.ERROR, {
          type: Y.MEDIA_ERROR,
          details: _.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: d
        });
      }
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Z.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const i = this.currentTrack;
        if (i && vt(e, i, Tt))
          return i;
        const r = Xe(e, this.tracksInGroup, Tt);
        if (r > -1) {
          const n = this.tracksInGroup[r];
          return this.setAudioTrack(r), n;
        } else if (i) {
          let n = t.loadLevel;
          n === -1 && (n = t.firstAutoLevel);
          const o = Zl(e, t.levels, s, n, Tt);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const n = Xe(e, s);
          if (n > -1)
            return s[n];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e], r = i.details && !i.details.live;
    if (e === this.trackId && i === s && r || (this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = e, this.currentTrack = i, this.hls.trigger(m.AUDIO_TRACK_SWITCHING, se({}, i)), r))
      return;
    const n = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(n);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (!(this.selectDefaultTrack && !i.default) && (!e || vt(e, i, Tt)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: i,
        assocLang: r,
        characteristics: n,
        audioCodec: o,
        channels: c
      } = e;
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (vt({
          name: s,
          lang: i,
          assocLang: r,
          characteristics: n,
          audioCodec: o,
          channels: c
        }, u, Tt))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Zt(e.attrs, u.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Zt(e.attrs, u.attrs, ["LANGUAGE"]))
          return l;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    this.shouldLoadPlaylist(t) && bs(t.url, this.hls) && this.scheduleLoading(t, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, r = this.getUrlWithDirectives(e.url, t), n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${r}`), this.hls.trigger(m.AUDIO_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
}
class Gu {
  constructor(e) {
    this.tracks = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.tracks = e;
  }
  destroy() {
    this.tracks = this.queues = null;
  }
  append(e, t, s) {
    if (this.queues === null || this.tracks === null)
      return;
    const i = this.queues[t];
    i.push(e), i.length === 1 && !s && this.executeNext(t);
  }
  appendBlocker(e) {
    return new Promise((t) => {
      const s = {
        label: "async-blocker",
        execute: t,
        onStart: () => {
        },
        onComplete: () => {
        },
        onError: () => {
        }
      };
      this.append(s, e);
    });
  }
  prependBlocker(e) {
    return new Promise((t) => {
      if (this.queues) {
        const s = {
          label: "async-blocker-prepend",
          execute: t,
          onStart: () => {
          },
          onComplete: () => {
          },
          onError: () => {
          }
        };
        this.queues[e].unshift(s);
      }
    });
  }
  removeBlockers() {
    this.queues !== null && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e) => {
      var t;
      const s = (t = e[0]) == null ? void 0 : t.label;
      (s === "async-blocker" || s === "async-blocker-prepend") && (e[0].execute(), e.splice(0, 1));
    });
  }
  unblockAudio(e) {
    if (this.queues === null)
      return;
    this.queues.audio[0] === e && this.shiftAndExecuteNext("audio");
  }
  executeNext(e) {
    if (this.queues === null || this.tracks === null)
      return;
    const t = this.queues[e];
    if (t.length) {
      const i = t[0];
      try {
        i.execute();
      } catch (r) {
        var s;
        if (i.onError(r), this.queues === null || this.tracks === null)
          return;
        const n = (s = this.tracks[e]) == null ? void 0 : s.buffer;
        n != null && n.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues !== null && (this.queues[e].shift(), this.executeNext(e));
  }
  current(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e][0]) || null;
  }
  toString() {
    const {
      queues: e,
      tracks: t
    } = this;
    return e === null || t === null ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
  }
  list(e) {
    var t, s;
    return (t = this.queues) != null && t[e] || (s = this.tracks) != null && s[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : "";
  }
  listSbInfo(e) {
    var t;
    const s = (t = this.tracks) == null ? void 0 : t[e], i = s == null ? void 0 : s.buffer;
    return i ? `SourceBuffer${i.updating ? " updating" : ""}${s.ended ? " ended" : ""}${s.ending ? " ending" : ""}` : "none";
  }
  listOps(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e].map((s) => s.label).join(", ")) || "";
  }
}
const nn = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Ua = "HlsJsTrackRemovedError";
class Ku extends Error {
  constructor(e) {
    super(e), this.name = Ua;
  }
}
class Vu extends Be {
  constructor(e, t) {
    super("buffer-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = (s) => {
      var i;
      this.hls && ((i = this.mediaSource) == null ? void 0 : i.readyState) === "open" && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = (s) => {
      const {
        media: i,
        mediaSource: r
      } = this;
      s && this.log("Media source opened"), !(!i || !r) && (r.removeEventListener("sourceopen", this._onMediaSourceOpen), i.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(m.MEDIA_ATTACHED, {
        media: i,
        mediaSource: r
      }), this.mediaSource !== null && this.checkPendingTracks());
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: i
      } = this;
      s !== i && this.error(`Media element src was set while attaching MediaSource (${i} > ${s})`);
    }, this.hls = e, this.fragmentTracker = t, this.appendSource = hl(ht(e.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners();
  }
  hasSourceTypes() {
    return Object.keys(this.tracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_APPENDING, this.onBufferAppending, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.BUFFER_EOS, this.onBufferEos, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.FRAG_PARSED, this.onFragParsed, this), e.on(m.FRAG_CHANGED, this.onFragChanged, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_APPENDING, this.onBufferAppending, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_EOS, this.onBufferEos, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.FRAG_PARSED, this.onFragParsed, this), e.off(m.FRAG_CHANGED, this.onFragChanged, this), e.off(m.ERROR, this.onError, this);
  }
  transferMedia() {
    const {
      media: e,
      mediaSource: t
    } = this;
    if (!e)
      return null;
    const s = {};
    if (this.operationQueue) {
      const r = this.isUpdating();
      r || this.operationQueue.removeBlockers();
      const n = this.isQueued();
      (r || n) && this.warn(`Transfering MediaSource with${n ? " operations in queue" : ""}${r ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
    }
    const i = this.transferData;
    return !this.sourceBufferCount && i && i.mediaSource === t ? re(s, i.tracks) : this.sourceBuffers.forEach((r) => {
      const [n] = r;
      n && (s[n] = re({}, this.tracks[n]), this.removeBuffer(n)), r[0] = r[1] = null;
    }), {
      media: e,
      mediaSource: t,
      tracks: s
    };
  }
  initTracks() {
    const e = {};
    this.sourceBuffers = [[null, null], [null, null]], this.tracks = e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
  }
  onManifestLoading() {
    this.bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    var s;
    let i = 2;
    (t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsTotal = i, this.log(`${i} bufferCodec event(s) expected.`), (s = this.transferData) != null && s.mediaSource && this.sourceBufferCount && i && this.bufferCreated();
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    this.transferData = this.overrides = void 0;
    const i = ht(this.appendSource);
    if (i) {
      const r = !!t.mediaSource;
      (r || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
      const n = this.mediaSource = t.mediaSource || new i();
      if (this.assignMediaSource(n), r)
        this._objectUrl = s.src, this.attachTransferred();
      else {
        const o = this._objectUrl = self.URL.createObjectURL(n);
        if (this.appendSource)
          try {
            s.removeAttribute("src");
            const c = self.ManagedMediaSource;
            s.disableRemotePlayback = s.disableRemotePlayback || c && n instanceof c, an(s), Hu(s, o), s.load();
          } catch {
            s.src = o;
          }
        else
          s.src = o;
      }
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  assignMediaSource(e) {
    var t, s;
    this.log(`${((t = this.transferData) == null ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${(s = e.constructor) == null ? void 0 : s.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming));
  }
  attachTransferred() {
    const e = this.media, t = this.transferData;
    if (!t || !e)
      return;
    const s = this.tracks, i = t.tracks, r = i ? Object.keys(i) : null, n = r ? r.length : 0, o = () => {
      Promise.resolve().then(() => {
        this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
      });
    };
    if (i && r && n) {
      if (!this.tracksReady) {
        this.hls.config.startFragPrefetch = !0, this.log("attachTransferred: waiting for SourceBuffer track info");
        return;
      }
      if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${ae(s, (c, l) => c === "initSegment" ? void 0 : l)};
transfer tracks: ${ae(i, (c, l) => c === "initSegment" ? void 0 : l)}}`), !Mn(i, s)) {
        t.mediaSource = null, t.tracks = void 0;
        const c = e.currentTime, l = this.details, u = Math.max(c, (l == null ? void 0 : l.fragments[0].start) || 0);
        if (u - c > 1) {
          this.log(`attachTransferred: waiting for playback to reach new tracks start time ${c} -> ${u}`);
          return;
        }
        this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(s)}") start time: ${u} currentTime: ${c}`), this.onMediaDetaching(m.MEDIA_DETACHING, {}), this.onMediaAttaching(m.MEDIA_ATTACHING, t), e.currentTime = u;
        return;
      }
      this.transferData = void 0, r.forEach((c) => {
        const l = c, u = i[l];
        if (u) {
          const h = u.buffer;
          if (h) {
            const d = this.fragmentTracker, g = u.id;
            if (d.hasFragments(g) || d.hasParts(g)) {
              const y = X.getBuffered(h);
              d.detectEvictedFragments(l, y, g, null, !0);
            }
            const f = Js(l), p = [l, h];
            this.sourceBuffers[f] = p, h.updating && this.operationQueue && this.operationQueue.prependBlocker(l), this.trackSourceBuffer(l, u);
          }
        }
      }), o(), this.bufferCreated();
    } else
      this.log("attachTransferred: MediaSource w/o SourceBuffers"), o();
  }
  get mediaSourceOpenOrEnded() {
    var e;
    const t = (e = this.mediaSource) == null ? void 0 : e.readyState;
    return t === "open" || t === "ended";
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    this.transferData = this.overrides = void 0;
    const {
      media: i,
      mediaSource: r,
      _objectUrl: n
    } = this;
    if (r) {
      if (this.log(`media source ${s ? "transferring" : "detaching"}`), s)
        this.sourceBuffers.forEach(([o]) => {
          o && this.removeBuffer(o);
        }), this.resetQueue();
      else {
        if (this.mediaSourceOpenOrEnded) {
          const o = r.readyState === "open";
          try {
            const c = r.sourceBuffers;
            for (let l = c.length; l--; )
              o && c[l].abort(), r.removeSourceBuffer(c[l]);
            o && r.endOfStream();
          } catch (c) {
            this.warn(`onMediaDetaching: ${c.message} while calling endOfStream`);
          }
        }
        this.sourceBufferCount && this.onBufferReset();
      }
      r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (r.removeEventListener("startstreaming", this._onStartStreaming), r.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    }
    i && (i.removeEventListener("emptied", this._onMediaEmptied), s || (n && self.URL.revokeObjectURL(n), this.mediaSrc === n ? (i.removeAttribute("src"), this.appendSource && an(i), i.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(m.MEDIA_DETACHED, t);
  }
  onBufferReset() {
    this.sourceBuffers.forEach(([e]) => {
      e && this.resetBuffer(e);
    }), this.initTracks();
  }
  resetBuffer(e) {
    var t;
    const s = (t = this.tracks[e]) == null ? void 0 : t.buffer;
    if (this.removeBuffer(e), s)
      try {
        var i;
        (i = this.mediaSource) != null && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(s);
      } catch (r) {
        this.warn(`onBufferReset ${e}`, r);
      }
    delete this.tracks[e];
  }
  removeBuffer(e) {
    this.removeBufferListeners(e), this.sourceBuffers[Js(e)] = [null, null];
    const t = this.tracks[e];
    t && (t.buffer = void 0);
  }
  resetQueue() {
    this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new Gu(this.tracks);
  }
  onBufferCodecs(e, t) {
    var s;
    const i = this.tracks, r = Object.keys(t);
    this.log(`BUFFER_CODECS: "${r}" (current SB count ${this.sourceBufferCount})`);
    const n = "audiovideo" in t && (i.audio || i.video) || i.audiovideo && ("audio" in t || "video" in t), o = !n && this.sourceBufferCount && this.media && r.some((c) => !i[c]);
    if (n || o) {
      this.warn(`Unsupported transition between "${Object.keys(i)}" and "${r}" SourceBuffers`);
      return;
    }
    r.forEach((c) => {
      var l, u;
      const h = t[c], {
        id: d,
        codec: g,
        levelCodec: f,
        container: p,
        metadata: y,
        supplemental: E
      } = h;
      let T = i[c];
      const v = (l = this.transferData) == null || (l = l.tracks) == null ? void 0 : l[c], S = v != null && v.buffer ? v : T, x = (S == null ? void 0 : S.pendingCodec) || (S == null ? void 0 : S.codec), D = S == null ? void 0 : S.levelCodec;
      T || (T = i[c] = {
        buffer: void 0,
        listeners: [],
        codec: g,
        supplemental: E,
        container: p,
        levelCodec: f,
        metadata: y,
        id: d
      });
      const A = ms(x, D), R = A == null ? void 0 : A.replace(nn, "$1");
      let b = ms(g, f);
      const L = (u = b) == null ? void 0 : u.replace(nn, "$1");
      b && A && R !== L && (c.slice(0, 5) === "audio" && (b = Is(b, this.appendSource)), this.log(`switching codec ${x} to ${b}`), b !== (T.pendingCodec || T.codec) && (T.pendingCodec = b), T.container = p, this.appendChangeType(c, p, b));
    }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && (this.bufferCodecEventsTotal > 1 && !this.tracks.video && !t.video && ((s = t.audio) == null ? void 0 : s.id) === "main" && (this.log("Main audio-only"), this.bufferCodecEventsTotal = 1), this.mediaSourceOpenOrEnded && this.checkPendingTracks());
  }
  get sourceBufferTracks() {
    return Object.keys(this.tracks).reduce((e, t) => {
      const s = this.tracks[t];
      return e[t] = {
        id: s.id,
        container: s.container,
        codec: s.codec,
        levelCodec: s.levelCodec
      }, e;
    }, {});
  }
  appendChangeType(e, t, s) {
    const i = `${t};codecs=${s}`, r = {
      label: `change-type=${i}`,
      execute: () => {
        const n = this.tracks[e];
        if (n) {
          const o = n.buffer;
          o != null && o.changeType && (this.log(`changing ${e} sourceBuffer type to ${i}`), o.changeType(i), n.codec = s, n.container = t);
        }
        this.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (n) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, n);
      }
    };
    this.append(r, e, this.isPending(this.tracks[e]));
  }
  blockAudio(e) {
    var t;
    const s = e.start, i = s + e.duration * 0.05;
    if (((t = this.fragmentTracker.getAppendedFrag(s, V.MAIN)) == null ? void 0 : t.gap) === !0)
      return;
    const n = {
      label: "block-audio",
      execute: () => {
        var o;
        const c = this.tracks.video;
        (this.lastVideoAppendEnd > i || c != null && c.buffer && X.isBuffered(c.buffer, i) || ((o = this.fragmentTracker.getAppendedFrag(i, V.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"));
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (o) => {
        this.warn("Error executing block-audio operation", o);
      }
    };
    this.blockedAudioAppend = {
      op: n,
      frag: e
    }, this.append(n, "audio", !0);
  }
  unblockAudio() {
    const {
      blockedAudioAppend: e,
      operationQueue: t
    } = this;
    e && t && (this.blockedAudioAppend = null, t.unblockAudio(e.op));
  }
  onBufferAppending(e, t) {
    const {
      tracks: s
    } = this, {
      data: i,
      type: r,
      parent: n,
      frag: o,
      part: c,
      chunkMeta: l,
      offset: u
    } = t, h = l.buffering[r], {
      sn: d,
      cc: g
    } = o, f = self.performance.now();
    h.start = f;
    const p = o.stats.buffering, y = c ? c.stats.buffering : null;
    p.start === 0 && (p.start = f), y && y.start === 0 && (y.start = f);
    const E = s.audio;
    let T = !1;
    r === "audio" && (E == null ? void 0 : E.container) === "audio/mpeg" && (T = !this.lastMpegAudioChunk || l.id === 1 || this.lastMpegAudioChunk.sn !== l.sn, this.lastMpegAudioChunk = l);
    const v = s.video, S = v == null ? void 0 : v.buffer;
    if (S && d !== "initSegment") {
      const A = c || o, R = this.blockedAudioAppend;
      if (r === "audio" && n !== "main" && !this.blockedAudioAppend && !(v.ending || v.ended)) {
        const L = A.start + A.duration * 0.05, C = S.buffered, F = this.currentOp("video");
        !C.length && !F ? this.blockAudio(A) : !F && !X.isBuffered(S, L) && this.lastVideoAppendEnd < L && this.blockAudio(A);
      } else if (r === "video") {
        const b = A.end;
        if (R) {
          const L = R.frag.start;
          (b > L || b < this.lastVideoAppendEnd || X.isBuffered(S, L)) && this.unblockAudio();
        }
        this.lastVideoAppendEnd = b;
      }
    }
    const x = (c || o).start, D = {
      label: `append-${r}`,
      execute: () => {
        var A;
        h.executeStart = self.performance.now();
        const R = (A = this.tracks[r]) == null ? void 0 : A.buffer;
        R && (T ? this.updateTimestampOffset(R, x, 0.1, r, d, g) : u !== void 0 && $(u) && this.updateTimestampOffset(R, u, 1e-6, r, d, g)), this.appendExecutor(i, r);
      },
      onStart: () => {
      },
      onComplete: () => {
        const A = self.performance.now();
        h.executeEnd = h.end = A, p.first === 0 && (p.first = A), y && y.first === 0 && (y.first = A);
        const R = {};
        this.sourceBuffers.forEach(([b, L]) => {
          b && (R[b] = X.getBuffered(L));
        }), this.appendErrors[r] = 0, r === "audio" || r === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(m.BUFFER_APPENDED, {
          type: r,
          frag: o,
          part: c,
          chunkMeta: l,
          parent: o.type,
          timeRanges: R
        });
      },
      onError: (A) => {
        var R;
        const b = {
          type: Y.MEDIA_ERROR,
          parent: o.type,
          details: _.BUFFER_APPEND_ERROR,
          sourceBufferName: r,
          frag: o,
          part: c,
          chunkMeta: l,
          error: A,
          err: A,
          fatal: !1
        }, L = (R = this.media) == null ? void 0 : R.error;
        if (A.code === DOMException.QUOTA_EXCEEDED_ERR || A.name == "QuotaExceededError" || "quota" in A)
          b.details = _.BUFFER_FULL_ERROR;
        else if (A.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !L)
          b.errorAction = kt(!0);
        else if (A.name === Ua && this.sourceBufferCount === 0)
          b.errorAction = kt(!0);
        else {
          const C = ++this.appendErrors[r];
          this.warn(`Failed ${C}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer (${L || "no media error"})`), (C >= this.hls.config.appendErrorMaxRetry || L) && (b.fatal = !0);
        }
        this.hls.trigger(m.ERROR, b);
      }
    };
    this.log(`queuing "${r}" append sn: ${d}${c ? " p: " + c.index : ""} of ${o.type === V.MAIN ? "level" : "track"} ${o.level} cc: ${g}`), this.append(D, r, this.isPending(this.tracks[r]));
  }
  getFlushOp(e, t, s) {
    return this.log(`queuing "${e}" remove ${t}-${s}`), {
      label: "remove",
      execute: () => {
        this.removeExecutor(e, t, s);
      },
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(m.BUFFER_FLUSHED, {
          type: e
        });
      },
      onError: (i) => {
        this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, i);
      }
    };
  }
  onBufferFlushing(e, t) {
    const {
      type: s,
      startOffset: i,
      endOffset: r
    } = t;
    s ? this.append(this.getFlushOp(s, i, r), s) : this.sourceBuffers.forEach(([n]) => {
      n && this.append(this.getFlushOp(n, i, r), n);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = [], n = i ? i.elementaryStreams : s.elementaryStreams;
    n[ne.AUDIOVIDEO] ? r.push("audiovideo") : (n[ne.AUDIO] && r.push("audio"), n[ne.VIDEO] && r.push("video"));
    const o = () => {
      const c = self.performance.now();
      s.stats.buffering.end = c, i && (i.stats.buffering.end = c);
      const l = i ? i.stats : s.stats;
      this.hls.trigger(m.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: l,
        id: s.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r).catch((c) => {
      this.warn(`Fragment buffered callback ${c}`), this.stepOperationQueue(this.sourceBufferTypes);
    });
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  get bufferedToEnd() {
    return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
      if (e) {
        const t = this.tracks[e];
        if (t)
          return !t.ended || t.ending;
      }
      return !1;
    });
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as "ending" and "ended" and queue endOfStream after remaining operations(s)
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    var s;
    this.sourceBuffers.forEach(([n]) => {
      if (n) {
        const o = this.tracks[n];
        (!t.type || t.type === n) && (o.ending = !0, o.ended || (o.ended = !0, this.log(`${n} buffer reached EOS`)));
      }
    });
    const i = ((s = this.overrides) == null ? void 0 : s.endOfStream) !== !1;
    this.sourceBufferCount > 0 && !this.sourceBuffers.some(([n]) => {
      var o;
      return n && !((o = this.tracks[n]) != null && o.ended);
    }) ? i ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
      this.tracksEnded();
      const {
        mediaSource: n
      } = this;
      if (!n || n.readyState !== "open") {
        n && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${n.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), n.endOfStream(), this.hls.trigger(m.BUFFERED_TO_END, void 0);
    })) : (this.tracksEnded(), this.hls.trigger(m.BUFFERED_TO_END, void 0)) : t.type === "video" && this.unblockAudio();
  }
  tracksEnded() {
    this.sourceBuffers.forEach(([e]) => {
      if (e !== null) {
        const t = this.tracks[e];
        t && (t.ending = !1);
      }
    });
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.updateDuration());
  }
  updateDuration() {
    this.blockUntilOpen(() => {
      const e = this.getDurationAndRange();
      e && this.updateMediaSource(e);
    });
  }
  onError(e, t) {
    if (t.details === _.BUFFER_APPEND_ERROR && t.frag) {
      var s;
      const i = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
      $(i) && i !== t.frag.level && this.resetAppendErrors();
    }
  }
  resetAppendErrors() {
    this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    };
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.sourceBufferCount)
      return;
    const i = e.config, r = s.currentTime, n = t.levelTargetDuration, o = t.live && i.liveBackBufferLength !== null ? i.liveBackBufferLength : i.backBufferLength;
    if ($(o) && o >= 0) {
      const l = Math.max(o, n), u = Math.floor(r / n) * n - l;
      this.flushBackBuffer(r, n, u);
    }
    const c = i.frontBufferFlushThreshold;
    if ($(c) && c > 0) {
      const l = Math.max(i.maxBufferLength, c), u = Math.max(l, n), h = Math.floor(r / n) * n + u;
      this.flushFrontBuffer(r, n, h);
    }
  }
  flushBackBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, r]) => {
      if (r) {
        const o = X.getBuffered(r);
        if (o.length > 0 && s > o.start(0)) {
          var n;
          this.hls.trigger(m.BACK_BUFFER_REACHED, {
            bufferEnd: s
          });
          const c = this.tracks[i];
          if ((n = this.details) != null && n.live)
            this.hls.trigger(m.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (c != null && c.ended) {
            this.log(`Cannot flush ${i} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(m.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: i
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, r]) => {
      if (r) {
        const n = X.getBuffered(r), o = n.length;
        if (o < 2)
          return;
        const c = n.start(o - 1), l = n.end(o - 1);
        if (s > c || e >= c && e <= l)
          return;
        this.hls.trigger(m.BUFFER_FLUSHING, {
          startOffset: c,
          endOffset: 1 / 0,
          type: i
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  getDurationAndRange() {
    var e;
    const {
      details: t,
      mediaSource: s
    } = this;
    if (!t || !this.media || (s == null ? void 0 : s.readyState) !== "open")
      return null;
    const i = t.edge;
    if (t.live && this.hls.config.liveDurationInfinity) {
      if (t.fragments.length && s.setLiveSeekableRange) {
        const l = Math.max(0, t.fragmentStart), u = Math.max(l, i);
        return {
          duration: 1 / 0,
          start: l,
          end: u
        };
      }
      return {
        duration: 1 / 0
      };
    }
    const r = (e = this.overrides) == null ? void 0 : e.duration;
    if (r)
      return $(r) ? {
        duration: r
      } : null;
    const n = this.media.duration, o = $(s.duration) ? s.duration : 0;
    return i > o && i > n || !$(n) ? {
      duration: i
    } : null;
  }
  updateMediaSource({
    duration: e,
    start: t,
    end: s
  }) {
    const i = this.mediaSource;
    !this.media || !i || i.readyState !== "open" || (i.duration !== e && ($(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), i.duration = e), t !== void 0 && s !== void 0 && (this.log(`MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${s}.`), i.setLiveSeekableRange(t, s)));
  }
  get tracksReady() {
    const e = this.pendingTrackCount;
    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsTotal: e,
      pendingTrackCount: t,
      tracks: s
    } = this;
    if (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${ae(s)}`), this.tracksReady) {
      var i;
      const r = (i = this.transferData) == null ? void 0 : i.tracks;
      r && Object.keys(r).length ? this.attachTransferred() : this.createSourceBuffers();
    }
  }
  bufferCreated() {
    if (this.sourceBufferCount) {
      const e = {};
      this.sourceBuffers.forEach(([t, s]) => {
        if (t) {
          const i = this.tracks[t];
          e[t] = {
            buffer: s,
            container: i.container,
            codec: i.codec,
            supplemental: i.supplemental,
            levelCodec: i.levelCodec,
            id: i.id,
            metadata: i.metadata
          };
        }
      }), this.hls.trigger(m.BUFFER_CREATED, {
        tracks: e
      }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t]) => {
        this.executeNext(t);
      });
    } else {
      const e = new Error("could not create source buffer for media codec(s)");
      this.hls.trigger(m.ERROR, {
        type: Y.MEDIA_ERROR,
        details: _.BUFFER_INCOMPATIBLE_CODECS_ERROR,
        fatal: !0,
        error: e,
        reason: e.message
      });
    }
  }
  createSourceBuffers() {
    const {
      tracks: e,
      sourceBuffers: t,
      mediaSource: s
    } = this;
    if (!s)
      throw new Error("createSourceBuffers called when mediaSource was null");
    for (const r in e) {
      const n = r, o = e[n];
      if (this.isPending(o)) {
        const c = this.getTrackCodec(o, n), l = `${o.container};codecs=${c}`;
        o.codec = c, this.log(`creating sourceBuffer(${l})${this.currentOp(n) ? " Queued" : ""} ${ae(o)}`);
        try {
          const u = s.addSourceBuffer(l), h = Js(n), d = [n, u];
          t[h] = d, o.buffer = u;
        } catch (u) {
          var i;
          this.error(`error while trying to add sourceBuffer: ${u.message}`), this.shiftAndExecuteNext(n), (i = this.operationQueue) == null || i.removeBlockers(), delete this.tracks[n], this.hls.trigger(m.ERROR, {
            type: Y.MEDIA_ERROR,
            details: _.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: u,
            sourceBufferName: n,
            mimeType: l,
            parent: o.id
          });
          return;
        }
        this.trackSourceBuffer(n, o);
      }
    }
    this.bufferCreated();
  }
  getTrackCodec(e, t) {
    const s = e.supplemental;
    let i = e.codec;
    s && (t === "video" || t === "audiovideo") && Wt(s, "video") && (i = wl(i, s));
    const r = ms(i, e.levelCodec);
    return r ? t.slice(0, 5) === "audio" ? Is(r, this.appendSource) : r : "";
  }
  trackSourceBuffer(e, t) {
    const s = t.buffer;
    if (!s)
      return;
    const i = this.getTrackCodec(t, e);
    this.tracks[e] = {
      buffer: s,
      codec: i,
      container: t.container,
      levelCodec: t.levelCodec,
      supplemental: t.supplemental,
      metadata: t.metadata,
      id: t.id,
      listeners: []
    }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (r, n) => {
      const o = n.removedRanges;
      o != null && o.length && this.hls.trigger(m.BUFFER_FLUSHED, {
        type: r
      });
    });
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  onSBUpdateStart(e) {
    const t = this.currentOp(e);
    t && t.onStart();
  }
  onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const s = this.currentOp(e);
    s && (s.onComplete(), this.shiftAndExecuteNext(e));
  }
  onSBUpdateError(e, t) {
    var s;
    const i = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${i}`, t), this.hls.trigger(m.ERROR, {
      type: Y.MEDIA_ERROR,
      details: _.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: i,
      fatal: !1
    });
    const r = this.currentOp(e);
    r && r.onError(i);
  }
  updateTimestampOffset(e, t, s, i, r, n) {
    const o = t - e.timestampOffset;
    Math.abs(o) >= s && (this.log(`Updating ${i} SourceBuffer timestampOffset to ${t} (sn: ${r} cc: ${n})`), e.timestampOffset = t);
  }
  // This method must result in an updateend event; if remove is not called, onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: r
    } = this, n = this.tracks[e], o = n == null ? void 0 : n.buffer;
    if (!i || !r || !o) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
      return;
    }
    const c = $(i.duration) ? i.duration : 1 / 0, l = $(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), h = Math.min(s, c, l);
    h > u && (!n.ending || n.ended) ? (n.ended = !1, this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`), o.remove(u, h)) : this.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.tracks[t], i = s == null ? void 0 : s.buffer;
    if (!i)
      throw new Ku(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
    s.ending = !1, s.ended = !1, i.appendBuffer(e);
  }
  blockUntilOpen(e) {
    if (this.isUpdating() || this.isQueued())
      this.blockBuffers(e).catch((t) => {
        this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
    else
      try {
        e();
      } catch (t) {
        this.warn(`Callback run without blocking ${this.operationQueue} ${t}`);
      }
  }
  isUpdating() {
    return this.sourceBuffers.some(([e, t]) => e && t.updating);
  }
  isQueued() {
    return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e));
  }
  isPending(e) {
    return !!e && !e.buffer;
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.sourceBufferTypes) {
    if (!t.length)
      return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
    const {
      operationQueue: s
    } = this, i = t.map((n) => this.appendBlocker(n));
    return t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(i).then((n) => {
      s === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
    });
  }
  stepOperationQueue(e) {
    e.forEach((t) => {
      var s;
      const i = (s = this.tracks[t]) == null ? void 0 : s.buffer;
      !i || i.updating || this.shiftAndExecuteNext(t);
    });
  }
  append(e, t, s) {
    this.operationQueue && this.operationQueue.append(e, t, s);
  }
  appendBlocker(e) {
    if (this.operationQueue)
      return this.operationQueue.appendBlocker(e);
  }
  currentOp(e) {
    return this.operationQueue ? this.operationQueue.current(e) : null;
  }
  executeNext(e) {
    e && this.operationQueue && this.operationQueue.executeNext(e);
  }
  shiftAndExecuteNext(e) {
    this.operationQueue && this.operationQueue.shiftAndExecuteNext(e);
  }
  get pendingTrackCount() {
    return Object.keys(this.tracks).reduce((e, t) => e + (this.isPending(this.tracks[t]) ? 1 : 0), 0);
  }
  get sourceBufferCount() {
    return this.sourceBuffers.reduce((e, [t]) => e + (t ? 1 : 0), 0);
  }
  get sourceBufferTypes() {
    return this.sourceBuffers.map(([e]) => e).filter((e) => !!e);
  }
  addBufferListener(e, t, s) {
    const i = this.tracks[e];
    if (!i)
      return;
    const r = i.buffer;
    if (!r)
      return;
    const n = s.bind(this, e);
    i.listeners.push({
      event: t,
      listener: n
    }), r.addEventListener(t, n);
  }
  removeBufferListeners(e) {
    const t = this.tracks[e];
    if (!t)
      return;
    const s = t.buffer;
    s && (t.listeners.forEach((i) => {
      s.removeEventListener(i.event, i.listener);
    }), t.listeners.length = 0);
  }
}
function an(a) {
  const e = a.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    a.removeChild(t);
  });
}
function Hu(a, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, a.appendChild(t);
}
function Js(a) {
  return a === "audio" ? 1 : 0;
}
class Zi {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && $(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null;
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((i, r) => this.isLevelAllowed(i) && r <= e);
    return this.clientRect = null, Zi.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return Math.min(e, this.hls.config.maxDevicePixelRatio);
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (o, c) => c ? o.width !== c.width || o.height !== c.height : !0;
    let r = e.length - 1;
    const n = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const c = e[o];
      if ((c.width >= n || c.height >= n) && i(c, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
const Yu = {
  /**
   * text file, such as a manifest or playlist
   */
  MANIFEST: "m",
  /**
   * audio only
   */
  AUDIO: "a",
  /**
   * video only
   */
  VIDEO: "v",
  /**
   * muxed audio and video
   */
  MUXED: "av",
  /**
   * init segment
   */
  INIT: "i",
  /**
   * caption or subtitle
   */
  CAPTION: "c",
  /**
   * ISOBMFF timed text track
   */
  TIMED_TEXT: "tt",
  /**
   * cryptographic key, license or certificate.
   */
  KEY: "k",
  /**
   * other
   */
  OTHER: "o"
}, Re = Yu, Wu = {
  /**
   * HTTP Live Streaming (HLS)
   */
  HLS: "h"
}, qu = Wu;
class Qe {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map((s) => s instanceof Qe ? s : new Qe(s))), this.value = e, this.params = t;
  }
}
const ju = "Dict";
function Xu(a) {
  return Array.isArray(a) ? JSON.stringify(a) : a instanceof Map ? "Map{}" : a instanceof Set ? "Set{}" : typeof a == "object" ? JSON.stringify(a) : String(a);
}
function zu(a, e, t, s) {
  return new Error(`failed to ${a} "${Xu(e)}" as ${t}`, {
    cause: s
  });
}
function Ze(a, e, t) {
  return zu("serialize", a, e, t);
}
class Ga {
  constructor(e) {
    this.description = e;
  }
}
const on = "Bare Item", Qu = "Boolean";
function Zu(a) {
  if (typeof a != "boolean")
    throw Ze(a, Qu);
  return a ? "?1" : "?0";
}
function Ju(a) {
  return btoa(String.fromCharCode(...a));
}
const eh = "Byte Sequence";
function th(a) {
  if (ArrayBuffer.isView(a) === !1)
    throw Ze(a, eh);
  return `:${Ju(a)}:`;
}
const sh = "Integer";
function ih(a) {
  return a < -999999999999999 || 999999999999999 < a;
}
function Ka(a) {
  if (ih(a))
    throw Ze(a, sh);
  return a.toString();
}
function rh(a) {
  return `@${Ka(a.getTime() / 1e3)}`;
}
function Va(a, e) {
  if (a < 0)
    return -Va(-a, e);
  const t = Math.pow(10, e);
  if (Math.abs(a * t % 1 - 0.5) < Number.EPSILON) {
    const i = Math.floor(a * t);
    return (i % 2 === 0 ? i : i + 1) / t;
  } else
    return Math.round(a * t) / t;
}
const nh = "Decimal";
function ah(a) {
  const e = Va(a, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw Ze(a, nh);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const oh = "String", lh = /[\x00-\x1f\x7f]+/;
function ch(a) {
  if (lh.test(a))
    throw Ze(a, oh);
  return `"${a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function uh(a) {
  return a.description || a.toString().slice(7, -1);
}
const hh = "Token";
function ln(a) {
  const e = uh(a);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw Ze(e, hh);
  return e;
}
function Li(a) {
  switch (typeof a) {
    case "number":
      if (!$(a))
        throw Ze(a, on);
      return Number.isInteger(a) ? Ka(a) : ah(a);
    case "string":
      return ch(a);
    case "symbol":
      return ln(a);
    case "boolean":
      return Zu(a);
    case "object":
      if (a instanceof Date)
        return rh(a);
      if (a instanceof Uint8Array)
        return th(a);
      if (a instanceof Ga)
        return ln(a);
    default:
      throw Ze(a, on);
  }
}
const dh = "Key";
function Ii(a) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(a) === !1)
    throw Ze(a, dh);
  return a;
}
function Ji(a) {
  return a == null ? "" : Object.entries(a).map(([e, t]) => t === !0 ? `;${Ii(e)}` : `;${Ii(e)}=${Li(t)}`).join("");
}
function Ha(a) {
  return a instanceof Qe ? `${Li(a.value)}${Ji(a.params)}` : Li(a);
}
function fh(a) {
  return `(${a.value.map(Ha).join(" ")})${Ji(a.params)}`;
}
function gh(a, e = {
  whitespace: !0
}) {
  if (typeof a != "object" || a == null)
    throw Ze(a, ju);
  const t = a instanceof Map ? a.entries() : Object.entries(a), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([i, r]) => {
    r instanceof Qe || (r = new Qe(r));
    let n = Ii(i);
    return r.value === !0 ? n += Ji(r.params) : (n += "=", Array.isArray(r.value) ? n += fh(r) : n += Ha(r)), n;
  }).join(`,${s}`);
}
function Ya(a, e) {
  return gh(a, e);
}
const We = "CMCD-Object", he = "CMCD-Request", yt = "CMCD-Session", nt = "CMCD-Status", mh = {
  // Object
  br: We,
  ab: We,
  d: We,
  ot: We,
  tb: We,
  tpb: We,
  lb: We,
  tab: We,
  lab: We,
  url: We,
  // Request
  pb: he,
  bl: he,
  tbl: he,
  dl: he,
  ltc: he,
  mtp: he,
  nor: he,
  nrr: he,
  rc: he,
  sn: he,
  sta: he,
  su: he,
  ttfb: he,
  ttfbb: he,
  ttlb: he,
  cmsdd: he,
  cmsds: he,
  smrt: he,
  df: he,
  cs: he,
  // TODO: Which header to put the `ts` field is not defined yet.
  ts: he,
  // Session
  cid: yt,
  pr: yt,
  sf: yt,
  sid: yt,
  st: yt,
  v: yt,
  msd: yt,
  // Status
  bs: nt,
  bsd: nt,
  cdn: nt,
  rtp: nt,
  bg: nt,
  pt: nt,
  ec: nt,
  e: nt
}, ph = {
  /**
   * keys whose values vary with each request.
   */
  REQUEST: he
};
function yh(a) {
  return Object.keys(a).reduce((e, t) => {
    var s;
    return (s = a[t]) === null || s === void 0 || s.forEach((i) => e[i] = t), e;
  }, {});
}
function Eh(a, e) {
  const t = {};
  if (!a)
    return t;
  const s = Object.keys(a), i = e ? yh(e) : {};
  return s.reduce((r, n) => {
    var o;
    const c = mh[n] || i[n] || ph.REQUEST, l = (o = r[c]) !== null && o !== void 0 ? o : r[c] = {};
    return l[n] = a[n], r;
  }, t);
}
function Th(a) {
  return ["ot", "sf", "st", "e", "sta"].includes(a);
}
function vh(a) {
  return typeof a == "number" ? $(a) : a != null && a !== "" && a !== !1;
}
const Wa = "event";
function Sh(a, e) {
  const t = new URL(a), s = new URL(e);
  if (t.origin !== s.origin)
    return a;
  const i = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1);
  for (; i[0] === r[0]; )
    i.shift(), r.shift();
  for (; r.length; )
    r.shift(), i.unshift("..");
  return i.join("/") + t.search + t.hash;
}
const vs = (a) => Math.round(a), Ri = (a, e) => Array.isArray(a) ? a.map((t) => Ri(t, e)) : a instanceof Qe && typeof a.value == "string" ? new Qe(Ri(a.value, e), a.params) : (e.baseUrl && (a = Sh(a, e.baseUrl)), e.version === 1 ? encodeURIComponent(a) : a), os = (a) => vs(a / 100) * 100, xh = (a, e) => {
  let t = a;
  return e.version >= 2 && (a instanceof Qe && typeof a.value == "string" ? t = new Qe([a]) : typeof a == "string" && (t = [a])), Ri(t, e);
}, Ah = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: vs,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: vs,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: os,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: os,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: os,
  /**
   * Next Object Request URL encoded
   */
  nor: xh,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: os,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: vs
}, qa = "request", ja = "response", er = ["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc", "msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], Lh = ["e"], Ih = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function Ns(a) {
  return Ih.test(a);
}
function Rh(a) {
  return er.includes(a) || Lh.includes(a) || Ns(a);
}
const Xa = ["d", "dl", "nor", "ot", "rtp", "su"];
function bh(a) {
  return er.includes(a) || Xa.includes(a) || Ns(a);
}
const _h = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"];
function Dh(a) {
  return er.includes(a) || Xa.includes(a) || _h.includes(a) || Ns(a);
}
const Ch = ["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
function Ph(a) {
  return Ch.includes(a) || Ns(a);
}
const kh = {
  [ja]: Dh,
  [Wa]: Rh,
  [qa]: bh
};
function za(a, e = {}) {
  const t = {};
  if (a == null || typeof a != "object")
    return t;
  const s = e.version || a.v || 1, i = e.reportingMode || qa, r = s === 1 ? Ph : kh[i];
  let n = Object.keys(a).filter(r);
  const o = e.filter;
  typeof o == "function" && (n = n.filter(o));
  const c = i === ja || i === Wa;
  c && !n.includes("ts") && n.push("ts"), s > 1 && !n.includes("v") && n.push("v");
  const l = re({}, Ah, e.formatters), u = {
    version: s,
    reportingMode: i,
    baseUrl: e.baseUrl
  };
  return n.sort().forEach((h) => {
    let d = a[h];
    const g = l[h];
    if (typeof g == "function" && (d = g(d, u)), h === "v") {
      if (s === 1)
        return;
      d = s;
    }
    h == "pr" && d === 1 || (c && h === "ts" && !$(d) && (d = Date.now()), vh(d) && (Th(h) && typeof d == "string" && (d = new Ga(d)), t[h] = d));
  }), t;
}
function wh(a, e = {}) {
  const t = {};
  if (!a)
    return t;
  const s = za(a, e), i = Eh(s, e == null ? void 0 : e.customHeaderMap);
  return Object.entries(i).reduce((r, [n, o]) => {
    const c = Ya(o, {
      whitespace: !1
    });
    return c && (r[n] = c), r;
  }, t);
}
function Oh(a, e, t) {
  return re(a, wh(e, t));
}
const Fh = "CMCD";
function Mh(a, e = {}) {
  return a ? Ya(za(a, e), {
    whitespace: !1
  }) : "";
}
function Nh(a, e = {}) {
  if (!a)
    return "";
  const t = Mh(a, e);
  return encodeURIComponent(t);
}
function Bh(a, e = {}) {
  if (!a)
    return "";
  const t = Nh(a, e);
  return `${Fh}=${t}`;
}
const cn = /CMCD=[^&#]+/;
function $h(a, e, t) {
  const s = Bh(e, t);
  if (!s)
    return a;
  if (cn.test(a))
    return a.replace(cn, s);
  const i = a.includes("?") ? "&" : "?";
  return `${a}${i}${s}`;
}
class Uh {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: Re.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const {
          frag: r,
          part: n
        } = i, o = this.hls.levels[r.level], c = this.getObjectType(r), l = {
          d: (n || r).duration * 1e3,
          ot: c
        };
        (c === Re.VIDEO || c === Re.AUDIO || c == Re.MUXED) && (l.br = o.bitrate / 1e3, l.tb = this.getTopBandwidth(c) / 1e3, l.bl = this.getBufferLength(c));
        const u = n ? this.getNextPart(n) : this.getNextFrag(r);
        u != null && u.url && u.url !== r.url && (l.nor = u.url), this.apply(i, l);
      } catch (r) {
        this.hls.logger.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || e.sessionId, this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHED, this.onMediaDetached, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHED, this.onMediaDetached, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, i;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: qu.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    re(t, this.createData());
    const s = t.ot === Re.INIT || t.ot === Re.VIDEO || t.ot === Re.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: i
    } = this;
    i && (t = Object.keys(t).reduce((n, o) => (i.includes(o) && (n[o] = t[o]), n), {}));
    const r = {
      baseUrl: e.url
    };
    this.useHeaders ? (e.headers || (e.headers = {}), Oh(e.headers, t, r)) : e.url = $h(e.url, t, r);
  }
  getNextFrag(e) {
    var t;
    const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details;
    if (s) {
      const i = e.sn - s.startSN;
      return s.fragments[i + 1];
    }
  }
  getNextPart(e) {
    var t;
    const {
      index: s,
      fragment: i
    } = e, r = (t = this.hls.levels[i.level]) == null || (t = t.details) == null ? void 0 : t.partList;
    if (r) {
      const {
        sn: n
      } = i;
      for (let o = r.length - 1; o >= 0; o--) {
        const c = r[o];
        if (c.index === s && c.fragment.sn === n)
          return r[o + 1];
      }
    }
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return Re.TIMED_TEXT;
    if (e.sn === "initSegment")
      return Re.INIT;
    if (t === "audio")
      return Re.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? Re.VIDEO : Re.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === Re.AUDIO)
      s = i.audioTracks;
    else {
      const r = i.maxAutoLevel, n = r > -1 ? r + 1 : i.levels.length;
      s = i.levels.slice(0, n);
    }
    return s.forEach((r) => {
      r.bitrate > t && (t = r.bitrate);
    }), t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.media, s = e === Re.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : X.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, n, o) {
        t(r), this.loader.load(r, n, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, n, o) {
        t(r), this.loader.load(r, n, o);
      }
    };
  }
}
const Gh = 3e5;
class Kh extends Be {
  constructor(e) {
    super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.ERROR, this.onError, this));
  }
  pathways() {
    return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []);
  }
  get pathwayPriority() {
    return this._pathwayPriority;
  }
  set pathwayPriority(e) {
    this.updatePathwayPriority(e);
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === Te.SendAlternateToPenaltyBox && s.flags === De.MoveAllAlternatesMatchingHost) {
      const i = this.levels;
      let r = this._pathwayPriority, n = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: c,
          type: l
        } = t.context;
        o && i ? n = this.getPathwayForGroupId(o, l, n) : c && (n = c);
      }
      n in this.penalizedPathways || (this.penalizedPathways[n] = performance.now()), !r && i && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== n), t.details === _.BUFFER_APPEND_ERROR && !t.fatal ? s.resolved = !0 : s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${n} levels: ${i && i.length} priorities: ${ae(r)} penalized: ${ae(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this._pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((r) => {
      i - s[r] > Gh && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      if (n in s)
        continue;
      if (n === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, c = this.hls.levels[o];
      if (t = this.getLevelsForPathway(n), t.length > 0) {
        this.log(`Setting Pathway to "${n}"`), this.pathwayId = n, pa(t), this.hls.trigger(m.LEVELS_UPDATED, {
          levels: t
        });
        const l = this.hls.levels[o];
        c && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== c.attrs["STABLE-VARIANT-ID"] && l.bitrate !== c.bitrate && this.log(`Unstable Pathways change from bitrate ${c.bitrate} to ${l.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const i = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let r = 0; r < i.length; r++)
      if (t === Z.AUDIO_TRACK && i[r].hasAudioGroup(e) || t === Z.SUBTITLE_TRACK && i[r].hasSubtitleGroup(e))
        return i[r].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, i = {};
    e.forEach((r) => {
      const {
        ID: n,
        "BASE-ID": o,
        "URI-REPLACEMENT": c
      } = r;
      if (t.some((u) => u.pathwayId === n))
        return;
      const l = this.getLevelsForPathway(o).map((u) => {
        const h = new ce(u.attrs);
        h["PATHWAY-ID"] = n;
        const d = h.AUDIO && `${h.AUDIO}_clone_${n}`, g = h.SUBTITLES && `${h.SUBTITLES}_clone_${n}`;
        d && (s[h.AUDIO] = d, h.AUDIO = d), g && (i[h.SUBTITLES] = g, h.SUBTITLES = g);
        const f = Qa(u.uri, h["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", c), p = new jt({
          attrs: h,
          audioCodec: u.audioCodec,
          bitrate: u.bitrate,
          height: u.height,
          name: u.name,
          url: f,
          videoCodec: u.videoCodec,
          width: u.width
        });
        if (u.audioGroups)
          for (let y = 1; y < u.audioGroups.length; y++)
            p.addGroupId("audio", `${u.audioGroups[y]}_clone_${n}`);
        if (u.subtitleGroups)
          for (let y = 1; y < u.subtitleGroups.length; y++)
            p.addGroupId("text", `${u.subtitleGroups[y]}_clone_${n}`);
        return p;
      });
      t.push(...l), un(this.audioTracks, s, c, n), un(this.subtitleTracks, i, c, n);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let i;
    try {
      i = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const u = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + u);
    }
    const r = {
      responseType: "json",
      url: i.href
    }, n = t.steeringManifestLoadPolicy.default, o = n.errorRetry || n.timeoutRetry || {}, c = {
      loadPolicy: n,
      timeout: n.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (u, h, d, g) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const f = u.data;
        if ((f == null ? void 0 : f.VERSION) !== 1) {
          this.log(`Steering VERSION ${f.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = f.TTL;
        const {
          "RELOAD-URI": p,
          "PATHWAY-CLONES": y,
          "PATHWAY-PRIORITY": E
        } = f;
        if (p)
          try {
            this.uri = new self.URL(p, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${p}`);
            return;
          }
        this.scheduleRefresh(this.uri || d.url), y && this.clonePathways(y);
        const T = {
          steeringManifest: f,
          url: i.toString()
        };
        this.hls.trigger(m.STEERING_MANIFEST_LOADED, T), E && this.updatePathwayPriority(E);
      },
      onError: (u, h, d, g) => {
        if (this.log(`Error loading steering manifest: ${u.code} ${u.text} (${h.url})`), this.stopLoad(), u.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${h.url} no longer available`);
          return;
        }
        let f = this.timeToLoad * 1e3;
        if (u.code === 429) {
          const p = this.loader;
          if (typeof (p == null ? void 0 : p.getResponseHeader) == "function") {
            const y = p.getResponseHeader("Retry-After");
            y && (f = parseFloat(y) * 1e3);
          }
          this.log(`Steering manifest ${h.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || h.url, f);
      },
      onTimeout: (u, h, d) => {
        this.log(`Timeout loading steering manifest (${h.url})`), this.scheduleRefresh(this.uri || h.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, c, l);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const i = (s = this.hls) == null ? void 0 : s.media;
      if (i && !i.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function un(a, e, t, s) {
  a && Object.keys(e).forEach((i) => {
    const r = a.filter((n) => n.groupId === i).map((n) => {
      const o = re({}, n);
      return o.details = void 0, o.attrs = new ce(o.attrs), o.url = o.attrs.URI = Qa(n.url, n.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    a.push(...r);
  });
}
function Qa(a, e, t, s) {
  const {
    HOST: i,
    PARAMS: r,
    [t]: n
  } = s;
  let o;
  e && (o = n == null ? void 0 : n[e], o && (a = o));
  const c = new self.URL(a);
  return i && !o && (c.host = i), r && Object.keys(r).sort().forEach((l) => {
    l && c.searchParams.set(l, r[l]);
  }), c.href;
}
class Ot extends Be {
  constructor(e) {
    super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.mediaResolved = void 0, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.mediaKeys = null, this.setMediaKeysQueue = Ot.CDMCleanupPromise ? [Ot.CDMCleanupPromise] : [], this.bannedKeyIds = {}, this.onMediaEncrypted = (t) => {
      const {
        initDataType: s,
        initData: i
      } = t, r = `"${t.type}" event: init data type: "${s}"`;
      if (this.debug(r), i !== null) {
        if (!this.keyFormatPromise) {
          let n = Object.keys(this.keySystemAccessPromises);
          n.length || (n = Kt(this.config));
          const o = n.map(Ys).filter((c) => !!c);
          this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then((n) => {
          const o = ys(n);
          if (s !== "sinf" || o !== ue.FAIRPLAY) {
            this.log(`Ignoring "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
            return;
          }
          let c;
          try {
            const g = me(new Uint8Array(i)), f = Ki(JSON.parse(g).sinf), p = Yn(f);
            if (!p)
              throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
            c = new Uint8Array(p.subarray(8, 24));
          } catch (g) {
            this.warn(`${r} Failed to parse sinf: ${g}`);
            return;
          }
          const l = ve(c), {
            keyIdToKeySessionPromise: u,
            mediaKeySessions: h
          } = this;
          let d = u[l];
          for (let g = 0; g < h.length; g++) {
            const f = h[g], p = f.decryptdata;
            if (!p.keyId)
              continue;
            const y = ve(p.keyId);
            if (Cs(c, p.keyId) || p.uri.replace(/-/g, "").indexOf(l) !== -1) {
              if (d = u[y], !d)
                continue;
              if (p.pssh)
                break;
              delete u[y], p.pssh = new Uint8Array(i), p.keyId = c, d = u[l] = d.then(() => this.generateRequestWithPreferredKeySession(f, s, i, "encrypted-event-key-match")), d.catch((E) => this.handleError(E));
              break;
            }
          }
          d || this.handleError(new Error(`Key ID ${l} not encountered in playlist. Key-system sessions ${h.length}.`));
        }).catch((n) => this.handleError(n));
      }
    }, this.onWaitingForKey = (t) => {
      this.log(`"${t.type}" event`);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.onDestroying(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.on(m.DESTROYING, this.onDestroying, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.off(m.DESTROYING, this.onDestroying, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, i = t == null ? void 0 : t[e];
    if (i)
      return i.licenseUrl;
    if (e === ue.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(e) {
    const t = this.getLicenseServerUrl(e);
    if (t === void 0)
      throw new Error(`no license server URL configured for key-system "${e}"`);
    return t;
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t == null ? void 0 : t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (n, o, c) => !!n && c.indexOf(n) === o, i = t.map((n) => n.audioCodec).filter(s), r = t.map((n) => n.videoCodec).filter(s);
    return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((n, o) => {
      const c = (l) => {
        const u = l.shift();
        this.getMediaKeysPromise(u, i, r).then((h) => n({
          keySystem: u,
          mediaKeys: h
        })).catch((h) => {
          l.length ? c(l) : h instanceof _e ? o(h) : o(new _e({
            type: Y.KEY_SYSTEM_ERROR,
            details: _.KEY_SYSTEM_NO_ACCESS,
            error: h,
            fatal: !0
          }, h.message));
        });
      };
      c(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return la === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    var i;
    const r = xc(e, t, s, this.config.drmSystemOptions || {});
    let n = this.keySystemAccessPromises[e], o = (i = n) == null ? void 0 : i.keySystemAccess;
    if (!o) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${ae(r)}`), o = this.requestMediaKeySystemAccess(e, r);
      const c = n = this.keySystemAccessPromises[e] = {
        keySystemAccess: o
      };
      return o.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), o.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const u = this.fetchServerCertificate(e);
        this.log(`Create media-keys for "${e}"`);
        const h = c.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.hasMediaKeys = !0, u.then((g) => g ? this.setMediaKeysServerCertificate(d, e, g) : d)));
        return h.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
        }), h;
      });
    }
    return o.then(() => n.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${ve(e.keyId || [])} keyUri: ${e.uri}`);
    const i = s.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: i,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), i = ls(t), r = "cenc";
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, t.pssh.buffer, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  updateKeySession(e, t) {
    const s = e.mediaKeysSession;
    return this.log(`Updating key-session "${s.sessionId}" for keyId ${ve(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`), s.update(t);
  }
  getSelectedKeySystemFormats() {
    return Object.keys(this.keySystemAccessPromises).map((e) => ({
      keySystem: e,
      hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys
    })).filter(({
      hasMediaKeys: e
    }) => !!e).map(({
      keySystem: e
    }) => Ys(e)).filter((e) => !!e);
  }
  getKeySystemAccess(e) {
    return this.getKeySystemSelectionPromise(e).then(({
      keySystem: t,
      mediaKeys: s
    }) => this.attemptSetMediaKeys(t, s));
  }
  selectKeySystem(e) {
    return new Promise((t, s) => {
      this.getKeySystemSelectionPromise(e).then(({
        keySystem: i
      }) => {
        const r = Ys(i);
        r ? t(r) : s(new Error(`Unable to find format for key-system "${i}"`));
      }).catch(s);
    });
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    const t = Kt(this.config), s = e.map(ys).filter((i) => !!i && t.indexOf(i) !== -1);
    return this.selectKeySystem(s);
  }
  getKeyStatus(e) {
    const {
      mediaKeySessions: t
    } = this;
    for (let s = 0; s < t.length; s++) {
      const i = Vh(e, t[s]);
      if (i)
        return i;
    }
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = ls(t), i = this.bannedKeyIds[s];
    if (i || this.getKeyStatus(t) === "internal-error") {
      const o = hn(i || "internal-error", t);
      return this.handleError(o, e.frag), Promise.reject(o);
    }
    const r = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${r}`);
    const n = this.keyIdToKeySessionPromise[s];
    if (!n) {
      const o = this.getKeySystemForKeyPromise(t).then(({
        keySystem: c,
        mediaKeys: l
      }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`), this.attemptSetMediaKeys(c, l).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({
        keySystem: c,
        mediaKeys: l,
        decryptdata: t
      }))))).then((c) => {
        const l = "cenc", u = t.pssh ? t.pssh.buffer : null;
        return this.generateRequestWithPreferredKeySession(c, l, u, "playlist-key");
      });
      return o.catch((c) => this.handleError(c, e.frag)), this.keyIdToKeySessionPromise[s] = o, o;
    }
    return n.catch((o) => {
      if (o instanceof _e) {
        const c = se({}, o.data);
        this.getKeyStatus(t) === "internal-error" && (c.decryptdata = t);
        const l = new _e(c, o.message);
        this.handleError(l, e.frag);
      }
    }), n;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e, t) {
    if (this.hls)
      if (e instanceof _e) {
        t && (e.data.frag = t);
        const s = e.data.decryptdata;
        this.error(`${e.message}${s ? ` (${ve(s.keyId || [])})` : ""}`), this.hls.trigger(m.ERROR, e.data);
      } else
        this.error(e.message), this.hls.trigger(m.ERROR, {
          type: Y.KEY_SYSTEM_ERROR,
          details: _.KEY_SYSTEM_NO_KEYS,
          error: e,
          fatal: !0
        });
  }
  getKeySystemForKeyPromise(e) {
    const t = ls(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = ys(e.keyFormat), r = i ? [i] : Kt(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = Kt(this.config)), e.length === 0)
      throw new _e({
        type: Y.KEY_SYSTEM_ERROR,
        details: _.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${ae({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  attemptSetMediaKeys(e, t) {
    if (this.mediaResolved = void 0, this.mediaKeys === t)
      return Promise.resolve();
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(s).then(() => this.media ? this.media.setMediaKeys(t) : new Promise((r, n) => {
      this.mediaResolved = () => {
        if (this.mediaResolved = void 0, !this.media)
          return n(new Error("Attempted to set mediaKeys without media element attached"));
        this.mediaKeys = t, this.media.setMediaKeys(t).then(r).catch(n);
      };
    }));
    return this.mediaKeys = t, this.setMediaKeysQueue.push(i), i.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => s.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, i) {
    var r;
    const n = (r = this.config.drmSystems) == null || (r = r[e.keySystem]) == null ? void 0 : r.generateRequest;
    if (n)
      try {
        const f = n.call(this.hls, t, s, e);
        if (!f)
          throw new Error("Invalid response from configured generateRequest filter");
        t = f.initDataType, s = f.initData ? f.initData : null, e.decryptdata.pssh = s ? new Uint8Array(s) : null;
      } catch (f) {
        if (this.warn(f.message), this.hls && this.hls.config.debug)
          throw f;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const o = ls(e.decryptdata), c = e.decryptdata.uri;
    this.log(`Generating key-session request for "${i}" keyId: ${o} URI: ${c} (init data type: ${t} length: ${s.byteLength})`);
    const l = new Hi(), u = e._onmessage = (f) => {
      const p = e.mediaKeysSession;
      if (!p) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: y,
        message: E
      } = f;
      this.log(`"${y}" message event for session "${p.sessionId}" message size: ${E.byteLength}`), y === "license-request" || y === "license-renewal" ? this.renewLicense(e, E).catch((T) => {
        l.eventNames().length ? l.emit("error", T) : this.handleError(T);
      }) : y === "license-release" ? e.keySystem === ue.FAIRPLAY && this.updateKeySession(e, Ei("acknowledged")).then(() => this.removeSession(e)).catch((T) => this.handleError(T)) : this.warn(`unhandled media key message type "${y}"`);
    }, h = (f, p) => {
      p.keyStatus = f;
      let y;
      f.startsWith("usable") ? l.emit("resolved") : f === "internal-error" || f === "output-restricted" || f === "output-downscaled" ? y = hn(f, p.decryptdata) : f === "expired" ? y = new Error(`key expired (keyId: ${o})`) : f === "released" ? y = new Error("key released") : f === "status-pending" || this.warn(`unhandled key status change "${f}" (keyId: ${o})`), y && (l.eventNames().length ? l.emit("error", y) : this.handleError(y));
    }, d = e._onkeystatuseschange = (f) => {
      if (!e.mediaKeysSession) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const y = this.getKeyStatuses(e);
      if (!Object.keys(y).some((S) => y[S] !== "status-pending"))
        return;
      if (y[o] === "expired") {
        this.log(`Expired key ${ae(y)} in key-session "${e.mediaKeysSession.sessionId}"`), this.renewKeySession(e);
        return;
      }
      let T = y[o];
      if (T)
        h(T, e);
      else {
        var v;
        e.keyStatusTimeouts || (e.keyStatusTimeouts = {}), (v = e.keyStatusTimeouts)[o] || (v[o] = self.setTimeout(() => {
          if (!e.mediaKeysSession || !this.mediaKeys)
            return;
          const x = this.getKeyStatus(e.decryptdata);
          if (x && x !== "status-pending")
            return this.log(`No status for keyId ${o} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${x} from other session.`), h(x, e);
          this.log(`key status for ${o} in key-session "${e.mediaKeysSession.sessionId}" timed out after 1000ms`), T = "internal-error", h(T, e);
        }, 1e3)), this.log(`No status for keyId ${o} (${ae(y)}).`);
      }
    };
    Ie(e.mediaKeysSession, "message", u), Ie(e.mediaKeysSession, "keystatuseschange", d);
    const g = new Promise((f, p) => {
      l.on("error", p), l.on("resolved", f);
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${o} URI: ${c}`);
    }).catch((f) => {
      throw new _e({
        type: Y.KEY_SYSTEM_ERROR,
        details: _.KEY_SYSTEM_NO_SESSION,
        error: f,
        decryptdata: e.decryptdata,
        fatal: !1
      }, `Error generating key-session request: ${f}`);
    }).then(() => g).catch((f) => (l.removeAllListeners(), this.removeSession(e).then(() => {
      throw f;
    }))).then(() => (l.removeAllListeners(), e));
  }
  getKeyStatuses(e) {
    const t = {};
    return e.mediaKeysSession.keyStatuses.forEach((s, i) => {
      if (typeof i == "string" && typeof s == "object") {
        const o = i;
        i = s, s = o;
      }
      const r = "buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i);
      if (e.keySystem === ue.PLAYREADY && r.length === 16) {
        const o = ve(r);
        t[o] = s, aa(r);
      }
      const n = ve(r);
      s === "internal-error" && (this.bannedKeyIds[n] = s), this.log(`key status change "${s}" for keyStatuses keyId: ${n} key-session "${e.mediaKeysSession.sessionId}"`), t[n] = s;
    }), t;
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((n, o) => {
      const c = {
        responseType: "arraybuffer",
        url: r
      }, l = t.certLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, g, f, p) => {
          n(d.data);
        },
        onError: (d, g, f, p) => {
          o(new _e({
            type: Y.KEY_SYSTEM_ERROR,
            details: _.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: se({
              url: c.url,
              data: void 0
            }, d)
          }, `"${e}" certificate request failed (${r}). Status: ${d.code} (${d.text})`));
        },
        onTimeout: (d, g, f) => {
          o(new _e({
            type: Y.KEY_SYSTEM_ERROR,
            details: _.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: {
              url: c.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (d, g, f) => {
          o(new Error("aborted"));
        }
      };
      i.load(c, u, h);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, r) => {
      e.setServerCertificate(s).then((n) => {
        this.log(`setServerCertificate ${n ? "success" : "not supported by CDM"} (${s.byteLength}) on "${t}"`), i(e);
      }).catch((n) => {
        r(new _e({
          type: Y.KEY_SYSTEM_ERROR,
          details: _.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: n,
          fatal: !0
        }, n.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new _e({
        type: Y.KEY_SYSTEM_ERROR,
        details: _.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        decryptdata: e.decryptdata,
        error: i,
        fatal: !1
      }, i.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const i = new DOMParser().parseFromString(s, "application/xml"), r = i.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let u;
      for (let h = 0, d = r.length; h < d; h++) {
        var n, o;
        u = r[h];
        const g = (n = u.querySelector("name")) == null ? void 0 : n.textContent, f = (o = u.querySelector("value")) == null ? void 0 : o.textContent;
        g && f && e.setRequestHeader(g, f);
      }
    }
    const c = i.querySelector("Challenge"), l = c == null ? void 0 : c.textContent;
    if (!l)
      throw new Error("Cannot find <Challenge> in key message");
    return Ei(atob(l));
  }
  setupLicenseXHR(e, t, s, i) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, s, i);
    }).catch((n) => {
      if (!s.decryptdata)
        throw n;
      return e.open("POST", t, !0), r.call(this.hls, e, t, s, i);
    }).then((n) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: n || i
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: i
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((i, r) => {
      const n = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${n}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let c = o.response;
            this.log(`License received ${c instanceof ArrayBuffer ? c.byteLength : c}`);
            const l = this.config.licenseResponseCallback;
            if (l)
              try {
                c = l.call(this.hls, o, n, e);
              } catch (u) {
                this.error(u);
              }
            i(c);
          } else {
            const c = s.errorRetry, l = c ? c.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || o.status >= 400 && o.status < 500)
              r(new _e({
                type: Y.KEY_SYSTEM_ERROR,
                details: _.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                decryptdata: e.decryptdata,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: n,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${n}). Status: ${o.status} (${o.statusText})`));
            else {
              const u = l - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${u} attempts left`), this.requestLicense(e, t).then(i, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, n, e, t).then(({
        xhr: c,
        licenseChallenge: l
      }) => {
        e.keySystem == ue.PLAYREADY && (l = this.unpackPlayReadyKeyMessage(c, l)), c.send(l);
      }).catch(r);
    });
  }
  onDestroying() {
    this.unregisterListeners(), this._clear();
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, Ie(s, "encrypted", this.onMediaEncrypted), Ie(s, "waitingforkey", this.onWaitingForKey);
    const i = this.mediaResolved;
    i ? i() : this.mediaKeys = s.mediaKeys;
  }
  onMediaDetached() {
    const e = this.media;
    e && (be(e, "encrypted", this.onMediaEncrypted), be(e, "waitingforkey", this.onWaitingForKey), this.media = null, this.mediaKeys = null);
  }
  _clear() {
    var e;
    this._requestLicenseFailureCount = 0, this.keyIdToKeySessionPromise = {}, this.bannedKeyIds = {};
    const t = this.mediaResolved;
    if (t && t(), !this.mediaKeys && !this.mediaKeySessions.length)
      return;
    const s = this.media, i = this.mediaKeySessions.slice();
    this.mediaKeySessions = [], this.mediaKeys = null, ut.clearKeyUriToKeyIdMap();
    const r = i.length;
    Ot.CDMCleanupPromise = Promise.all(i.map((n) => this.removeSession(n)).concat((s == null || (e = s.setMediaKeys(null)) == null ? void 0 : e.catch((n) => {
      this.log(`Could not clear media keys: ${n}`), this.hls && this.hls.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
        fatal: !1,
        error: new Error(`Could not clear media keys: ${n}`)
      });
    })) || Promise.resolve())).catch((n) => {
      this.log(`Could not close sessions and clear media keys: ${n}`), this.hls && this.hls.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
        fatal: !1,
        error: new Error(`Could not close sessions and clear media keys: ${n}`)
      });
    }).then(() => {
      r && this.log("finished closing key sessions and clearing media keys");
    });
  }
  onManifestLoading() {
    this._clear();
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((i, r) => (i.indexOf(r.keyFormat) === -1 && i.push(r.keyFormat), i), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s,
      decryptdata: i
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session "${t.sessionId}" keyId: ${ve((i == null ? void 0 : i.keyId) || [])}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const r = this.mediaKeySessions.indexOf(e);
      r > -1 && this.mediaKeySessions.splice(r, 1);
      const {
        keyStatusTimeouts: n
      } = e;
      n && Object.keys(n).forEach((l) => self.clearTimeout(n[l]));
      const {
        drmSystemOptions: o
      } = this.config;
      return (Lc(o) ? new Promise((l, u) => {
        self.setTimeout(() => u(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(l).catch(u);
      }) : Promise.resolve()).catch((l) => {
        this.log(`Could not remove session: ${l}`), this.hls && this.hls.trigger(m.ERROR, {
          type: Y.OTHER_ERROR,
          details: _.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not remove session: ${l}`)
        });
      }).then(() => t.close()).catch((l) => {
        this.log(`Could not close session: ${l}`), this.hls && this.hls.trigger(m.ERROR, {
          type: Y.OTHER_ERROR,
          details: _.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not close session: ${l}`)
        });
      });
    }
    return Promise.resolve();
  }
}
Ot.CDMCleanupPromise = void 0;
function ls(a) {
  if (!a)
    throw new Error("Could not read keyId of undefined decryptdata");
  if (a.keyId === null)
    throw new Error("keyId is null");
  return ve(a.keyId);
}
function Vh(a, e) {
  if (a.keyId && e.mediaKeysSession.keyStatuses.has(a.keyId))
    return e.mediaKeysSession.keyStatuses.get(a.keyId);
  if (a.matches(e.decryptdata))
    return e.keyStatus;
}
class _e extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
function hn(a, e) {
  const t = a === "output-restricted", s = t ? _.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : _.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
  return new _e({
    type: Y.KEY_SYSTEM_ERROR,
    details: s,
    fatal: !1,
    decryptdata: e
  }, t ? "HDCP level output restricted" : `key status changed to "${a}"`);
}
class Hh {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  onMediaDetaching() {
    this.media = null;
  }
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = i - this.lastTime, n = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, c = 1e3 * n / r, l = this.hls;
        if (l.trigger(m.FPS_DROP, {
          currentDropped: n,
          currentDecoded: o,
          totalDroppedFrames: s
        }), c > 0 && n > l.config.fpsDroppedMonitoringThreshold * o) {
          let u = l.currentLevel;
          l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (l.autoLevelCapping === -1 || l.autoLevelCapping >= u) && (u = u - 1, l.trigger(m.FPS_DROP_LEVEL_CAPPING, {
            level: u,
            droppedLevel: l.currentLevel
          }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
function Za(a, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = a, e.dispatchEvent(t);
}
function Ja(a, e) {
  const t = a.mode;
  if (t === "disabled" && (a.mode = "hidden"), a.cues && !a.cues.getCueById(e.id))
    try {
      if (a.addCue(e), !a.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      ie.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, a.addCue(i);
      } catch (i) {
        ie.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (a.mode = t);
}
function Ct(a, e) {
  const t = a.mode;
  if (t === "disabled" && (a.mode = "hidden"), a.cues)
    for (let s = a.cues.length; s--; )
      e && a.cues[s].removeEventListener("enter", e), a.removeCue(a.cues[s]);
  t === "disabled" && (a.mode = t);
}
function bi(a, e, t, s) {
  const i = a.mode;
  if (i === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0) {
    const r = Wh(a.cues, e, t);
    for (let n = 0; n < r.length; n++)
      (!s || s(r[n])) && a.removeCue(r[n]);
  }
  i === "disabled" && (a.mode = i);
}
function Yh(a, e) {
  if (e <= a[0].startTime)
    return 0;
  const t = a.length - 1;
  if (e > a[t].endTime)
    return -1;
  let s = 0, i = t, r;
  for (; s <= i; )
    if (r = Math.floor((i + s) / 2), e < a[r].startTime)
      i = r - 1;
    else if (e > a[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  return a[s].startTime - e < e - a[i].startTime ? s : i;
}
function Wh(a, e, t) {
  const s = [], i = Yh(a, e);
  if (i > -1)
    for (let r = i, n = a.length; r < n; r++) {
      const o = a[r];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function Ss(a) {
  const e = [];
  for (let t = 0; t < a.length; t++) {
    const s = a[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(a[t]);
  }
  return e;
}
class qh extends Qi {
  constructor(e) {
    super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = Ss(this.media.textTracks);
      for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
          t = s[r];
        else if (s[r].mode === "showing") {
          t = s[r];
          break;
        }
      const i = this.findTrackForTextTrack(t);
      this.subtitleTrack !== i && this.setSubtitleTrack(i);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching(e, t) {
    const s = this.media;
    if (!s)
      return;
    const i = !!t.transferMedia;
    if (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || s.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, i)
      return;
    Ss(s.textTracks).forEach((n) => {
      Ct(n);
    });
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, n = this.tracksInGroup[s];
    if (!n || n.groupId !== i) {
      this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${n == null ? void 0 : n.groupId}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`Subtitle track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((n) => (i == null ? void 0 : i.indexOf(n)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const n = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (n.length)
        this.selectDefaultTrack && !n.some((u) => u.default) && (this.selectDefaultTrack = !1), n.forEach((u, h) => {
          u.id = h;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = n;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const u = Xe(o, n);
        if (u > -1)
          r = n[u];
        else {
          const h = Xe(o, this.tracks);
          r = this.tracks[h];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const l = {
        subtitleTracks: n
      };
      this.log(`Updating subtitle tracks, ${n.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(m.SUBTITLE_TRACKS_UPDATED, l), c !== -1 && this.trackId === -1 && this.setSubtitleTrack(c);
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (!(s && !r.default || !s && !e) && (!e || vt(r, e)))
        return i;
    }
    if (e) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (Zt(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return i;
      }
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (Zt(e.attrs, r.attrs, ["LANGUAGE"]))
          return i;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if (Ai(i, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Z.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      if (e.id === -1)
        return this.setSubtitleTrack(-1), null;
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && vt(e, s))
          return s;
        const i = Xe(e, this.tracksInGroup);
        if (i > -1) {
          const r = this.tracksInGroup[i];
          return this.setSubtitleTrack(i), r;
        } else {
          if (s)
            return null;
          {
            const r = Xe(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, r = this.getUrlWithDirectives(e.url, t), n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${r}`), this.hls.trigger(m.SUBTITLE_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = Ss(e.textTracks), s = this.currentTrack;
    let i;
    if (s && (i = t.filter((r) => Ai(s, r))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== i && (r.mode = "disabled");
    }), i) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      i.mode !== r && (i.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !$(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e] || null;
    if (this.trackId = e, this.currentTrack = i, this.toggleTrackModes(), !i) {
      this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!i.details && !i.details.live;
    if (e === this.trackId && i === s && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""));
    const {
      id: n,
      groupId: o = "",
      name: c,
      type: l,
      url: u
    } = i;
    this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
      id: n,
      groupId: o,
      name: c,
      type: l,
      url: u
    });
    const h = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(h);
  }
}
function jh() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (i == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
function Yt(a) {
  let e = 5381, t = a.length;
  for (; t; )
    e = e * 33 ^ a.charCodeAt(--t);
  return (e >>> 0).toString();
}
const Ft = 0.025;
let Os = /* @__PURE__ */ (function(a) {
  return a[a.Point = 0] = "Point", a[a.Range = 1] = "Range", a;
})({});
function Xh(a, e, t) {
  return `${a.identifier}-${t + 1}-${Yt(e)}`;
}
class zh {
  constructor(e, t) {
    this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = !1, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = {
      skip: !1,
      jump: !1
    }, this.snapOptions = {
      out: !1,
      in: !1
    }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t, this.dateRange = e, this.setDateRange(e);
  }
  setDateRange(e) {
    this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions);
  }
  reset() {
    var e;
    this.appendInPlaceStarted = !1, (e = this.assetListLoader) == null || e.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null);
  }
  isAssetPastPlayoutLimit(e) {
    var t;
    if (e > 0 && e >= this.assetList.length)
      return !0;
    const s = this.playoutLimit;
    return e <= 0 || isNaN(s) ? !1 : s === 0 ? !0 : (((t = this.assetList[e]) == null ? void 0 : t.startOffset) || 0) > s;
  }
  findAssetIndex(e) {
    return this.assetList.indexOf(e);
  }
  get identifier() {
    return this.dateRange.id;
  }
  get startDate() {
    return this.dateRange.startDate;
  }
  get startTime() {
    const e = this.dateRange.startTime;
    if (this.snapOptions.out) {
      const t = this.dateRange.tagAnchor;
      if (t)
        return ei(e, t);
    }
    return e;
  }
  get startOffset() {
    return this.cue.pre ? 0 : this.startTime;
  }
  get startIsAligned() {
    if (this.startTime === 0 || this.snapOptions.out)
      return !0;
    const e = this.dateRange.tagAnchor;
    if (e) {
      const t = this.dateRange.startTime, s = ei(t, e);
      return t - s < 0.1;
    }
    return !1;
  }
  get resumptionOffset() {
    const e = this.resumeOffset, t = $(e) ? e : this.duration;
    return this.cumulativeDuration + t;
  }
  get resumeTime() {
    const e = this.startOffset + this.resumptionOffset;
    if (this.snapOptions.in) {
      const t = this.resumeAnchor;
      if (t)
        return ei(e, t);
    }
    return e;
  }
  get appendInPlace() {
    return this.appendInPlaceStarted ? !0 : this.appendInPlaceDisabled ? !1 : !!(!this.cue.once && !this.cue.pre && // preroll starts at startPosition before startPosition is known (live)
    this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < Ft));
  }
  set appendInPlace(e) {
    if (this.appendInPlaceStarted) {
      this.resetOnResume = !e;
      return;
    }
    this.appendInPlaceDisabled = !e;
  }
  // Extended timeline start time
  get timelineStart() {
    return this._timelineStart !== null ? this._timelineStart : this.startTime;
  }
  set timelineStart(e) {
    this._timelineStart = e;
  }
  get duration() {
    const e = this.playoutLimit;
    let t;
    return this._duration !== null ? t = this._duration : this.dateRange.duration ? t = this.dateRange.duration : t = this.dateRange.plannedDuration || 0, !isNaN(e) && e < t && (t = e), t;
  }
  set duration(e) {
    this._duration = e;
  }
  get cue() {
    return this.dateRange.cue;
  }
  get timelineOccupancy() {
    return this.dateRange.attr["X-TIMELINE-OCCUPIES"] === "RANGE" ? Os.Range : Os.Point;
  }
  get supplementsPrimary() {
    return this.dateRange.attr["X-TIMELINE-STYLE"] === "PRIMARY";
  }
  get contentMayVary() {
    return this.dateRange.attr["X-CONTENT-MAY-VARY"] !== "NO";
  }
  get assetUrl() {
    return this.dateRange.attr["X-ASSET-URI"];
  }
  get assetListUrl() {
    return this.dateRange.attr["X-ASSET-LIST"];
  }
  get baseUrl() {
    return this.base.url;
  }
  get assetListLoaded() {
    return this.assetList.length > 0 || this.assetListResponse !== null;
  }
  toString() {
    return Qh(this);
  }
}
function ei(a, e) {
  return a - e.start < e.duration / 2 && !(Math.abs(a - (e.start + e.duration)) < Ft) ? e.start : e.start + e.duration;
}
function eo(a, e, t) {
  const s = new self.URL(a, t);
  return s.protocol !== "data:" && s.searchParams.set("_HLS_primary_id", e), s;
}
function ti(a, e) {
  for (; (t = a.assetList[++e]) != null && t.error; )
    var t;
  return e;
}
function Qh(a) {
  return `["${a.identifier}" ${a.cue.pre ? "<pre>" : a.cue.post ? "<post>" : ""}${a.timelineStart.toFixed(2)}-${a.resumeTime.toFixed(2)}]`;
}
function Dt(a) {
  const e = a.timelineStart, t = a.duration || 0;
  return `["${a.identifier}" ${e.toFixed(2)}-${(e + t).toFixed(2)}]`;
}
class Zh {
  constructor(e, t, s, i) {
    this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = !1, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => {
      this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(m.PLAYOUT_LIMIT_REACHED, {});
    };
    const r = this.hls = new e(t);
    this.interstitial = s, this.assetItem = i;
    const n = () => {
      this.hasDetails = !0;
    };
    r.once(m.LEVEL_LOADED, n), r.once(m.AUDIO_TRACK_LOADED, n), r.once(m.SUBTITLE_TRACK_LOADED, n), r.on(m.MEDIA_ATTACHING, (o, {
      media: c
    }) => {
      this.removeMediaListeners(), this.mediaAttached = c, this.interstitial.playoutLimit && (c.addEventListener("timeupdate", this.checkPlayout), this.appendInPlace && r.on(m.BUFFER_APPENDED, () => {
        const u = this.bufferedEnd;
        this.reachedPlayout(u) && (this._bufferedEosTime = u, r.trigger(m.BUFFERED_TO_END, void 0));
      }));
    });
  }
  get appendInPlace() {
    return this.interstitial.appendInPlace;
  }
  loadSource() {
    const e = this.hls;
    if (e)
      if (e.url)
        e.levels.length && !e.started && e.startLoad(-1, !0);
      else {
        let t = this.assetItem.uri;
        try {
          t = eo(t, e.config.primarySessionId || "").href;
        } catch {
        }
        e.loadSource(t);
      }
  }
  bufferedInPlaceToEnd(e) {
    var t;
    if (!this.appendInPlace)
      return !1;
    if ((t = this.hls) != null && t.bufferedToEnd)
      return !0;
    if (!e)
      return !1;
    const s = Math.min(this._bufferedEosTime || 1 / 0, this.duration), i = this.timelineOffset, r = X.bufferInfo(e, i, 0);
    return this.getAssetTime(r.end) >= s - 0.02;
  }
  reachedPlayout(e) {
    const s = this.interstitial.playoutLimit;
    return this.startOffset + e >= s;
  }
  get destroyed() {
    var e;
    return !((e = this.hls) != null && e.userConfig);
  }
  get assetId() {
    return this.assetItem.identifier;
  }
  get interstitialId() {
    return this.assetItem.parentIdentifier;
  }
  get media() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.media) || null;
  }
  get bufferedEnd() {
    const e = this.media || this.mediaAttached;
    if (!e)
      return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
    const t = X.bufferInfo(e, e.currentTime, 1e-3);
    return this.getAssetTime(t.end);
  }
  get currentTime() {
    const e = this.media || this.mediaAttached;
    return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0;
  }
  get duration() {
    const e = this.assetItem.duration;
    if (!e)
      return 0;
    const t = this.interstitial.playoutLimit;
    if (t) {
      const s = t - this.startOffset;
      if (s > 0 && s < e)
        return s;
    }
    return e;
  }
  get remaining() {
    const e = this.duration;
    return e ? Math.max(0, e - this.currentTime) : 0;
  }
  get startOffset() {
    return this.assetItem.startOffset;
  }
  get timelineOffset() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.config.timelineOffset) || 0;
  }
  set timelineOffset(e) {
    const t = this.timelineOffset;
    if (e !== t) {
      const s = e - t;
      if (Math.abs(s) > 1 / 9e4 && this.hls) {
        if (this.hasDetails)
          throw new Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset = e;
      }
    }
  }
  getAssetTime(e) {
    const t = this.timelineOffset, s = this.duration;
    return Math.min(Math.max(0, e - t), s);
  }
  removeMediaListeners() {
    const e = this.mediaAttached;
    e && (this._currentTime = e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout));
  }
  bufferSnapShot() {
    if (this.mediaAttached) {
      var e;
      (e = this.hls) != null && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
    }
  }
  destroy() {
    this.removeMediaListeners(), this.hls && this.hls.destroy(), this.hls = null, this.tracks = this.mediaAttached = this.checkPlayout = null;
  }
  attachMedia(e) {
    var t;
    this.loadSource(), (t = this.hls) == null || t.attachMedia(e);
  }
  detachMedia() {
    var e;
    this.removeMediaListeners(), this.mediaAttached = null, (e = this.hls) == null || e.detachMedia();
  }
  resumeBuffering() {
    var e;
    (e = this.hls) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.hls) == null || e.pauseBuffering();
  }
  transferMedia() {
    var e;
    return this.bufferSnapShot(), ((e = this.hls) == null ? void 0 : e.transferMedia()) || null;
  }
  resetDetails() {
    const e = this.hls;
    if (e && this.hasDetails) {
      e.stopLoad();
      const t = (s) => delete s.details;
      e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), this.hasDetails = !1;
    }
  }
  on(e, t, s) {
    var i;
    (i = this.hls) == null || i.on(e, t);
  }
  once(e, t, s) {
    var i;
    (i = this.hls) == null || i.once(e, t);
  }
  off(e, t, s) {
    var i;
    (i = this.hls) == null || i.off(e, t);
  }
  toString() {
    var e;
    return `HlsAssetPlayer: ${Dt(this.assetItem)} ${(e = this.hls) == null ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
  }
}
const dn = 0.033;
class Jh extends Be {
  constructor(e, t) {
    super("interstitials-sched", t), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = {
      primary: 0,
      playout: 0,
      integrated: 0
    }, this.onScheduleUpdate = e;
  }
  destroy() {
    this.reset(), this.onScheduleUpdate = null;
  }
  reset() {
    this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach((e) => e.reset()), this.events = this.items = null;
  }
  resetErrorsInRange(e, t) {
    return this.events ? this.events.reduce((s, i) => e <= i.startOffset && t > i.startOffset ? (delete i.error, s + 1) : s, 0) : 0;
  }
  get duration() {
    const e = this.items;
    return e ? e[e.length - 1].end : 0;
  }
  get length() {
    return this.items ? this.items.length : 0;
  }
  getEvent(e) {
    return e && this.eventMap[e] || null;
  }
  hasEvent(e) {
    return e in this.eventMap;
  }
  findItemIndex(e, t) {
    if (e.event)
      return this.findEventIndex(e.event.identifier);
    let s = -1;
    e.nextEvent ? s = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (s = this.findEventIndex(e.previousEvent.identifier) + 1);
    const i = this.items;
    if (i)
      for (i[s] || (t === void 0 && (t = e.start), s = this.findItemIndexAtTime(t)); s >= 0 && (r = i[s]) != null && r.event; ) {
        var r;
        s--;
      }
    return s;
  }
  findItemIndexAtTime(e, t) {
    const s = this.items;
    if (s)
      for (let i = 0; i < s.length; i++) {
        let r = s[i];
        if (t && t !== "primary" && (r = r[t]), e === r.start || e > r.start && e < r.end)
          return i;
      }
    return -1;
  }
  findJumpRestrictedIndex(e, t) {
    const s = this.items;
    if (s)
      for (let i = e; i <= t && s[i]; i++) {
        const r = s[i].event;
        if (r != null && r.restrictions.jump && !r.appendInPlace)
          return i;
      }
    return -1;
  }
  findEventIndex(e) {
    const t = this.items;
    if (t)
      for (let i = t.length; i--; ) {
        var s;
        if (((s = t[i].event) == null ? void 0 : s.identifier) === e)
          return i;
      }
    return -1;
  }
  findAssetIndex(e, t) {
    const s = e.assetList, i = s.length;
    if (i > 1)
      for (let r = 0; r < i; r++) {
        const n = s[r];
        if (!n.error) {
          const o = n.timelineStart;
          if (t === o || t > o && (t < o + (n.duration || 0) || r === i - 1))
            return r;
        }
      }
    return 0;
  }
  get assetIdAtEnd() {
    var e;
    const t = (e = this.items) == null || (e = e[this.length - 1]) == null ? void 0 : e.event;
    if (t) {
      const s = t.assetList, i = s[s.length - 1];
      if (i)
        return i.identifier;
    }
    return null;
  }
  parseInterstitialDateRanges(e, t) {
    const s = e.main.details, {
      dateRanges: i
    } = s, r = this.events, n = this.parseDateRanges(i, {
      url: s.url
    }, t), o = Object.keys(i), c = r ? r.filter((l) => !o.includes(l.identifier)) : [];
    n.length && n.sort((l, u) => {
      const h = l.cue.pre, d = l.cue.post, g = u.cue.pre, f = u.cue.post;
      if (h && !g)
        return -1;
      if (g && !h || d && !f)
        return 1;
      if (f && !d)
        return -1;
      if (!h && !g && !d && !f) {
        const p = l.startTime, y = u.startTime;
        if (p !== y)
          return p - y;
      }
      return l.dateRange.tagOrder - u.dateRange.tagOrder;
    }), this.events = n, c.forEach((l) => {
      this.removeEvent(l);
    }), this.updateSchedule(e, c);
  }
  updateSchedule(e, t = [], s = !1) {
    const i = this.events || [];
    if (i.length || t.length || this.length < 2) {
      const r = this.items, n = this.parseSchedule(i, e);
      (s || t.length || (r == null ? void 0 : r.length) !== n.length || n.some((c, l) => Math.abs(c.playout.start - r[l].playout.start) > 5e-3 || Math.abs(c.playout.end - r[l].playout.end) > 5e-3)) && (this.items = n, this.onScheduleUpdate(t, r));
    }
  }
  parseDateRanges(e, t, s) {
    const i = [], r = Object.keys(e);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], c = e[o];
      if (c.isInterstitial) {
        let l = this.eventMap[o];
        l ? l.setDateRange(c) : (l = new zh(c, t), this.eventMap[o] = l, s === !1 && (l.appendInPlace = s)), i.push(l);
      }
    }
    return i;
  }
  parseSchedule(e, t) {
    const s = [], i = t.main.details, r = i.live ? 1 / 0 : i.edge;
    let n = 0;
    if (e = e.filter((c) => !c.error && !(c.cue.once && c.hasPlayed)), e.length) {
      this.resolveOffsets(e, t);
      let c = 0, l = 0;
      if (e.forEach((u, h) => {
        const d = u.cue.pre, g = u.cue.post, f = e[h - 1] || null, p = u.appendInPlace, y = g ? r : u.startOffset, E = u.duration, T = u.timelineOccupancy === Os.Range ? E : 0, v = u.resumptionOffset, S = (f == null ? void 0 : f.startTime) === y, x = y + u.cumulativeDuration;
        let D = p ? x + E : y + v;
        if (d || !g && y <= 0) {
          const R = l;
          l += T, u.timelineStart = x;
          const b = n;
          n += E, s.push({
            event: u,
            start: x,
            end: D,
            playout: {
              start: b,
              end: n
            },
            integrated: {
              start: R,
              end: l
            }
          });
        } else if (y <= r) {
          if (!S) {
            const L = y - c;
            if (L > dn) {
              const C = c, F = l;
              l += L;
              const B = n;
              n += L;
              const K = {
                previousEvent: e[h - 1] || null,
                nextEvent: u,
                start: C,
                end: C + L,
                playout: {
                  start: B,
                  end: n
                },
                integrated: {
                  start: F,
                  end: l
                }
              };
              s.push(K);
            } else L > 0 && f && (f.cumulativeDuration += L, s[s.length - 1].end = y);
          }
          g && (D = x), u.timelineStart = x;
          const R = l;
          l += T;
          const b = n;
          n += E, s.push({
            event: u,
            start: x,
            end: D,
            playout: {
              start: b,
              end: n
            },
            integrated: {
              start: R,
              end: l
            }
          });
        } else
          return;
        const A = u.resumeTime;
        g || A > r ? c = r : c = A;
      }), c < r) {
        var o;
        const u = c, h = l, d = r - c;
        l += d;
        const g = n;
        n += d, s.push({
          previousEvent: ((o = s[s.length - 1]) == null ? void 0 : o.event) || null,
          nextEvent: null,
          start: c,
          end: u + d,
          playout: {
            start: g,
            end: n
          },
          integrated: {
            start: h,
            end: l
          }
        });
      }
      this.setDurations(r, n, l);
    } else
      s.push({
        previousEvent: null,
        nextEvent: null,
        start: 0,
        end: r,
        playout: {
          start: 0,
          end: r
        },
        integrated: {
          start: 0,
          end: r
        }
      }), this.setDurations(r, r, r);
    return s;
  }
  setDurations(e, t, s) {
    this.durations = {
      primary: e,
      playout: t,
      integrated: s
    };
  }
  resolveOffsets(e, t) {
    const s = t.main.details, i = s.live ? 1 / 0 : s.edge;
    let r = 0, n = -1;
    e.forEach((o, c) => {
      const l = o.cue.pre, u = o.cue.post, h = l ? 0 : u ? i : o.startTime;
      this.updateAssetDurations(o), n === h ? o.cumulativeDuration = r : (r = 0, n = h), !u && o.snapOptions.in && (o.resumeAnchor = xt(null, s.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0), o.appendInPlace && !o.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)), !o.appendInPlace && c + 1 < e.length && e[c + 1].startTime - e[c].resumeTime < dn && (e[c + 1].appendInPlace = !1, e[c + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
      const g = $(o.resumeOffset) ? o.resumeOffset : o.duration;
      r += g;
    });
  }
  primaryCanResumeInPlaceAt(e, t) {
    const s = e.resumeTime, i = e.startTime + e.resumptionOffset;
    return Math.abs(s - i) > Ft ? (this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${i}`), !1) : !Object.keys(t).some((n) => {
      const o = t[n].details, c = o.edge;
      if (s >= c)
        return this.log(`"${e.identifier}" resumption ${s} past ${n} playlist end ${c}`), !1;
      const l = xt(null, o.fragments, s);
      if (!l)
        return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${n} playlist (${o.fragStart}-${o.fragmentEnd})`), !0;
      const u = n === "audio" ? 0.175 : 0;
      return Math.abs(l.start - s) < Ft + u || Math.abs(l.end - s) < Ft + u ? !1 : (this.log(`"${e.identifier}" resumption ${s} not aligned with ${n} fragment bounds (${l.start}-${l.end} sn: ${l.sn} cc: ${l.cc})`), !0);
    });
  }
  updateAssetDurations(e) {
    if (!e.assetListLoaded)
      return;
    const t = e.timelineStart;
    let s = 0, i = !1, r = !1;
    for (let n = 0; n < e.assetList.length; n++) {
      const o = e.assetList[n], c = t + s;
      o.startOffset = s, o.timelineStart = c, i || (i = o.duration === null), r || (r = !!o.error);
      const l = o.error ? 0 : o.duration || 0;
      s += l;
    }
    i && !r ? e.duration = Math.max(s, e.duration) : e.duration = s;
  }
  removeEvent(e) {
    e.reset(), delete this.eventMap[e.identifier];
  }
}
function Ue(a) {
  return `[${a.event ? '"' + a.event.identifier + '"' : "primary"}: ${a.start.toFixed(2)}-${a.end.toFixed(2)}]`;
}
class ed {
  constructor(e) {
    this.hls = void 0, this.hls = e;
  }
  destroy() {
    this.hls = null;
  }
  loadAssetList(e, t) {
    const s = e.assetListUrl;
    let i;
    try {
      i = eo(s, this.hls.sessionId, e.baseUrl);
    } catch (d) {
      const g = this.assignAssetListError(e, _.ASSET_LIST_LOAD_ERROR, d, s);
      this.hls.trigger(m.ERROR, g);
      return;
    }
    t && i.protocol !== "data:" && i.searchParams.set("_HLS_start_offset", "" + t);
    const r = this.hls.config, n = r.loader, o = new n(r), c = {
      responseType: "json",
      url: i.href
    }, l = r.interstitialAssetListLoadPolicy.default, u = {
      loadPolicy: l,
      timeout: l.maxLoadTimeMs,
      maxRetry: 0,
      retryDelay: 0,
      maxRetryDelay: 0
    }, h = {
      onSuccess: (d, g, f, p) => {
        const y = d.data, E = y == null ? void 0 : y.ASSETS;
        if (!Array.isArray(E)) {
          const T = this.assignAssetListError(e, _.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), f.url, g, p);
          this.hls.trigger(m.ERROR, T);
          return;
        }
        e.assetListResponse = y, this.hls.trigger(m.ASSET_LIST_LOADED, {
          event: e,
          assetListResponse: y,
          networkDetails: p
        });
      },
      onError: (d, g, f, p) => {
        const y = this.assignAssetListError(e, _.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${d.code} ${d.text} (${g.url})`), g.url, p, f);
        this.hls.trigger(m.ERROR, y);
      },
      onTimeout: (d, g, f) => {
        const p = this.assignAssetListError(e, _.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${g.url})`), g.url, d, f);
        this.hls.trigger(m.ERROR, p);
      }
    };
    return o.load(c, u, h), this.hls.trigger(m.ASSET_LIST_LOADING, {
      event: e
    }), o;
  }
  assignAssetListError(e, t, s, i, r, n) {
    return e.error = s, {
      type: Y.NETWORK_ERROR,
      details: t,
      fatal: !1,
      interstitial: e,
      url: i,
      error: s,
      networkDetails: n,
      stats: r
    };
  }
}
function fn(a) {
  var e;
  a == null || (e = a.play()) == null || e.catch(() => {
  });
}
function cs(a, e) {
  return `[${a}] Advancing timeline position to ${e}`;
}
class td extends Be {
  constructor(e, t) {
    super("interstitials", e.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = !1, this.onPlay = () => {
      this.shouldPlay = !0;
    }, this.onPause = () => {
      this.shouldPlay = !1;
    }, this.onSeeking = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled || !this.schedule)
        return;
      const i = s - this.timelinePos;
      if (Math.abs(i) < 1 / 7056e5)
        return;
      const n = i <= -0.01;
      this.timelinePos = s, this.bufferedPos = s;
      const o = this.playingItem;
      if (!o) {
        this.checkBuffer();
        return;
      }
      if (n && this.schedule.resetErrorsInRange(s, s - i) && this.updateSchedule(!0), this.checkBuffer(), n && s < o.start || s >= o.end) {
        var c;
        const g = this.findItemIndex(o);
        let f = this.schedule.findItemIndexAtTime(s);
        if (f === -1 && (f = g + (n ? -1 : 1), this.log(`seeked ${n ? "back " : ""}to position not covered by schedule ${s} (resolving from ${g} to ${f})`)), !this.isInterstitial(o) && (c = this.media) != null && c.paused && (this.shouldPlay = !1), !n && f > g) {
          const p = this.schedule.findJumpRestrictedIndex(g + 1, f);
          if (p > g) {
            this.setSchedulePosition(p);
            return;
          }
        }
        this.setSchedulePosition(f);
        return;
      }
      const l = this.playingAsset;
      if (!l) {
        if (this.playingLastItem && this.isInterstitial(o)) {
          const g = o.event.assetList[0];
          g && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(s, g));
        }
        return;
      }
      const u = l.timelineStart, h = l.duration || 0;
      if (n && s < u || s >= u + h) {
        var d;
        (d = o.event) != null && d.appendInPlace && (this.clearAssetPlayers(o.event, o), this.flushFrontBuffer(s)), this.setScheduleToAssetAtTime(s, l);
      }
    }, this.onTimeupdate = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled)
        return;
      if (s > this.timelinePos)
        this.timelinePos = s, s > this.bufferedPos && this.checkBuffer();
      else
        return;
      const i = this.playingItem;
      if (!i || this.playingLastItem)
        return;
      if (s >= i.end) {
        this.timelinePos = i.end;
        const o = this.findItemIndex(i);
        this.setSchedulePosition(o + 1);
      }
      const r = this.playingAsset;
      if (!r)
        return;
      const n = r.timelineStart + (r.duration || 0);
      s >= n && this.setScheduleToAssetAtTime(s, r);
    }, this.onScheduleUpdate = (s, i) => {
      const r = this.schedule;
      if (!r)
        return;
      const n = this.playingItem, o = r.events || [], c = r.items || [], l = r.durations, u = s.map((p) => p.identifier), h = !!(o.length || u.length);
      (h || i) && this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${c.map((p) => Ue(p))} pos: ${this.timelinePos}`), u.length && this.log(`Removed events ${u}`);
      let d = null, g = null;
      n && (d = this.updateItem(n, this.timelinePos), this.itemsMatch(n, d) ? this.playingItem = d : this.waitingItem = this.endedItem = null), this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
      const f = this.bufferingItem;
      if (f && (g = this.updateItem(f, this.bufferedPos), this.itemsMatch(f, g) ? this.bufferingItem = g : f.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(f.event, null))), s.forEach((p) => {
        p.assetList.forEach((y) => {
          this.clearAssetPlayer(y.identifier, null);
        });
      }), this.playerQueue.forEach((p) => {
        if (p.interstitial.appendInPlace) {
          const y = p.assetItem.timelineStart, E = p.timelineOffset - y;
          if (E)
            try {
              p.timelineOffset = y;
            } catch (T) {
              Math.abs(E) > Ft && this.warn(`${T} ("${p.assetId}" ${p.timelineOffset}->${y})`);
            }
        }
      }), h || i) {
        if (this.hls.trigger(m.INTERSTITIALS_UPDATED, {
          events: o.slice(0),
          schedule: c.slice(0),
          durations: l,
          removedIds: u
        }), this.isInterstitial(n) && u.includes(n.event.identifier)) {
          this.warn(`Interstitial "${n.event.identifier}" removed while playing`), this.primaryFallback(n.event);
          return;
        }
        n && this.trimInPlace(d, n), f && g !== d && this.trimInPlace(g, f), this.checkBuffer();
      }
    }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new ed(e), this.schedule = new Jh(this.onScheduleUpdate, e.logger), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e && (e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.on(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.on(m.MEDIA_ENDED, this.onMediaEnded, this), e.on(m.ERROR, this.onError, this), e.on(m.DESTROYING, this.onDestroying, this));
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.off(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(m.MEDIA_ENDED, this.onMediaEnded, this), e.off(m.ERROR, this.onError, this), e.off(m.DESTROYING, this.onDestroying, this));
  }
  startLoad() {
    this.resumeBuffering();
  }
  stopLoad() {
    this.pauseBuffering();
  }
  resumeBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.pauseBuffering();
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.schedule = this.manager = null, this.hls = this.HlsPlayerClass = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null;
  }
  onDestroying() {
    const e = this.primaryMedia || this.media;
    e && this.removeMediaListeners(e);
  }
  removeMediaListeners(e) {
    be(e, "play", this.onPlay), be(e, "pause", this.onPause), be(e, "seeking", this.onSeeking), be(e, "timeupdate", this.onTimeupdate);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    Ie(s, "seeking", this.onSeeking), Ie(s, "timeupdate", this.onTimeupdate), Ie(s, "play", this.onPlay), Ie(s, "pause", this.onPause);
  }
  onMediaAttached(e, t) {
    const s = this.effectivePlayingItem, i = this.detachedData;
    if (this.detachedData = null, s === null)
      this.checkStart();
    else if (!i) {
      this.clearScheduleState();
      const r = this.findItemIndex(s);
      this.setSchedulePosition(r);
    }
  }
  clearScheduleState() {
    this.log("clear schedule state"), this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null;
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (this.media = null, !s && (i && this.removeMediaListeners(i), this.detachedData)) {
      const r = this.getBufferingPlayer();
      r && (this.log(`Removing schedule state for detachedData and ${r}`), this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, r.detachMedia()), this.shouldPlay = !1;
    }
  }
  get interstitialsManager() {
    if (!this.hls)
      return null;
    if (this.manager)
      return this.manager;
    const e = this, t = () => e.bufferingItem || e.waitingItem, s = (h) => h && e.getAssetPlayer(h.identifier), i = (h, d, g, f, p) => {
      if (h) {
        let y = h[d].start;
        const E = h.event;
        if (E) {
          if (d === "playout" || E.timelineOccupancy !== Os.Point) {
            const T = s(g);
            (T == null ? void 0 : T.interstitial) === E && (y += T.assetItem.startOffset + T[p]);
          }
        } else {
          const T = f === "bufferedPos" ? n() : e[f];
          y += T - h.start;
        }
        return y;
      }
      return 0;
    }, r = (h, d) => {
      var g;
      if (h !== 0 && d !== "primary" && (g = e.schedule) != null && g.length) {
        var f;
        const p = e.schedule.findItemIndexAtTime(h), y = (f = e.schedule.items) == null ? void 0 : f[p];
        if (y) {
          const E = y[d].start - y.start;
          return h + E;
        }
      }
      return h;
    }, n = () => {
      const h = e.bufferedPos;
      return h === Number.MAX_VALUE ? o("primary") : Math.max(h, 0);
    }, o = (h) => {
      var d, g;
      return (d = e.primaryDetails) != null && d.live ? e.primaryDetails.edge : ((g = e.schedule) == null ? void 0 : g.durations[h]) || 0;
    }, c = (h, d) => {
      var g, f;
      const p = e.effectivePlayingItem;
      if (p != null && (g = p.event) != null && g.restrictions.skip || !e.schedule)
        return;
      e.log(`seek to ${h} "${d}"`);
      const y = e.effectivePlayingItem, E = e.schedule.findItemIndexAtTime(h, d), T = (f = e.schedule.items) == null ? void 0 : f[E], v = e.getBufferingPlayer(), S = v == null ? void 0 : v.interstitial, x = S == null ? void 0 : S.appendInPlace, D = y && e.itemsMatch(y, T);
      if (y && (x || D)) {
        const A = s(e.playingAsset), R = (A == null ? void 0 : A.media) || e.primaryMedia;
        if (R) {
          const b = d === "primary" ? R.currentTime : i(y, d, e.playingAsset, "timelinePos", "currentTime"), L = h - b, C = (x ? b : R.currentTime) + L;
          if (C >= 0 && (!A || x || C <= A.duration)) {
            R.currentTime = C;
            return;
          }
        }
      }
      if (T) {
        let A = h;
        if (d !== "primary") {
          const b = T[d].start, L = h - b;
          A = T.start + L;
        }
        const R = !e.isInterstitial(T);
        if ((!e.isInterstitial(y) || y.event.appendInPlace) && (R || T.event.appendInPlace)) {
          const b = e.media || (x ? v == null ? void 0 : v.media : null);
          b && (b.currentTime = A);
        } else if (y) {
          const b = e.findItemIndex(y);
          if (E > b) {
            const C = e.schedule.findJumpRestrictedIndex(b + 1, E);
            if (C > b) {
              e.setSchedulePosition(C);
              return;
            }
          }
          let L = 0;
          if (R)
            e.timelinePos = A, e.checkBuffer();
          else {
            const C = T.event.assetList, F = h - (T[d] || T).start;
            for (let B = C.length; B--; ) {
              const K = C[B];
              if (K.duration && F >= K.startOffset && F < K.startOffset + K.duration) {
                L = B;
                break;
              }
            }
          }
          e.setSchedulePosition(E, L);
        }
      }
    }, l = () => {
      const h = e.effectivePlayingItem;
      if (e.isInterstitial(h))
        return h;
      const d = t();
      return e.isInterstitial(d) ? d : null;
    }, u = {
      get bufferedEnd() {
        const h = t(), d = e.bufferingItem;
        if (d && d === h) {
          var g;
          return i(d, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - d.playout.start || ((g = e.bufferingAsset) == null ? void 0 : g.startOffset) || 0;
        }
        return 0;
      },
      get currentTime() {
        const h = l(), d = e.effectivePlayingItem;
        return d && d === h ? i(d, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - d.playout.start : 0;
      },
      set currentTime(h) {
        const d = l(), g = e.effectivePlayingItem;
        g && g === d && c(h + g.playout.start, "playout");
      },
      get duration() {
        const h = l();
        return h ? h.playout.end - h.playout.start : 0;
      },
      get assetPlayers() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event.assetList;
        return d ? d.map((g) => e.getAssetPlayer(g.identifier)) : [];
      },
      get playingIndex() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event;
        return d && e.effectivePlayingAsset ? d.findAssetIndex(e.effectivePlayingAsset) : -1;
      },
      get scheduleItem() {
        return l();
      }
    };
    return this.manager = {
      get events() {
        var h;
        return ((h = e.schedule) == null || (h = h.events) == null ? void 0 : h.slice(0)) || [];
      },
      get schedule() {
        var h;
        return ((h = e.schedule) == null || (h = h.items) == null ? void 0 : h.slice(0)) || [];
      },
      get interstitialPlayer() {
        return l() ? u : null;
      },
      get playerQueue() {
        return e.playerQueue.slice(0);
      },
      get bufferingAsset() {
        return e.bufferingAsset;
      },
      get bufferingItem() {
        return t();
      },
      get bufferingIndex() {
        const h = t();
        return e.findItemIndex(h);
      },
      get playingAsset() {
        return e.effectivePlayingAsset;
      },
      get playingItem() {
        return e.effectivePlayingItem;
      },
      get playingIndex() {
        const h = e.effectivePlayingItem;
        return e.findItemIndex(h);
      },
      primary: {
        get bufferedEnd() {
          return n();
        },
        get currentTime() {
          const h = e.timelinePos;
          return h > 0 ? h : 0;
        },
        set currentTime(h) {
          c(h, "primary");
        },
        get duration() {
          return o("primary");
        },
        get seekableStart() {
          var h;
          return ((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0;
        }
      },
      integrated: {
        get bufferedEnd() {
          return i(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd");
        },
        get currentTime() {
          return i(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime");
        },
        set currentTime(h) {
          c(h, "integrated");
        },
        get duration() {
          return o("integrated");
        },
        get seekableStart() {
          var h;
          return r(((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0, "integrated");
        }
      },
      skip: () => {
        const h = e.effectivePlayingItem, d = h == null ? void 0 : h.event;
        if (d && !d.restrictions.skip) {
          const g = e.findItemIndex(h);
          if (d.appendInPlace) {
            const f = h.playout.start + h.event.duration;
            c(f + 1e-3, "playout");
          } else
            e.advanceAfterAssetEnded(d, g, 1 / 0);
        }
      }
    };
  }
  // Schedule getters
  get effectivePlayingItem() {
    return this.waitingItem || this.playingItem || this.endedItem;
  }
  get effectivePlayingAsset() {
    return this.playingAsset || this.endedAsset;
  }
  get playingLastItem() {
    var e;
    const t = this.playingItem, s = (e = this.schedule) == null ? void 0 : e.items;
    return !this.playbackStarted || !t || !s ? !1 : this.findItemIndex(t) === s.length - 1;
  }
  get playbackStarted() {
    return this.effectivePlayingItem !== null;
  }
  // Media getters and event callbacks
  get currentTime() {
    var e, t;
    if (this.mediaSelection === null)
      return;
    const s = this.waitingItem || this.playingItem;
    if (this.isInterstitial(s) && !s.event.appendInPlace)
      return;
    let i = this.media;
    !i && (e = this.bufferingItem) != null && (e = e.event) != null && e.appendInPlace && (i = this.primaryMedia);
    const r = (t = i) == null ? void 0 : t.currentTime;
    if (!(r === void 0 || !$(r)))
      return r;
  }
  get primaryMedia() {
    var e;
    return this.media || ((e = this.detachedData) == null ? void 0 : e.media) || null;
  }
  isInterstitial(e) {
    return !!(e != null && e.event);
  }
  retreiveMediaSource(e, t) {
    const s = this.getAssetPlayer(e);
    s && this.transferMediaFromPlayer(s, t);
  }
  transferMediaFromPlayer(e, t) {
    const s = e.interstitial.appendInPlace, i = e.media;
    if (s && i === this.primaryMedia) {
      if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && i) {
        this.detachedData = {
          media: i
        };
        return;
      }
      const r = e.transferMedia();
      this.log(`transfer MediaSource from ${e} ${ae(r)}`), this.detachedData = r;
    } else t && i && (this.shouldPlay || (this.shouldPlay = !i.paused));
  }
  transferMediaTo(e, t) {
    var s, i;
    if (e.media === t)
      return;
    let r = null;
    const n = this.hls, o = e !== n, c = o && e.interstitial.appendInPlace, l = (s = this.detachedData) == null ? void 0 : s.mediaSource;
    let u;
    if (n.media)
      c && (r = n.transferMedia(), this.detachedData = r), u = "Primary";
    else if (l) {
      const f = this.getBufferingPlayer();
      f ? (r = f.transferMedia(), u = `${f}`) : u = "detached MediaSource";
    } else
      u = "detached media";
    if (!r) {
      if (l)
        r = this.detachedData, this.log(`using detachedData: MediaSource ${ae(r)}`);
      else if (!this.detachedData || n.media === t) {
        const f = this.playerQueue;
        f.length > 1 && f.forEach((p) => {
          if (o && p.interstitial.appendInPlace !== c) {
            const y = p.interstitial;
            this.clearInterstitial(p.interstitial, null), y.appendInPlace = !1, y.appendInPlace && this.warn(`Could not change append strategy for queued assets ${y}`);
          }
        }), this.hls.detachMedia(), this.detachedData = {
          media: t
        };
      }
    }
    const h = r && "mediaSource" in r && ((i = r.mediaSource) == null ? void 0 : i.readyState) !== "closed", d = h && r ? r : t;
    this.log(`${h ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${u} (media.currentTime: ${t.currentTime})`);
    const g = this.schedule;
    if (d === r && g) {
      const f = o && e.assetId === g.assetIdAtEnd;
      d.overrides = {
        duration: g.duration,
        endOfStream: !o || f,
        cueRemoval: !o
      };
    }
    e.attachMedia(d);
  }
  onInterstitialCueEnter() {
    this.onTimeupdate();
  }
  // Scheduling methods
  checkStart() {
    const e = this.schedule, t = e == null ? void 0 : e.events;
    if (!t || this.playbackDisabled || !this.media)
      return;
    this.bufferedPos === -1 && (this.bufferedPos = 0);
    const s = this.timelinePos, i = this.effectivePlayingItem;
    if (s === -1) {
      const r = this.hls.startPosition;
      if (this.log(cs("checkStart", r)), this.timelinePos = r, t.length && t[0].cue.pre) {
        const n = e.findEventIndex(t[0].identifier);
        this.setSchedulePosition(n);
      } else if (r >= 0 || !this.primaryLive) {
        const n = this.timelinePos = r > 0 ? r : 0, o = e.findItemIndexAtTime(n);
        this.setSchedulePosition(o);
      }
    } else if (i && !this.playingItem) {
      const r = e.findItemIndex(i);
      this.setSchedulePosition(r);
    }
  }
  advanceAssetBuffering(e, t) {
    const s = e.event, i = s.findAssetIndex(t), r = ti(s, i);
    if (!s.isAssetPastPlayoutLimit(r))
      this.bufferedToEvent(e, r);
    else if (this.schedule) {
      var n;
      const o = (n = this.schedule.items) == null ? void 0 : n[this.findItemIndex(e) + 1];
      o && this.bufferedToItem(o);
    }
  }
  advanceAfterAssetEnded(e, t, s) {
    const i = ti(e, s);
    if (e.isAssetPastPlayoutLimit(i)) {
      if (this.schedule) {
        const r = this.schedule.items;
        if (r) {
          const n = t + 1, o = r.length;
          if (n >= o) {
            this.setSchedulePosition(-1);
            return;
          }
          const c = e.resumeTime;
          this.timelinePos < c && (this.log(cs("advanceAfterAssetEnded", c)), this.timelinePos = c, e.appendInPlace && this.advanceInPlace(c), this.checkBuffer(this.bufferedPos < c)), this.setSchedulePosition(n);
        }
      }
    } else {
      if (e.appendInPlace) {
        const r = e.assetList[i];
        r && this.advanceInPlace(r.timelineStart);
      }
      this.setSchedulePosition(t, i);
    }
  }
  setScheduleToAssetAtTime(e, t) {
    const s = this.schedule;
    if (!s)
      return;
    const i = t.parentIdentifier, r = s.getEvent(i);
    if (r) {
      const n = s.findEventIndex(i), o = s.findAssetIndex(r, e);
      this.advanceAfterAssetEnded(r, n, o - 1);
    }
  }
  setSchedulePosition(e, t) {
    var s;
    const i = (s = this.schedule) == null ? void 0 : s.items;
    if (!i || this.playbackDisabled)
      return;
    const r = e >= 0 ? i[e] : null;
    this.log(`setSchedulePosition ${e}, ${t} (${r && Ue(r)}) pos: ${this.timelinePos}`);
    const n = this.waitingItem || this.playingItem, o = this.playingLastItem;
    if (this.isInterstitial(n)) {
      const u = n.event, h = this.playingAsset, d = h == null ? void 0 : h.identifier, g = d ? this.getAssetPlayer(d) : null;
      if (g && d && (!this.eventItemsMatch(n, r) || t !== void 0 && d !== u.assetList[t].identifier)) {
        var c;
        const f = u.findAssetIndex(h);
        if (this.log(`INTERSTITIAL_ASSET_ENDED ${f + 1}/${u.assetList.length} ${Dt(h)}`), this.endedAsset = h, this.playingAsset = null, this.hls.trigger(m.INTERSTITIAL_ASSET_ENDED, {
          asset: h,
          assetListIndex: f,
          event: u,
          schedule: i.slice(0),
          scheduleIndex: e,
          player: g
        }), n !== this.playingItem) {
          this.itemsMatch(n, this.playingItem) && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          !this.playingAsset && this.advanceAfterAssetEnded(u, this.findItemIndex(this.playingItem), f);
          return;
        }
        this.retreiveMediaSource(d, r), g.media && !((c = this.detachedData) != null && c.mediaSource) && g.detachMedia();
      }
      if (!this.eventItemsMatch(n, r) && (this.endedItem = n, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${u} ${Ue(n)}`), u.hasPlayed = !0, this.hls.trigger(m.INTERSTITIAL_ENDED, {
        event: u,
        schedule: i.slice(0),
        scheduleIndex: e
      }), u.cue.once)) {
        var l;
        this.updateSchedule();
        const f = (l = this.schedule) == null ? void 0 : l.items;
        if (r && f) {
          const p = this.findItemIndex(r);
          this.advanceSchedule(p, f, t, n, o);
        }
        return;
      }
    }
    this.advanceSchedule(e, i, t, n, o);
  }
  advanceSchedule(e, t, s, i, r) {
    const n = this.schedule;
    if (!n)
      return;
    const o = t[e] || null, c = this.primaryMedia, l = this.playerQueue;
    if (l.length && l.forEach((u) => {
      const h = u.interstitial, d = n.findEventIndex(h.identifier);
      (d < e || d > e + 1) && this.clearInterstitial(h, o);
    }), this.isInterstitial(o)) {
      this.timelinePos = Math.min(Math.max(this.timelinePos, o.start), o.end);
      const u = o.event;
      if (s === void 0) {
        s = n.findAssetIndex(u, this.timelinePos);
        const f = ti(u, s - 1);
        if (u.isAssetPastPlayoutLimit(f) || u.appendInPlace && this.timelinePos === o.end) {
          this.advanceAfterAssetEnded(u, e, s);
          return;
        }
        s = f;
      }
      const h = this.waitingItem;
      this.assetsBuffered(o, c) || this.setBufferingItem(o);
      let d = this.preloadAssets(u, s);
      if (this.eventItemsMatch(o, h || i) || (this.waitingItem = o, this.log(`INTERSTITIAL_STARTED ${Ue(o)} ${u.appendInPlace ? "append in place" : ""}`), this.hls.trigger(m.INTERSTITIAL_STARTED, {
        event: u,
        schedule: t.slice(0),
        scheduleIndex: e
      })), !u.assetListLoaded) {
        this.log(`Waiting for ASSET-LIST to complete loading ${u}`);
        return;
      }
      if (u.assetListLoader && (u.assetListLoader.destroy(), u.assetListLoader = void 0), !c) {
        this.log(`Waiting for attachMedia to start Interstitial ${u}`);
        return;
      }
      this.waitingItem = this.endedItem = null, this.playingItem = o;
      const g = u.assetList[s];
      if (!g) {
        this.advanceAfterAssetEnded(u, e, s || 0);
        return;
      }
      if (d || (d = this.getAssetPlayer(g.identifier)), d === null || d.destroyed) {
        const f = u.assetList.length;
        this.warn(`asset ${s + 1}/${f} player destroyed ${u}`), d = this.createAssetPlayer(u, g, s), d.loadSource();
      }
      if (!this.eventItemsMatch(o, this.bufferingItem) && u.appendInPlace && this.isAssetBuffered(g))
        return;
      this.startAssetPlayer(d, s, t, e, c), this.shouldPlay && fn(d.media);
    } else o ? (this.resumePrimary(o, e, i), this.shouldPlay && fn(this.hls.media)) : r && this.isInterstitial(i) && (this.endedItem = null, this.playingItem = i, i.event.appendInPlace || this.attachPrimary(n.durations.primary, null));
  }
  get playbackDisabled() {
    return this.hls.config.enableInterstitialPlayback === !1;
  }
  get primaryDetails() {
    var e;
    return (e = this.mediaSelection) == null ? void 0 : e.main.details;
  }
  get primaryLive() {
    var e;
    return !!((e = this.primaryDetails) != null && e.live);
  }
  resumePrimary(e, t, s) {
    var i, r;
    if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${Ue(e)}`), !((i = this.detachedData) != null && i.mediaSource)) {
      let o = this.timelinePos;
      (o < e.start || o >= e.end) && (o = this.getPrimaryResumption(e, t), this.log(cs("resumePrimary", o)), this.timelinePos = o), this.attachPrimary(o, e);
    }
    if (!s)
      return;
    const n = (r = this.schedule) == null ? void 0 : r.items;
    n && (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${Ue(e)}`), this.hls.trigger(m.INTERSTITIALS_PRIMARY_RESUMED, {
      schedule: n.slice(0),
      scheduleIndex: t
    }), this.checkBuffer());
  }
  getPrimaryResumption(e, t) {
    const s = e.start;
    if (this.primaryLive) {
      const i = this.primaryDetails;
      if (t === 0)
        return this.hls.startPosition;
      if (i && (s < i.fragmentStart || s > i.edge))
        return this.hls.liveSyncPosition || -1;
    }
    return s;
  }
  isAssetBuffered(e) {
    const t = this.getAssetPlayer(e.identifier);
    return t != null && t.hls ? t.hls.bufferedToEnd : X.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0);
  }
  attachPrimary(e, t, s) {
    t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
    const i = this.primaryMedia;
    if (!i)
      return;
    const r = this.hls;
    r.media ? this.checkBuffer() : (this.transferMediaTo(r, i), s && this.startLoadingPrimaryAt(e, s)), s || (this.log(cs("attachPrimary", e)), this.timelinePos = e, this.startLoadingPrimaryAt(e, s));
  }
  startLoadingPrimaryAt(e, t) {
    var s;
    const i = this.hls;
    !i.loadingEnabled || !i.media || Math.abs((((s = i.mainForwardBufferInfo) == null ? void 0 : s.start) || i.media.currentTime) - e) > 0.5 ? i.startLoad(e, t) : i.bufferingEnabled || i.resumeBuffering();
  }
  // HLS.js event callbacks
  onManifestLoading() {
    var e;
    this.stopLoad(), (e = this.schedule) == null || e.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = !1, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(m.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(m.BUFFER_CODECS, this.onBufferCodecs, this);
  }
  onLevelUpdated(e, t) {
    if (t.level === -1 || !this.schedule)
      return;
    const s = this.hls.levels[t.level];
    if (!s.details)
      return;
    const i = se(se({}, this.mediaSelection || this.altSelection), {}, {
      main: s
    });
    this.mediaSelection = i, this.schedule.parseInterstitialDateRanges(i, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart();
  }
  onAudioTrackUpdated(e, t) {
    const s = this.hls.audioTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = se(se({}, this.altSelection), {}, {
        audio: s
      });
      return;
    }
    const r = se(se({}, i), {}, {
      audio: s
    });
    this.mediaSelection = r;
  }
  onSubtitleTrackUpdated(e, t) {
    const s = this.hls.subtitleTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = se(se({}, this.altSelection), {}, {
        subtitles: s
      });
      return;
    }
    const r = se(se({}, i), {}, {
      subtitles: s
    });
    this.mediaSelection = r;
  }
  onAudioTrackSwitching(e, t) {
    const s = Sr(t);
    this.playerQueue.forEach(({
      hls: i
    }) => i && (i.setAudioOption(t) || i.setAudioOption(s)));
  }
  onSubtitleTrackSwitch(e, t) {
    const s = Sr(t);
    this.playerQueue.forEach(({
      hls: i
    }) => i && (i.setSubtitleOption(t) || t.id !== -1 && i.setSubtitleOption(s)));
  }
  onBufferCodecs(e, t) {
    const s = t.tracks;
    s && (this.requiredTracks = s);
  }
  onBufferAppended(e, t) {
    this.checkBuffer();
  }
  onBufferFlushed(e, t) {
    const s = this.playingItem;
    if (s && !this.itemsMatch(s, this.bufferingItem) && !this.isInterstitial(s)) {
      const i = this.timelinePos;
      this.bufferedPos = i, this.checkBuffer();
    }
  }
  onBufferedToEnd(e) {
    if (!this.schedule)
      return;
    const t = this.schedule.events;
    if (this.bufferedPos < Number.MAX_VALUE && t) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (r.cue.post) {
          var s;
          const n = this.schedule.findEventIndex(r.identifier), o = (s = this.schedule.items) == null ? void 0 : s[n];
          this.isInterstitial(o) && this.eventItemsMatch(o, this.bufferingItem) && this.bufferedToItem(o, 0);
          break;
        }
      }
      this.bufferedPos = Number.MAX_VALUE;
    }
  }
  onMediaEnded(e) {
    const t = this.playingItem;
    if (!this.playingLastItem && t) {
      const s = this.findItemIndex(t);
      this.setSchedulePosition(s + 1);
    } else
      this.shouldPlay = !1;
  }
  updateItem(e, t) {
    var s;
    const i = (s = this.schedule) == null ? void 0 : s.items;
    if (e && i) {
      const r = this.findItemIndex(e, t);
      return i[r] || null;
    }
    return null;
  }
  trimInPlace(e, t) {
    if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
      e.event.assetList.forEach((r, n) => {
        e.event.isAssetPastPlayoutLimit(n) && this.clearAssetPlayer(r.identifier, null);
      });
      const s = e.end + 0.25, i = X.bufferInfo(this.primaryMedia, s, 0);
      (i.end > s || (i.nextStart || 0) > s) && (this.log(`trim buffered interstitial ${Ue(e)} (was ${Ue(t)})`), this.attachPrimary(s, null, !0), this.flushFrontBuffer(s));
    }
  }
  itemsMatch(e, t) {
    return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t));
  }
  eventItemsMatch(e, t) {
    var s;
    return !!t && (e === t || e.event.identifier === ((s = t.event) == null ? void 0 : s.identifier));
  }
  findItemIndex(e, t) {
    return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1;
  }
  updateSchedule(e = !1) {
    var t;
    const s = this.mediaSelection;
    s && ((t = this.schedule) == null || t.updateSchedule(s, [], e));
  }
  // Schedule buffer control
  checkBuffer(e) {
    var t;
    const s = (t = this.schedule) == null ? void 0 : t.items;
    if (!s)
      return;
    const i = X.bufferInfo(this.primaryMedia, this.timelinePos, 0);
    e && (this.bufferedPos = this.timelinePos), e || (e = i.len < 1), this.updateBufferedPos(i.end, s, e);
  }
  updateBufferedPos(e, t, s) {
    const i = this.schedule, r = this.bufferingItem;
    if (this.bufferedPos > e || !i)
      return;
    if (t.length === 1 && this.itemsMatch(t[0], r)) {
      this.bufferedPos = e;
      return;
    }
    const n = this.playingItem, o = this.findItemIndex(n);
    let c = i.findItemIndexAtTime(e);
    if (this.bufferedPos < e) {
      var l;
      const u = this.findItemIndex(r), h = Math.min(u + 1, t.length - 1), d = t[h];
      if ((c === -1 && r && e >= r.end || (l = d.event) != null && l.appendInPlace && e + 0.01 >= d.start) && (c = h), this.isInterstitial(r)) {
        const g = r.event;
        if (h - o > 1 && g.appendInPlace === !1 || g.assetList.length === 0 && g.assetListLoader)
          return;
      }
      if (this.bufferedPos = e, c > u && c > o)
        this.bufferedToItem(d);
      else {
        const g = this.primaryDetails;
        this.primaryLive && g && e > g.edge - g.targetduration && d.start < g.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(d) && this.preloadAssets(d.event, 0);
      }
    } else s && n && !this.itemsMatch(n, r) && (c === o ? this.bufferedToItem(n) : c === o + 1 && this.bufferedToItem(t[c]));
  }
  assetsBuffered(e, t) {
    return e.event.assetList.length === 0 ? !1 : !e.event.assetList.some((i) => {
      const r = this.getAssetPlayer(i.identifier);
      return !(r != null && r.bufferedInPlaceToEnd(t));
    });
  }
  setBufferingItem(e) {
    const t = this.bufferingItem, s = this.schedule;
    if (!this.itemsMatch(e, t) && s) {
      const {
        items: i,
        events: r
      } = s;
      if (!i || !r)
        return t;
      const n = this.isInterstitial(e), o = this.getBufferingPlayer();
      this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos));
      const c = o ? o.remaining : t ? t.end - this.timelinePos : 0;
      if (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${Ue(e)}` + (t ? ` (${c.toFixed(2)} remaining)` : "")), !this.playbackDisabled)
        if (n) {
          const l = s.findAssetIndex(e.event, this.bufferedPos);
          e.event.assetList.forEach((u, h) => {
            const d = this.getAssetPlayer(u.identifier);
            d && (h === l && d.loadSource(), d.resumeBuffering());
          });
        } else
          this.hls.resumeBuffering(), this.playerQueue.forEach((l) => l.pauseBuffering());
      this.hls.trigger(m.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
        events: r.slice(0),
        schedule: i.slice(0),
        bufferingIndex: this.findItemIndex(e),
        playingIndex: this.findItemIndex(this.playingItem)
      });
    } else this.bufferingItem !== e && (this.bufferingItem = e);
    return t;
  }
  bufferedToItem(e, t = 0) {
    const s = this.setBufferingItem(e);
    if (!this.playbackDisabled) {
      if (this.isInterstitial(e))
        this.bufferedToEvent(e, t);
      else if (s !== null) {
        this.bufferingAsset = null;
        const i = this.detachedData;
        i ? i.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e) : this.preloadPrimary(e);
      }
    }
  }
  preloadPrimary(e) {
    const t = this.findItemIndex(e), s = this.getPrimaryResumption(e, t);
    this.startLoadingPrimaryAt(s);
  }
  bufferedToEvent(e, t) {
    const s = e.event, i = s.assetList.length === 0 && !s.assetListLoader, r = s.cue.once;
    if (i || !r) {
      const n = this.preloadAssets(s, t);
      if (n != null && n.interstitial.appendInPlace) {
        const o = this.primaryMedia;
        o && this.bufferAssetPlayer(n, o);
      }
    }
  }
  preloadAssets(e, t) {
    const s = e.assetUrl, i = e.assetList.length, r = i === 0 && !e.assetListLoader, n = e.cue.once;
    if (r) {
      const c = e.timelineStart;
      if (e.appendInPlace) {
        var o;
        const d = this.playingItem;
        !this.isInterstitial(d) && (d == null || (o = d.nextEvent) == null ? void 0 : o.identifier) === e.identifier && this.flushFrontBuffer(c + 0.25);
      }
      let l, u = 0;
      if (!this.playingItem && this.primaryLive && (u = this.hls.startPosition, u === -1 && (u = this.hls.liveSyncPosition || 0)), u && !(e.cue.pre || e.cue.post)) {
        const d = u - c;
        d > 0 && (l = Math.round(d * 1e3) / 1e3);
      }
      if (this.log(`Load interstitial asset ${t + 1}/${s ? 1 : i} ${e}${l ? ` live-start: ${u} start-offset: ${l}` : ""}`), s)
        return this.createAsset(e, 0, 0, c, e.duration, s);
      const h = this.assetListLoader.loadAssetList(e, l);
      h && (e.assetListLoader = h);
    } else if (!n && i) {
      for (let l = t; l < i; l++) {
        const u = e.assetList[l], h = this.getAssetPlayerQueueIndex(u.identifier);
        (h === -1 || this.playerQueue[h].destroyed) && !u.error && this.createAssetPlayer(e, u, l);
      }
      const c = e.assetList[t];
      if (c) {
        const l = this.getAssetPlayer(c.identifier);
        return l && l.loadSource(), l;
      }
    }
    return null;
  }
  flushFrontBuffer(e) {
    const t = this.requiredTracks;
    if (!t)
      return;
    this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach((i) => {
      this.hls.trigger(m.BUFFER_FLUSHING, {
        startOffset: e,
        endOffset: 1 / 0,
        type: i
      });
    });
  }
  // Interstitial Asset Player control
  getAssetPlayerQueueIndex(e) {
    const t = this.playerQueue;
    for (let s = 0; s < t.length; s++)
      if (e === t[s].assetId)
        return s;
    return -1;
  }
  getAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    return this.playerQueue[t] || null;
  }
  getBufferingPlayer() {
    const {
      playerQueue: e,
      primaryMedia: t
    } = this;
    if (t) {
      for (let s = 0; s < e.length; s++)
        if (e[s].media === t)
          return e[s];
    }
    return null;
  }
  createAsset(e, t, s, i, r, n) {
    const o = {
      parentIdentifier: e.identifier,
      identifier: Xh(e, n, t),
      duration: r,
      startOffset: s,
      timelineStart: i,
      uri: n
    };
    return this.createAssetPlayer(e, o, t);
  }
  createAssetPlayer(e, t, s) {
    const i = this.hls, r = i.userConfig;
    let n = r.videoPreference;
    const o = i.loadLevelObj || i.levels[i.currentLevel];
    (n || o) && (n = re({}, n), o.videoCodec && (n.videoCodec = o.videoCodec), o.videoRange && (n.allowedVideoRanges = [o.videoRange]));
    const c = i.audioTracks[i.audioTrack], l = i.subtitleTracks[i.subtitleTrack];
    let u = 0;
    if (this.primaryLive || e.appendInPlace) {
      const S = this.timelinePos - t.timelineStart;
      if (S > 1) {
        const x = t.duration;
        x && S < x && (u = S);
      }
    }
    const h = t.identifier, d = se(se({}, r), {}, {
      maxMaxBufferLength: Math.min(180, i.config.maxMaxBufferLength),
      autoStartLoad: !0,
      startFragPrefetch: !0,
      primarySessionId: i.sessionId,
      assetPlayerId: h,
      abrEwmaDefaultEstimate: i.bandwidthEstimate,
      interstitialsController: void 0,
      startPosition: u,
      liveDurationInfinity: !1,
      testBandwidth: !1,
      videoPreference: n,
      audioPreference: c || r.audioPreference,
      subtitlePreference: l || r.subtitlePreference
    });
    e.appendInPlace && (e.appendInPlaceStarted = !0, t.timelineStart && (d.timelineOffset = t.timelineStart));
    const g = d.cmcd;
    g != null && g.sessionId && g.contentId && (d.cmcd = re({}, g, {
      contentId: Yt(t.uri)
    })), this.getAssetPlayer(h) && this.warn(`Duplicate date range identifier ${e} and asset ${h}`);
    const f = new Zh(this.HlsPlayerClass, d, e, t);
    this.playerQueue.push(f), e.assetList[s] = t;
    let p = !0;
    const y = (S) => {
      if (S.live) {
        var x;
        const R = new Error(`Interstitials MUST be VOD assets ${e}`), b = {
          fatal: !0,
          type: Y.OTHER_ERROR,
          details: _.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: R
        }, L = ((x = this.schedule) == null ? void 0 : x.findEventIndex(e.identifier)) || -1;
        this.handleAssetItemError(b, e, L, s, R.message);
        return;
      }
      const D = S.edge - S.fragmentStart, A = t.duration;
      (p || A === null || D > A) && (p = !1, this.log(`Interstitial asset "${h}" duration change ${A} > ${D}`), t.duration = D, this.updateSchedule());
    };
    f.on(m.LEVEL_UPDATED, (S, {
      details: x
    }) => y(x)), f.on(m.LEVEL_PTS_UPDATED, (S, {
      details: x
    }) => y(x)), f.on(m.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
    const E = (S, x) => {
      const D = this.getAssetPlayer(h);
      if (D && x.tracks) {
        D.off(m.BUFFER_CODECS, E), D.tracks = x.tracks;
        const A = this.primaryMedia;
        this.bufferingAsset === D.assetItem && A && !D.media && this.bufferAssetPlayer(D, A);
      }
    };
    f.on(m.BUFFER_CODECS, E);
    const T = () => {
      var S;
      const x = this.getAssetPlayer(h);
      if (this.log(`buffered to end of asset ${x}`), !x || !this.schedule)
        return;
      const D = this.schedule.findEventIndex(e.identifier), A = (S = this.schedule.items) == null ? void 0 : S[D];
      this.isInterstitial(A) && this.advanceAssetBuffering(A, t);
    };
    f.on(m.BUFFERED_TO_END, T);
    const v = (S) => () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      this.shouldPlay = !0;
      const D = this.schedule.findEventIndex(e.identifier);
      this.advanceAfterAssetEnded(e, D, S);
    };
    return f.once(m.MEDIA_ENDED, v(s)), f.once(m.PLAYOUT_LIMIT_REACHED, v(1 / 0)), f.on(m.ERROR, (S, x) => {
      if (!this.schedule)
        return;
      const D = this.getAssetPlayer(h);
      if (x.details === _.BUFFER_STALLED_ERROR) {
        if (D != null && D.appendInPlace) {
          this.handleInPlaceStall(e);
          return;
        }
        this.onTimeupdate(), this.checkBuffer(!0);
        return;
      }
      this.handleAssetItemError(x, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${x.error} ${e}`);
    }), f.on(m.DESTROYING, () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      const x = new Error(`Asset player destroyed unexpectedly ${h}`), D = {
        fatal: !0,
        type: Y.OTHER_ERROR,
        details: _.INTERSTITIAL_ASSET_ITEM_ERROR,
        error: x
      };
      this.handleAssetItemError(D, e, this.schedule.findEventIndex(e.identifier), s, x.message);
    }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${Dt(t)}`), this.hls.trigger(m.INTERSTITIAL_ASSET_PLAYER_CREATED, {
      asset: t,
      assetListIndex: s,
      event: e,
      player: f
    }), f;
  }
  clearInterstitial(e, t) {
    this.clearAssetPlayers(e, t), e.reset();
  }
  clearAssetPlayers(e, t) {
    e.assetList.forEach((s) => {
      this.clearAssetPlayer(s.identifier, t);
    });
  }
  resetAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    if (t !== -1) {
      this.log(`reset asset player "${e}" after error`);
      const s = this.playerQueue[t];
      this.transferMediaFromPlayer(s, null), s.resetDetails();
    }
  }
  clearAssetPlayer(e, t) {
    const s = this.getAssetPlayerQueueIndex(e);
    if (s !== -1) {
      const i = this.playerQueue[s];
      this.log(`clear ${i} toSegment: ${t && Ue(t)}`), this.transferMediaFromPlayer(i, t), this.playerQueue.splice(s, 1), i.destroy();
    }
  }
  emptyPlayerQueue() {
    let e;
    for (; e = this.playerQueue.pop(); )
      e.destroy();
    this.playerQueue = [];
  }
  startAssetPlayer(e, t, s, i, r) {
    const {
      interstitial: n,
      assetItem: o,
      assetId: c
    } = e, l = n.assetList.length, u = this.playingAsset;
    this.endedAsset = null, this.playingAsset = o, (!u || u.identifier !== c) && (u && (this.clearAssetPlayer(u.identifier, s[i]), delete u.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${Dt(o)}`), this.hls.trigger(m.INTERSTITIAL_ASSET_STARTED, {
      asset: o,
      assetListIndex: t,
      event: n,
      schedule: s.slice(0),
      scheduleIndex: i,
      player: e
    })), this.bufferAssetPlayer(e, r);
  }
  bufferAssetPlayer(e, t) {
    var s, i;
    if (!this.schedule)
      return;
    const {
      interstitial: r,
      assetItem: n
    } = e, o = this.schedule.findEventIndex(r.identifier), c = (s = this.schedule.items) == null ? void 0 : s[o];
    if (!c)
      return;
    e.loadSource(), this.setBufferingItem(c), this.bufferingAsset = n;
    const l = this.getBufferingPlayer();
    if (l === e)
      return;
    const u = r.appendInPlace;
    if (u && (l == null ? void 0 : l.interstitial.appendInPlace) === !1)
      return;
    const h = (l == null ? void 0 : l.tracks) || ((i = this.detachedData) == null ? void 0 : i.tracks) || this.requiredTracks;
    if (u && n !== this.playingAsset) {
      if (!e.tracks) {
        this.log(`Waiting for track info before buffering ${e}`);
        return;
      }
      if (h && !Mn(h, e.tracks)) {
        const d = new Error(`Asset ${Dt(n)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(h)}')`), g = {
          fatal: !0,
          type: Y.OTHER_ERROR,
          details: _.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: d
        }, f = r.findAssetIndex(n);
        this.handleAssetItemError(g, r, o, f, d.message);
        return;
      }
    }
    this.transferMediaTo(e, t);
  }
  handleInPlaceStall(e) {
    const t = this.schedule, s = this.primaryMedia;
    if (!t || !s)
      return;
    const i = s.currentTime, r = t.findAssetIndex(e, i), n = e.assetList[r];
    if (n) {
      const o = this.getAssetPlayer(n.identifier);
      if (o) {
        const c = o.currentTime || i - n.timelineStart, l = o.duration - c;
        if (this.warn(`Stalled at ${c} of ${c + l} in ${o} ${e} (media.currentTime: ${i})`), c && (l / s.playbackRate < 0.5 || o.bufferedInPlaceToEnd(s)) && o.hls) {
          const u = t.findEventIndex(e.identifier);
          this.advanceAfterAssetEnded(e, u, r);
        }
      }
    }
  }
  advanceInPlace(e) {
    const t = this.primaryMedia;
    t && t.currentTime < e && (t.currentTime = e);
  }
  handleAssetItemError(e, t, s, i, r) {
    if (e.details === _.BUFFER_STALLED_ERROR)
      return;
    const n = t.assetList[i] || null;
    if (this.warn(`INTERSTITIAL_ASSET_ERROR ${n && Dt(n)} ${e.error}`), !this.schedule)
      return;
    const o = (n == null ? void 0 : n.identifier) || "", c = this.getAssetPlayerQueueIndex(o), l = this.playerQueue[c] || null, u = this.schedule.items, h = re({}, e, {
      fatal: !1,
      errorAction: kt(!0),
      asset: n,
      assetListIndex: i,
      event: t,
      schedule: u,
      scheduleIndex: s,
      player: l
    });
    if (this.hls.trigger(m.INTERSTITIAL_ASSET_ERROR, h), !e.fatal)
      return;
    const d = this.playingAsset, g = this.bufferingAsset, f = new Error(r);
    if (n && (this.clearAssetPlayer(o, null), n.error = f), !t.assetList.some((p) => !p.error))
      t.error = f;
    else
      for (let p = i; p < t.assetList.length; p++)
        this.resetAssetPlayer(t.assetList[p].identifier);
    this.updateSchedule(!0), t.error ? this.primaryFallback(t) : d && d.identifier === o ? this.advanceAfterAssetEnded(t, s, i) : g && g.identifier === o && this.isInterstitial(this.bufferingItem) && this.advanceAssetBuffering(this.bufferingItem, g);
  }
  primaryFallback(e) {
    const t = e.timelineStart, s = this.effectivePlayingItem;
    let i = this.timelinePos;
    if (s) {
      this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${i} playing: ${Ue(s)} error: ${e.error}`), i === -1 && (i = this.hls.startPosition);
      const n = this.updateItem(s, i);
      this.itemsMatch(s, n) && this.clearInterstitial(e, null), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t));
    } else if (i === -1) {
      this.checkStart();
      return;
    }
    if (!this.schedule)
      return;
    const r = this.schedule.findItemIndexAtTime(i);
    this.setSchedulePosition(r);
  }
  // Asset List loading
  onAssetListLoaded(e, t) {
    var s, i;
    const r = t.event, n = r.identifier, o = t.assetListResponse.ASSETS;
    if (!((s = this.schedule) != null && s.hasEvent(n)))
      return;
    const c = r.timelineStart, l = r.duration;
    let u = 0;
    o.forEach((p, y) => {
      const E = parseFloat(p.DURATION);
      this.createAsset(r, y, u, c + u, E, p.URI), u += E;
    }), r.duration = u, this.log(`Loaded asset-list with duration: ${u} (was: ${l}) ${r}`);
    const h = this.waitingItem, d = (h == null ? void 0 : h.event.identifier) === n;
    this.updateSchedule();
    const g = (i = this.bufferingItem) == null ? void 0 : i.event;
    if (d) {
      var f;
      const p = this.schedule.findEventIndex(n), y = (f = this.schedule.items) == null ? void 0 : f[p];
      if (y) {
        if (!this.playingItem && this.timelinePos > y.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== p) {
          r.error = new Error(`Interstitial ${o.length ? "no longer within playback range" : "asset-list is empty"} ${this.timelinePos} ${r}`), this.log(r.error.message), this.updateSchedule(!0), this.primaryFallback(r);
          return;
        }
        this.setBufferingItem(y);
      }
      this.setSchedulePosition(p);
    } else if ((g == null ? void 0 : g.identifier) === n) {
      const p = r.assetList[0];
      if (p) {
        const y = this.getAssetPlayer(p.identifier);
        if (g.appendInPlace) {
          const E = this.primaryMedia;
          y && E && this.bufferAssetPlayer(y, E);
        } else y && y.loadSource();
      }
    }
  }
  onError(e, t) {
    if (this.schedule)
      switch (t.details) {
        case _.ASSET_LIST_PARSING_ERROR:
        case _.ASSET_LIST_LOAD_ERROR:
        case _.ASSET_LIST_LOAD_TIMEOUT: {
          const s = t.interstitial;
          s && (this.updateSchedule(!0), this.primaryFallback(s));
          break;
        }
        case _.BUFFER_STALLED_ERROR: {
          const s = this.endedItem || this.waitingItem || this.playingItem;
          if (this.isInterstitial(s) && s.event.appendInPlace) {
            this.handleInPlaceStall(s.event);
            return;
          }
          this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(!0);
          break;
        }
      }
  }
}
const gn = 500;
class sd extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "subtitle-stream-controller", V.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  startLoad(e, t) {
    this.stopLoad(), this.state = P.IDLE, this.setInterval(gn), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.mainDetails = null;
  }
  onMediaDetaching(e, t) {
    this.tracksBuffered = [], super.onMediaDetaching(e, t);
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (this.fragContextChanged(s) || (fe(s) && (this.fragPrevious = s), this.state = P.IDLE), !i)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let n;
    const o = s.start;
    for (let l = 0; l < r.length; l++)
      if (o >= r[l].start && o <= r[l].end) {
        n = r[l];
        break;
      }
    const c = s.start + s.duration;
    n ? n.end = c : (n = {
      start: o,
      end: c
    }, r.push(n)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media && this.tick();
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: i
    } = t;
    if (s === 0 && i !== Number.POSITIVE_INFINITY) {
      const r = i - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((n) => {
        for (let o = 0; o < n.length; ) {
          if (n[o].end <= r) {
            n.shift();
            continue;
          } else if (n[o].start < r)
            n[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, r, V.SUBTITLE);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === V.SUBTITLE && (t.details === _.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== P.STOPPED && (this.state = P.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && $a(this.levels, t)) {
      this.levels = t.map((s) => new jt(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new jt(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, V.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const i = this.levels[this.currentTrackId];
    i != null && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.state !== P.STOPPED && this.setInterval(gn);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: i,
      levels: r
    } = this, {
      details: n,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const c = r[o];
    if (o >= r.length || !c)
      return;
    this.log(`Subtitle track ${o} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""},duration:${n.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let l = 0;
    if (n.live || (s = c.details) != null && s.live) {
      if (n.deltaUpdateFailed)
        return;
      const h = this.mainDetails;
      if (!h) {
        this.startFragRequested = !1;
        return;
      }
      const d = h.fragments[0];
      if (!c.details)
        n.hasProgramDateTime && h.hasProgramDateTime ? (ks(n, h), l = n.fragmentStart) : d && (l = d.start, vi(n, l));
      else {
        var u;
        l = this.alignPlaylists(n, c.details, (u = this.levelLastLoaded) == null ? void 0 : u.details), l === 0 && d && (l = d.start, vi(n, l));
      }
      h && !this.startFragRequested && this.setStartPosition(h, l);
    }
    c.details = n, this.levelLastLoaded = c, o === i && (this.hls.trigger(m.SUBTITLE_TRACK_UPDATED, {
      details: n,
      id: o,
      groupId: t.groupId
    }), this.tick(), n.live && !this.fragCurrent && this.media && this.state === P.IDLE && (xt(null, n.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), c.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i != null && i.key && i.iv && wt(i.method)) {
      const n = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer, Gi(i.method)).catch((o) => {
        throw r.trigger(m.ERROR, {
          type: Y.MEDIA_ERROR,
          details: _.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const c = performance.now();
        r.trigger(m.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: n,
            tdecrypt: c
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = P.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = P.IDLE;
      return;
    }
    if (this.state === P.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details || this.waitForLive(s))
        return;
      const {
        config: i
      } = this, r = this.getLoadPosition(), n = X.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
        end: o,
        len: c
      } = n, l = s.details, u = this.hls.maxBufferLength + l.levelTargetDuration;
      if (c > u)
        return;
      const h = l.fragments, d = h.length, g = l.edge;
      let f = null;
      const p = this.fragPrevious;
      if (o < g) {
        const T = i.maxFragLookUpTolerance, v = o > g - T ? 0 : T;
        f = xt(p, h, Math.max(h[0].start, o), v), !f && p && p.start < h[0].start && (f = h[0]);
      } else
        f = h[d - 1];
      if (f = this.filterReplacedPrimary(f, s.details), !f)
        return;
      const y = f.sn - l.startSN, E = h[y - 1];
      if (E && E.cc === f.cc && this.fragmentTracker.getState(E) === pe.NOT_LOADED && (f = E), this.fragmentTracker.getState(f) === pe.NOT_LOADED) {
        const T = this.mapToInitFragWhenRequired(f);
        T && this.loadFragment(T, s, o);
      }
    }
  }
  loadFragment(e, t, s) {
    fe(e) ? super.loadFragment(e, t, s) : this._loadInitSegment(e, t);
  }
  get mediaBufferTimeRanges() {
    return new id(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class id {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, i, r) => {
      if (i = i >>> 0, i > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
      return e[i][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
const rd = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, to = (a) => String.fromCharCode(rd[a] || a), Ge = 15, et = 100, nd = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, ad = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, od = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, ld = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, cd = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class ud {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      ie.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const Et = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class so {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class hd {
  constructor() {
    this.uchar = " ", this.penState = new so();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class dd {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new so(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < et; t++)
      this.chars.push(new hd());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < et; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < et; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < et; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > et && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = et);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = to(e);
    if (this.pos >= et) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < et; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < et; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class si {
  constructor(e) {
    this.rows = [], this.currRow = Ge - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < Ge; t++)
      this.rows.push(new dd(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < Ge; e++)
      this.rows[e].clear();
    this.currRow = Ge - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < Ge; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < Ge; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Ge; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + ae(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < Ge; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
      if (n) {
        const o = n.rows[r].cueStartTime, c = this.logger.time;
        if (o !== null && c !== null && o < c)
          for (let l = 0; l < this.nrRollUpRows; l++)
            this.rows[t - this.nrRollUpRows + l + 1].copy(n.rows[r + l]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, n = Math.max(r - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[n].penState.foreground;
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(i);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + ae(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", i = -1;
    for (let r = 0; r < Ge; r++) {
      const n = this.rows[r].getTextString();
      n && (i = r + 1, e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class mn {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new si(s), this.nonDisplayedMemory = new si(s), this.lastOutputScreen = new si(s), this.currRollUpRow = this.displayedMemory.rows[Ge - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Ge - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[s];
    }
    this.logger.log(2, "MIDROW: " + ae(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class pn {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = gd(), this.logger = void 0;
    const i = this.logger = new ud();
    this.channels = [null, new mn(e, t, i), new mn(e + 1, s, i)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s] & 127, r = t[s + 1] & 127;
      let n = !1, o = null;
      if (i === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + Et([t[s], t[s + 1]]) + "] -> (" + Et([i, r]) + ")");
      const c = this.cmdHistory;
      if (i >= 16 && i <= 31) {
        if (fd(i, r, c)) {
          us(null, null, c), this.logger.log(3, () => "Repeated command (" + Et([i, r]) + ") is dropped");
          continue;
        }
        us(i, r, this.cmdHistory), n = this.parseCmd(i, r), n || (n = this.parseMidrow(i, r)), n || (n = this.parsePAC(i, r)), n || (n = this.parseBackgroundAttributes(i, r));
      } else
        us(null, null, c);
      if (!n && (o = this.parseChars(i, r), o)) {
        const u = this.currentChannel;
        u && u > 0 ? this.channels[u].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !n && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + Et([i, r]) + " orig: " + Et([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || i))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, n = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? n.ccRCL() : t === 33 ? n.ccBS() : t === 34 ? n.ccAOF() : t === 35 ? n.ccAON() : t === 36 ? n.ccDER() : t === 37 ? n.ccRU(2) : t === 38 ? n.ccRU(3) : t === 39 ? n.ccRU(4) : t === 40 ? n.ccFON() : t === 41 ? n.ccRDC() : t === 42 ? n.ccTR() : t === 43 ? n.ccRTD() : t === 44 ? n.ccEDM() : t === 45 ? n.ccCR() : t === 46 ? n.ccENM() : t === 47 && n.ccEOC() : n.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[s];
      return i ? (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + Et([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(i || r))
      return !1;
    const n = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = n === 1 ? nd[e] : od[e] : s = n === 1 ? ad[e] : ld[e];
    const o = this.channels[n];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = n, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const i = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, i = null, r = null;
    if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
      let n;
      r === 17 ? n = t + 80 : r === 18 ? n = t + 112 : n = t + 144, this.logger.log(2, () => "Special char '" + to(n) + "' in channel " + s), i = [n];
    } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    return i && this.logger.log(3, () => "Char codes =  " + Et(i).join(",")), i;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || i))
      return !1;
    let r;
    const n = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), n.background = cd[r], t % 2 === 1 && (n.background = n.background + "_semi")) : t === 45 ? n.background = "transparent" : (n.foreground = "black", t === 47 && (n.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(n), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    us(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function us(a, e, t) {
  t.a = a, t.b = e;
}
function fd(a, e, t) {
  return t.a === a && t.b === e;
}
function gd() {
  return {
    a: null,
    b: null
  };
}
var tr = (function() {
  if (Ps != null && Ps.VTTCue)
    return self.VTTCue;
  const a = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, c) {
    if (typeof c != "string" || !Array.isArray(o))
      return !1;
    const l = c.toLowerCase();
    return ~o.indexOf(l) ? l : !1;
  }
  function s(o) {
    return t(a, o);
  }
  function i(o) {
    return t(e, o);
  }
  function r(o, ...c) {
    let l = 1;
    for (; l < arguments.length; l++) {
      const u = arguments[l];
      for (const h in u)
        o[h] = u[h];
    }
    return o;
  }
  function n(o, c, l) {
    const u = this, h = {
      enumerable: !0
    };
    u.hasBeenReset = !1;
    let d = "", g = !1, f = o, p = c, y = l, E = null, T = "", v = !0, S = "auto", x = "start", D = 50, A = "middle", R = 50, b = "middle";
    Object.defineProperty(u, "id", r({}, h, {
      get: function() {
        return d;
      },
      set: function(L) {
        d = "" + L;
      }
    })), Object.defineProperty(u, "pauseOnExit", r({}, h, {
      get: function() {
        return g;
      },
      set: function(L) {
        g = !!L;
      }
    })), Object.defineProperty(u, "startTime", r({}, h, {
      get: function() {
        return f;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("Start time must be set to a number.");
        f = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "endTime", r({}, h, {
      get: function() {
        return p;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("End time must be set to a number.");
        p = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "text", r({}, h, {
      get: function() {
        return y;
      },
      set: function(L) {
        y = "" + L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "region", r({}, h, {
      get: function() {
        return E;
      },
      set: function(L) {
        E = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "vertical", r({}, h, {
      get: function() {
        return T;
      },
      set: function(L) {
        const C = s(L);
        if (C === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        T = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "snapToLines", r({}, h, {
      get: function() {
        return v;
      },
      set: function(L) {
        v = !!L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "line", r({}, h, {
      get: function() {
        return S;
      },
      set: function(L) {
        if (typeof L != "number" && L !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        S = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "lineAlign", r({}, h, {
      get: function() {
        return x;
      },
      set: function(L) {
        const C = i(L);
        if (!C)
          throw new SyntaxError("An invalid or illegal string was specified.");
        x = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "position", r({}, h, {
      get: function() {
        return D;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Position must be between 0 and 100.");
        D = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "positionAlign", r({}, h, {
      get: function() {
        return A;
      },
      set: function(L) {
        const C = i(L);
        if (!C)
          throw new SyntaxError("An invalid or illegal string was specified.");
        A = C, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "size", r({}, h, {
      get: function() {
        return R;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Size must be between 0 and 100.");
        R = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "align", r({}, h, {
      get: function() {
        return b;
      },
      set: function(L) {
        const C = i(L);
        if (!C)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = C, this.hasBeenReset = !0;
      }
    })), u.displayState = void 0;
  }
  return n.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, n;
})();
class md {
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function io(a) {
  function e(s, i, r, n) {
    return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(n || 0);
  }
  const t = a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class pd {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let i = 0; i < s.length; ++i)
      if (t === s[i]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function ro(a, e, t, s) {
  const i = s ? a.split(s) : [a];
  for (const r in i) {
    if (typeof i[r] != "string")
      continue;
    const n = i[r].split(t);
    if (n.length !== 2)
      continue;
    const o = n[0], c = n[1];
    e(o, c);
  }
}
const _i = new tr(0, 0, ""), hs = _i.align === "middle" ? "middle" : "center";
function yd(a, e, t) {
  const s = a;
  function i() {
    const o = io(a);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return a = a.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, c) {
    const l = new pd();
    ro(o, function(d, g) {
      let f;
      switch (d) {
        case "region":
          for (let p = t.length - 1; p >= 0; p--)
            if (t[p].id === g) {
              l.set(d, t[p].region);
              break;
            }
          break;
        case "vertical":
          l.alt(d, g, ["rl", "lr"]);
          break;
        case "line":
          f = g.split(","), l.integer(d, f[0]), l.percent(d, f[0]) && l.set("snapToLines", !1), l.alt(d, f[0], ["auto"]), f.length === 2 && l.alt("lineAlign", f[1], ["start", hs, "end"]);
          break;
        case "position":
          f = g.split(","), l.percent(d, f[0]), f.length === 2 && l.alt("positionAlign", f[1], ["start", hs, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          l.percent(d, g);
          break;
        case "align":
          l.alt(d, g, ["start", hs, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), c.region = l.get("region", null), c.vertical = l.get("vertical", "");
    let u = l.get("line", "auto");
    u === "auto" && _i.line === -1 && (u = -1), c.line = u, c.lineAlign = l.get("lineAlign", "start"), c.snapToLines = l.get("snapToLines", !0), c.size = l.get("size", 100), c.align = l.get("align", hs);
    let h = l.get("position", "auto");
    h === "auto" && _i.position === 50 && (h = c.align === "start" || c.align === "left" ? 0 : c.align === "end" || c.align === "right" ? 100 : 50), c.position = h;
  }
  function n() {
    a = a.replace(/^\s+/, "");
  }
  if (n(), e.startTime = i(), n(), a.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  a = a.slice(3), n(), e.endTime = i(), n(), r(a, e);
}
function no(a) {
  return a.replace(/<br(?: \/)?>/gi, `
`);
}
class Ed {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new md(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, n = 0;
      for (r = no(r); n < r.length && r[n] !== "\r" && r[n] !== `
`; )
        ++n;
      const o = r.slice(0, n);
      return r[n] === "\r" && ++n, r[n] === `
` && ++n, t.buffer = r.slice(n), o;
    }
    function i(r) {
      ro(r, function(n, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = s();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let n = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (n ? n = !1 : r = s(), t.state) {
          case "HEADER":
            /:/.test(r) ? i(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new tr(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          // Process line as start of a cue.
          /* falls through */
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              yd(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (n = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const Td = /\r\n|\n\r|\n|\r/g, ii = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, vd = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!$(t) || !$(s) || !$(i) || !$(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 3600 * 1e3 * r, t;
};
function sr(a, e, t) {
  return Yt(a.toString()) + Yt(e.toString()) + Yt(t);
}
const Sd = function(e, t, s) {
  let i = e[t], r = e[i.prevCC];
  if (!r || !r.new && i.new) {
    e.ccOffset = e.presentationOffset = i.start, i.new = !1;
    return;
  }
  for (; (n = r) != null && n.new; ) {
    var n;
    e.ccOffset += i.start - r.start, i.new = !1, i = r, r = e[i.prevCC];
  }
  e.presentationOffset = s;
};
function xd(a, e, t, s, i, r, n) {
  const o = new Ed(), c = we(new Uint8Array(a)).trim().replace(Td, `
`).split(`
`), l = [], u = e ? _u(e.baseTime, e.timescale) : 0;
  let h = "00:00.000", d = 0, g = 0, f, p = !0;
  o.oncue = function(y) {
    const E = t[s];
    let T = t.ccOffset;
    const v = (d - u) / 9e4;
    if (E != null && E.new && (g !== void 0 ? T = t.ccOffset = E.start : Sd(t, s, v)), v) {
      if (!e) {
        f = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      T = v - t.presentationOffset;
    }
    const S = y.endTime - y.startTime, x = Ce((y.startTime + T - g) * 9e4, i * 9e4) / 9e4;
    y.startTime = Math.max(x, 0), y.endTime = Math.max(x + S, 0);
    const D = y.text.trim();
    y.text = decodeURIComponent(encodeURIComponent(D)), y.id || (y.id = sr(y.startTime, y.endTime, D)), y.endTime > 0 && l.push(y);
  }, o.onparsingerror = function(y) {
    f = y;
  }, o.onflush = function() {
    if (f) {
      n(f);
      return;
    }
    r(l);
  }, c.forEach((y) => {
    if (p)
      if (ii(y, "X-TIMESTAMP-MAP=")) {
        p = !1, y.slice(16).split(",").forEach((E) => {
          ii(E, "LOCAL:") ? h = E.slice(6) : ii(E, "MPEGTS:") && (d = parseInt(E.slice(7)));
        });
        try {
          g = vd(h) / 1e3;
        } catch (E) {
          f = E;
        }
        return;
      } else y === "" && (p = !1);
    o.parse(y + `
`);
  }), o.flush();
}
const ri = "stpp.ttml.im1t", ao = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, oo = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, Ad = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function yn(a, e, t, s) {
  const i = Q(new Uint8Array(a), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = i.map((o) => we(o)), n = bu(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(Ld(o, n)));
  } catch (o) {
    s(o);
  }
}
function Ld(a, e) {
  const i = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, n = Object.keys(r).reduce((h, d) => (h[d] = i.getAttribute(`ttp:${d}`) || r[d], h), {}), o = i.getAttribute("xml:space") !== "preserve", c = En(ni(i, "styling", "style")), l = En(ni(i, "layout", "region")), u = ni(i, "body", "[begin]");
  return [].map.call(u, (h) => {
    const d = lo(h, o);
    if (!d || !h.hasAttribute("begin"))
      return null;
    const g = oi(h.getAttribute("begin"), n), f = oi(h.getAttribute("dur"), n);
    let p = oi(h.getAttribute("end"), n);
    if (g === null)
      throw Tn(h);
    if (p === null) {
      if (f === null)
        throw Tn(h);
      p = g + f;
    }
    const y = new tr(g - e, p - e, d);
    y.id = sr(y.startTime, y.endTime, y.text);
    const E = l[h.getAttribute("region")], T = c[h.getAttribute("style")], v = Id(E, T, c), {
      textAlign: S
    } = v;
    if (S) {
      const x = Ad[S];
      x && (y.lineAlign = x), y.align = S;
    }
    return re(y, v), y;
  }).filter((h) => h !== null);
}
function ni(a, e, t) {
  const s = a.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function En(a) {
  return a.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function lo(a, e) {
  return [].slice.call(a.childNodes).reduce((t, s, i) => {
    var r;
    return s.nodeName === "br" && i ? t + `
` : (r = s.childNodes) != null && r.length ? lo(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function Id(a, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], n = a != null && a.hasAttribute("style") ? a.getAttribute("style") : null;
  return n && t.hasOwnProperty(n) && (i = t[n]), r.reduce((o, c) => {
    const l = ai(e, s, c) || ai(a, s, c) || ai(i, s, c);
    return l && (o[c] = l), o;
  }, {});
}
function ai(a, e, t) {
  return a && a.hasAttributeNS(e, t) ? a.getAttributeNS(e, t) : null;
}
function Tn(a) {
  return new Error(`Could not parse ttml timestamp ${a}`);
}
function oi(a, e) {
  if (!a)
    return null;
  let t = io(a);
  return t === null && (ao.test(a) ? t = Rd(a, e) : oo.test(a) && (t = bd(a, e))), t;
}
function Rd(a, e) {
  const t = ao.exec(a), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function bd(a, e) {
  const t = oo.exec(a), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class ds {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
class _d {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Sn(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    const e = new ds(this, "textTrack1"), t = new ds(this, "textTrack2"), s = new ds(this, "textTrack3"), i = new ds(this, "textTrack4");
    this.cea608Parser1 = new pn(1, e, t), this.cea608Parser2 = new pn(3, s, i);
  }
  addCues(e, t, s, i, r) {
    let n = !1;
    for (let o = r.length; o--; ) {
      const c = r[o], l = Dd(c[0], c[1], t, s);
      if (l >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], s), n = !0, l / (s - t) > 0.5))
        return;
    }
    if (n || r.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, i);
    } else {
      const o = this.Cues.newCue(null, t, s, i);
      this.hls.trigger(m.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r,
    trackId: n
  }) {
    const {
      unparsedVttFrags: o
    } = this;
    s === V.MAIN && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: r,
      trackId: n
    }), o.length && (this.unparsedVttFrags = [], o.forEach((c) => {
      this.initPTS[c.frag.cc] ? this.onFragLoaded(m.FRAG_LOADED, c) : this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: c.frag,
        error: new Error("Subtitle discontinuity domain does not match main")
      });
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let i = 0; i < s.textTracks.length; i++) {
        const r = s.textTracks[i];
        if (vn(r, {
          name: e,
          lang: t,
          characteristics: "transcribes-spoken-dialog,describes-music-and-sound"
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: i
    } = this, {
      label: r,
      languageCode: n
    } = t[e], o = this.getExistingTrack(r, n);
    if (o)
      s[e] = o, Ct(s[e]), Za(s[e], i);
    else {
      const c = this.createTextTrack("captions", r, n);
      c && (c[e] = !0, s[e] = c);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, i = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [i]
    });
  }
  createTextTrack(e, t, s) {
    const i = this.media;
    if (i)
      return i.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, t.mediaSource || this._cleanTracks();
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    if (this.media = null, s)
      return;
    const {
      captionsTracks: i
    } = this;
    Object.keys(i).forEach((r) => {
      Ct(i[r]), delete i[r];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Sn(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        Ct(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((r) => r.textCodec === ri);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if ($a(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const n = this.media, o = n ? Ss(n.textTracks) : null;
        if (this.tracks.forEach((c, l) => {
          let u;
          if (o) {
            let h = null;
            for (let d = 0; d < o.length; d++)
              if (o[d] && vn(o[d], c)) {
                h = o[d], o[d] = null;
                break;
              }
            h && (u = h);
          }
          if (u)
            Ct(u);
          else {
            const h = co(c);
            u = this.createTextTrack(h, c.name, c.lang), u && (u.mode = "disabled");
          }
          u && this.textTracks.push(u);
        }), o != null && o.length) {
          const c = o.filter((l) => l !== null).map((l) => l.label);
          c.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${c.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const n = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: n
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!i)
        return;
      const r = `textTrack${i[1]}`, n = this.captionsProperties[r];
      n && (n.label = s.name, s.lang && (n.languageCode = s.lang), n.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === V.MAIN) {
      var s, i;
      const {
        cea608Parser1: r,
        cea608Parser2: n,
        lastSn: o
      } = this, {
        cc: c,
        sn: l
      } = t.frag, u = (s = (i = t.part) == null ? void 0 : i.index) != null ? s : -1;
      r && n && (l !== o + 1 || l === o && u !== this.lastPartIndex + 1 || c !== this.lastCc) && (r.reset(), n.reset()), this.lastCc = c, this.lastSn = l, this.lastPartIndex = u;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === V.SUBTITLE)
      if (i.byteLength) {
        const r = s.decryptdata, n = "stats" in t;
        if (r == null || !r.encrypted || n) {
          const o = this.tracks[s.level], c = this.vttCCs;
          c[s.cc] || (c[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === ri ? this._parseIMSC1(s, i) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    yn(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      s.logger.log(`Failed to parse IMSC1: ${i}`), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: i
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: i
    } = e, {
      initPTS: r,
      unparsedVttFrags: n
    } = this, o = r.length - 1;
    if (!r[s.cc] && o === -1) {
      n.push(e);
      return;
    }
    const c = this.hls, l = (t = s.initSegment) != null && t.data ? Ne(s.initSegment.data, new Uint8Array(i)).buffer : i;
    xd(l, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (u) => {
      this._appendCues(u, s.level), c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (u) => {
      const h = u.message === "Missing initPTS for VTT MPEGTS";
      h ? n.push(e) : this._fallbackToIMSC1(s, i), c.logger.log(`Failed to parse VTT cue: ${u}`), !(h && o > s.cc) && c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: u
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || yn(t, this.initPTS[e.cc], () => {
      s.textCodec = ri, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled")
        return;
      e.forEach((r) => Ja(i, r));
    } else {
      const i = this.tracks[t];
      if (!i)
        return;
      const r = i.default ? "default" : "subtitles" + t;
      s.trigger(m.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === V.SUBTITLE && this.onFragLoaded(m.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    if (!this.enabled || !this.config.enableCEA708Captions)
      return;
    const {
      frag: s,
      samples: i
    } = t;
    if (!(s.type === V.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let r = 0; r < i.length; r++) {
        const n = i[r].bytes;
        if (n) {
          this.cea608Parser1 || this.initCea608Parsers();
          const o = this.extractCea608Data(n);
          this.cea608Parser1.addData(i[r].pts, o[0]), this.cea608Parser2.addData(i[r].pts, o[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: i,
    type: r
  }) {
    const {
      media: n
    } = this;
    if (!(!n || n.currentTime < s)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((c) => bi(o[c], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((c) => bi(o[c], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let r = 0; r < s; r++) {
      const n = e[i++], o = 127 & e[i++], c = 127 & e[i++];
      if (o === 0 && c === 0)
        continue;
      if ((4 & n) !== 0) {
        const u = 3 & n;
        (u === 0 || u === 1) && (t[u].push(o), t[u].push(c));
      }
    }
    return t;
  }
}
function co(a) {
  return a.characteristics && /transcribes-spoken-dialog/gi.test(a.characteristics) && /describes-music-and-sound/gi.test(a.characteristics) ? "captions" : "subtitles";
}
function vn(a, e) {
  return !!a && a.kind === co(e) && Ai(e, a);
}
function Dd(a, e, t, s) {
  return Math.min(e, s) - Math.max(a, t);
}
function Sn() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
const Cd = /\s/, Pd = {
  newCue(a, e, t, s) {
    const i = [];
    let r, n, o, c, l;
    const u = self.VTTCue || self.TextTrackCue;
    for (let d = 0; d < s.rows.length; d++)
      if (r = s.rows[d], o = !0, c = 0, l = "", !r.isEmpty()) {
        var h;
        for (let p = 0; p < r.chars.length; p++)
          Cd.test(r.chars[p].uchar) && o ? c++ : (l += r.chars[p].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), c >= 16 ? c-- : c++;
        const g = no(l.trim()), f = sr(e, t, g);
        a != null && (h = a.cues) != null && h.getCueById(f) || (n = new u(e, t, g), n.id = f, n.line = d + 1, n.align = "left", n.position = 10 + Math.min(80, Math.floor(c * 8 / 32) * 10), i.push(n));
      }
    return a && i.length && (i.sort((d, g) => d.line === "auto" || g.line === "auto" ? 0 : d.line > 8 && g.line > 8 ? g.line - d.line : d.line - g.line), i.forEach((d) => Ja(a, d))), i;
  }
};
function kd() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const wd = /(\d+)-(\d+)\/(\d+)/;
class xn {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || Nd, this.controller = new self.AbortController(), this.stats = new Oi();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const i = this.stats;
    if (i.loading.start)
      throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const r = Od(e, this.controller.signal), n = e.responseType === "arraybuffer", o = n ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: l
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && $(c) ? c : l, this.requestTimeout = self.setTimeout(() => {
      this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
    }, t.timeout), (Qt(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then((h) => {
      var d;
      this.response = this.loader = h;
      const g = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = l, this.requestTimeout = self.setTimeout(() => {
        this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
      }, l - (g - i.loading.start)), !h.ok) {
        const {
          status: p,
          statusText: y
        } = h;
        throw new Bd(y || "fetch, bad network response", p, h);
      }
      i.loading.first = g, i.total = Md(h.headers) || i.total;
      const f = (d = this.callbacks) == null ? void 0 : d.onProgress;
      return f && $(t.highWaterMark) ? this.loadProgressively(h, i, e, t.highWaterMark, f) : n ? h.arrayBuffer() : e.responseType === "json" ? h.json() : h.text();
    }).then((h) => {
      var d, g;
      const f = this.response;
      if (!f)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const p = h[o];
      p && (i.loaded = i.total = p);
      const y = {
        url: f.url,
        data: h,
        code: f.status
      }, E = (d = this.callbacks) == null ? void 0 : d.onProgress;
      E && !$(t.highWaterMark) && E(i, e, h, f), (g = this.callbacks) == null || g.onSuccess(y, i, e, f);
    }).catch((h) => {
      var d;
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const g = h && h.code || 0, f = h ? h.message : null;
      (d = this.callbacks) == null || d.onError({
        code: g,
        text: f
      }, e, h ? h.details : null, i);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, i = 0, r) {
    const n = new Ta(), o = e.body.getReader(), c = () => o.read().then((l) => {
      if (l.done)
        return n.dataLength && r(t, s, n.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
      const u = l.value, h = u.length;
      return t.loaded += h, h < i || n.dataLength ? (n.push(u), n.dataLength >= i && r(t, s, n.flush().buffer, e)) : r(t, s, u.buffer, e), c();
    }).catch(() => Promise.reject());
    return c();
  }
}
function Od(a, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(re({}, a.headers))
  };
  return a.rangeEnd && t.headers.set("Range", "bytes=" + a.rangeStart + "-" + String(a.rangeEnd - 1)), t;
}
function Fd(a) {
  const e = wd.exec(a);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function Md(a) {
  const e = a.get("Content-Range");
  if (e) {
    const s = Fd(e);
    if ($(s))
      return s;
  }
  const t = a.get("Content-Length");
  if (t)
    return parseInt(t);
}
function Nd(a, e) {
  return new self.Request(a.url, e);
}
class Bd extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const $d = /^age:\s*[\d.]+\s*$/im;
class uo {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new Oi(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url);
    }).catch((n) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((n) => {
      var o;
      (o = this.callbacks) == null || o.onError({
        code: s.status,
        text: n.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: n
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && $(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const i = t.readyState, r = this.config;
    if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const l = t.status, u = t.responseType === "text" ? t.responseText : null;
      if (l >= 200 && l < 300) {
        const f = u ?? t.response;
        if (f != null) {
          var n, o;
          s.loading.end = Math.max(self.performance.now(), s.loading.first);
          const p = t.responseType === "arraybuffer" ? f.byteLength : f.length;
          s.loaded = s.total = p, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first);
          const y = (n = this.callbacks) == null ? void 0 : n.onProgress;
          y && y(s, e, f, t);
          const E = {
            url: t.responseURL,
            data: f,
            code: l
          };
          (o = this.callbacks) == null || o.onSuccess(E, s, e, t);
          return;
        }
      }
      const h = r.loadPolicy.errorRetry, d = s.retry, g = {
        url: e.url,
        data: void 0,
        code: l
      };
      if (Ds(h, d, !1, g))
        this.retry(h);
      else {
        var c;
        ie.error(`${l} while loading ${e.url}`), (c = this.callbacks) == null || c.onError({
          code: l,
          text: t.statusText
        }, e, t, s);
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Ds(e, t, !0))
      this.retry(e);
    else {
      var s;
      ie.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = Bi(e, s.retry), s.retry++, ie.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && $d.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
const Ud = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, Gd = se(se({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  maxDevicePixelRatio: Number.POSITIVE_INFINITY,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  startOnSegmentBoundary: !1,
  // used by stream-controller
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller and gap-controller
  detectStallWithCurrentTimeMs: 1250,
  // used by gap-controller
  highBufferWatchdogPeriod: 2,
  // used by gap-controller
  nudgeOffset: 0.1,
  // used by gap-controller
  nudgeMaxRetry: 3,
  // used by gap-controller
  nudgeOnVideoHole: !0,
  // used by gap-controller
  liveSyncMode: "edge",
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveSyncOnStallIncrease: 1,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  ignorePlaylistParsingErrors: !1,
  loader: uo,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: Jl,
  bufferController: Vu,
  capLevelController: Zi,
  errorController: rc,
  fpsController: Hh,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: la,
  // used by eme-controller
  requireKeySystemAccessOnStart: !1,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableEmsgKLVMetadata: !1,
  enableID3MetadataCues: !0,
  enableInterstitialPlayback: !0,
  interstitialAppendInPlace: !0,
  interstitialLiveLookAhead: 10,
  useMediaCapabilities: !0,
  preserveManualLevelOnError: !1,
  certLoadPolicy: {
    default: Ud
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  interstitialAssetListLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 3e4,
      timeoutRetry: {
        maxNumRetry: 0,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 0,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, Kd()), {}, {
  subtitleStreamController: sd,
  subtitleTrackController: qh,
  timelineController: _d,
  audioStreamController: $u,
  audioTrackController: Uu,
  emeController: Ot,
  cmcdController: Uh,
  contentSteeringController: Kh,
  interstitialsController: td
});
function Kd() {
  return {
    cueHandler: Pd,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function Vd(a, e, t) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const s = Di(a), i = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((n) => {
    const o = `${n === "level" ? "playlist" : n}LoadPolicy`, c = e[o] === void 0, l = [];
    r.forEach((u) => {
      const h = `${n}Loading${u}`, d = e[h];
      if (d !== void 0 && c) {
        l.push(h);
        const g = s[o].default;
        switch (e[o] = {
          default: g
        }, u) {
          case "TimeOut":
            g.maxLoadTimeMs = d, g.maxTimeToFirstByteMs = d;
            break;
          case "MaxRetry":
            g.errorRetry.maxNumRetry = d, g.timeoutRetry.maxNumRetry = d;
            break;
          case "RetryDelay":
            g.errorRetry.retryDelayMs = d, g.timeoutRetry.retryDelayMs = d;
            break;
          case "MaxRetryTimeout":
            g.errorRetry.maxRetryDelayMs = d, g.timeoutRetry.maxRetryDelayMs = d;
            break;
        }
      }
    }), l.length && t.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${ae(e[o])}`);
  }), se(se({}, s), e);
}
function Di(a) {
  return a && typeof a == "object" ? Array.isArray(a) ? a.map(Di) : Object.keys(a).reduce((e, t) => (e[t] = Di(a[t]), e), {}) : a;
}
function Hd(a, e) {
  const t = a.loader;
  t !== xn && t !== uo ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = !1) : kd() && (a.loader = xn, a.progressive = !0, a.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
const xs = 2, Yd = 0.1, Wd = 0.05, qd = 100;
class jd extends ia {
  constructor(e, t) {
    super("gap-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
      this.ended = 0, this.waiting = 0;
    }, this.onMediaWaiting = () => {
      var s;
      (s = this.media) != null && s.seeking || (this.waiting = self.performance.now(), this.tick());
    }, this.onMediaEnded = () => {
      if (this.hls) {
        var s;
        this.ended = ((s = this.media) == null ? void 0 : s.currentTime) || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !1
        });
      }
    }, this.hls = e, this.fragmentTracker = t, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  destroy() {
    super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0;
  }
  onMediaAttached(e, t) {
    this.setInterval(qd), this.mediaSource = t.mediaSource;
    const s = this.media = t.media;
    Ie(s, "playing", this.onMediaPlaying), Ie(s, "waiting", this.onMediaWaiting), Ie(s, "ended", this.onMediaEnded);
  }
  onMediaDetaching(e, t) {
    this.clearInterval();
    const {
      media: s
    } = this;
    s && (be(s, "playing", this.onMediaPlaying), be(s, "waiting", this.onMediaWaiting), be(s, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0;
  }
  onBufferAppended(e, t) {
    this.buffered = t.timeRanges;
  }
  get hasBuffered() {
    return Object.keys(this.buffered).length > 0;
  }
  tick() {
    var e;
    if (!((e = this.media) != null && e.readyState) || !this.hasBuffered)
      return;
    const t = this.media.currentTime;
    this.poll(t, this.lastCurrentTime), this.lastCurrentTime = t;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    var s, i;
    const r = (s = this.hls) == null ? void 0 : s.config;
    if (!r)
      return;
    const n = this.media;
    if (!n)
      return;
    const {
      seeking: o
    } = n, c = this.seeking && !o, l = !this.seeking && o, u = n.paused && !o || n.ended || n.playbackRate === 0;
    if (this.seeking = o, e !== t) {
      t && (this.ended = 0), this.moved = !0, o || (this.nudgeRetry = 0, r.nudgeOnVideoHole && !u && e > t && this.nudgeOnVideoHole(e, t)), this.waiting === 0 && this.stallResolved(e);
      return;
    }
    if (l || c) {
      c && this.stallResolved(e);
      return;
    }
    if (u) {
      this.nudgeRetry = 0, this.stallResolved(e), !this.ended && n.ended && this.hls && (this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
        stalled: !1
      }));
      return;
    }
    if (!X.getBuffered(n).length) {
      this.nudgeRetry = 0;
      return;
    }
    const h = X.bufferInfo(n, e, 0), d = h.nextStart || 0, g = this.fragmentTracker;
    if (o && g && this.hls) {
      const D = An(this.hls.inFlightFragments, e), A = h.len > xs, R = !d || D || d - e > xs && !g.getPartialFragment(e);
      if (A || R)
        return;
      this.moved = !1;
    }
    const f = (i = this.hls) == null ? void 0 : i.latestLevelDetails;
    if (!this.moved && this.stalled !== null && g) {
      if (!(h.len > 0) && !d)
        return;
      const A = Math.max(d, h.start || 0) - e, b = !!(f != null && f.live) ? f.targetduration * 2 : xs, L = fs(e, g);
      if (A > 0 && (A <= b || L)) {
        n.paused || this._trySkipBufferHole(L);
        return;
      }
    }
    const p = r.detectStallWithCurrentTimeMs, y = self.performance.now(), E = this.waiting;
    let T = this.stalled;
    if (T === null)
      if (E > 0 && y - E < p)
        T = this.stalled = E;
      else {
        this.stalled = y;
        return;
      }
    const v = y - T;
    if (!o && (v >= p || E) && this.hls) {
      var S;
      if (((S = this.mediaSource) == null ? void 0 : S.readyState) === "ended" && !(f != null && f.live) && Math.abs(e - ((f == null ? void 0 : f.edge) || 0)) < 1) {
        if (this.ended)
          return;
        this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !0
        });
        return;
      }
      if (this._reportStall(h), !this.media || !this.hls)
        return;
    }
    const x = X.bufferInfo(n, e, r.maxBufferHole);
    this._tryFixBufferStall(x, v, e);
  }
  stallResolved(e) {
    const t = this.stalled;
    if (t && this.hls && (this.stalled = null, this.stallReported)) {
      const s = self.performance.now() - t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported = !1, this.waiting = 0, this.hls.trigger(m.STALL_RESOLVED, {});
    }
  }
  nudgeOnVideoHole(e, t) {
    var s;
    const i = this.buffered.video;
    if (this.hls && this.media && this.fragmentTracker && (s = this.buffered.audio) != null && s.length && i && i.length > 1 && e > i.end(0)) {
      const r = X.bufferedInfo(X.timeRangesToArray(this.buffered.audio), e, 0);
      if (r.len > 1 && t >= r.start) {
        const n = X.timeRangesToArray(i), o = X.bufferedInfo(n, t, 0).bufferedIndex;
        if (o > -1 && o < n.length - 1) {
          const c = X.bufferedInfo(n, e, 0).bufferedIndex, l = n[o].end, u = n[o + 1].start;
          if ((c === -1 || c > o) && u - l < 1 && // `maxBufferHole` may be too small and setting it to 0 should not disable this feature
          e - l < 2) {
            const h = new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${l} -> ${u} buffered index: ${c}`);
            this.warn(h.message), this.media.currentTime += 1e-6;
            let d = fs(e, this.fragmentTracker);
            d && "fragment" in d ? d = d.fragment : d || (d = void 0);
            const g = X.bufferInfo(this.media, e, 0);
            this.hls.trigger(m.ERROR, {
              type: Y.MEDIA_ERROR,
              details: _.BUFFER_SEEK_OVER_HOLE,
              fatal: !1,
              error: h,
              reason: h.message,
              frag: d,
              buffer: g.len,
              bufferInfo: g
            });
          }
        }
      }
    }
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t, s) {
    var i, r;
    const {
      fragmentTracker: n,
      media: o
    } = this, c = (i = this.hls) == null ? void 0 : i.config;
    if (!o || !n || !c)
      return;
    const l = (r = this.hls) == null ? void 0 : r.latestLevelDetails, u = fs(s, n);
    if ((u || l != null && l.live && s < l.fragmentStart) && (this._trySkipBufferHole(u) || !this.media))
      return;
    const h = e.buffered, d = this.adjacentTraversal(e, s);
    (h && h.length > 1 && e.len > c.maxBufferHole || e.nextStart && (e.nextStart - s < c.maxBufferHole || d)) && (t > c.highBufferWatchdogPeriod * 1e3 || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
  }
  adjacentTraversal(e, t) {
    const s = this.fragmentTracker, i = e.nextStart;
    if (s && i) {
      const r = s.getFragAtPos(t, V.MAIN), n = s.getFragAtPos(i, V.MAIN);
      if (r && n)
        return n.sn - r.sn < 2;
    }
    return !1;
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: i,
      stalled: r
    } = this;
    if (!i && r !== null && s && t) {
      this.stallReported = !0;
      const n = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${ae(e)})`);
      this.warn(n.message), t.trigger(m.ERROR, {
        type: Y.MEDIA_ERROR,
        details: _.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: n,
        buffer: e.len,
        bufferInfo: e,
        stalled: {
          start: r
        }
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param appended - The fragment or part found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    var t;
    const {
      fragmentTracker: s,
      media: i
    } = this, r = (t = this.hls) == null ? void 0 : t.config;
    if (!i || !s || !r)
      return 0;
    const n = i.currentTime, o = X.bufferInfo(i, n, 0), c = n < o.start ? o.start : o.nextStart;
    if (c && this.hls) {
      const u = o.len <= r.maxBufferHole, h = o.len > 0 && o.len < 1 && i.readyState < 3, d = c - n;
      if (d > 0 && (u || h)) {
        if (d > r.maxBufferHole) {
          let f = !1;
          if (n === 0) {
            const p = s.getAppendedFrag(0, V.MAIN);
            p && c < p.end && (f = !0);
          }
          if (!f && e) {
            var l;
            if (!((l = this.hls.loadLevelObj) != null && l.details) || An(this.hls.inFlightFragments, c))
              return 0;
            let y = !1, E = e.end;
            for (; E < c; ) {
              const T = fs(E, s);
              if (T)
                E += T.duration;
              else {
                y = !0;
                break;
              }
            }
            if (y)
              return 0;
          }
        }
        const g = Math.max(c + Wd, n + Yd);
        if (this.warn(`skipping hole, adjusting currentTime from ${n} to ${g}`), this.moved = !0, i.currentTime = g, !(e != null && e.gap)) {
          const f = new Error(`fragment loaded with buffer holes, seeking from ${n} to ${g}`), p = {
            type: Y.MEDIA_ERROR,
            details: _.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: f,
            reason: f.message,
            buffer: o.len,
            bufferInfo: o
          };
          e && ("fragment" in e ? p.part = e : p.frag = e), this.hls.trigger(m.ERROR, p);
        }
        return g;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer(e) {
    const {
      hls: t,
      media: s,
      nudgeRetry: i
    } = this, r = t == null ? void 0 : t.config;
    if (!s || !r)
      return 0;
    const n = s.currentTime;
    if (this.nudgeRetry++, i < r.nudgeMaxRetry) {
      const o = n + (i + 1) * r.nudgeOffset, c = new Error(`Nudging 'currentTime' from ${n} to ${o}`);
      this.warn(c.message), s.currentTime = o, t.trigger(m.ERROR, {
        type: Y.MEDIA_ERROR,
        details: _.BUFFER_NUDGE_ON_STALL,
        error: c,
        fatal: !1,
        buffer: e.len,
        bufferInfo: e
      });
    } else {
      const o = new Error(`Playhead still not moving while enough data buffered @${n} after ${r.nudgeMaxRetry} nudges`);
      this.error(o.message), t.trigger(m.ERROR, {
        type: Y.MEDIA_ERROR,
        details: _.BUFFER_STALLED_ERROR,
        error: o,
        fatal: !0,
        buffer: e.len,
        bufferInfo: e
      });
    }
  }
}
function An(a, e) {
  const t = Ln(a.main);
  if (t && t.start <= e)
    return t;
  const s = Ln(a.audio);
  return s && s.start <= e ? s : null;
}
function Ln(a) {
  if (!a)
    return null;
  switch (a.state) {
    case P.IDLE:
    case P.STOPPED:
    case P.ENDED:
    case P.ERROR:
      return null;
  }
  return a.frag;
}
function fs(a, e) {
  return e.getAppendedFrag(a, V.MAIN) || e.getPartialFragment(a);
}
const Xd = 0.25;
function Ci() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function li(a, e, t, s, i) {
  let r = new a(e, t, "");
  try {
    r.value = s, i && (r.type = i);
  } catch {
    r = new a(e, t, ae(i ? se({
      type: i
    }, s) : s));
  }
  return r;
}
const gs = (() => {
  const a = Ci();
  try {
    a && new a(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
class zd {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = !0, this.assetCue = void 0, this.onEventCueEnter = () => {
      this.hls && this.hls.trigger(m.EVENT_CUE_ENTER, {});
    }, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  // Add ID3 metatadata text track.
  onMediaAttaching(e, t) {
    var s;
    this.media = t.media, ((s = t.overrides) == null ? void 0 : s.cueRemoval) === !1 && (this.removeCues = !1);
  }
  onMediaAttached() {
    var e;
    const t = (e = this.hls) == null ? void 0 : e.latestLevelDetails;
    t && this.updateDateRangeCues(t);
  }
  onMediaDetaching(e, t) {
    this.media = null, !t.transferMedia && (this.id3Track && (this.removeCues && Ct(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return Za(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media || !this.hls)
      return;
    const {
      enableEmsgMetadataCues: s,
      enableID3MetadataCues: i
    } = this.hls.config;
    if (!s && !i)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const n = Ci();
    if (n)
      for (let o = 0; o < r.length; o++) {
        const c = r[o].type;
        if (c === Pe.emsg && !s || !i)
          continue;
        const l = Ra(r[o].data), u = r[o].pts;
        let h = u + r[o].duration;
        h > gs && (h = gs), h - u <= 0 && (h = u + Xd);
        for (let g = 0; g < l.length; g++) {
          const f = l[g];
          if (!ba(f)) {
            this.updateId3CueEnds(u, c);
            const p = li(n, u, h, f, c);
            p && this.id3Track.addCue(p);
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const i = (s = this.id3Track) == null ? void 0 : s.cues;
    if (i)
      for (let r = i.length; r--; ) {
        const n = i[r];
        n.type === t && n.startTime < e && n.endTime === gs && (n.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: i
  }) {
    const {
      id3Track: r,
      hls: n
    } = this;
    if (!n)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: c
      }
    } = n;
    if (r && (o || c)) {
      let l;
      i === "audio" ? l = (u) => u.type === Pe.audioId3 && c : i === "video" ? l = (u) => u.type === Pe.emsg && o : l = (u) => u.type === Pe.audioId3 && c || u.type === Pe.emsg && o, bi(r, t, s, l);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, !0);
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
  }
  updateDateRangeCues(e, t) {
    if (!this.hls || !this.media)
      return;
    const {
      assetPlayerId: s,
      timelineOffset: i,
      enableDateRangeMetadataCues: r,
      interstitialsController: n
    } = this.hls.config;
    if (!r)
      return;
    const o = Ci();
    if (s && i && !n) {
      const {
        fragmentStart: p,
        fragmentEnd: y
      } = e;
      let E = this.assetCue;
      E ? (E.startTime = p, E.endTime = y) : o && (E = this.assetCue = li(o, p, y, {
        assetPlayerId: this.hls.config.assetPlayerId
      }, "hlsjs.interstitial.asset"), E && (E.id = s, this.id3Track || (this.id3Track = this.createTrack(this.media)), this.id3Track.addCue(E), E.addEventListener("enter", this.onEventCueEnter)));
    }
    if (!e.hasProgramDateTime)
      return;
    const {
      id3Track: c
    } = this, {
      dateRanges: l
    } = e, u = Object.keys(l);
    let h = this.dateRangeCuesAppended;
    if (c && t) {
      var d;
      if ((d = c.cues) != null && d.length) {
        const p = Object.keys(h).filter((y) => !u.includes(y));
        for (let y = p.length; y--; ) {
          var g;
          const E = p[y], T = (g = h[E]) == null ? void 0 : g.cues;
          delete h[E], T && Object.keys(T).forEach((v) => {
            const S = T[v];
            if (S) {
              S.removeEventListener("enter", this.onEventCueEnter);
              try {
                c.removeCue(S);
              } catch {
              }
            }
          });
        }
      } else
        h = this.dateRangeCuesAppended = {};
    }
    const f = e.fragments[e.fragments.length - 1];
    if (!(u.length === 0 || !$(f == null ? void 0 : f.programDateTime))) {
      this.id3Track || (this.id3Track = this.createTrack(this.media));
      for (let p = 0; p < u.length; p++) {
        const y = u[p], E = l[y], T = E.startTime, v = h[y], S = (v == null ? void 0 : v.cues) || {};
        let x = (v == null ? void 0 : v.durationKnown) || !1, D = gs;
        const {
          duration: A,
          endDate: R
        } = E;
        if (R && A !== null)
          D = T + A, x = !0;
        else if (E.endOnNext && !x) {
          const L = u.reduce((C, F) => {
            if (F !== E.id) {
              const B = l[F];
              if (B.class === E.class && B.startDate > E.startDate && (!C || E.startDate < C.startDate))
                return B;
            }
            return C;
          }, null);
          L && (D = L.startTime, x = !0);
        }
        const b = Object.keys(E.attr);
        for (let L = 0; L < b.length; L++) {
          const C = b[L];
          if (!yc(C))
            continue;
          const F = S[C];
          if (F)
            x && !(v != null && v.durationKnown) ? F.endTime = D : Math.abs(F.startTime - T) > 0.01 && (F.startTime = T, F.endTime = D);
          else if (o) {
            let B = E.attr[C];
            Ec(C) && (B = Nn(B));
            const N = li(o, T, D, {
              key: C,
              data: B
            }, Pe.dateRange);
            N && (N.id = y, this.id3Track.addCue(N), S[C] = N, n && (C === "X-ASSET-LIST" || C === "X-ASSET-URL") && N.addEventListener("enter", this.onEventCueEnter));
          }
        }
        h[y] = {
          cues: S,
          dateRange: E,
          durationKnown: x
        };
      }
    }
  }
}
class Qd {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => {
      const {
        media: t
      } = this, s = this.levelDetails;
      if (!t || !s)
        return;
      this.currentTime = t.currentTime;
      const i = this.computeLatency();
      if (i === null)
        return;
      this._latency = i;
      const {
        lowLatencyMode: r,
        maxLiveSyncPlaybackRate: n
      } = this.config;
      if (!r || n === 1 || !s.live)
        return;
      const o = this.targetLatency;
      if (o === null)
        return;
      const c = i - o, l = Math.min(this.maxLatency, o + s.targetduration);
      if (c < l && c > 0.05 && this.forwardBufferLength > 1) {
        const h = Math.min(2, Math.max(1, n)), d = Math.round(2 / (1 + Math.exp(-0.75 * c - this.edgeStalled)) * 20) / 20, g = Math.min(h, Math.max(1, d));
        this.changeMediaPlaybackRate(t, g);
      } else t.playbackRate !== 1 && t.playbackRate !== 0 && this.changeMediaPlaybackRate(t, 1);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  get levelDetails() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.latestLevelDetails) || null;
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e
    } = this;
    if (e.liveMaxLatencyDuration !== void 0)
      return e.liveMaxLatencyDuration;
    const t = this.levelDetails;
    return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const e = this.levelDetails;
    if (e === null || this.hls === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: n,
      lowLatencyMode: o
    } = this.config, c = this.hls.userConfig;
    let l = o && s || t;
    (this._targetLatencyUpdated || c.liveSyncDuration || c.liveSyncDurationCount || l === 0) && (l = r !== void 0 ? r : n * i);
    const u = i;
    return l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, u);
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0;
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency;
    if (e === null || t === null)
      return null;
    const s = this.levelDetails;
    if (s === null)
      return null;
    const i = s.edge, r = e - t - this.edgeStalled, n = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(n, r), o);
  }
  get drift() {
    const e = this.levelDetails;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const e = this.levelDetails;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e
    } = this, t = this.levelDetails;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.ERROR, this.onError, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
  }
  onManifestLoading() {
    this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
  }
  onError(e, t) {
    var s;
    t.details === _.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
  }
  changeMediaPlaybackRate(e, t) {
    var s, i;
    e.playbackRate !== t && ((s = this.hls) == null || s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(i = this.targetLatency) == null ? void 0 : i.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t);
  }
  estimateLiveEdge() {
    const e = this.levelDetails;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
class Zd extends Qi {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, i = [], r = {}, n = {};
    let o = !1, c = !1, l = !1;
    t.levels.forEach((u) => {
      const h = u.attrs;
      let {
        audioCodec: d,
        videoCodec: g
      } = u;
      d && (u.audioCodec = d = Is(d, s) || void 0), g && (g = u.videoCodec = Ol(g));
      const {
        width: f,
        height: p,
        unknownCodecs: y
      } = u, E = (y == null ? void 0 : y.length) || 0;
      if (o || (o = !!(f && p)), c || (c = !!g), l || (l = !!d), E || d && !this.isAudioSupported(d) || g && !this.isVideoSupported(g)) {
        this.log(`Some or all CODECS not supported "${h.CODECS}"`);
        return;
      }
      const {
        CODECS: T,
        "FRAME-RATE": v,
        "HDCP-LEVEL": S,
        "PATHWAY-ID": x,
        RESOLUTION: D,
        "VIDEO-RANGE": A
      } = h, b = `${`${x || "."}-`}${u.bitrate}-${D}-${v}-${T}-${A}-${S}`;
      if (r[b])
        if (r[b].uri !== u.url && !u.attrs["PATHWAY-ID"]) {
          const L = n[b] += 1;
          u.attrs["PATHWAY-ID"] = new Array(L + 1).join(".");
          const C = this.createLevel(u);
          r[b] = C, i.push(C);
        } else
          r[b].addGroupId("audio", h.AUDIO), r[b].addGroupId("text", h.SUBTITLES);
      else {
        const L = this.createLevel(u);
        r[b] = L, n[b] = 1, i.push(L);
      }
    }), this.filterAndSortMediaOptions(i, t, o, c, l);
  }
  createLevel(e) {
    const t = new jt(e), s = e.supplemental;
    if (s != null && s.videoCodec && !this.isVideoSupported(s.videoCodec)) {
      const i = new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
      this.log(i.message), t.supportedResult = Xn(i, []);
    }
    return t;
  }
  isAudioSupported(e) {
    return Wt(e, "audio", this.hls.config.preferManagedMediaSource);
  }
  isVideoSupported(e) {
    return Wt(e, "video", this.hls.config.preferManagedMediaSource);
  }
  filterAndSortMediaOptions(e, t, s, i, r) {
    var n;
    let o = [], c = [], l = e;
    const u = ((n = t.stats) == null ? void 0 : n.parsing) || {};
    if ((s || i) && r && (l = l.filter(({
      videoCodec: T,
      videoRange: v,
      width: S,
      height: x
    }) => (!!T || !!(S && x)) && Hl(v))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          let T = "no level with compatible codecs found in manifest", v = T;
          t.levels.length && (v = `one or more CODECS in variant not supported: ${ae(t.levels.map((x) => x.attrs.CODECS).filter((x, D, A) => A.indexOf(x) === D))}`, this.warn(v), T += ` (${v})`);
          const S = new Error(T);
          this.hls.trigger(m.ERROR, {
            type: Y.MEDIA_ERROR,
            details: _.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: S,
            reason: v
          });
        }
      }), u.end = performance.now();
      return;
    }
    t.audioTracks && (o = t.audioTracks.filter((T) => !T.audioCodec || this.isAudioSupported(T.audioCodec)), In(o)), t.subtitles && (c = t.subtitles, In(c));
    const h = l.slice(0);
    l.sort((T, v) => {
      if (T.attrs["HDCP-LEVEL"] !== v.attrs["HDCP-LEVEL"])
        return (T.attrs["HDCP-LEVEL"] || "") > (v.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && T.height !== v.height)
        return T.height - v.height;
      if (T.frameRate !== v.frameRate)
        return T.frameRate - v.frameRate;
      if (T.videoRange !== v.videoRange)
        return Rs.indexOf(T.videoRange) - Rs.indexOf(v.videoRange);
      if (T.videoCodec !== v.videoCodec) {
        const S = mr(T.videoCodec), x = mr(v.videoCodec);
        if (S !== x)
          return x - S;
      }
      if (T.uri === v.uri && T.codecSet !== v.codecSet) {
        const S = Ls(T.codecSet), x = Ls(v.codecSet);
        if (S !== x)
          return x - S;
      }
      return T.averageBitrate !== v.averageBitrate ? T.averageBitrate - v.averageBitrate : 0;
    });
    let d = h[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== h.length)) {
      for (let T = 0; T < h.length; T++)
        if (h[T].pathwayId === l[0].pathwayId) {
          d = h[T];
          break;
        }
    }
    this._levels = l;
    for (let T = 0; T < l.length; T++)
      if (l[T] === d) {
        var g;
        this._firstLevel = T;
        const v = d.bitrate, S = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${v}`), ((g = this.hls.userConfig) == null ? void 0 : g.abrEwmaDefaultEstimate) === void 0) {
          const x = Math.min(v, this.hls.config.abrEwmaDefaultEstimateMax);
          x > S && S === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = x);
        }
        break;
      }
    const f = r && !i, p = this.hls.config, y = !!(p.audioStreamController && p.audioTrackController), E = {
      levels: l,
      audioTracks: o,
      subtitleTracks: c,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: i,
      altAudio: y && !f && o.some((T) => !!T.url)
    };
    u.end = performance.now(), this.hls.trigger(m.MANIFEST_PARSED, E);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get loadLevelObj() {
    return this.currentLevel;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const u = new Error("invalid level idx"), h = e < 0;
      if (this.hls.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: h,
        error: u,
        reason: u.message
      }), h)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, r = i ? i.attrs["PATHWAY-ID"] : void 0, n = t[e], o = n.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = n, s === e && i && r === o)
      return;
    this.log(`Switching to level ${e} (${n.height ? n.height + "p " : ""}${n.videoRange ? n.videoRange + " " : ""}${n.codecSet ? n.codecSet + " " : ""}@${n.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const c = {
      level: e,
      attrs: n.attrs,
      details: n.details,
      bitrate: n.bitrate,
      averageBitrate: n.averageBitrate,
      maxBitrate: n.maxBitrate,
      realBitrate: n.realBitrate,
      width: n.width,
      height: n.height,
      codecSet: n.codecSet,
      audioCodec: n.audioCodec,
      videoCodec: n.videoCodec,
      audioGroups: n.audioGroups,
      subtitleGroups: n.subtitleGroups,
      loaded: n.loaded,
      loadError: n.loadError,
      fragmentError: n.fragmentError,
      name: n.name,
      id: n.id,
      uri: n.uri,
      url: n.url,
      urlId: 0,
      audioGroupIds: n.audioGroupIds,
      textGroupIds: n.textGroupIds
    };
    this.hls.trigger(m.LEVEL_SWITCHING, c);
    const l = n.details;
    if (!l || l.live) {
      const u = this.switchParams(n.uri, i == null ? void 0 : i.details, l);
      this.loadPlaylist(u);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  get pathways() {
    return this.steering ? this.steering.pathways() : [];
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null;
  }
  set pathwayPriority(e) {
    if (this.steering) {
      const t = this.steering.pathways(), s = e.filter((i) => t.indexOf(i) !== -1);
      if (e.length < 1) {
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return;
      }
      this.steering.pathwayPriority = s;
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Z.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === V.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((r) => !!s[r]))
        return;
      const i = this._levels[t.level];
      i != null && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: r
    } = t, n = t.levelInfo;
    if (!n) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    if (n === this.currentLevel || t.withoutMultiVariant) {
      n.fragmentError === 0 && (n.loadError = 0);
      let c = n.details;
      c === t.details && c.advanced && (c = void 0), this.playlistLoaded(i, t, c);
    } else (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = this.getUrlWithDirectives(e.uri, t), i = this.currentLevelIndex, r = e.attrs["PATHWAY-ID"], n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading level index ${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${r ? " Pathway " + r : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${s}`), this.hls.trigger(m.LEVEL_LOADING, {
      url: s,
      level: i,
      levelInfo: e,
      pathwayId: e.attrs["PATHWAY-ID"],
      id: 0,
      // Deprecated Level urlId
      deliveryDirectives: t || null
    });
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    if (this._levels.length === 1)
      return;
    const s = this._levels.filter((r, n) => n !== e ? !0 : (this.steering && this.steering.removeLevel(r), r === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, r.details && r.details.fragments.forEach((o) => o.level = -1)), !1));
    pa(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
    const i = s.length - 1;
    this._firstLevel = Math.min(this._firstLevel, i), this._startLevel && (this._startLevel = Math.min(this._startLevel, i)), this.hls.trigger(m.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(m.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function In(a) {
  const e = {};
  a.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
function ho() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function fo() {
  if (!ht())
    return !1;
  const e = ho();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Jd() {
  if (!fo())
    return !1;
  const a = ht();
  return typeof (a == null ? void 0 : a.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => a.isTypeSupported(qt(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => a.isTypeSupported(qt(e, "audio"))));
}
function ef() {
  var a;
  const e = ho();
  return typeof (e == null || (a = e.prototype) == null ? void 0 : a.changeType) == "function";
}
const tf = 100;
class sf extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "stream-controller", V.MAIN), this.audioCodecSwap = !1, this.level = -1, this._forceStartLoad = !1, this._hasEnoughToStart = !1, this.altAudio = 0, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick();
    }, this.onMediaSeeked = () => {
      const i = this.media, r = i ? i.currentTime : null;
      if (r === null || !$(r) || (this.log(`Media seeked to ${r.toFixed(3)}`), !this.getBufferedFrag(r)))
        return;
      const n = this.getFwdBufferInfoAtPos(i, r, V.MAIN, 0);
      if (n === null || n.len === 0) {
        this.warn(`Main forward buffer length at ${r} on "seeked" event ${n ? n.len : "empty"})`);
        return;
      }
      this.tick();
    }, this.registerListeners();
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e, t) {
    if (this.levels) {
      const {
        lastCurrentTime: s,
        hls: i
      } = this;
      if (this.stopLoad(), this.setInterval(tf), this.level = -1, !this.startFragRequested) {
        let r = i.startLevel;
        r === -1 && (i.config.testBandwidth && this.levels.length > 1 ? (r = 0, this.bitrateTest = !0) : r = i.firstAutoLevel), i.nextLoadLevel = r, this.level = i.loadLevel, this._hasEnoughToStart = !!t;
      }
      s > 0 && e === -1 && !t && (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s), this.state = P.IDLE, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = P.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case P.WAITING_LEVEL: {
        const {
          levels: e,
          level: t
        } = this, s = e == null ? void 0 : e[t], i = s == null ? void 0 : s.details;
        if (i && (!i.live || this.levelLastLoaded === s && !this.waitForLive(s))) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = P.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = P.IDLE;
          break;
        }
        break;
      }
      case P.FRAG_LOADING_WAITING_RETRY:
        this.checkRetryDate();
        break;
    }
    this.state === P.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    var e;
    super.onTickEnd(), (e = this.media) != null && e.readyState && this.media.seeking === !1 && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this;
    if (t === null || !i && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = this.buffering ? e.nextLoadLevel : e.loadLevel;
    if (!(s != null && s[r]))
      return;
    const n = s[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const c = this.getLevelDetails();
    if (c && this._streamEnded(o, c)) {
      const p = {};
      this.altAudio === 2 && (p.type = "video"), this.hls.trigger(m.BUFFER_EOS, p), this.state = P.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const l = n.details;
    if (!l || this.state === P.WAITING_LEVEL || this.waitForLive(n)) {
      this.level = r, this.state = P.WAITING_LEVEL, this.startFragRequested = !1;
      return;
    }
    const u = o.len, h = this.getMaxBufferLength(n.maxBitrate);
    if (u >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const d = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let g = this.getNextFragment(d, l);
    if (this.couldBacktrack && !this.fragPrevious && g && fe(g) && this.fragmentTracker.getState(g) !== pe.OK) {
      var f;
      const y = ((f = this.backtrackFragment) != null ? f : g).sn - l.startSN, E = l.fragments[y - 1];
      E && g.cc === E.cc && (g = E, this.fragmentTracker.removeFragment(E));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (g && this.isLoopLoading(g, d)) {
      if (!g.gap) {
        const y = this.audioOnly && !this.altAudio ? ne.AUDIO : ne.VIDEO, E = (y === ne.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, y, V.MAIN);
      }
      g = this.getNextFragmentLoopLoading(g, l, o, V.MAIN, h);
    }
    g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, n, d));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    i === pe.NOT_LOADED || i === pe.PARTIAL ? fe(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, V.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, c = e[o], l = this.fragLastKbps;
        l && this.fragCurrent ? s = this.fragCurrent.duration * c.maxBitrate / (1e3 * l) + 1 : s = 0;
      } else
        s = 0;
      const n = this.getBufferedFrag(t.currentTime + s);
      if (n) {
        const o = this.followingBufferedFrag(n);
        if (o) {
          this.abortCurrentFrag();
          const c = o.maxStartPTS ? o.maxStartPTS : o.start, l = o.duration, u = Math.max(n.end, c + Math.min(Math.max(l - this.config.maxFragLookUpTolerance, l * (this.couldBacktrack ? 0.5 : 0.125)), l * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case P.KEY_LOADING:
      case P.FRAG_LOADING:
      case P.FRAG_LOADING_WAITING_RETRY:
      case P.PARSING:
      case P.PARSED:
        this.state = P.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio === 2 ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    Ie(s, "playing", this.onMediaPlaying), Ie(s, "seeked", this.onMediaSeeked);
  }
  onMediaDetaching(e, t) {
    const {
      media: s
    } = this;
    s && (be(s, "playing", this.onMediaPlaying), be(s, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), !t.transferMedia && (this._hasEnoughToStart = !1);
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(m.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1;
    for (let r = 0; r < t.levels.length; r++) {
      const n = t.levels[r].audioCodec;
      n && (s = s || n.indexOf("mp4a.40.2") !== -1, i = i || n.indexOf("mp4a.40.5") !== -1);
    }
    this.audioCodecSwitch = s && i && !ef(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== P.IDLE)
      return;
    const i = t.levelInfo;
    (!i.details || i.details.live && (this.levelLastLoaded !== i || i.details.expired) || this.waitForCdnTuneIn(i.details)) && (this.state = P.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i,
      startFragRequested: r
    } = this, n = t.level, o = t.details, c = o.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${n}`);
      return;
    }
    this.log(`Level ${n} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${c}`);
    const l = t.levelInfo, u = this.fragCurrent;
    u && (this.state === P.FRAG_LOADING || this.state === P.FRAG_LOADING_WAITING_RETRY) && u.level !== t.level && u.loader && this.abortCurrentFrag();
    let h = 0;
    if (o.live || (s = l.details) != null && s.live) {
      var d;
      if (this.checkLiveUpdate(o), o.deltaUpdateFailed)
        return;
      h = this.alignPlaylists(o, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
    }
    if (l.details = o, this.levelLastLoaded = l, r || this.setStartPosition(o, h), this.hls.trigger(m.LEVEL_UPDATED, {
      details: o,
      level: n
    }), this.state === P.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(o))
        return;
      this.state = P.IDLE;
    }
    r && o.live && this.synchronizeToLiveEdge(o), this.tick();
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, r = this.getLoadPosition(), n = e.fragmentStart, o = e.edge, c = r >= n - t.maxFragLookUpTolerance && r <= o;
    if (i !== null && s.duration > i && (r < i || !c)) {
      const u = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      if ((!c && s.readyState < 4 || r < o - u) && (this._hasEnoughToStart || (this.nextLoadPosition = i), s.readyState))
        if (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), this.config.liveSyncMode === "buffered") {
          var l;
          const h = X.bufferInfo(s, i, 0);
          if (!((l = h.buffered) != null && l.length)) {
            s.currentTime = i;
            return;
          }
          if (h.start <= r) {
            s.currentTime = i;
            return;
          }
          const {
            nextStart: g
          } = X.bufferedInfo(h.buffered, r, 0);
          g && (s.currentTime = g);
        } else
          s.currentTime = i;
    }
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      levels: n
    } = this;
    if (!n) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = n[s.level];
    if (!o) {
      this.warn(`Level ${s.level} not found on progress`);
      return;
    }
    const c = o.details;
    if (!c) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const l = o.videoCodec, u = c.PTSKnown || !c.live, h = (t = s.initSegment) == null ? void 0 : t.data, d = this._getAudioCodec(o), g = this.transmuxer = this.transmuxer || new Ba(this.hls, V.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f = i ? i.index : -1, p = f !== -1, y = new Ui(s.level, s.sn, s.stats.chunkCount, r.byteLength, f, p), E = this.initPTS[s.cc];
    g.push(r, h, d, l, s, i, c.totalduration, u, y, E);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.hls, i = this.altAudio !== 0;
    if (bs(t.url, s))
      this.altAudio = 1;
    else {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const n = this.fragCurrent;
        n && (this.log("Switching to main audio track, cancel main fragment load"), n.abortRequests(), this.fragmentTracker.removeFragment(n)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      if (i) {
        this.altAudio = 0, this.fragmentTracker.removeAllFragments(), s.once(m.BUFFER_FLUSHED, () => {
          this.hls && this.hls.trigger(m.AUDIO_TRACK_SWITCHED, t);
        }), s.trigger(m.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: Number.POSITIVE_INFINITY,
          type: null
        });
        return;
      }
      s.trigger(m.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = bs(t.url, this.hls);
    if (s) {
      const i = this.videoBuffer;
      i && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i);
    }
    this.altAudio = s ? 2 : 0, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, r, n = !1;
    for (const o in s) {
      const c = s[o];
      if (c.id === "main") {
        if (r = o, i = c, o === "video") {
          const l = s[o];
          l && (this.videoBuffer = l.buffer);
        }
      } else
        n = !0;
    }
    n && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = s.type === V.MAIN;
    if (r) {
      if (this.fragContextChanged(s)) {
        this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === P.PARSED && (this.state = P.IDLE);
        return;
      }
      const o = i ? i.stats : s.stats;
      this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), fe(s) && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
    }
    const n = this.media;
    n && (!this._hasEnoughToStart && X.getBuffered(n).length && (this._hasEnoughToStart = !0, this.seekToStartPos()), r && this.tick());
  }
  get hasEnoughToStart() {
    return this._hasEnoughToStart;
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = P.ERROR;
      return;
    }
    switch (t.details) {
      case _.FRAG_GAP:
      case _.FRAG_PARSING_ERROR:
      case _.FRAG_DECRYPT_ERROR:
      case _.FRAG_LOAD_ERROR:
      case _.FRAG_LOAD_TIMEOUT:
      case _.KEY_LOAD_ERROR:
      case _.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.MAIN, t);
        break;
      case _.LEVEL_LOAD_ERROR:
      case _.LEVEL_LOAD_TIMEOUT:
      case _.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === P.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === Z.LEVEL && (this.state = P.IDLE);
        break;
      case _.BUFFER_ADD_CODEC_ERROR:
      case _.BUFFER_APPEND_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
        break;
      case _.BUFFER_FULL_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && (!this.config.interstitialsController && this.config.assetPlayerId ? this._hasEnoughToStart = !0 : this.flushMainBuffer(0, Number.POSITIVE_INFINITY));
        break;
      case _.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = P.IDLE, this._hasEnoughToStart || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ne.AUDIO || !this.altAudio) {
      const s = (t === ne.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      s && (this.afterBufferFlushed(s, t, V.MAIN), this.tick());
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, this.level === -1 && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const i = this.timelineOffset;
      i && s && (s += i);
      const r = this.getLevelDetails(), n = X.getBuffered(e), o = n.length ? n.start(0) : 0, c = o - s, l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
      (this.config.startOnSegmentBoundary || c > 0 && (c < l || this.loadingParts && c < 2 * ((r == null ? void 0 : r.partTarget) || 0))) && (this.log(`adjusting start position by ${c} to match buffer start`), s += c, this.startPosition = s), t < s && (this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`), e.currentTime = s);
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: i
      } = this, r = s == null ? void 0 : s.frag;
      if (!r || this.fragContextChanged(r))
        return;
      t.fragmentError = 0, this.state = P.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const n = r.stats;
      n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(), i.trigger(m.FRAG_LOADED, s), r.bitrateTest = !1;
    }).catch((s) => {
      this.state === P.STOPPED || this.state === P.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  _handleTransmuxComplete(e) {
    const t = this.playlistType, {
      hls: s
    } = this, {
      remuxResult: i,
      chunkMeta: r
    } = e, n = this.getCurrentContext(r);
    if (!n) {
      this.resetWhenMissingContext(r);
      return;
    }
    const {
      frag: o,
      part: c,
      level: l
    } = n, {
      video: u,
      text: h,
      id3: d,
      initSegment: g
    } = i, {
      details: f
    } = l, p = this.altAudio ? void 0 : i.audio;
    if (this.fragContextChanged(o)) {
      this.fragmentTracker.removeFragment(o);
      return;
    }
    if (this.state = P.PARSING, g) {
      const y = g.tracks;
      if (y) {
        const S = o.initSegment || o;
        if (this.unhandledEncryptionError(g, o))
          return;
        this._bufferInitSegment(l, y, S, r), s.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
          frag: S,
          id: t,
          tracks: y
        });
      }
      const E = g.initPTS, T = g.timescale, v = this.initPTS[o.cc];
      if ($(E) && (!v || v.baseTime !== E || v.timescale !== T)) {
        const S = g.trackId;
        this.initPTS[o.cc] = {
          baseTime: E,
          timescale: T,
          trackId: S
        }, s.trigger(m.INIT_PTS_FOUND, {
          frag: o,
          id: t,
          initPTS: E,
          timescale: T,
          trackId: S
        });
      }
    }
    if (u && f) {
      p && u.type === "audiovideo" && this.logMuxedErr(o);
      const y = f.fragments[o.sn - 1 - f.startSN], E = o.sn === f.startSN, T = !y || o.cc > y.cc;
      if (i.independent !== !1) {
        const {
          startPTS: v,
          endPTS: S,
          startDTS: x,
          endDTS: D
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: v,
            endPTS: S,
            startDTS: x,
            endDTS: D
          };
        else if (u.firstKeyFrame && u.independent && r.id === 1 && !T && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const A = this.getMainFwdBufferInfo(), R = (A ? A.end : this.getLoadPosition()) + this.config.maxBufferHole, b = u.firstKeyFramePTS ? u.firstKeyFramePTS : v;
          if (!E && R < b - this.config.maxBufferHole && !T) {
            this.backtrack(o);
            return;
          } else T && (o.gap = !0);
          o.setElementaryStreamInfo(u.type, o.start, S, o.start, D, !0);
        } else E && v - (f.appliedTimelineOffset || 0) > xs && (o.gap = !0);
        o.setElementaryStreamInfo(u.type, v, S, x, D), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(u, o, c, r, E || T);
      } else if (E || T)
        o.gap = !0;
      else {
        this.backtrack(o);
        return;
      }
    }
    if (p) {
      const {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: v
      } = p;
      c && (c.elementaryStreams[ne.AUDIO] = {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: v
      }), o.setElementaryStreamInfo(ne.AUDIO, y, E, T, v), this.bufferFragmentData(p, o, c, r);
    }
    if (f && d != null && d.samples.length) {
      const y = {
        id: t,
        frag: o,
        details: f,
        samples: d.samples
      };
      s.trigger(m.FRAG_PARSING_METADATA, y);
    }
    if (f && h) {
      const y = {
        id: t,
        frag: o,
        details: f,
        samples: h.samples
      };
      s.trigger(m.FRAG_PARSING_USERDATA, y);
    }
  }
  logMuxedErr(e) {
    this.warn(`${fe(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== P.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(s));
    const {
      audio: r,
      video: n,
      audiovideo: o
    } = t;
    if (r) {
      const l = e.audioCodec;
      let u = ms(r.codec, l);
      u === "mp4a" && (u = "mp4a.40.5");
      const h = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        u && (u.indexOf("mp4a.40.5") !== -1 ? u = "mp4a.40.2" : u = "mp4a.40.5");
        const d = r.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && h.indexOf("firefox") === -1 && (u = "mp4a.40.5");
      }
      u && u.indexOf("mp4a.40.5") !== -1 && h.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (u = "mp4a.40.2", this.log(`Android: force audio codec to ${u}`)), l && l !== u && this.log(`Swapping manifest audio codec "${l}" for "${u}"`), r.levelCodec = u, r.id = V.MAIN, this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${u || ""}/${l || ""}/${r.codec}]`), delete t.audiovideo;
    }
    if (n) {
      n.levelCodec = e.videoCodec, n.id = V.MAIN;
      const l = n.codec;
      if ((l == null ? void 0 : l.length) === 4)
        switch (l) {
          case "hvc1":
          case "hev1":
            n.codec = "hvc1.1.6.L120.90";
            break;
          case "av01":
            n.codec = "av01.0.04M.08";
            break;
          case "avc1":
            n.codec = "avc1.42e01e";
            break;
        }
      this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${l}]${n.codec !== l ? " parsed-corrected=" + n.codec : ""}${n.supplemental ? " supplemental=" + n.supplemental : ""}`), delete t.audiovideo;
    }
    o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio);
    const c = Object.keys(t);
    if (c.length) {
      if (this.hls.trigger(m.BUFFER_CODECS, t), !this.hls)
        return;
      c.forEach((l) => {
        const h = t[l].initSegment;
        h != null && h.byteLength && this.hls.trigger(m.BUFFER_APPENDING, {
          type: l,
          data: h,
          frag: s,
          part: null,
          chunkMeta: i,
          parent: s.type
        });
      });
    }
    this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    const e = this.mediaBuffer && this.altAudio === 2 ? this.mediaBuffer : this.media;
    return this.getFwdBufferInfo(e, V.MAIN);
  }
  get maxBufferLength() {
    const {
      levels: e,
      level: t
    } = this, s = e == null ? void 0 : e[t];
    return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength;
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = P.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (X.isBuffered(e, s) ? t = this.getAppendedFrag(s) : X.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, r = t.level;
        (!i || t.sn !== i.sn || i.level !== r) && (this.fragPlaying = t, this.hls.trigger(m.FRAG_CHANGED, {
          frag: t
        }), (!i || i.level !== r) && this.hls.trigger(m.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying)
      return this.fragPlaying;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    return $(t) ? this.getAppendedFrag(t) : null;
  }
  get currentProgramDateTime() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    if ($(t)) {
      const s = this.getLevelDetails(), i = this.currentFrag || (s ? xt(null, s.fragments, t) : null);
      if (i) {
        const r = i.programDateTime;
        if (r !== null) {
          const n = r + (t - i.start) * 1e3;
          return new Date(n);
        }
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class rf extends Be {
  constructor(e, t) {
    super("key-loader", t), this.config = void 0, this.keyIdToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyIdToKeyInfo) {
      const i = this.keyIdToKeyInfo[s].loader;
      if (i) {
        var t;
        if (e && e !== ((t = i.context) == null ? void 0 : t.frag.type))
          return;
        i.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyIdToKeyInfo = {};
  }
  createKeyLoadError(e, t = _.KEY_LOAD_ERROR, s, i, r) {
    return new tt({
      type: Y.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: s,
      networkDetails: i
    });
  }
  loadClear(e, t, s) {
    if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
      if (t.length)
        for (let i = 0, r = t.length; i < r; i++) {
          const n = t[i];
          if (e.cc <= n.cc && (!fe(e) || !fe(n) || e.sn < n.sn) || !s && i == r - 1)
            return this.emeController.selectKeySystemFormat(n).then((o) => {
              if (!this.emeController)
                return;
              n.setKeyFormat(o);
              const c = ys(o);
              if (c)
                return this.emeController.getKeySystemAccess([c]);
            });
        }
      if (this.config.requireKeySystemAccessOnStart) {
        const i = Kt(this.config);
        if (i.length)
          return this.emeController.getKeySystemAccess(i);
      }
    }
    return null;
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const l = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`);
      return Promise.reject(this.createKeyLoadError(e, _.KEY_LOAD_ERROR, l));
    }
    const n = r.uri;
    if (!n)
      return Promise.reject(this.createKeyLoadError(e, _.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
    const o = ci(r);
    let c = this.keyIdToKeyInfo[o];
    if ((s = c) != null && s.decryptdata.key)
      return r.key = c.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: c
      });
    if (this.emeController && (i = c) != null && i.keyLoadPromise)
      switch (this.emeController.getKeyStatus(c.decryptdata)) {
        case "usable":
        case "usable-in-future":
          return c.keyLoadPromise.then((u) => {
            const {
              keyInfo: h
            } = u;
            return r.key = h.decryptdata.key, {
              frag: e,
              keyInfo: h
            };
          });
      }
    switch (this.log(`${this.keyIdToKeyInfo[o] ? "Rel" : "L"}oading${r.keyId ? " keyId: " + ve(r.keyId) : ""} URI: ${r.uri} from ${e.type} ${e.level}`), c = this.keyIdToKeyInfo[o] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(c, e) : this.loadKeyEME(c, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(c, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, _.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      var i;
      if (!e.decryptdata.keyId && (i = t.initSegment) != null && i.data) {
        const n = xl(t.initSegment.data);
        if (n.length) {
          let o = n[0];
          o.some((c) => c !== 0) ? (this.log(`Using keyId found in init segment ${ve(o)}`), ut.setKeyIdForUri(e.decryptdata.uri, o)) : (o = ut.addKeyIdForUri(e.decryptdata.uri), this.log(`Generating keyId to patch media ${ve(o)}`)), e.decryptdata.keyId = o;
        }
      }
      if (!e.decryptdata.keyId && !fe(t))
        return Promise.resolve(s);
      const r = this.emeController.loadKey(s);
      return (e.keyLoadPromise = r.then((n) => (e.mediaKeySessionContext = n, s))).catch((n) => {
        throw e.keyLoadPromise = null, "data" in n && (n.data.frag = t), n;
      });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, i = s.loader, r = new i(s);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((n, o) => {
      const c = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, l = s.keyLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, g, f, p) => {
          const {
            frag: y,
            keyInfo: E
          } = f, T = ci(E.decryptdata);
          if (!y.decryptdata || E !== this.keyIdToKeyInfo[T])
            return o(this.createKeyLoadError(y, _.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), p));
          E.decryptdata.key = y.decryptdata.key = new Uint8Array(d.data), y.keyLoader = null, E.loader = null, n({
            frag: y,
            keyInfo: E
          });
        },
        onError: (d, g, f, p) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, _.KEY_LOAD_ERROR, new Error(`HTTP Error ${d.code} loading key ${d.text}`), f, se({
            url: c.url,
            data: void 0
          }, d)));
        },
        onTimeout: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, _.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), f));
        },
        onAbort: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, _.INTERNAL_ABORTED, new Error("key loading aborted"), f));
        }
      };
      r.load(c, u, h);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: i
    } = e, r = s.loader;
    t.keyLoader === r && (t.keyLoader = null, s.loader = null);
    const n = ci(s.decryptdata) || i;
    delete this.keyIdToKeyInfo[n], r && r.destroy();
  }
}
function ci(a) {
  if (a.keyFormat !== Se.FAIRPLAY) {
    const e = a.keyId;
    if (e)
      return ve(e);
  }
  return a.uri;
}
function Rn(a) {
  const {
    type: e
  } = a;
  switch (e) {
    case Z.AUDIO_TRACK:
      return V.AUDIO;
    case Z.SUBTITLE_TRACK:
      return V.SUBTITLE;
    default:
      return V.MAIN;
  }
}
function ui(a, e) {
  let t = a.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class nf {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, i = t.loader, r = s || i, n = new r(t);
    return this.loaders[e.type] = n, n;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: Z.MANIFEST,
      url: s,
      deliveryDirectives: null,
      levelOrTrack: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      pathwayId: r,
      url: n,
      deliveryDirectives: o,
      levelInfo: c
    } = t;
    this.load({
      id: s,
      level: i,
      pathwayId: r,
      responseType: "text",
      type: Z.LEVEL,
      url: n,
      deliveryDirectives: o,
      levelOrTrack: c
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: Z.AUDIO_TRACK,
      url: r,
      deliveryDirectives: n,
      levelOrTrack: o
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: Z.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: n,
      levelOrTrack: o
    });
  }
  onLevelsUpdated(e, t) {
    const s = this.loaders[Z.LEVEL];
    if (s) {
      const i = s.context;
      i && !t.levels.some((r) => r === i.levelOrTrack) && (s.abort(), delete this.loaders[Z.LEVEL]);
    }
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const l = this.hls.logger, u = i.context;
      if (u && u.levelOrTrack === e.levelOrTrack && (u.url === e.url || u.deliveryDirectives && !e.deliveryDirectives)) {
        u.url === e.url ? l.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : l.log(`[playlist-loader]: ignore ${e.url} in favor of ${u.url}`);
        return;
      }
      l.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let r;
    if (e.type === Z.MANIFEST ? r = s.manifestLoadPolicy.default : r = re({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), $((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let l;
      if (e.type === Z.LEVEL && e.level !== null ? l = this.hls.levels[e.level].details : e.type === Z.AUDIO_TRACK && e.id !== null ? l = this.hls.audioTracks[e.id].details : e.type === Z.SUBTITLE_TRACK && e.id !== null && (l = this.hls.subtitleTracks[e.id].details), l) {
        const u = l.partTarget, h = l.targetduration;
        if (u && h) {
          const d = Math.max(u * 3, h * 0.8) * 1e3;
          r = re({}, r, {
            maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const n = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: n.maxNumRetry || 0,
      retryDelay: n.retryDelayMs || 0,
      maxRetryDelay: n.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (l, u, h, d) => {
        const g = this.getInternalLoader(h);
        this.resetInternalLoader(h.type);
        const f = l.data;
        u.parsing.start = performance.now(), ze.isMediaPlaylist(f) || h.type !== Z.MANIFEST ? this.handleTrackOrLevelPlaylist(l, u, h, d || null, g) : this.handleMasterPlaylist(l, u, h, d);
      },
      onError: (l, u, h, d) => {
        this.handleNetworkError(u, h, !1, l, d);
      },
      onTimeout: (l, u, h) => {
        this.handleNetworkError(u, h, !0, void 0, l);
      }
    };
    i.load(e, o, c);
  }
  checkAutostartLoad() {
    if (!this.hls)
      return;
    const {
      config: {
        autoStartLoad: e,
        startPosition: t
      },
      forceStartLoad: s
    } = this.hls;
    (e || s) && (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t));
  }
  handleMasterPlaylist(e, t, s, i) {
    const r = this.hls, n = e.data, o = ui(e, s), c = ze.parseMasterPlaylist(n, o);
    if (c.playlistParsingError) {
      t.parsing.end = performance.now(), this.handleManifestParsingError(e, s, c.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: l,
      levels: u,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    } = c;
    this.variableList = f, u.forEach((T) => {
      const {
        unknownCodecs: v
      } = T;
      if (v) {
        const {
          preferManagedMediaSource: S
        } = this.hls.config;
        let {
          audioCodec: x,
          videoCodec: D
        } = T;
        for (let A = v.length; A--; ) {
          const R = v[A];
          Wt(R, "audio", S) ? (T.audioCodec = x = x ? `${x},${R}` : R, Mt.audio[x.substring(0, 4)] = 2, v.splice(A, 1)) : Wt(R, "video", S) && (T.videoCodec = D = D ? `${D},${R}` : R, Mt.video[D.substring(0, 4)] = 2, v.splice(A, 1));
        }
      }
    });
    const {
      AUDIO: p = [],
      SUBTITLES: y,
      "CLOSED-CAPTIONS": E
    } = ze.parseMasterPlaylistMedia(n, o, c);
    p.length && !p.some((v) => !v.url) && u[0].audioCodec && !u[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new ce({}),
      bitrate: 0,
      url: ""
    })), r.trigger(m.MANIFEST_LOADED, {
      levels: u,
      audioTracks: p,
      subtitles: y,
      captions: E,
      contentSteering: l,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, r) {
    const n = this.hls, {
      id: o,
      level: c,
      type: l
    } = s, u = ui(e, s), h = $(c) ? c : $(o) ? o : 0, d = Rn(s), g = ze.parseLevelPlaylist(e.data, u, h, d, 0, this.variableList);
    if (l === Z.MANIFEST) {
      const f = {
        attrs: new ce({}),
        bitrate: 0,
        details: g,
        name: "",
        url: u
      };
      g.requestScheduled = t.loading.start + fa(g, 0), n.trigger(m.MANIFEST_LOADED, {
        levels: [f],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, e, t, s, i, r);
  }
  handleManifestParsingError(e, t, s, i, r) {
    this.hls.trigger(m.ERROR, {
      type: Y.NETWORK_ERROR,
      details: _.MANIFEST_PARSING_ERROR,
      fatal: t.type === Z.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: r
    });
  }
  handleNetworkError(e, t, s = !1, i, r) {
    let n = `A network ${s ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === Z.LEVEL ? n += `: ${e.level} id: ${e.id}` : (e.type === Z.AUDIO_TRACK || e.type === Z.SUBTITLE_TRACK) && (n += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(n);
    this.hls.logger.warn(`[playlist-loader]: ${n}`);
    let c = _.UNKNOWN, l = !1;
    const u = this.getInternalLoader(e);
    switch (e.type) {
      case Z.MANIFEST:
        c = s ? _.MANIFEST_LOAD_TIMEOUT : _.MANIFEST_LOAD_ERROR, l = !0;
        break;
      case Z.LEVEL:
        c = s ? _.LEVEL_LOAD_TIMEOUT : _.LEVEL_LOAD_ERROR, l = !1;
        break;
      case Z.AUDIO_TRACK:
        c = s ? _.AUDIO_TRACK_LOAD_TIMEOUT : _.AUDIO_TRACK_LOAD_ERROR, l = !1;
        break;
      case Z.SUBTITLE_TRACK:
        c = s ? _.SUBTITLE_TRACK_LOAD_TIMEOUT : _.SUBTITLE_LOAD_ERROR, l = !1;
        break;
    }
    u && this.resetInternalLoader(e.type);
    const h = {
      type: Y.NETWORK_ERROR,
      details: c,
      fatal: l,
      url: e.url,
      loader: u,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (i) {
      const d = (t == null ? void 0 : t.url) || e.url;
      h.response = se({
        url: d,
        data: void 0
      }, i);
    }
    this.hls.trigger(m.ERROR, h);
  }
  handlePlaylistLoaded(e, t, s, i, r, n) {
    const o = this.hls, {
      type: c,
      level: l,
      levelOrTrack: u,
      id: h,
      groupId: d,
      deliveryDirectives: g
    } = i, f = ui(t, i), p = Rn(i);
    let y = typeof i.level == "number" && p === V.MAIN ? l : void 0;
    const E = e.playlistParsingError;
    if (E) {
      if (this.hls.logger.warn(`${E} ${e.url}`), !o.config.ignorePlaylistParsingErrors) {
        o.trigger(m.ERROR, {
          type: Y.NETWORK_ERROR,
          details: _.LEVEL_PARSING_ERROR,
          fatal: !1,
          url: f,
          error: E,
          reason: E.message,
          response: t,
          context: i,
          level: y,
          parent: p,
          networkDetails: r,
          stats: s
        });
        return;
      }
      e.playlistParsingError = null;
    }
    if (!e.fragments.length) {
      const T = e.playlistParsingError = new Error("No Segments found in Playlist");
      o.trigger(m.ERROR, {
        type: Y.NETWORK_ERROR,
        details: _.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: T,
        reason: T.message,
        response: t,
        context: i,
        level: y,
        parent: p,
        networkDetails: r,
        stats: s
      });
      return;
    }
    switch (e.live && n && (n.getCacheAge && (e.ageHeader = n.getCacheAge() || 0), (!n.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), c) {
      case Z.MANIFEST:
      case Z.LEVEL:
        if (y) {
          if (!u)
            y = 0;
          else if (u !== o.levels[y]) {
            const T = o.levels.indexOf(u);
            T > -1 && (y = T);
          }
        }
        o.trigger(m.LEVEL_LOADED, {
          details: e,
          levelInfo: u || o.levels[0],
          level: y || 0,
          id: h || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: g,
          withoutMultiVariant: c === Z.MANIFEST
        });
        break;
      case Z.AUDIO_TRACK:
        o.trigger(m.AUDIO_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: g
        });
        break;
      case Z.SUBTITLE_TRACK:
        o.trigger(m.SUBTITLE_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: g
        });
        break;
    }
  }
}
class Ke {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return Xt;
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return fo();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Jd();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return ht();
  }
  static get Events() {
    return m;
  }
  static get MetadataSchema() {
    return Pe;
  }
  static get ErrorTypes() {
    return Y;
  }
  static get ErrorDetails() {
    return _;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return Ke.defaultConfig ? Ke.defaultConfig : Gd;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    Ke.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new Hi(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = !1;
    const t = this.logger = ul(e.debug || !1, "Hls instance", e.assetPlayerId), s = this.config = Vd(Ke.DefaultConfig, e, t);
    this.userConfig = e, s.progressive && Hd(s, t);
    const {
      abrController: i,
      bufferController: r,
      capLevelController: n,
      errorController: o,
      fpsController: c
    } = s, l = new o(this), u = this.abrController = new i(this), h = new nc(this), d = s.interstitialsController, g = d ? this.interstitialsController = new d(this, Ke) : null, f = this.bufferController = new r(this, h), p = this.capLevelController = new n(this), y = new c(this), E = new nf(this), T = s.contentSteeringController, v = T ? new T(this) : null, S = this.levelController = new Zd(this, v), x = new zd(this), D = new rf(this.config, this.logger), A = this.streamController = new sf(this, h, D), R = this.gapController = new jd(this, h);
    p.setStreamController(A), y.setStreamController(A);
    const b = [E, S, A];
    g && b.splice(1, 0, g), v && b.splice(1, 0, v), this.networkControllers = b;
    const L = [u, f, R, p, y, x, h];
    this.audioTrackController = this.createController(s.audioTrackController, b);
    const C = s.audioStreamController;
    C && b.push(this.audioStreamController = new C(this, h, D)), this.subtitleTrackController = this.createController(s.subtitleTrackController, b);
    const F = s.subtitleStreamController;
    F && b.push(this.subtititleStreamController = new F(this, h, D)), this.createController(s.timelineController, L), D.emeController = this.emeController = this.createController(s.emeController, L), this.cmcdController = this.createController(s.cmcdController, L), this.latencyController = this.createController(Qd, L), this.coreComponents = L, b.push(l);
    const B = l.onErrorOut;
    typeof B == "function" && this.on(m.ERROR, B, l), this.on(m.MANIFEST_LOADED, E.onManifestLoaded, E);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, i) {
    this._emitter.off(e, t, s, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const i = e === m.ERROR;
        this.trigger(m.ERROR, {
          type: Y.OTHER_ERROR,
          details: _.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    this.logger.log("destroy"), this.trigger(m.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    if (!e || "media" in e && !e.media) {
      const r = new Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(m.ERROR, {
        type: Y.OTHER_ERROR,
        details: _.ATTACH_MEDIA_ERROR,
        fatal: !0,
        error: r
      });
      return;
    }
    this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
    const t = "media" in e, s = t ? e.media : e, i = t ? e : {
      media: s
    };
    this._media = s, this.trigger(m.MEDIA_ATTACHING, i);
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(m.MEDIA_DETACHING, {}), this._media = null;
  }
  /**
   * Detach HTMLMediaElement, MediaSource, and SourceBuffers without reset, for attaching to another instance
   */
  transferMedia() {
    this._media = null;
    const e = this.bufferController.transferMedia();
    return this.trigger(m.MEDIA_DETACHING, {
      transferMedia: e
    }), e;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this._url, i = this._url = wi.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(m.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Gets the currently loaded URL
   */
  get url() {
    return this._url;
  }
  /**
   * Whether or not enough has been buffered to seek to start position or use `media.currentTime` to determine next load position
   */
  get hasEnoughToStart() {
    return this.streamController.hasEnoughToStart;
  }
  /**
   * Get the startPosition set on startLoad(position) or on autostart with config.startPosition
   */
  get startPosition() {
    return this.streamController.startPositionValue;
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1, t) {
    this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`), this.started = !0, this.resumeBuffering();
    for (let s = 0; s < this.networkControllers.length && (this.networkControllers[s].startLoad(e, t), !(!this.started || !this.networkControllers)); s++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    this.logger.log("stopLoad"), this.started = !1;
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Returns whether loading, toggled with `startLoad()` and `stopLoad()`, is active or not`.
   */
  get loadingEnabled() {
    return this.started;
  }
  /**
   * Returns state of fragment loading toggled by calling `pauseBuffering()` and `resumeBuffering()`.
   */
  get bufferingEnabled() {
    return this.streamController.bufferingEnabled;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    }));
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    }));
  }
  get inFlightFragments() {
    const e = {
      [V.MAIN]: this.streamController.inFlightFrag
    };
    return this.audioStreamController && (e[V.AUDIO] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e[V.SUBTITLE] = this.subtititleStreamController.inFlightFrag), e;
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    const e = this._media, t = e == null ? void 0 : e.currentTime;
    this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t));
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns a UUID for this player instance
   */
  get sessionId() {
    let e = this._sessionId;
    return e || (e = this._sessionId = jh()), e;
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * @returns LevelDetails of last loaded level (variant) or `null` prior to loading a media playlist.
   */
  get latestLevelDetails() {
    return this.streamController.getLevelDetails() || null;
  }
  /**
   * @returns Level object of selected level (variant) or `null` prior to selecting a level or once the level is removed.
   */
  get loadLevelObj() {
    return this.levelController.loadLevelObj;
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  get abrEwmaDefaultEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.defaultEstimate : NaN;
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    Vl(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].maxBitrate >= t)
        return i;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let i;
    if (t === -1 && e != null && e.length ? i = e.length - 1 : i = t, s)
      for (let r = i; r--; ) {
        const n = e[r].attrs["HDCP-LEVEL"];
        if (n && n <= s)
          return r;
      }
    return i;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength;
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null;
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
  /**
   * ContentSteering pathways getter
   */
  get pathways() {
    return this.levelController.pathways;
  }
  /**
   * ContentSteering pathwayPriority getter/setter
   */
  get pathwayPriority() {
    return this.levelController.pathwayPriority;
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e;
  }
  /**
   * returns true when all SourceBuffers are buffered to the end
   */
  get bufferedToEnd() {
    var e;
    return !!((e = this.bufferController) != null && e.bufferedToEnd);
  }
  /**
   * returns Interstitials Program Manager
   */
  get interstitialsManager() {
    var e;
    return ((e = this.interstitialsController) == null ? void 0 : e.interstitialsManager) || null;
  }
  /**
   * returns mediaCapabilities.decodingInfo for a variant/rendition
   */
  getMediaDecodingInfo(e, t = this.allAudioTracks) {
    const s = Zn(t);
    return zn(e, s, navigator.mediaCapabilities);
  }
}
Ke.defaultConfig = void 0;
function go(a, e) {
  const t = ge(), s = ge(!1), i = ge(!1), r = ge(!1), n = ge("0"), o = ge(0), c = ge(1), l = ge(1), u = ge(0), h = ge(!1), d = ge(""), g = ge(null);
  let f = null, p = null;
  const y = (k) => {
    let G = Math.floor(k / 60), W = Math.ceil(k % 60);
    return W >= 60 && (G++, W = 0), `${String(G).padStart(2, "0")}:${String(W).padStart(2, "0")}`;
  }, E = Le(() => n.value ? y(Number(n.value)) : "00:00"), T = Le(() => o.value ? y(o.value) : "00:00"), v = (k) => {
    d.value = k.message, h.value = !0, setTimeout(() => {
      h.value = !1;
    }, k.duration || 3e3);
  }, S = () => {
    g.value && (clearInterval(g.value), g.value = null);
  }, x = () => {
    !t.value || r.value || (n.value = String(t.value.currentTime), e("timeupdate"));
  }, D = async (k = {}) => new Promise(async (G, W) => {
    i.value = !0;
    const M = async () => {
      var O, j;
      N();
      try {
        await ((O = t.value) == null ? void 0 : O.play()), await Us(), k != null && k.currentTime && (t.value.currentTime = k.currentTime), g.value ? n.value = String((j = t.value) == null ? void 0 : j.currentTime) : g.value = window.setInterval(x, a.progressInterval), s.value = !0, i.value = !1, t.value && (t.value.playbackRate = l.value), e("play"), G(t.value);
      } catch (J) {
        v({
          message: J.message
        }), J.code === 9 && a.isAutoPlayNext && setTimeout(() => {
          R();
        }, 3e3), i.value = !1, e("play-error", J), W(J);
      }
    };
    if (a.beforePlay) {
      a.beforePlay((O) => {
        O !== !1 && M();
      });
      return;
    }
    M();
  }), A = () => {
    var k;
    (k = t.value) == null || k.pause(), s.value = !1, e("pause");
  }, R = async () => {
    if (!(a.beforeNext && !await a.beforeNext())) {
      if (u.value >= a.audioList.length - 1)
        if (a.isLoop)
          u.value = 0;
        else
          return;
      else
        u.value++;
      e("play-next"), await Us(), await D();
    }
  }, b = async () => {
    if (!(a.beforePrev && !await a.beforePrev())) {
      if (u.value <= 0)
        if (a.isLoop)
          u.value = a.audioList.length - 1;
        else
          return;
      else
        u.value--;
      e("play-prev"), await Us(), await D();
    }
  }, L = (k) => {
    t.value && (l.value = k, t.value.playbackRate = k);
  }, C = (k) => {
    t.value && (c.value = k, t.value.volume = k);
  }, F = (k) => {
    t.value && (n.value = String(k), t.value.currentTime = k);
  }, B = (k) => {
    e("ended", k), a.isAutoPlayNext && R();
  }, K = (k) => {
    t.value && (o.value = t.value.duration, e("durationchange", k));
  }, N = () => {
    if ("mediaSession" in navigator) {
      const k = a.audioList[u.value];
      navigator.mediaSession.metadata = new MediaMetadata({
        title: k.title,
        artist: k.artist,
        album: k.album,
        artwork: k.artwork
      }), navigator.mediaSession.setActionHandler("play", () => D()), navigator.mediaSession.setActionHandler("pause", () => A()), navigator.mediaSession.setActionHandler("previoustrack", () => b()), navigator.mediaSession.setActionHandler("nexttrack", () => R());
    }
  }, w = () => {
    if (f) {
      try {
        f.destroy();
      } catch {
      }
      f = null;
    }
    p && (URL.revokeObjectURL(p), p = null);
  }, U = () => {
    var W;
    if (!t.value) return;
    const k = (W = a.audioList) == null ? void 0 : W[u.value], G = k == null ? void 0 : k.src;
    w();
    try {
      t.value.removeAttribute("src"), t.value.load();
    } catch {
    }
    G && ((k == null ? void 0 : k.type) === "m3u8" || (k == null ? void 0 : k.type) === "m3u8text" ? Ke.isSupported() ? (f = new Ke(), f.attachMedia(t.value), (k == null ? void 0 : k.type) === "m3u8" ? f.loadSource(G) : (p = URL.createObjectURL(new Blob([G], { type: "application/vnd.apple.mpegurl" })), f.loadSource(p)), f.on(Ke.Events.MANIFEST_PARSED, () => {
    }), f.on(Ke.Events.ERROR, (M, O) => {
      const j = (O == null ? void 0 : O.details) || (O == null ? void 0 : O.type) || "hls error";
      v({ message: `HLS error: ${j}` });
      try {
        e("play-error", O);
      } catch {
      }
    })) : t.value.canPlayType("application/vnd.apple.mpegurl") ? t.value.src = G : v({ message: "当前浏览器不支持 m3u8 播放" }) : t.value.src = G, t.value && (t.value.volume = c.value, t.value.playbackRate = l.value));
  };
  return yo(() => {
    t.value && (t.value.volume = c.value, t.value.playbackRate = l.value), Cn(
      [() => t.value, () => u.value, () => a.audioList],
      () => {
        U();
      },
      { immediate: !0 }
    );
  }), Pi(() => {
    S(), w();
  }), {
    audio: t,
    isPlaying: s,
    isLoading: i,
    currentTime: n,
    duration: o,
    currentTimeFormatted: E,
    durationFormatted: T,
    currentVolume: c,
    playbackRate: l,
    currentPlayIndex: u,
    isShowErrorMessage: h,
    noticeMessage: d,
    play: D,
    pause: A,
    playNext: R,
    playPrev: b,
    handleSetPlaybackRate: L,
    handleVolumeChange: C,
    handleTimeUpdate: F,
    handleProgressStart: () => r.value = !0,
    handleProgressEnd: () => r.value = !1,
    handleProgressMove: x,
    handleProgressClick: x,
    onEnded: B,
    onDurationchange: K
  };
}
const af = { class: "vue-audio-player" }, of = { class: "vue-audio-player__btn-wrap" }, lf = /* @__PURE__ */ ft({
  __name: "Vue3AudioPlayer",
  props: {
    audioList: { default: () => [] },
    showPlayButton: { type: Boolean, default: !0 },
    showPrevButton: { type: Boolean, default: !0 },
    showNextButton: { type: Boolean, default: !0 },
    showVolumeButton: { type: Boolean, default: !0 },
    showProgressBar: { type: Boolean, default: !0 },
    beforePlay: { type: Function, default: void 0 },
    beforePrev: { type: Function, default: void 0 },
    beforeNext: { type: Function, default: void 0 },
    isLoop: { type: Boolean, default: !0 },
    isAutoPlayNext: { type: Boolean, default: !0 },
    progressInterval: { default: 500 },
    showPlaybackRate: { type: Boolean, default: !0 },
    showPlayLoading: { type: Boolean, default: !0 },
    playbackRates: { default: () => [0.5, 1, 1.5, 2] },
    themeColor: { default: "#EC4141" },
    disabledProgressDrag: { type: Boolean, default: !1 },
    disabledProgressClick: { type: Boolean, default: !1 }
  },
  emits: ["timeupdate", "play", "pause", "play-next", "play-prev", "play-error", "ended", "durationchange"],
  setup(a, { expose: e, emit: t }) {
    const s = a, i = t, {
      audio: r,
      isPlaying: n,
      isLoading: o,
      currentTime: c,
      duration: l,
      currentTimeFormatted: u,
      durationFormatted: h,
      currentVolume: d,
      playbackRate: g,
      currentPlayIndex: f,
      isShowErrorMessage: p,
      noticeMessage: y,
      play: E,
      pause: T,
      playNext: v,
      playPrev: S,
      handleSetPlaybackRate: x,
      handleVolumeChange: D,
      handleTimeUpdate: A,
      handleProgressStart: R,
      handleProgressEnd: b,
      handleProgressMove: L,
      handleProgressClick: C,
      onEnded: F,
      onDurationchange: B
    } = go(s, i);
    return Pn("audioPlayer", {
      audio: r,
      isPlaying: n,
      currentTime: c,
      duration: l
    }), e({
      audio: r,
      isPlaying: n,
      isLoading: o,
      currentTime: c,
      duration: l,
      currentTimeFormatted: u,
      durationFormatted: h,
      currentVolume: d,
      playbackRate: g,
      currentPlayIndex: f,
      isShowErrorMessage: p,
      noticeMessage: y,
      play: E,
      pause: T,
      playNext: v,
      playPrev: S
    }), (K, N) => (oe(), de("div", af, [
      le("div", of, [
        a.showPlaybackRate ? (oe(), As(Ao, {
          key: 0,
          "theme-color": a.themeColor,
          "playback-rate": H(g),
          "playback-rates": a.playbackRates,
          onChange: H(x)
        }, null, 8, ["theme-color", "playback-rate", "playback-rates", "onChange"])) : Pt("", !0),
        ke(kn, {
          "show-prev": a.showPrevButton,
          "show-next": a.showNextButton,
          "show-play": a.showPlayButton,
          "show-loading": a.showPlayLoading,
          "is-playing": H(n),
          "is-loading": H(o),
          "theme-color": a.themeColor,
          "is-loop": a.isLoop,
          "current-index": H(f),
          total: a.audioList.length,
          onPlay: H(E),
          onPause: H(T),
          onPrev: H(S),
          onNext: H(v)
        }, null, 8, ["show-prev", "show-next", "show-play", "show-loading", "is-playing", "is-loading", "theme-color", "is-loop", "current-index", "total", "onPlay", "onPause", "onPrev", "onNext"]),
        a.showVolumeButton ? (oe(), As(wn, {
          key: 1,
          "theme-color": a.themeColor,
          volume: H(d),
          onVolumeChange: H(D)
        }, null, 8, ["theme-color", "volume", "onVolumeChange"])) : Pt("", !0),
        lt(le("div", { class: "vue-audio-player__notice" }, St(H(y)), 513), [
          [ct, H(p)]
        ])
      ]),
      lt(ke(On, {
        "current-time": H(c),
        duration: H(l),
        "theme-color": a.themeColor,
        "disabled-drag": a.disabledProgressDrag,
        "disabled-click": a.disabledProgressClick,
        onTimeUpdate: H(A),
        onProgressStart: H(R),
        onProgressEnd: H(b),
        onProgressMove: H(L),
        onProgressClick: H(C)
      }, null, 8, ["current-time", "duration", "theme-color", "disabled-drag", "disabled-click", "onTimeUpdate", "onProgressStart", "onProgressEnd", "onProgressMove", "onProgressClick"]), [
        [ct, a.showProgressBar]
      ]),
      lt(ke(Fn, {
        "current-time": H(u),
        duration: H(h)
      }, null, 8, ["current-time", "duration"]), [
        [ct, a.showProgressBar]
      ]),
      le("audio", ki({
        ref_key: "audio",
        ref: r,
        class: "vue-audio-player__audio"
      }, K.$attrs, {
        onEnded: N[0] || (N[0] = //@ts-ignore
        (...w) => H(F) && H(F)(...w)),
        onDurationchange: N[1] || (N[1] = //@ts-ignore
        (...w) => H(B) && H(B)(...w))
      }), " 浏览器太老咯，请升级浏览器吧~ ", 16)
    ]));
  }
}), cf = { class: "tl-audio-player" }, uf = { class: "tl-audio-player__content" }, hf = { class: "tl-audio-player__controls" }, df = { class: "tl-audio-plauer__timewrap" }, ff = { class: "tl-audio-player__title" }, gf = { class: "tl-audio-player__progress" }, mf = { class: "tl-audio-player__time" }, pf = ["src"], yf = /* @__PURE__ */ ft({
  __name: "TlAudioPlayer",
  props: {
    audioList: { default: () => [] },
    showPlayButton: { type: Boolean, default: !0 },
    showPrevButton: { type: Boolean, default: !0 },
    showNextButton: { type: Boolean, default: !0 },
    showVolumeButton: { type: Boolean, default: !0 },
    showProgressBar: { type: Boolean, default: !0 },
    beforePlay: { type: Function, default: void 0 },
    beforePrev: { type: Function, default: void 0 },
    beforeNext: { type: Function, default: void 0 },
    isLoop: { type: Boolean, default: !0 },
    isAutoPlayNext: { type: Boolean, default: !0 },
    progressInterval: { default: 500 },
    showPlaybackRate: { type: Boolean, default: !0 },
    showPlayLoading: { type: Boolean, default: !0 },
    playbackRates: { default: () => [0.5, 1, 1.5, 2] },
    themeColor: { default: "#1890ff" },
    disabledProgressDrag: { type: Boolean, default: !1 },
    disabledProgressClick: { type: Boolean, default: !1 }
  },
  emits: ["timeupdate", "play", "pause", "play-next", "play-prev", "play-error", "ended", "durationchange"],
  setup(a, { expose: e, emit: t }) {
    const s = a, i = t, {
      audio: r,
      isPlaying: n,
      isLoading: o,
      currentTime: c,
      duration: l,
      currentTimeFormatted: u,
      durationFormatted: h,
      currentVolume: d,
      playbackRate: g,
      currentPlayIndex: f,
      isShowErrorMessage: p,
      noticeMessage: y,
      play: E,
      pause: T,
      playNext: v,
      playPrev: S,
      handleTimeUpdate: x,
      handleProgressStart: D,
      handleProgressEnd: A,
      handleProgressMove: R,
      handleProgressClick: b,
      onEnded: L,
      onDurationchange: C,
      handleVolumeChange: F
    } = go(s, i);
    return Pn("audioPlayer", {
      audio: r,
      isPlaying: n,
      currentTime: c,
      duration: l
    }), e({
      audio: r,
      isPlaying: n,
      isLoading: o,
      currentTime: c,
      duration: l,
      currentTimeFormatted: u,
      durationFormatted: h,
      currentVolume: d,
      playbackRate: g,
      currentPlayIndex: f,
      play: E,
      pause: T,
      playNext: v,
      playPrev: S
    }), (B, K) => {
      var N, w;
      return oe(), de("div", cf, [
        le("div", uf, [
          le("div", hf, [
            ke(kn, {
              "show-prev": a.showPrevButton,
              "show-next": a.showNextButton,
              "show-play": a.showPlayButton,
              "show-loading": a.showPlayLoading,
              "is-playing": H(n),
              "is-loading": H(o),
              "theme-color": a.themeColor,
              "is-loop": a.isLoop,
              "current-index": H(f),
              total: a.audioList.length,
              onPlay: H(E),
              onPause: H(T),
              onPrev: H(S),
              onNext: H(v)
            }, null, 8, ["show-prev", "show-next", "show-play", "show-loading", "is-playing", "is-loading", "theme-color", "is-loop", "current-index", "total", "onPlay", "onPause", "onPrev", "onNext"]),
            a.showVolumeButton ? (oe(), As(wn, {
              key: 0,
              "theme-color": a.themeColor,
              volume: H(d),
              onVolumeChange: H(F)
            }, null, 8, ["theme-color", "volume", "onVolumeChange"])) : Pt("", !0)
          ]),
          le("div", df, [
            le("div", ff, [
              Gt(B.$slots, "title", {}, () => {
                var U;
                return [
                  Eo(St(((U = a.audioList[H(f)]) == null ? void 0 : U.title) || "未知音频"), 1)
                ];
              }, !0)
            ]),
            le("div", gf, [
              lt(ke(On, {
                "current-time": H(c),
                duration: H(l),
                "theme-color": a.themeColor,
                "disabled-drag": a.disabledProgressDrag,
                "disabled-click": a.disabledProgressClick,
                onTimeUpdate: H(x),
                onProgressStart: H(D),
                onProgressEnd: H(A),
                onProgressMove: H(R),
                onProgressClick: H(b)
              }, null, 8, ["current-time", "duration", "theme-color", "disabled-drag", "disabled-click", "onTimeUpdate", "onProgressStart", "onProgressEnd", "onProgressMove", "onProgressClick"]), [
                [ct, a.showProgressBar]
              ])
            ]),
            le("div", mf, [
              lt(ke(Fn, {
                "current-time": H(u),
                duration: H(h)
              }, null, 8, ["current-time", "duration"]), [
                [ct, a.showProgressBar]
              ])
            ])
          ]),
          lt(le("div", { class: "tl-audio-player__notice" }, St(H(y)), 513), [
            [ct, H(p)]
          ])
        ]),
        le("audio", ki({
          ref_key: "audio",
          ref: r,
          class: "tl-audio-player__audio",
          src: (w = (N = a.audioList) == null ? void 0 : N[H(f)]) == null ? void 0 : w.src
        }, B.$attrs, {
          onEnded: K[0] || (K[0] = //@ts-ignore
          (...U) => H(L) && H(L)(...U)),
          onDurationchange: K[1] || (K[1] = //@ts-ignore
          (...U) => H(C) && H(C)(...U))
        }), " 浏览器不支持音频播放，请升级浏览器 ", 16, pf)
      ]);
    };
  }
}), Ef = /* @__PURE__ */ Ve(yf, [["__scopeId", "data-v-a01b7d47"]]), Tf = /* @__PURE__ */ ft({
  __name: "index",
  props: {
    mode: { default: "default" },
    audioList: { default: () => [] },
    showPlayButton: { type: Boolean, default: !0 },
    showPrevButton: { type: Boolean, default: !0 },
    showNextButton: { type: Boolean, default: !0 },
    showVolumeButton: { type: Boolean, default: !0 },
    showProgressBar: { type: Boolean, default: !0 },
    beforePlay: { type: Function, default: void 0 },
    beforePrev: { type: Function, default: void 0 },
    beforeNext: { type: Function, default: void 0 },
    isLoop: { type: Boolean, default: !0 },
    isAutoPlayNext: { type: Boolean, default: !0 },
    progressInterval: { default: 500 },
    showPlaybackRate: { type: Boolean, default: !0 },
    showPlayLoading: { type: Boolean, default: !0 },
    playbackRates: { default: () => [0.5, 1, 1.5, 2] },
    themeColor: { default: "#EC4141" },
    disabledProgressDrag: { type: Boolean, default: !1 },
    disabledProgressClick: { type: Boolean, default: !1 }
  },
  emits: ["timeupdate", "play", "pause", "play-next", "play-prev", "play-error", "ended", "durationchange"],
  setup(a, { expose: e, emit: t }) {
    const s = Le(() => i.mode === "default" ? lf : Ef), i = a, r = ge(), n = {
      play: () => {
        var o;
        return (o = r.value) == null ? void 0 : o.play();
      },
      pause: () => {
        var o;
        return (o = r.value) == null ? void 0 : o.pause();
      },
      playNext: () => {
        var o;
        return (o = r.value) == null ? void 0 : o.playNext();
      },
      playPrev: () => {
        var o;
        return (o = r.value) == null ? void 0 : o.playPrev();
      },
      audio: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.audio;
      }),
      isPlaying: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.isPlaying;
      }),
      isLoading: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.isLoading;
      }),
      currentTime: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.currentTime;
      }),
      duration: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.duration;
      }),
      currentTimeFormatted: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.currentTimeFormatted;
      }),
      durationFormatted: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.durationFormatted;
      }),
      currentVolume: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.currentVolume;
      }),
      playbackRate: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.playbackRate;
      }),
      currentPlayIndex: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.currentPlayIndex;
      }),
      isShowErrorMessage: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.isShowErrorMessage;
      }),
      noticeMessage: Le(() => {
        var o;
        return (o = r.value) == null ? void 0 : o.noticeMessage;
      })
    };
    return e(n), (o, c) => (oe(), As(To(s.value), ki({
      ref_key: "audioPlayerRef",
      ref: r
    }, i, vo(o.$attrs), {
      onTimeupdate: c[0] || (c[0] = (l) => o.$emit("timeupdate")),
      onPlay: c[1] || (c[1] = (l) => o.$emit("play")),
      onPause: c[2] || (c[2] = (l) => o.$emit("pause")),
      onPlayNext: c[3] || (c[3] = (l) => o.$emit("play-next")),
      onPlayPrev: c[4] || (c[4] = (l) => o.$emit("play-prev")),
      onPlayError: c[5] || (c[5] = (l) => o.$emit("play-error", l)),
      onEnded: c[6] || (c[6] = (l) => o.$emit("ended", l)),
      onDurationchange: c[7] || (c[7] = (l) => o.$emit("durationchange", l))
    }), null, 16));
  }
}), Lf = {
  install: (a) => {
    a.component("Vue3AudioPlayer", Tf);
  }
};
export {
  Tf as Vue3AudioPlayer,
  Lf as default
};
