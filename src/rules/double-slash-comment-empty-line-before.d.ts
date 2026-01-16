import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DoubleSlashCommentEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'first-nested' | 'inside-block'>[]
    ignore?: LiteralUnion<'between-comments' | 'stylelint-commands' | 'inside-block'>[]
  }
>
