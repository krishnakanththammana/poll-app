var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/ping', function(req, res) {
  res.send('pong');
})

var port=Number(process.env.PORT || 5000);
app.listen(port);
console.log('wishes app running on port: '+port);
