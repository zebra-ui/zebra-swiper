import type { DefaultTheme } from 'vitepress'
import { guide } from './guide.mts'
import { api } from './api.mts'
import { modules } from './modules.mjs'
import { advanced } from './advanced.mjs'

export const sidebar = [
  guide,
  api,
  modules,
  advanced
] satisfies DefaultTheme.SidebarItem[]
