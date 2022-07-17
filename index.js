// var express = require('express')
var proxy = require('koa-better-http-proxy');
var Koa = require('koa');

var app = new Koa();
// var app = express()

// app.set('trust proxy', true)

// app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://www.instagram.com', 
  headers: {
    "x-ig-app-id": '936619743392459',
    "cookie": ` mid=YsWhBQAEAAGO1GO1cUR5hmcevFUq; ig_did=39654BC6-3F58-440E-9E95-AFCD7598E5B1; ig_nrcb=1; csrftoken=ZXFvn643Os6i5hRHI7UN3evkfstEg6NQ; ds_user_id=17804375702; sessionid=17804375702%3AwQFMY6GSHyc7ph%3A10%3AAYeNMKE_K5hx7PIpb6RlIPVqeSOodNNudPs2nuHaqw; datr=EqzGYvI0u4TpKWeM-HoImpZt; shbid="2990\05417804375702\0541689536077:01f7ec954511b91cd854fc9366293eaed7c530becc686542fa62ff836a41b4424e9d70cc"; shbts="1658000077\05417804375702\0541689536077:01f73d2421533dd5d7915ffb1deeec2f5baf3e1613d837fb96854d01c93d0523e3e4ac39"; rur="NAO\05417804375702\0541689618964:01f7a4498bec17d3f179ef277acaf90bfc7932bf5b063c13534c3296dc8c0f6a5121c77d"`
}))

app.listen(process.env.PORT || 5000, function() {
  console.log('Bot online!')
})
