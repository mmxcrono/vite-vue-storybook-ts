module.exports = {
  // ...
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    // ...
    // 'eslint:recommended',
    // ...
    'plugin:vue/vue3-recommended',
    // ...
    "prettier"
    // Make sure "prettier" is the last element in this list.
  ],
  // ...
}
