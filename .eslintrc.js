// https://eslint.org/docs/user-guide/configuring

module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  parserOptions: {
    //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',// 指定解析器的
    sourceType:'module',
    "ecmaVersion": 6,
    "ecmaFeatures": {
      // ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:
      "jsx": true
    }
  },
  env: {
    //此项指定环境的全局变量，下面的配置指定为浏览器环境 指定为浏览器的全局环境
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范vue的
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // js语句结尾必须使用分号
    'semi': ['off', 'always'],
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [0, "single"],
    // 禁止出现未使用过的变量
    // 'no-unused-vars': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': 0
  }
}
// 可以有额外的解析器 但是必须满足三个条件
/*
 *(1)它必须是本地安装的一个 npm 模块。
 *(2)它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）
 *(3)它必须产出兼容 Esprima 的 AST 和 token 对象。
 *(4)默认:Espree 还有1.Esprima Babel-ESlint(对Babel解析器的包装) 3.typescript-eslint-parser(实验) 一个把TS转换成ESTree兼容格式的解析器
 */


// 你的 JavaScript 文件中使用注释来指定环境，格式如下：
/* eslint-env node, mocha */ // node 和 mocha 的全局变量环境