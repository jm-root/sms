module.exports = {
  appenders: {
    console: { type: 'console' },
    sms: {
      type: 'dateFile',
      filename: 'logs/sms',
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: { appenders: [ 'console' ], level: 'info' },
    sms: { appenders: [ 'console', 'sms' ], level: 'info' }
  }
}
