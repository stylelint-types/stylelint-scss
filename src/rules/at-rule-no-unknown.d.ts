import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  [],
  {
    ignoreAtRules?: RegExpLike[]
  }
>
