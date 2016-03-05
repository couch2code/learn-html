var checkCode = require('../lib/check-code')

module.exports = function () {
  checkCode(function () {
    return document.querySelectorAll('h1').length > 0 &&
      document.querySelectorAll('ul').length === 1 &&
      document.querySelectorAll('li').length === 2 &&
      document.querySelectorAll('a').length === 2
  })
}
