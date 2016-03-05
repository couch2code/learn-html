var checkCode = require('../lib/check-code')

module.exports = function () {
  checkCode(function () {

    return document.querySelectorAll('h3').length === 1 &&
      document.querySelectorAll('ul').length === 1 &&
      document.querySelectorAll('li').length > 1 
  })
}
