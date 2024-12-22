export interface Device {
  ios: boolean
  android: boolean
  os?: string
}

export interface GetDeviceParams {
  userAgent?: string
}

export interface CalcDevice {
  (params?: GetDeviceParams): Device
}

export interface GetDevice {
  (overrides?: GetDeviceParams): Device
}
