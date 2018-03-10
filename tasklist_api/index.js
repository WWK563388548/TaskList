var express = require("express");
var catMe = require("cat-me");
var app = express();

var taskRoutes = require("./routes/tasks");

app.get("/", function(req, res){
    res.send("Root routes");
});

app.use("/api/tasks", taskRoutes);

app.listen("8008", function(){
    console.log("The task api has been started");
    console.log(catMe());
});