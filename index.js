// var express = require('express')
var proxy = require('koa-better-http-proxy');
var Koa = require('koa');

var app = new Koa();
// var app = express()

// app.set('trust proxy', true)

// app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://www.discord.com/channels/@me', {
  headers: {
    "accept": "*/*",
    "accept-language": "en-US",
    "authorization": "NDk4MDk5MTU4NTI0MzYyNzY0.GF3k-f.ukxj3vg77vw5BkQDa8_ewMQORlPRNIc1u4pf1c",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImZyLUZSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTAzLjAuNTA2MC4xMTQgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjEwMy4wLjUwNjAuMTE0Iiwib3NfdmVyc2lvbiI6IjciLCJyZWZlcnJlciI6Imh0dHBzOi8vcHJvYm90LmlvLyIsInJlZmVycmluZ19kb21haW4iOiJwcm9ib3QuaW8iLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTM3MDk1LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
  },
  "referrer": "https://discord.com/channels/@me",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
  }
}))

app.listen(process.env.PORT || 5000, function() {
  console.log('Bot online!')
})
