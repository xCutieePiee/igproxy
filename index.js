// var express = require('express')
var proxy = require('koa-better-http-proxy');
var Koa = require('koa');

var app = new Koa();
// var app = express()

// app.set('trust proxy', true)

// app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://www.instagram.com', {
  headers: {
    "x-ig-app-id": '936619743392459',
    "cookie": "csrftoken=ZXFvn643Os6i5hRHI7UN3evkfstEg6NQ; ds_user_id=17804375702; sessionid=17804375702%3AwQFMY6GSHyc7ph%3A10%3AAYeNMKE_K5hx7PIpb6RlIPVqeSOodNNudPs2nuHaqw;"
  }
}))

app.listen(process.env.PORT || 5000, function() {
  console.log('Bot online!')
})
