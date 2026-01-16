import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type PercentPlaceholderPatternOptions = RuleConfig<
  RegExpLike,
  [placeholderName: string, pattern: RegExpLike]
>
