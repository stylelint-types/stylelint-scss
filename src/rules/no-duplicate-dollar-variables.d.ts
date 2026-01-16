import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type NoDuplicateDollarVariablesOptions = RuleConfig<
  true,
  [],
  {
    ignoreInside?: LiteralUnion<'at-rule' | 'nested-at-rule'>[]
  }
>
