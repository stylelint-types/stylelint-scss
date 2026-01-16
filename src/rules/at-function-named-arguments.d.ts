import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type AtFunctionNamedArgumentsOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    ignore?: LiteralUnion<'single-argument'>[]
    /**
     * ["/regex/", "string"]
     */
    ignoreFunctions?: string[]
  }
>
