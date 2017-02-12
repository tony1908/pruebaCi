var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hola");
});

app.listen(3000);
//holahhh


// j