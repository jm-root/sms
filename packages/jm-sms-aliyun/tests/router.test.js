const $ = require('./service')
let service = $
let router = service.router()

describe('router', async () => {
  test('send', async () => {
    let doc = await router.post('/send', {
      PhoneNumbers: '13609075005',
      SignName: '美夏惠诚',
      TemplateCode: 'SMS_83220136',
      TemplateParam: '{"code":"12345"}'
    })
    expect(doc).toBeTruthy()
  })
})
