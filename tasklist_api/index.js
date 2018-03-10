var express = require("express");
var catMe = require("cat-me");
var app = express();

app.get("/", function(req, res){
    res.send("one String");
});

app.listen("8008", function(){
    console.log("The task api has been started");
    console.log(catMe());
});