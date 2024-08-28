import antfu from "@antfu/eslint-config"

export default function defineEslintConfig() {
  // config WIP

  const config = antfu({
    stylistic: {
      quotes: "double",
      semi: false,
    },
    formatters: {
      css: true,
      html: true,
      markdown: "prettier",
    },
    rules: {
      "no-console": "off",
    },
  })

  return config
}
