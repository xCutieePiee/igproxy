// var express = require('express')
var proxy = require('koa-better-http-proxy');
var Koa = require('koa');

var app = new Koa();
// var app = express()

// app.set('trust proxy', true)

// app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://www.discord.com/channels/@me', {
  headers: {
  }
}))

app.listen(process.env.PORT || 5000, function() {
  console.log('Bot online!')
})
