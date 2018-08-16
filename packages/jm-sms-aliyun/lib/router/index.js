const wrapper = require('jm-ms-wrapper')
const MS = require('jm-ms-core')
const ms = new MS()
const help = require('./help')

module.exports = function (opts = {}) {
  let service = this

  let send = async function (opts) {
    await service.send(opts.data)
    return {ret: 1}
  }

  let router = ms.router()
  wrapper(service.t)(router)
  router
    .use(help(service))
    .use('/send', send)

  return router
}
