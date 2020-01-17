const Core = require('@alicloud/pop-core')
const consts = require('../consts')
const Err = consts.Err
const t = require('../locale')

class SMS {
  constructor (opts = {}) {
    this.ready = true
    this.t = t
    const accessKeyId = opts.access_key_id
    const accessKeySecret = opts.access_key_secret

    this.client = new Core({
      accessKeyId,
      accessKeySecret,
      endpoint: 'https://dysmsapi.aliyuncs.com',
      apiVersion: '2017-05-25'
    })
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
      const params = {
        'RegionId': 'cn-hangzhou'
      }

      const requestOption = {
        method: 'POST'
      }

      const doc = await this.client.request('SendSms', { ...params, ...opts }, requestOption)
      return JSON.stringify(doc)
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
