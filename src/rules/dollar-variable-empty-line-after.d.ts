import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DollarVariableEmptyLineAfterOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'last-nested' | 'before-comment' | 'before-dollar-variable'>[]
    ignore?: LiteralUnion<'before-comment' | 'inside-single-line-block'>[]
  }
>
