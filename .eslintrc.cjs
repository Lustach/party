module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  plugins: [],
  // ignorePatterns: ["stories/*"], exclude folders
  rules: {
    quotes: ["error", "double"],
    semi: "off",
    "vue/multi-word-component-names": ["off"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/v-on-style": "off",
    "vue/require-default-prop": 0,
    "vue/v-on-event-hyphenation": ["error", "never", {
      autofix: false,
      ignore: []
    }],
    "vue/no-multiple-template-root": 0,
    // "comma-dangle": [
    //   "error",
    //   {
    //     arrays: "always",
    //     objects: "always",
    //     imports: "always",
    //     exports: "always",
    //     functions: "always",
    //   },
    // ],
    "space-before-function-paren": ["error", "never"]
  }
};
