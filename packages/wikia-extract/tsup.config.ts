import { defineConfig } from "tsup"

export default defineConfig({
  dts: true,
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  clean: true,
  platform: "node",
})
