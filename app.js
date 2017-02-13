var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.status(400);
  res.send("Holaxx");
});

app.listen(3000);
//holahhh


// j