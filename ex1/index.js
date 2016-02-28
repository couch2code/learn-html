const dialog = require('npm:couch2code-dialog')

module.exports = function () {
  var d = dialog('Exercise Error!')
  if (document.querySelectorAll('p').length === 3) {
    d = dialog('Exercise Success!')
  }
  d.show()
}
