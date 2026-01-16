import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type SelectorNoRedundantNestingSelectorOptions = RuleConfig<
  true,
  [],
  {
    ignoreKeywords?: RegExpLike[]
  }
>
