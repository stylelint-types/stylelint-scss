import type { Arrayable, CSSPropertiesMap, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type DeclarationPropertyValueNoUnknownOptions = RuleConfig<
  true,
  [],
  {
    /**
     * Ignore the specified property and value pairs.
     * Keys in the object indicate property names.
     * If a string in the object is surrounded with `"/"`,
     * it's interpreted as a regular expression.
     *
     * For example, `"/.+/"` matches any strings.
     */
    ignoreProperties?: Record<CSSPropertiesMap, Arrayable<RegExpLike>>
    /**
     * Extend or alter the properties syntax dictionary.
     * [CSS Value Definition Syntax](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md) is used to define a value's syntax.
     * If a definition starts with `|` it is added to the [existing definition value](https://csstree.github.io/docs/syntax/) if any.
     */
    propertiesSyntax?: Record<CSSPropertiesMap, string>

    /**
     * Extend or alter the types syntax dictionary.
     * [CSS Value Definition Syntax](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md) is used to define a value's syntax.
     * If a definition starts with `|` it is added to the [existing definition value](https://csstree.github.io/docs/syntax/) if any.
     *
     * Types are something like a preset which allows you to reuse a definition across other definitions. So, you'll likely want to also use the `propertiesSyntax` option when using this option.
     */
    typesSyntax?: Record<string, string>
  }
>
