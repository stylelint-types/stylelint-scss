import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type NoDuplicateDollarVariablesOptions = RuleConfig<
  true,
  [variable: string],
  {
    ignoreInside?: LiteralUnion<'at-rule' | 'nested-at-rule'>[]
    ignoreInsideAtRules?: string[]
    ignoreDefaults?: boolean
  }
>
