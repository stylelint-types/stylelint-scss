import type { RuleConfig } from 'stylelint-define-config'

export type SelectorNestCombinatorsOptions = RuleConfig<
  'always' | 'never',
  [combinator: string, type: string]
>
