var express = require('express');
var app = express( );



var data=[{channelnum:'102'},{service1:'game'}];
app.get('/api/vsoa/services',function(req,res){
    res.json(data);

});

app.listen(3000);
console.log('server is listening');
