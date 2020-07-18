const config = require('eslint-config-standard-with-typescript')

module.exports = Object.assign({}, config, {
  parserOptions: {
    project: 'tsconfig.json'
  }
})