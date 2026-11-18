import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type SelectorClassPatternOptions = RuleConfig<
  RegExpLike,
  [selector: string, pattern: RegExpLike],
  {
    resolveNestedSelectors?: boolean
  }
>
