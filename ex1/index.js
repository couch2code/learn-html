const h = require('npm:hyperscript')
const dialog = require('npm:couch2code-dialog')
const buttonStyle = {
  margin: '0px auto 0 auto',
  'margin-bottom': '10px',
  'text-align': 'center',
  display: 'block',
  width: '100px',
  padding: '5px 10px 6px',
  color: '#fff',
  'text-decoration': 'none',
  'font-weight': 'bold',
  'line-weight': 1,
  'background-color': 'midnightblue',
  'border-radius': '5px',
  'box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
  'text-shadow': '0 -1px 1px rgba(0,0,0,0.25)',
  'border-bottom': '1px solid rgba(0,0,0,0.25)',
  position: 'relative',
  cursor: 'pointer'
}

module.exports = function () {
  document.body.appendChild(
    h('div', { style: { position: 'absolute', bottom: '50px', right: '50px'}}, [
      h('button', { style: buttonStyle, onclick: _ => checkCode() }, ['Check Code'])
    ])
  )
  function checkCode () {
    var d = dialog('Exercise Error!', 'OK')
    if (document.querySelectorAll('p').length === 3) {
      d = dialog(h('img', { src: 'http://1.media.dorkly.cvcdn.com/50/27/0d41808f60af8871fa122b3b0f37ab1b.gif', width: '100%'}), 'OK')
    }
    d.show()
 }
}
