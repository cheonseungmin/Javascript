var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

// x-www-form-urlencoded 타입의 post 요청을 파싱해준다.
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/data.html');
});

app.post('/xml', function (req, res) {
    res.send(req.body)
});

server.listen(3000, function () {
    console.log('서버가 시작되었습니다.');
});
