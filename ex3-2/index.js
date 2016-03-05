var checkCode = require('../lib/check-code')

module.exports = function () {
  checkCode(function () {

    return document.querySelectorAll('h1').length === 1 &&
      document.querySelectorAll('ol').length === 1 &&
      document.querySelectorAll('li').length > 5 
  })
}
