var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helper/tasks");

// The get and post route
router.route('/')
.get(helpers.getTasks)
.post(helpers.createTask);

router.route("/:taskId")
.get(helpers.getTask)
.put(helpers.updateTask)
.delete(helpers.deleteTask);

module.exports = router;