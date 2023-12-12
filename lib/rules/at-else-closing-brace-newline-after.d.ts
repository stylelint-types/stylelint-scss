import type { RuleConfig } from 'stylelint-define-config'

export type AtElseClosingBraceNewlineAfterOptions = RuleConfig<
  'always-last-in-chain',
  {
    disableFix?: boolean
  }
>
