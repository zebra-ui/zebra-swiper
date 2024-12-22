/**
 * Converts space-separated class names to CSS selector
 * Escapes special characters and replaces spaces with dots
 */
export interface ClassesToSelector {
  (classes?: string): string
}
