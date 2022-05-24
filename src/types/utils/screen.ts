export interface IFullScreenDocument extends Document {
  documentElement: IFullScreenDocumentElement
  mozFullScreenElement?: Element
  msFullscreenElement?: Element
  webkitFullscreenElement?: Element
  msExitFullscreen?: () => Promise<void>
  mozCancelFullScreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
}

export interface IFullScreenDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => Promise<void>
  mozRequestFullScreen?: () => Promise<void>
  webkitRequestFullscreen?: () => Promise<void>
}
