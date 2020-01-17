const $ = require('./service')
let service = $

test('send', async () => {
  let doc = await service.send({
    PhoneNumbers: '13609075005',
    SignName: '佳码软件',
    TemplateCode: 'SMS_151575725',
    TemplateParam: '{"code":"12345"}'
  })
  expect(doc).toBeTruthy()
})
