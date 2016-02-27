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
                background: 'darkgray',
                color: 'white',
                width: '300px',
                border-radius: '5px',
                border: '1px solid gray',
                margin: '10px',
                padding: '10px',
                font-family: 'monospace'
            }
        }, [
          h('h1', [desc]),
          h('center', [
            h('button', { onclick: _ => m.hide()}, ['Ok'])
          ])
        ])
    ])
  }

}
