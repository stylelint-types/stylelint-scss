import type { RuleConfig } from 'stylelint-define-config'

export type DoubleSlashCommentInlineOptions = RuleConfig<
  'always' | 'never',
  {
    ignore?: ('stylelint-commands')[]
  }
>
