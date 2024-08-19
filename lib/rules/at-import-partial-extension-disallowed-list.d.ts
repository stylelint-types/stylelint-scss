import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type AtImportPartialExtensionDisallowedListOptions = RuleConfig<
  (LiteralUnion<'css' | 'scss' | 'sass'> | RegExp)[]
>
