import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DollarVariableFirstInBlockOptions = RuleConfig<
  true,
  [],
  {
    expect?: LiteralUnion<'root' | 'at-rule' | 'function' | 'mixin' | 'if-else' | 'loops'>[]
    ignore?: LiteralUnion<'comments' | 'imports'>[]
  }
>
