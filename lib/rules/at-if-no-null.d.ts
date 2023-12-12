import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type AtIfNoNullOptions = RuleConfig<
  (LiteralUnion<'css' | 'less' | 'scss'> | RegExp)[]
>
