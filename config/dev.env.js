'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // 合并相同的部分， 相同部分就会覆盖  就是把 prod.env 能用的合并到 dev 里面去，其实就是一种配置继承，这样写可以方便修改和管理配置
  NODE_ENV: '"development"',
})
