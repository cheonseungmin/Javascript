//fetchServer.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/fetch.html');
});

app.post('/req', function (req, res) {
    res.send(req.body)
});

server.listen(3000, function () {
    console.log('서버가 시작되었습니다.');
});
