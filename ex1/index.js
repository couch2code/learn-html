const h = require('npm:hyperscript')
const modal = require('github:yuanqing/modal')

module.exports = function () {
  var d = dialog('Exercise Error!')
  if (document.querySelectorAll('p').length === 3) {
    d = dialog('Exercise Success!')
  }
  document.body.appendChild(d)
  const m = modal(d)
  m.show()

  function dialog (desc) {
    return h('.modal', [
        h('.modal__dialog', {
            style: {
                background: 'blue',
                color: 'white',
                width: '300px',
                border-radius: '3px'
            }
        }, [
          h('h1', [desc]),
          h('button', { style: { text-align: 'center' }, onclick: _ => m.hide()}, ['Ok'])
        ])
    ])
  }

}
