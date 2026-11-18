import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariableColonNewlineAfterOptions = RuleConfig<
  'always' | 'always-multi-line',
  [],
  {
    /**
     * Disable the fix for this rule.
     */
    disableFix?: boolean
  }
>
