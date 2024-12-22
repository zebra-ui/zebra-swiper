/**
 * Converts space-separated class names to array of tokens
 * Filters out empty strings and trims whitespace
 */
export interface ClassesToTokens {
  (classes?: string): string[]
}
