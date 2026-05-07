import type { LiteralUnion, RuleConfig } from 'stylelint-define-config'

export type DeclarationNestedPropertiesOptions = RuleConfig<
  'always' | 'never',
  [prop: string],
  {
    /**
     * Works only with `"always"` and reverses its effect for a property if it is the only one with the corresponding "namespace" (e.g. `margin` in `margin-top`) in a ruleset.
     */
    except?: LiteralUnion<'only-of-namespace'>[]
  }
>
