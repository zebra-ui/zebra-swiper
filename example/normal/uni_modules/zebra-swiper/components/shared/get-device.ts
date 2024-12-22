import { getSupport } from './get-support'
import { isWeb } from './utils'
import type {
  Device,
  GetDevice,
  CalcDevice
} from '../../types/components/shared/get-device'

let deviceCached: Device | undefined

const calcDevice: CalcDevice = ({ userAgent } = {}) => {
  const support = getSupport()
  const { platform } = window.navigator
  const ua = userAgent || window.navigator.userAgent

  const device: Device = {
    ios: false,
    android: false
  }

  const screenWidth = window.screen.width
  const screenHeight = window.screen.height

  const android = ua.match(/(Android);?[\s/]+([\d.]+)?/) // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+)?)?/)
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
  const windows = platform === 'Win32'
  let macos = platform === 'MacIntel'

  // iPadOs 13 fix
  const iPadScreens = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810'
  ]

  if (
    !ipad &&
    macos &&
    support.touch &&
    iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0
  ) {
    ipad = ua.match(/(Version)\/([\d.]+)/)
    // @ts-ignore
    if (!ipad) ipad = [0, 1, '13_0_0']
    macos = false
  }

  // Android
  if (android && !windows) {
    device.os = 'android'
    device.android = true
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios'
    device.ios = true
  }

  return device
}

const getDevice: GetDevice = (overrides = {}) => {
  if (isWeb()) {
    if (!deviceCached) {
      deviceCached = calcDevice(overrides)
    }
    return deviceCached
  }
  const device: Device = {
    ios: false,
    android: false
  }

  // #ifdef MP-WEIXIN
  // @ts-ignore
  device.ios = !!(uni.getDeviceInfo().osName == 'ios')
  // @ts-ignore
  device.android = !!(uni.getDeviceInfo().osName == 'android')
  // #endif

  // #ifndef MP-WEIXIN
  // @ts-ignore
  device.ios = !!(uni.getSystemInfoSync().osName == 'ios')
  // @ts-ignore
  device.android = !!(uni.getSystemInfoSync().osName == 'android')
  // #endif

  return device
}

export { getDevice }
