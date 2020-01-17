const $ = require('./service')
let service = $
let router = service.router()

describe('router', async () => {
  test('send', async () => {
    let doc = await router.post('/send', {
      PhoneNumbers: '13609075005',
      SignName: '佳码软件',
      TemplateCode: 'SMS_151575725',
      TemplateParam: '{"rand":"12345"}'
    })
    expect(doc).toBeTruthy()
  })
})
