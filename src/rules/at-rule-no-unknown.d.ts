import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: RegExpLike[]
  }
>
