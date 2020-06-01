var express = require('express');
var app = express();


//Ruta a nuestra raiz
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log(' aca estoy: http://localhost:3000/');
});