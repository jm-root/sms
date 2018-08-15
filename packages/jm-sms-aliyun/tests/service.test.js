const $ = require('./service')
let service = $

test('send', async () => {
  let doc = await service.send({
    PhoneNumbers: '13609075005',
    SignName: '美夏惠诚',
    TemplateCode: 'SMS_83220136',
    TemplateParam: '{"code":"12345"}'
  })
  expect(doc).toBeTruthy()
})
