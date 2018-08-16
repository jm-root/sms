const SMSClient = require('aliyun-dysms-sdk')
const consts = require('../consts')
const Err = consts.Err
const t = require('../locale')

class SMS {
  constructor (opts = {}) {
    this.ready = true
    this.t = t
    let accessKeyId = opts.access_key_id
    let secretAccessKey = opts.secret_access_key
    this.smsClient = new SMSClient({accessKeyId, secretAccessKey})
  }

  /**
   *
   * @param opts
   * @example
   * {
     *  PhoneNumbers: '1500000000',
     *  SignName: '云通信产品',
     *  TemplateCode: 'SMS_000000',
     *  TemplateParam: '{"code":"12345","product":"云通信"}'
     * }
   *
   * @param cb
   */
  async send (opts) {
    try {
      await this.smsClient.sendSMS(opts)
    } catch (e) {
      e.data = Object.assign(
        Err.FA_SEND_SMS,
        {
          data: {
            code: e.code,
            name: e.name,
            message: e.message
          }
        }
      )
      throw e
    }
  }
}

module.exports = SMS
