const h = require('npm:hyperscript')
const modal = require('github:yuanqing/modal')
const success = dialog('Exercise Success!')
document.body.appendChild(success)
const error = dialog('Exercise Error!')
document.body.appendChild(error)

module.exports = function () {
  if (document.querySelectorAll('p').length === 3) {
    const m = modal(success)
    m.show()
  } else {
    const m = modal(error)
    m.show()

  }
}


function dialog (desc) {
  return h('.modal', [
      h('.modal__dialog', {
          style: {
              background: 'blue',
              color: 'white',
              width: '300px'
          }
      }, [
        h('button', { onclick: _ => m.hide() }, ['Ok']),
        h('h1', [desc])
      ])
    ])

}
