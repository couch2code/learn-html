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

module.exports = function (fn) {
  document.body.appendChild(
    h('div', { style: { position: 'absolute', bottom: '50px', right: '50px'}}, [
      h('button', { style: buttonStyle, onclick: _ => checkCode() }, ['Check Code'])
    ])
  )
  function img (url) {
    return h('img', { src: url, style: { width: '100%'}})
  }
  function checkCode () {
    var d = dialog(img('http://i.giphy.com/10tIjpzIu8fe0.gif'), 'OK')
    if (fn()) {
      d = dialog(img('http://i.giphy.com/l41lHvfYqxWus1oYw.gif'), 'OK')
    }
    d.show()
 }
}
