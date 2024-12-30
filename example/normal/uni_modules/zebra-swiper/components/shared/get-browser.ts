import type {
  Browser,
  GetBrowser,
  CalcBrowser
} from '../../types/components/shared/get-browser'

let browser: Browser | undefined

const calcBrowser: CalcBrowser = () => {
  let needPerspectiveFix = false
  let isSafariBrowser = false
  let isWebView = false
  let need3dFix = false

  // 仅在 H5 环境下进行浏览器检测
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    const ua = navigator.userAgent.toLowerCase()

    const isSafari = () =>
      ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android')

    if (isSafari()) {
      isSafariBrowser = true
      const fullUA = navigator.userAgent
      if (fullUA.includes('Version/')) {
        const [major, minor] = fullUA
          .split('Version/')[1]
          .split(' ')[0]
          .split('.')
          .map((num) => Number(num))
        needPerspectiveFix = major < 16 || (major === 16 && minor < 2)
      }
    }

    isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      navigator.userAgent
    )
    need3dFix =
      isSafariBrowser ||
      (isWebView && /iPhone|iPod|iPad/i.test(navigator.platform))
  }

  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  }
}

const getBrowser: GetBrowser = () => {
  if (!browser) {
    browser = calcBrowser()
  }
  return browser
}

export { getBrowser }
