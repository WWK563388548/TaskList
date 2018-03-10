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

// show route
router.get("/:taskId", function(req, res){
   db.Task.findById(req.params.taskId)
   .then(function(foundTask){
       res.json(foundTask);
   }).catch(function(err){
       res.send(err);
   });
});

// Update route
router.put("/:taskId", function(req, res){
    // The "new: true" returns new updated value
    db.Task.findOneAndUpdat({_id: req.params.taskId}, req.body, {new: true})
    .then(function(task){
        res.json(task);
    }).catch(function(err){
        res.send(err);
    });
});

// delete route
router.delete("/:taskId", function(req, res){
    db.Task.remove({_id: req.params.taskId})
    .then(function(){
        res.json({message: "删除任务!"});
    }).catch(function(err){
        res.send(err);
    });
});

module.exports = router;