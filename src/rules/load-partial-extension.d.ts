import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type LoadPartialExtensionOptions = RuleConfig<
  LiteralUnion<'always' | 'never'>
>
