import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type AtImportPartialExtensionAllowedListOptions = RuleConfig<
  (LiteralUnion<'css' | 'scss' | 'sass'> | RegExp)[]
>
