var express = require("express");
var app = express();
var port = 3000;

app.get("/", function (req, res)
{
    res.send('<a href="http://www.naver.com">go to naver</a>');

});

app.get("/hello", function (req, res) {
    res.send("Hello aa14");
});

app.get("/comsi", function (req, res){
    res.send("Hello Comsi!");
});
app.get("/aa14", function (req, res){
    res.send('Hello aa14,comsi! My first express server!!!');
});


var server = app.listen(port,function(){
    console.log("Listening on port %d", server.address().port);
    
});