module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/html-indent': 0,
    'no-console': 1,
    'no-useless-escape': 1,
    'prefer-const': 1,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-unused-components': 1
  }
}
