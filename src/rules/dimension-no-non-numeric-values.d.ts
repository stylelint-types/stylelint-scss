import type { RuleConfig } from 'stylelint-define-config'

export type DimensionNoNonNumericValuesOptions = RuleConfig<true, [unit: string]>
