const Service = require('./service')
const router = require('./router')

module.exports = function (opts = {}) {
  let service = new Service(opts)
  service.router = router
  return service
}
