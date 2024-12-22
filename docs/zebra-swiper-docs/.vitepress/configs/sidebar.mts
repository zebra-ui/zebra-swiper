import type { DefaultTheme } from 'vitepress'
import { guide } from './guide.mts'
import { api } from './api.mts'
import { modules } from './modules.mjs'

export const sidebar = [
  guide,
  api,
  modules
] satisfies DefaultTheme.SidebarItem[]
