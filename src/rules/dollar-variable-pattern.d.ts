import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariablePatternOptions = RuleConfig<
  string | RegExp,
  {
    ignore?: 'local' | 'global'
  }
>
