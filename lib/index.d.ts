import { Linter } from "eslint"

declare const config: {
  jest: Linter.Config
  playwright: Linter.Config
  react: Linter.Config
  recommended: Linter.Config[]
  vitest: Linter.Config
}

export default config
