import { IFullScreenDocument, IFullScreenDocumentElement } from '@/types/utils/screen'
// https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API

export default class MyScreen {
  isFullScreen: boolean
  fullScreenDocumentElement: IFullScreenDocumentElement
  fullScreenDocument: IFullScreenDocument

  constructor() {
    this.isFullScreen = false
    this.fullScreenDocumentElement = <IFullScreenDocumentElement>document.documentElement
    this.fullScreenDocument = <IFullScreenDocument>document
  }

  fullScreen() {
    if (!this.isFullScreen) {
      if (this.fullScreenDocumentElement.requestFullscreen) {
        this.fullScreenDocumentElement.requestFullscreen()
      } else if (this.fullScreenDocumentElement.mozRequestFullScreen) {
        this.fullScreenDocumentElement.mozRequestFullScreen()
      } else if (this.fullScreenDocumentElement.msRequestFullscreen) {
        this.fullScreenDocumentElement.msRequestFullscreen()
      } else if (this.fullScreenDocumentElement.webkitRequestFullscreen) {
        this.fullScreenDocumentElement.webkitRequestFullscreen()
      }
      this.isFullScreen = true
    }
  }

  exitFullScreen() {
    if (this.isFullScreen) {
      if (this.fullScreenDocument.exitFullscreen) {
        this.fullScreenDocument.exitFullscreen()
      } else if (this.fullScreenDocument.msExitFullscreen) {
        this.fullScreenDocument.msExitFullscreen()
      } else if (this.fullScreenDocument.mozCancelFullScreen) {
        this.fullScreenDocument.mozCancelFullScreen()
      } else if (this.fullScreenDocument.webkitExitFullscreen) {
        this.fullScreenDocument.webkitExitFullscreen()
      }
      this.isFullScreen = false
    }
  }

  toggleFullScreen() {
    this.isFullScreen ? this.exitFullScreen() : this.fullScreen()
  }
}
