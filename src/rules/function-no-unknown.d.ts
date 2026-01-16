import type { RegExpLike, RuleConfig } from 'stylelint-define-config'

export type FunctionNoUnknownOptions = RuleConfig<
  true,
  [],
  {
    ignoreFunctions: RegExpLike[]
  }
>
