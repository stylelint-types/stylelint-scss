import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type AtFunctionPatternOptions = RuleConfig<
  RegExpLike,
  [functionName: string, pattern: RegExpLike]
>
