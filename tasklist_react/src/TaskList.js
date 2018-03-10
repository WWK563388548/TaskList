import React, {Component} from 'react';
const APIURL = '/api/tasks';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
          tasks: []
        }
      }
    
      componentWillMount() {
        this.loadTasks();
      }
    
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

    render(){
        return (
            <h1>工作任务</h1>
        )
    }
}

export default TaskList; 