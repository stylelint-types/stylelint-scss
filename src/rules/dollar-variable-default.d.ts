import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DollarVariableDefaultOptions = RuleConfig<
  true,
  [variable: string],
  {
    ignore?: LiteralUnion<'local'>[]
  }
>
