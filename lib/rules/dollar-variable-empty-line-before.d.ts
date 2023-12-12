import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariableEmptyLineBeforeExcept = 'first-nested' | 'after-comment' | 'after-dollar-variable'

export type DollarVariableEmptyLineBeforeIgnore = 'after-comment' | 'inside-single-line-block' | 'after-dollar-variable'

export interface DollarVariableEmptyLineBeforeSecondaryOptions {
  except?: DollarVariableEmptyLineBeforeExcept[]
  ignore?: DollarVariableEmptyLineBeforeIgnore[]
  disableFix?: boolean
}

export type DollarVariableEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  DollarVariableEmptyLineBeforeSecondaryOptions
>
