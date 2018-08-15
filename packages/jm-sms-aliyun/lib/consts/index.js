let ERRCODE = 4000
module.exports = {
  TokenKey: 'sms:token',
  Err: {
    FA_SEND_SMS: {
      err: ERRCODE++,
      msg: 'Send SMS Fail'
    }
  }
}
