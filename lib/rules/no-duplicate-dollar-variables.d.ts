import type { RuleConfig } from 'stylelint-define-config'

export type NoDuplicateDollarVariablesOptions = RuleConfig<
  true,
  {
    ignoreInside?: ('at-rule' | 'nested-at-rule')[]
  }
>
