import type { Arrayable, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type FunctionDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>
>
