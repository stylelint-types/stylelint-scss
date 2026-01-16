import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type MediaFeatureValueDollarVariableOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    ignore?: LiteralUnion<'keywords'>[]
  }
>
