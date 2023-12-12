import type { AtRules, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type PropertyNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreProperties?: (string | RegExp)[]
    ignoreSelectors?: (string | RegExp)[]
    ignoreAtRules?: (AtRules | RegExpLike)[]
    checkPrefixed?: boolean
  }
>
