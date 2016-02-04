var express = require('express');
var app = express();

var PORT = 8080;

app.get('/', function(req, res){
	res.send('ebin');
});

app.listen(8080, function(){
	console.log("server listening on port: "+PORT);
});
