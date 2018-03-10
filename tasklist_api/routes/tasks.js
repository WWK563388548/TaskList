var express = require("express");
var router = express.Router();
var db = require("../models");

// The get route
router.get("/", function(req, res){
    db.Task.find().then(function(tasks){
        res.json(tasks);
    }).catch(function(err){
        res.send(err);
    });
});

// The post route
router.post("/", function(req, res){
    db.Task.create(req.body).then(function(newTask){
        // The status 201 means that new data has been created
        res.status(201).json(newTask);
    }).catch(function(err){
        res.send(err);
    });
});

module.exports = router;