module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "no-unused-vars":0,
    "space-before-blocks":0,
    "space-before-function-paren": 0,
    "key-spacing": 0,
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, { "max": 100 }],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": 0,
    "quotes": 0,
    // 关闭语句强制分号结尾
    "semi": 0,
  }
}
