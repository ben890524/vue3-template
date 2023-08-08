const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    // defineProps and defineEmits generate no-undef warnings
    'vue/setup-compiler-macros': true,
  },
  globals: {},
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],

  rules: {
    'global-require': 'off',
    'func-call-spacing': 'off',
    'no-unused-expressions': 'off',
    'comma-dangle': 'off',
    'import/no-named-as-default': 'off',
    'vue/prop-name-casing': 'off',
    camelcase: 'off',
    semi: [0],
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
});
