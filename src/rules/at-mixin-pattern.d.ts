import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type AtMixinPatternOptions = RuleConfig<
  RegExpLike,
  [mixinName: string, pattern: RegExpLike]
>
