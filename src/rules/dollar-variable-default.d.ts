import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariableDefaultOptions = RuleConfig<
  true,
  {
    ignore?: ('local')[]
  }
>
