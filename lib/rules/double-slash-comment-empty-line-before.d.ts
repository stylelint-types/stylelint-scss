import type { RuleConfig } from 'stylelint-define-config'

export type DoubleSlashCommentEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  {
    except?: ('first-nested' | 'inside-block')[]
    ignore?: ('between-comments' | 'stylelint-commands' | 'inside-block')[]
  }
>
