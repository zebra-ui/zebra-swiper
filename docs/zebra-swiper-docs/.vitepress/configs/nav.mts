import type { DefaultTheme } from 'vitepress'
import { guide } from './guide.mjs'
import { api } from './api.mjs'
import { modules } from './modules.mjs'
import { advanced } from './advanced.mjs'

export const nav = [
  guide,
  api,
  modules,
  advanced
] satisfies DefaultTheme.NavItem[]
