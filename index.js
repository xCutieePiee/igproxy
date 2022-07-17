var express = require('express')
var proxy = require('koa-better-http-proxy');
var app = express()

app.set('trust proxy', true)

app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://www.youtube.com', {
  preserveReqSession: true
}))

app.listen(app.get('port'), function() {
  console.log('Bot online!')
})
