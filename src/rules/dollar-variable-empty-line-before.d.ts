import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DollarVariableEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'first-nested' | 'after-comment' | 'after-dollar-variable'>[]
    ignore?: LiteralUnion<'after-comment' | 'inside-single-line-block' | 'after-dollar-variable'>[]
  }
>
