import type { RuleConfig } from 'stylelint-define-config'

export type FunctionNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreFunctions: (string | RegExp)[]
  }
>
