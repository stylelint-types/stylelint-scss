import type { Extends, Plugins, RuleOptions, Syntax } from './types'

declare module 'stylelint-define-config' {
  export interface CustomPlugins extends Plugins {}
  export interface CustomExtends extends Extends {}
  export interface CustomSyntax extends Syntax {}
  export interface CustomRuleOptions extends RuleOptions {}
}
