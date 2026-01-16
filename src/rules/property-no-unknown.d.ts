import type { AtRules, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type PropertyNoUnknownOptions = RuleConfig<
  true,
  [],
  {
    ignoreProperties?: RegExpLike[]
    /**
     * Skips checking properties of the given selectors against this rule.
     */
    ignoreSelectors?: RegExpLike[]
    /**
     * Ignores properties nested within specified at-rules.
     */
    ignoreAtRules?: (AtRules | RegExp)[]
    /**
     * If `true`, this rule will check vendor-prefixed properties.
     * @default false
     */
    checkPrefixed?: boolean
  }
>
