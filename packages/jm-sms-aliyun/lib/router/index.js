const wrapper = require('jm-ms-wrapper')
const MS = require('jm-ms-core')
const ms = new MS()
const help = require('./help')

module.exports = function (opts = {}) {
  let service = this
  const wrap = wrapper(service.t)

  let send = async function (opts) {
    await service.send(opts.data)
    return {ret: 1}
  }

  let router = ms.router()
  router
    .use(help(service))
    .use('/send', wrap(send))

  return router
}
