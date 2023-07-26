module.exports = {
  // ...
  extends: [
    "plugin:svelte/recommended",
    'plugin:@typescript-eslint/recommended'
  ],
  // ...
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: __dirname,
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
}