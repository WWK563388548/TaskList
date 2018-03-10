var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
    db.task.find()
    .then(function(tasks){
        res.json(tasks);
    })
    .catch(function(err){
        res.send(err);
    });
});

module.exports = router;