import React, {Component} from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
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
      loadTasks(){
        fetch(APIURL)
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
    
      }).then(tasks => this.setState({tasks}));
    }

    // Add new tasks and display them
    addTask(val){
        fetch(APIURL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({name: val})
        })
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
      }).then(newTask => {
          // Display new Task in page
          this.setState({tasks: [...this.state.tasks, newTask]})
      });
    }

    // Delete Task
    deleteTask(id){
        const DELETEURL = APIURL + '/' + id;
        fetch(DELETEURL, {
            method: 'delete',
        })
        .then(response => {
            if(!response.ok) {
                if(response.status >= 400 && response.status < 500){
                    return response.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later. Server is not responding..."};
                    throw err;
                }
            }
            return response.json();
      }).then(() => {
          const tasks = this.state.tasks.filter(task => task._id !== id);
          // Display new Task in page
          this.setState({tasks: tasks});
      });
    }

    render(){
       const tasks = this.state.tasks.map((t) => (
           <TaskItem
                key={t._id}
                {...t}
                onDelete = {this.deleteTask.bind(this, t._id)}
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