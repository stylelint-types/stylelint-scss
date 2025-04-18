import type { RuleConfig } from 'stylelint-define-config'

export type FunctionDisallowedListOptions = RuleConfig<
  string | RegExp | (string | RegExp)[]
>
