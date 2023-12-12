import type { RuleConfig } from 'stylelint-define-config'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreAtRules?: (string | RegExp)[]
  }
>
