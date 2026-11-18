import type { RuleConfig } from 'stylelint-define-config'

export type AtElseClosingBraceNewlineAfterOptions = RuleConfig<
  'always-last-in-chain',
  [],
  {
    /**
     * Disables autofixing for this rule.
     */
    disableFix?: boolean
  }
>
