var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello wo");
});

app.listen(3000);
//holahhh


// j