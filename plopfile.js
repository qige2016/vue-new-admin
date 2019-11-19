const viewGenerator = require('./plop-templates/view/prompt')
const addeditGenerator = require('./plop-templates/addedit/prompt')
const detailGenerator = require('./plop-templates/detail/prompt')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('addedit', addeditGenerator)
  plop.setGenerator('detail', detailGenerator)
  plop.setHelper('orConditon', function(v1, v2, v3, options) {
    if (v1 || v2 || v3) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })
  plop.setHelper('andOrConditon', function(v1, v2, v3, options) {
    if ((v1 && v3) || (v2 && v3)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })
}
