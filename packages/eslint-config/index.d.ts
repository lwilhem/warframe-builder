import type { ConfigNames, TypedFlatConfigItem } from "@antfu/eslint-config"
import type { FlatConfigComposer } from "eslint-flat-config-utils"

declare module "@wbuilder/eslint-config" {
  export default function defineEslintConfig(): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>
}
