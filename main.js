/*var http = require('http');
var mongo = require('./mongoclient/mongo');

http.createServer(function (req, res) {
    console.log('starting');
    mongo.init();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

mongo.init();
mongo.createTable();
var myobj = {
  name: 'Rajeeva Acharya',
  spouse: 'Rachitha'
};
mongo.createRecord(myobj);
*/

var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

app.use('/',router);

router.get('/',function(req, res){
  res.sendFile(path + 'index.html');
});

router.get('/product',function(req, res){
  res.sendFile(path + 'product.html');
});

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});

app.listen(3000,function(){
  console.log('Server running at Port 3000');
});
