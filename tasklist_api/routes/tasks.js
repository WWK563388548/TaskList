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

router.post("/", function(req, res){
    db.task.create(req.body)
    .then(function(newTask){
        // The status 201 means that new data has been created
        res.status(201).json(newTask);
    })
    .catc(function(err){
        res.send(err);
    });
});

module.exports = router;