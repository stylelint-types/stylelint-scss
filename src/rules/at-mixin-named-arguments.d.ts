import type { RuleConfig, LiteralUnion } from 'stylelint-define-config'

export type AtMixinNamedArgumentsOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    ignore?: LiteralUnion<'single-argument'>[]
  }
>
