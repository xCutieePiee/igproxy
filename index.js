var express = require('express')
var proxy = require('express-http-proxy');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(proxy('https://cron.buysocial.net',{
  preserveHostHdr: true
}));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
