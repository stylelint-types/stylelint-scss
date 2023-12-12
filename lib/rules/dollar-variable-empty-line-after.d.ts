import type { RuleConfig } from 'stylelint-define-config'

export type DollarVariableEmptyLineAfterExcept = 'last-nested' | 'before-comment' | 'before-dollar-variable'

export type DollarVariableEmptyLineAfterIgnore = 'before-comment' | 'inside-single-line-block'

export interface DollarVariableEmptyLineAfterSecondaryOptions {
  except?: DollarVariableEmptyLineAfterExcept[]
  ignore?: DollarVariableEmptyLineAfterIgnore[]
  disableFix?: boolean
}

export type DollarVariableEmptyLineAfterOptions = RuleConfig<
  'always' | 'never',
  DollarVariableEmptyLineAfterSecondaryOptions
>
