import React, {Component} from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import * as apiCalls from './Api';
const APIURL = '/api/tasks';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
          tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }
    
    componentWillMount() {
        this.loadTasks();
    }
    
    // Load all tasks and displaying them
    // Can reuse this for request other things
    async loadTasks(){
        let tasks = await apiCalls.getTasks();
        this.setState({tasks});
    }

    // Add new tasks and display them
    async addTask(val){
        let newTask = await apiCalls.createTask(val);
        // Display new Task in page
        this.setState({tasks: [...this.state.tasks, newTask]});
    }

    // Delete Task
    async deleteTask(id){
        await apiCalls.removeTask(id); 
        const tasks = this.state.tasks.filter(task => task._id !== id);
        // Display new Task in page
        this.setState({tasks: tasks});
    }

    async toggleTask(task){
        let updatedTask = await apiCalls.updateTask(task);
        const tasks = this.state.tasks.map(t => 
            (t._id === updatedTask._id) ? {...t, completed: !t.completed} : t
        )
        // Display new Task in page
        this.setState({tasks: tasks});
    }

    render(){
       const tasks = this.state.tasks.map((t) => (
           <TaskItem
                key={t._id}
                {...t}
                onDelete = {this.deleteTask.bind(this, t._id)}
                onToggle = {this.toggleTask.bind(this, t)}
           />
       ));
        return (
            <div>
                <h1>工作任务</h1>
                <TaskForm addTask={this.addTask}/>
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default TaskList; 