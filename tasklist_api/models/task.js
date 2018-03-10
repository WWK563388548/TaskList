var mongoose = require("mongoose");

// String name
// Boolean completed
// Date created_date
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

var Task = mongoose.model("Task", taskSchema);
module.exports = Task;

