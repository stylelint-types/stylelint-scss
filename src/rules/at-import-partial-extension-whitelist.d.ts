import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type AtImportPartialExtensionWhitelistOptions = RuleConfig<
  (LiteralUnion<'css' | 'less' | 'scss'> | RegExp)[]
>
