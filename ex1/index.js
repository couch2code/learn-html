const h = require('npm:hyperscript')
const modal = require('github:yuanqing/modal')

module.exports = function () {
  if (document.querySelectorAll('p').length === 3) {
    const success = dialog('Exercise Success!')
    document.body.appendChild(success)
    const m = modal(success)
    m.show()
  } else {
    const error = dialog('Exercise Error!')
    document.body.appendChild(error)
    const m1 = modal(error)

    m1.show()

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
        h('button'}, ['Ok']),
        h('h1', [desc])
      ])
    ])

}
