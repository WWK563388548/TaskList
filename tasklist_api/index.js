var express = require("express");
var catMe = require("cat-me");
var app = express();
var bodyParser = require("body-parser");

var taskRoutes = require("./routes/tasks");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Root routes");
});

app.use("/api/tasks", taskRoutes);

app.listen("8008", function(){
    console.log("The task api has been started");
    console.log(catMe());
});