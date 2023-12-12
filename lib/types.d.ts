import type { AtEachKeyValueSingleLineOptions } from './rules/at-each-key-value-single-line'
import type { AtElseClosingBraceNewlineAfterOptions } from './rules/at-else-closing-brace-newline-after'
import type { AtElseEmptyLineBeforeOptions } from './rules/at-else-empty-line-before'
import type { AtElseIfParenthesesSpaceBeforeOptions } from './rules/at-else-if-parentheses-space-before'
import type { AtExtendNoMissingPlaceholderOptions } from './rules/at-extend-no-missing-placeholder'
import type { AtFunctionNamedArgumentsOptions } from './rules/at-function-named-arguments'
import type { AtFunctionParenthesesSpaceBeforeOptions } from './rules/at-function-parentheses-space-before'
import type { AtFunctionPatternOptions } from './rules/at-function-pattern'
import type { AtIfClosingBraceNewlineAfterOptions } from './rules/at-if-closing-brace-newline-after'
import type { AtIfNoNullOptions } from './rules/at-if-no-null'
import type { AtIfClosingBraceSpaceAfterOptions } from './rules/at-if-closing-brace-space-after'
import type { AtImportNoPartialLeadingUnderscoreOptions } from './rules/at-import-no-partial-leading-underscore'
import type { AtImportPartialExtensionOptions } from './rules/at-import-partial-extension'
import type { AtImportPartialExtensionBlacklistOptions } from './rules/at-import-partial-extension-blacklist'
import type { AtImportPartialExtensionWhitelistOptions } from './rules/at-import-partial-extension-whitelist'
import type { AtMixinArgumentlessCallParenthesesOptions } from './rules/at-mixin-argumentless-call-parentheses'
import type { AtMixinNamedArgumentsOptions } from './rules/at-mixin-named-arguments'
import type { AtMixinParenthesesSpaceBeforeOptions } from './rules/at-mixin-parentheses-space-before'
import type { AtMixinPatternOptions } from './rules/at-mixin-pattern'
import type { AtRootNoRedundantOptions } from './rules/at-root-no-redundant'
import type { AtRuleNoUnknownOptions } from './rules/at-rule-no-unknown'
import type { AtRuleConditionalNoParenthesesOptions } from './rules/at-rule-conditional-no-parentheses'
import type { AtUseNoRedundantAliasOptions } from './rules/at-use-no-redundant-alias'
import type { AtUseNoUnnamespacedOptions } from './rules/at-use-no-unnamespaced'
import type { BlockNoRedundantNestingOptions } from './rules/block-no-redundant-nesting'
import type { CommentNoEmptyOptions } from './rules/comment-no-empty'
import type { CommentNoLoudOptions } from './rules/comment-no-loud'
import type { DeclarationNestedPropertiesNoDividedGroupsOptions } from './rules/declaration-nested-properties-no-divided-groups'
import type { DimensionNoNonNumericValuesOptions } from './rules/dimension-no-non-numeric-values'
import type { DeclarationNestedPropertiesOptions } from './rules/declaration-nested-properties'
import type { DollarVariableColonNewlineAfterOptions } from './rules/dollar-variable-colon-newline-after'
import type { DollarVariableColonSpaceAfterOptions } from './rules/dollar-variable-colon-space-after'
import type { DollarVariableColonSpaceBeforeOptions } from './rules/dollar-variable-colon-space-before'
import type { DollarVariableDefaultOptions } from './rules/dollar-variable-default'
import type { DollarVariableEmptyLineBeforeOptions } from './rules/dollar-variable-empty-line-before'
import type { DollarVariableEmptyLineAfterOptions } from './rules/dollar-variable-empty-line-after'
import type { DollarVariableFirstInBlockOptions } from './rules/dollar-variable-first-in-block'
import type { DollarVariableNoMissingInterpolationOptions } from './rules/dollar-variable-no-missing-interpolation'
import type { DollarVariablePatternOptions } from './rules/dollar-variable-pattern'
import type { DollarVariableNoNamespacedAssignmentOptions } from './rules/dollar-variable-no-namespaced-assignment'
import type { DoubleSlashCommentEmptyLineBeforeOptions } from './rules/double-slash-comment-empty-line-before'
import type { DoubleSlashCommentWhitespaceInsideOptions } from './rules/double-slash-comment-whitespace-inside'
import type { DoubleSlashCommentInlineOptions } from './rules/double-slash-comment-inline'
import type { FunctionCalculationNoInterpolationOptions } from './rules/function-calculation-no-interpolation'
import type { FunctionColorRelativeOptions } from './rules/function-color-relative'
import type { FunctionNoUnknownOptions } from './rules/function-no-unknown'
import type { FunctionDisallowedListOptions } from './rules/function-disallowed-list'
import type { FunctionQuoteNoQuotedStringsInsideOptions } from './rules/function-quote-no-quoted-strings-inside'
import type { FunctionUnquoteNoUnquotedStringsInsideOptions } from './rules/function-unquote-no-unquoted-strings-inside'
import type { LoadNoPartialLeadingUnderscoreOptions } from './rules/load-no-partial-leading-underscore'
import type { MapKeysQuotesOptions } from './rules/map-keys-quotes'
import type { NoDollarVariablesOptions } from './rules/no-dollar-variables'
import type { MediaFeatureValueDollarVariableOptions } from './rules/media-feature-value-dollar-variable'
import type { NoDuplicateDollarVariablesOptions } from './rules/no-duplicate-dollar-variables'
import type { NoGlobalFunctionNamesOptions } from './rules/no-global-function-names'
import type { NoDuplicateMixinsOptions } from './rules/no-duplicate-mixins'
import type { OperatorNoNewlineAfterOptions } from './rules/operator-no-newline-after'
import type { OperatorNoNewlineBeforeOptions } from './rules/operator-no-newline-before'
import type { OperatorNoUnspacedOptions } from './rules/operator-no-unspaced'
import type { PartialNoImportOptions } from './rules/partial-no-import'
import type { PropertyNoUnknownOptions } from './rules/property-no-unknown'
import type { PercentPlaceholderPatternOptions } from './rules/percent-placeholder-pattern'
import type { SelectorNoRedundantNestingSelectorOptions } from './rules/selector-no-redundant-nesting-selector'
import type { SelectorNoUnionClassNameOptions } from './rules/selector-no-union-class-name'
import type { SelectorNestCombinatorsOptions } from './rules/selector-nest-combinators'

export interface Extends {
  'stylelint-config-standard-scss': void
  'stylelint-config-recommended-scss': void
  'stylelint-config-prettier-scss': void
}

export interface Plugins {
  'stylelint-scss': void
}

export interface Syntax {
  'postcss-scss': void
}

interface RuleOptions {

  /**
   * This is a rule that checks for situations where users have:
   * - Done a loop using map-keys
   * - Grabbed the value for that key inside of the loop.
   *
   * @see [at-each-key-value-single-line](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line)
   */
  'scss/at-each-key-value-single-line': AtEachKeyValueSingleLineOptions

  /**
   * Require or disallow a newline after the closing brace of `@else` statements.
   *
   * @see [at-else-closing-brace-newline-after](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-closing-brace-space-after)
   */
  'scss/at-else-closing-brace-newline-after': AtElseClosingBraceNewlineAfterOptions

  /**
   * Require a single space or disallow whitespace after the closing brace of `@else` statements.
   *
   * @see [at-else-closing-brace-space-after](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-closing-brace-space-after)
   */
  'scss/at-else-closing-brace-space-after': AtElseClosingBraceNewlineAfterOptions

  /**
   * Require an empty line or disallow empty lines before `@`-else.
   *
   * @see [at-else-empty-line-before](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-empty-line-before)
   */
  'scss/at-else-empty-line-before': AtElseEmptyLineBeforeOptions

  /**
   * Require or disallow a space before `@else if` parentheses.
   *
   * @see [at-else-if-parentheses-space-before](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-else-if-parentheses-space-before)
   */
  'scss/at-else-if-parentheses-space-before': AtElseIfParenthesesSpaceBeforeOptions

  /**
   * Disallow at-extends (`@extend`) with missing placeholders.
   *
   * Using a class selector with the `@extend` directive usually results in more generated CSS than when using a placeholder selector. Furthermore, Sass specifically introduced placeholder selectors in order to be used with `@extend`.
   *
   * @see [at-extend-no-missing-placeholder](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-extend-no-missing-placeholder)
   */
  'scss/at-extend-no-missing-placeholder': AtExtendNoMissingPlaceholderOptions

  /**
   * Require named parameters in SCSS function call rule.
   *
   * @see [at-function-named-arguments](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-function-named-arguments)
   */
  'scss/at-function-named-arguments': AtFunctionNamedArgumentsOptions

  /**
   * Require or disallow a space before `@function` parentheses.
   *
   * @see [at-function-parentheses-space-before](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-function-parentheses-space-before)
   */
  'scss/at-function-parentheses-space-before': AtFunctionParenthesesSpaceBeforeOptions

  /**
   * Specify a pattern for Sass/SCSS-like function names.
   *
   * @see [at-function-pattern](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-pattern)
   */
  'scss/at-function-pattern': AtFunctionPatternOptions

  /**
   * Require or disallow a newline after the closing brace of `@if` statements.
   *
   * This rule might have conflicts with Stylelint's core rule
   * [`block-closing-brace-newline-after`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after)
   * if it doesn't have `"ignoreAtRules": ["if"]` in a `.stylelintrc` config file.
   * That's because an `@if { ... }` statement can be successfully parsed as an at-rule with a block.
   * You might also want to set `"ignoreAtRules": ["else"]` for another stylelint's core rule -
   *  [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)
   * that could be forcing empty lines before at-rules (including `@else`s that follow `@if`s or other `@else`s).
   *
   * @see [at-if-closing-brace-newline-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after)
   */
  'scss/at-if-closing-brace-newline-after': AtIfClosingBraceNewlineAfterOptions

  /**
   * Require a single space or disallow whitespace after the closing brace of `@if` statements.
   *
   * This rule might have conflicts with Stylelint's core
   * [`block-closing-brace-space-after`](https://stylelint.io/user-guide/rules/block-closing-brace-space-after) rule if the latter is set up in your `.stylelintrc` config file.
   *
   * @see [at-if-closing-brace-space-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after)
   */
  'scss/at-if-closing-brace-space-after': AtIfClosingBraceSpaceAfterOptions

  /**
   * Check for equality to null is unnecessarily explicit since `null` is falsey in Sass.
   *
   * @see [at-if-no-null](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null)
   */
  'scss/at-if-no-null': AtIfNoNullOptions

  /**
   * Require or disallow extension in `@import` commands.
   *
   * The rule ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [at-import-partial-extension](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension)
   */
  'scss/at-import-partial-extension': AtImportPartialExtensionOptions

  /**
   * Disallow leading underscore in partial names in `@import`.
   *
   * The rule ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [at-import-no-partial-leading-underscore](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore)
   */
  'scss/at-import-no-partial-leading-underscore': AtImportNoPartialLeadingUnderscoreOptions

  /**
   * Specify a blacklist of disallowed file extensions for partial names in `@import` commands.
   *
   * The rule ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [at-import-partial-extension-blacklist](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist)
   */
  'scss/at-import-partial-extension-blacklist': AtImportPartialExtensionBlacklistOptions

  /**
   * Specify a whitelist of allowed file extensions for partial names in `@import` commands.
   *
   * The rule ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [at-import-partial-extension-whitelist](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist)
   */
  'scss/at-import-partial-extension-whitelist': AtImportPartialExtensionWhitelistOptions

  /**
   * Require named parameters in at-mixin call rule.
   *
   * @see [at-mixin-named-arguments](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments)
   */
  'scss/at-mixin-named-arguments': AtMixinNamedArgumentsOptions

  /**
   * Require or disallow parentheses in argumentless `@mixin` calls.
   *
   * @see [at-mixin-argumentless-call-parentheses](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses)
   */
  'scss/at-mixin-argumentless-call-parentheses': AtMixinArgumentlessCallParenthesesOptions

  /**
   * Require or disallow a space before `@mixin` parentheses.
   *
   * @see [at-mixin-parentheses-space-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before)
   */
  'scss/at-mixin-parentheses-space-before': AtMixinParenthesesSpaceBeforeOptions

  /**
   * Specify a pattern for Sass/SCSS-like mixin names.
   *
   * @see [at-mixin-pattern](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern)
   */
  'scss/at-mixin-pattern': AtMixinPatternOptions

  /**
   * Disallow redundant `@at-root` rule.
   *
   * The `@at-root` rule is redundant in the following cases:
   * - If `@at-root` is already at the root of the document.
   * - If any `@at-root` selector contains the parent selector, [`&`](https://sass-lang.com/documentation/style-rules/parent-selector/), outside interpolation.
   * - If `@at-root` is nested within a `@keyframes` block.
   *
   * @see [at-root-no-redundant](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-root-no-redundant)
   */
  'scss/at-root-no-redundant': AtRootNoRedundantOptions

  /**
   * Disallow parentheses in conditional @ rules (if, elsif, while)
   *
   * @see [at-rule-conditional-no-parentheses](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses)
   */
  'scss/at-rule-conditional-no-parentheses': AtRuleConditionalNoParenthesesOptions

  /**
   * Disallow unknown at-rules. Should be used **instead of** Stylelint's [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown).
   *
   * This rule is basically a wrapper around the mentioned core rule,
   * but with added SCSS-specific `@`-directives. So if you use the core rule, `@if`,
   * `@extend` and other Sass-y things will get warnings. You must disable Stylelint's core
   * rule to make this rule work:
   * ```json
   * {
   *   "rules": {
   *     "at-rule-no-unknown": null,
   *     "scss/at-rule-no-unknown": true
   *   }
   * }
   * ```
   *
   * @see [at-rule-no-unknown](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown)
   */
  'scss/at-rule-no-unknown': AtRuleNoUnknownOptions

  /**
   * Disallow redundant namespace aliases.
   *
   * @see [at-use-no-redundant-alias](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-redundant-alias)
   */
  'scss/at-use-no-redundant-alias': AtUseNoRedundantAliasOptions

  /**
   * Disallow usage of `@use` without a namespace.
   *
   * @see [at-use-no-unnamespaced](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced)
   */
  'scss/at-use-no-unnamespaced': AtUseNoUnnamespacedOptions

  /**
   * Disallow empty comments. Should be used **instead of** the Stylelint's [comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty) because the core rule ignores SCSS-like comments.
   *
   * To avoid duplicate issues, you must disable the core rule as follows:
   * ```json
   * {
   *   "rules": {
   *     "comment-no-empty": null,
   *     "scss/comment-no-empty": true
   *   }
   * }
   * ```
   *
   * @see [comment-no-empty](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty)
   */
  'scss/comment-no-empty': CommentNoEmptyOptions

  /**
   * Disallow nesting a single block if it could be merged with its parent block.
   *
   * @see [block-no-redundant-nesting](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/block-no-redundant-nesting)
   */
  'scss/block-no-redundant-nesting': BlockNoRedundantNestingOptions

  /**
   * Require or disallow properties with `-` in their names to be in a form of a nested group.
   *
   * @see [declaration-nested-properties](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties)
   */
  'scss/declaration-nested-properties': DeclarationNestedPropertiesOptions

  /**
   * Disallow `/*`-comments.
   *
   * This rule only works on CSS comments (`\/* *\/`) and ignores all double-slash (`//`) comments.
   *
   * @see [comment-no-loud](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud)
   */
  'scss/comment-no-loud': CommentNoLoudOptions

  /**
   * Disallow nested properties of the same "namespace" be divided into multiple groups.
   *
   * A "namespace" is everything before the first `-` in property names,
   * e.g. `margin` in `margin-bottom`. It is the "namespace" that is used as a root identifier
   * for a nested properties group (`font` in the example above).
   *
   *[Sass official docs on nested properties](https://sass-lang.com/documentation/style-rules/declarations#nesting).
   *
   * @see [declaration-nested-properties-no-divided-groups](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups)
   */
  'scss/declaration-nested-properties-no-divided-groups': DeclarationNestedPropertiesNoDividedGroupsOptions

  /**
   * Interpolating a value with a unit (e.g. `#{$value}px`) results in a
   * _string_ value, not as numeric value. This value then cannot be used in
   * numerical operations.  It is better to use arithmetic to apply a unit to a
   * number (e.g. `$value * 1px`).
   *
   * This rule requires that all interpolation for values should be in the format
   * `$value * 1<unit>` instead of `#{value}<unit>`
   *
   * @see [dimension-no-non-numeric-values](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values)
   */
  'scss/dimension-no-non-numeric-values': DimensionNoNonNumericValuesOptions

  /**
   * Require a newline after the colon in `$`-variable declarations.
   *
   * @see [dollar-variable-colon-newline-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after)
   */
  'scss/dollar-variable-colon-newline-after': DollarVariableColonNewlineAfterOptions

  /**
   * Require or disallow whitespace after the colon in `$`-variable declarations.
   *
   * @see [dollar-variable-colon-space-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after)
   */
  'scss/dollar-variable-colon-space-after': DollarVariableColonSpaceAfterOptions

  /**
   * Require a single space or disallow whitespace before the colon in `$`-variable declarations.
   *
   * @see [dollar-variable-colon-space-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before)
   */
  'scss/dollar-variable-colon-space-before': DollarVariableColonSpaceBeforeOptions

  /**
   * Require `!default` flag for `$`-variable declarations
   *
   * @see [dollar-variable-default](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-default)
   */
  'scss/dollar-variable-default': DollarVariableDefaultOptions

  /**
   * Require an empty line or disallow empty lines after `$`-variable declarations.
   *
   * If the `$`-variable declaration is the last declaration in a file, it's ignored.
   *
   * @see [dollar-variable-empty-line-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after)
   */
  'scss/dollar-variable-empty-line-after': DollarVariableEmptyLineAfterOptions

  /**
   * Require `$`-variable declarations to be placed first in a block (root or a rule).
   *
   * @see [dollar-variable-first-in-block](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block)
   */
  'scss/dollar-variable-first-in-block': DollarVariableFirstInBlockOptions

  /**
   * Require an empty line or disallow empty lines before `$`-variable declarations.
   *
   * If the `$`-variable declaration is the first declaration in a file, it's ignored.
   *
   * @see [dollar-variable-empty-line-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before)
   */
  'scss/dollar-variable-empty-line-before': DollarVariableEmptyLineBeforeOptions

  /**
   * Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
   *
   * Sass variables that contain a custom identifier as a string always require interpolation when used.
   * Some CSS [at-rules](https://css-tricks.com/the-at-rules-of-css/) require variable interpolation even when the custom identifier value is not a string.
   *
   * @see [dollar-variable-no-missing-interpolation](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation)
   */
  'scss/dollar-variable-no-missing-interpolation': DollarVariableNoMissingInterpolationOptions

  /**
   * Disallow assignment to namespaced variables.
   *
   * @see [dollar-variable-no-namespaced-assignment](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment)
   */
  'scss/dollar-variable-no-namespaced-assignment': DollarVariableNoNamespacedAssignmentOptions

  /**
   * Specify a pattern for Sass-like variables.
   *
   * @see [dollar-variable-pattern](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern)
   */
  'scss/dollar-variable-pattern': DollarVariablePatternOptions

  /**
   * Require or disallow an empty line before `//`-comments.
   *
   * This rule only works with SCSS-like [single-line comments](https://sass-lang.com/documentation/syntax/comments) and ignores:
   * - comments that are the very first nodes in a file;
   * - CSS comments (`\/* *\/`);
   * - comments that are on the same line as some non-comment code (inline comments).
   *
   * @see [double-slash-comment-empty-line-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before)
   */
  'scss/double-slash-comment-empty-line-before': DoubleSlashCommentEmptyLineBeforeOptions

  /**
   * Require or disallow `//`-comments to be inline comments.
   *
   * An inline comment in terms of this rule is a comment that is placed on the same line with any other code, either before or after it.
   *
   * This rule only works with SCSS-like [single-line comments](https://sass-lang.com/documentation/syntax/comments) and ignores CSS comments (`\/* *\/`).
   *
   * @see [double-slash-comment-inline](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-inline)
   */
  'scss/double-slash-comment-inline': DoubleSlashCommentInlineOptions

  /**
   * Require or disallow whitespace after the `//` in `//`-comments
   *
   * This rule only works with SCSS-like [single-line comments](https://sass-lang.com/documentation/syntax/comments) and ignores CSS comments (`\/* *\/`).
   *
   * Any number of slashes are allowed at the beginning of the comment. So `/// comment` is treated the same way as `// comment`.
   *
   * Note that a newline is not possible as a whitespace in terms of this rule as `//` - comments are intended to be single - line.
   *
   * @see [double-slash-comment-whitespace-inside](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside)
   */
  'scss/double-slash-comment-whitespace-inside': DoubleSlashCommentWhitespaceInsideOptions

  /**
   * Disallow interpolation in `calc()`, `clamp()`, `min()`, and `max()` functions.
   *
   * Since the release of [first-class `calc()`](https://sass-lang.com/documentation/values/calculations/),
   * calculation functions `calc()`, `clamp()`, `min()`, and `max()` accept variables
   * nd function calls as arguments. This rule disallows interpolation to avoid
   * extra verbose or even invalid CSS.
   *
   * @see [function-calculation-no-interpolation](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-calculation-no-interpolation)
   */
  'scss/function-calculation-no-interpolation': FunctionCalculationNoInterpolationOptions

  /**
   * Encourage the use of the [scale-color](https://sass-lang.com/documentation/modules/color#scale-color) over:
   *
   * - [darken](https://sass-lang.com/documentation/modules/color#darken)
   * - [desaturate](https://sass-lang.com/documentation/modules/color#desaturate)
   * - [fade-in](https://sass-lang.com/documentation/modules/color#fade-in)
   * - [fade-out](https://sass-lang.com/documentation/modules/color#fade-out)
   * - [lighten](https://sass-lang.com/documentation/modules/color#lighten)
   * - [opacify](https://sass-lang.com/documentation/modules/color#opacify)
   * - [saturate](https://sass-lang.com/documentation/modules/color#saturate)
   * - [transparentize](https://sass-lang.com/documentation/modules/color#transparentize)
   *
   * @see [function-color-relative](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative)
   */
  'scss/function-color-relative': FunctionColorRelativeOptions

  /**
   * Specify a list of disallowed functions.
   *
   * @see [function-disallowed-list](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-disallowed-list)
   */
  'scss/function-disallowed-list': FunctionDisallowedListOptions

  /**
   * Disallow unknown functions. Should be used **instead of** Stylelint's [function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown).
   *
   * This rule is basically a wrapper around the mentioned core rule. You must disable Stylelint's core rule to make this rule work:
   * ```json
   * {
   *   "rules": {
   *     "function-no-unknown": null,
   *     "scss/function-no-unknown": true
   *   }
   * }
   * ```
   *
   * @see [function-no-unknown](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown)
   */
  'scss/function-no-unknown': FunctionNoUnknownOptions

  /**
   * Disallow quoted strings inside the [quote function](https://sass-lang.com/documentation/modules/string#quote)
   *
   * @see [function-quote-no-quoted-strings-inside](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside)
   */
  'scss/function-quote-no-quoted-strings-inside': FunctionQuoteNoQuotedStringsInsideOptions

  /**
   * Disallow unquoted strings inside the [unquote function](https://sass-lang.com/documentation/modules/string#unquote)
   *
   * @see [function-unquote-no-unquoted-strings-inside](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside)
   */
  'scss/function-unquote-no-unquoted-strings-inside': FunctionUnquoteNoUnquotedStringsInsideOptions

  /**
   * Disallow leading underscore in partial names in `@import`, `@use`, `@forward`,
   * and [`meta.load-css`](https://sass-lang.com/documentation/modules/meta/#load-css) `$url` parameter.
   *
   * The rule ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [load-no-partial-leading-underscore](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore)
   */
  'scss/load-no-partial-leading-underscore': LoadNoPartialLeadingUnderscoreOptions

  /**
   * Require quoted keys in Sass maps.
   *
   * @see [map-keys-quotes](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/map-keys-quotes)
   */
  'scss/map-keys-quotes': MapKeysQuotesOptions

  /**
   * Require a media feature value be a `$`-variable or disallow `$`-variables in media feature values.
   *
   * @see [media-feature-value-dollar-variable](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable)
   */
  'scss/media-feature-value-dollar-variable': MediaFeatureValueDollarVariableOptions

  /**
   * Disallow dollar variables within a stylesheet.
   *
   * @see [no-dollar-variables](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-dollar-variables)
   */
  'scss/no-dollar-variables': NoDollarVariablesOptions

  /**
   * Disallow duplicate dollar variables within a stylesheet.
   *
   * @see [no-duplicate-dollar-variables](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables)
   */
  'scss/no-duplicate-dollar-variables': NoDuplicateDollarVariablesOptions

  /**
   * Disallow duplicate mixins within a stylesheet.
   *
   * @see [no-duplicate-mixins](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins)
   */
  'scss/no-duplicate-mixins': NoDuplicateMixinsOptions

  /**
   * Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
   *
   * A full list of disallowed names (and their alternatives) is located [here](https://github.com/sass/sass/blob/main/accepted/module-system.md#built-in-modules-1)
   *
   * It is recommended to use the [Sass migrator](https://sass-lang.com/documentation/cli/migrator) to change these global function names automatically.
   *
   * @see [no-global-function-names](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names)
   */
  'scss/no-global-function-names': NoGlobalFunctionNamesOptions

  /**
   * Disallow linebreaks after Sass operators.
   *
   * This rule checks math operators (`+`, `-`, `/`, `*`, `%`) and comparison operators (`>`, `<`, `!=`, `==`, `>=`, `<=`).
   *
   * Not all symbols that correspond to math operators are actually considered operators by Sass. Some of the exceptions are:
   *
   * - `+` and `-` as signs before values;
   * - `+` and `-` as signs in [space-delimited lists](https://sass-lang.com/documentation/operators/string);
   * - `-` as part of [a string](https://sass-lang.com/documentation/operators/string) or [a Sass identifier](https://sass-lang.com/documentation/operators/numeric#unary-operators), e.g. a variable;
   * - `/` as a CSS delimiter in property values like `font: 10px/1.2 Arial;` ([read more](https://sass-lang.com/documentation/operators/numeric#slash-separated-values)).
   *
   * For more details refer to [Sass official documentation](https://sass-lang.com/documentation). An online Sass compiler - [Sassmeister](https://www.sassmeister.com/) - could also come in handy.
   *
   * @see [operator-no-newline-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-after)
   */
  'scss/operator-no-newline-after': OperatorNoNewlineAfterOptions

  /**
   * Disallow linebreaks before Sass operators.
   *
   * This rule checks math operators (`+`, `-`, `/`, `*`, `%`) and comparison operators (`>`, `<`, `!=`, `==`, `>=`, `<=`).
   *
   * Not all symbols that correspond to math operators are actually considered operators by Sass. Some of the exceptions are:
   *
   * - `+` and `-` as signs before values;
   * - `+` and `-` as signs in [space-delimited lists](https://sass-lang.com/documentation/operators/string);
   * - `-` as part of [a string](https://sass-lang.com/documentation/operators/string) or [a Sass identifier](https://sass-lang.com/documentation/operators/numeric#unary-operators), e.g. a variable;
   * - `/` as a CSS delimiter in property values like `font: 10px/1.2 Arial;` ([read more](https://sass-lang.com/documentation/operators/numeric#slash-separated-values)).
   *
   * For more details refer to [Sass official documentation](https://sass-lang.com/documentation). An online Sass compiler - [Sassmeister](https://www.sassmeister.com/) - could also come in handy.
   *
   * @see [operator-no-newline-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-before)
   */
  'scss/operator-no-newline-before': OperatorNoNewlineBeforeOptions

  /**
   * Disallow unspaced operators in Sass operations.
   *
   * This rule checks math operators (`+`, `-`, `/`, `*`, `%`) and comparison operators (`>`, `<`, `!=`, `==`, `>=`, `<=`).
   *
   * Not all symbols that correspond to math operators are actually considered operators by Sass. Some of the exceptions are:
   *
   * - `+` and `-` as signs before values;
   * - `+` and `-` as signs in [space-delimited lists](https://sass-lang.com/documentation/operators/string);
   * - `-` as part of [a string](https://sass-lang.com/documentation/operators/string) or [a Sass identifier](https://sass-lang.com/documentation/operators/numeric#unary-operators), e.g. a variable;
   * - `/` as a CSS delimiter in property values like `font: 10px/1.2 Arial;` ([read more](https://sass-lang.com/documentation/operators/numeric#slash-separated-values)).
   *
   * For more details refer to [Sass official documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html). An online Sass compiler - [Sassmeister](https://www.sassmeister.com/) - could also come in handy.
   *
   * @see [operator-no-unspaced](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-unspaced)
   */
  'scss/operator-no-unspaced': OperatorNoUnspacedOptions

  /**
   * Disallow non-CSS `@import`s in partial files.
   *
   * The rule skips CSS files (doesn't report any `@import`s in them).
   *
   * The rule also ignores [cases](https://sass-lang.com/documentation/at-rules/import) when Sass considers an `@import` command just a plain CSS import:
   *
   * - If the file’s extension is `.css`.
   * - If the filename begins with `http://` (or any other protocol).
   * - If the filename is a `url()`.
   * - If the `@import` has any media queries.
   *
   * @see [partial-no-import](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/partial-no-import)
   */
  'scss/partial-no-import': PartialNoImportOptions

  /**
   * Specify a pattern for `%`-placeholders.
   *
   * @see [percent-placeholder-pattern](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern)
   */
  'scss/percent-placeholder-pattern': PercentPlaceholderPatternOptions

  /**
   * Require or disallow nesting of combinators in selectors
   *
   * @see [selector-nest-combinators](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-nest-combinators)
   */
  'scss/selector-nest-combinators': SelectorNestCombinatorsOptions

  /**
   * Disallow unknown properties. Should be used instead of Stylelint's [property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown).
   *
   * This rule considers properties defined in the [CSS Specifications and browser specific properties](https://github.com/betit/known-css-properties#source) to be known.
   *
   * This rule ignores:
   *
   * - variables (`$sass`, `@less`, `--custom-property`)
   * - vendor-prefixed properties (e.g., `-moz-align-self`, `-webkit-align-self`)
   *
   * Use option `checkPrefixed` described below to turn on checking of vendor-prefixed properties.
   *
   * @see [property-no-unknown](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/property-no-unknown)
   */
  'scss/property-no-unknown': PropertyNoUnknownOptions

  /**
   * Disallow redundant nesting selectors (`&`).
   *
   * @see [selector-no-redundant-nesting-selector](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector)
   */
  'scss/selector-no-redundant-nesting-selector': SelectorNoRedundantNestingSelectorOptions

  /**
   * Disallow union class names with the parent selector (`&`).
   *
   * @see [selector-no-union-class-name](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name)
   */
  'scss/selector-no-union-class-name': SelectorNoUnionClassNameOptions
}
