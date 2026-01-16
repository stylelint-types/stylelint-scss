import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DoubleSlashCommentInlineOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    ignore?: LiteralUnion<'stylelint-commands'>[]
  }
>
