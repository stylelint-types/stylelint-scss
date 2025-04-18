import type { AtRules, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type PropertyNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreProperties?: (string | RegExp)[]
    /**
     * Skips checking properties of the given selectors against this rule.
     */
    ignoreSelectors?: (string | RegExp)[]
    /**
     * Ignores properties nested within specified at-rules.
     */
    ignoreAtRules?: (AtRules | RegExpLike)[]
    /**
     * If `true`, this rule will check vendor-prefixed properties.
     * @default false
     */
    checkPrefixed?: boolean
  }
>
