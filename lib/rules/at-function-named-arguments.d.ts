import type { RuleConfig } from 'stylelint-define-config'

export type AtFunctionNamedArgumentsOptions = RuleConfig<
  'always' | 'never',
  {
    ignore?: ('single-argument')[]
    /**
     * ["/regex/", "string"]
     */
    ignoreFunctions?: string[]
  }
>
