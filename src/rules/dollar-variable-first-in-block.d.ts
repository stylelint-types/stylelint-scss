import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariableFirstInBlockOptions = RuleConfig<
  true,
  {
    expect?: ('root' | 'at-rule' | 'function' | 'mixin' | 'if-else' | 'loops')[]
    ignore?: ('comments' | 'imports')[]
  }
>
