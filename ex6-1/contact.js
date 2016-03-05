var checkCode = require('../lib/check-code')

module.exports = function () {
  checkCode(function () {
    return document.querySelectorAll('form').length === 1
  })
}
