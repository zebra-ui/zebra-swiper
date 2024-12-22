export interface Browser {
  isSafari: boolean
  needPerspectiveFix: boolean
  need3dFix: boolean
  isWebView: boolean
}

export interface CalcBrowser {
  (): Browser
}

export interface GetBrowser {
  (): Browser
}
