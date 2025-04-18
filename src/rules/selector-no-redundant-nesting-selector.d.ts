import type { RuleConfig } from 'stylelint-define-config'

export type SelectorNoRedundantNestingSelectorOptions = RuleConfig<
  true,
  {
    ignoreKeywords?: (string | RegExp)[]
  }
>
