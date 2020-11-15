var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/jsonData.html');
});

app.post('/xml', function (req, res) {
    res.send(req.body)
});

server.listen(3000, function () {
    console.log('서버가 시작되었습니다.');
});
