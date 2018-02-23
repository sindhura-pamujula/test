var express = require('express');
var bodyParser = require('body-parser');


var app = express( );
//set up view engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));
var data={Name:'sindhura',DriverVersion:'1.0.0',AccountBalance:'50$'};

app.get('/vsoa/api/userinfo',function(req,res){

  res.render('userinfo',{userinfo:data});
});


app.listen(3000);
console.log('server is listening');
