var mongoose = require("mongoose");

// String name
// Boolean completed
// String created_date
var taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can not be blank!"
    },
    completed: {
        type: Boolean,
        dafault: false
    },
    created_date: {
        type: Date,
        default: Date.now()
    }

});

var task = mongoose.model("Task", taskSchema);
module.exports = task;

