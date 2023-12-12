import type { RuleConfig } from 'stylelint-define-config'

export type MediaFeatureValueDollarVariableOptions = RuleConfig<
  'always' | 'never',
  {
    ignore?: ('keywords')[]
  }
>
