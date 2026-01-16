import type { LiteralUnion, RegExpLike, RuleConfig } from 'stylelint-define-config'

export type DollarVariablePatternOptions = RuleConfig<
  RegExpLike,
  [variableName: string, pattern: RegExpLike],
  {
    ignore?: LiteralUnion<'local' | 'global'>
  }
>
