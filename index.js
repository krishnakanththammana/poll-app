var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist/poll-app'));

app.get('/ping', function(req, res) {
  res.send('pong');
})

app.get('/getPoll', function(req, res) {
  const pollID = req.query.pollID;
  res.send(`from service.. your poll id: ${pollID}`);
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/");
})


var port=Number(process.env.PORT || 5000);
app.listen(port);
console.log('poll app running on port: '+port);
