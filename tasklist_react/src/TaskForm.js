import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ''};    
        this.handlChange = this.handlChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handlChange(e){
        this.setState({
           inputValue: e.target.value
        });
    }
    handleSubmit(){
        this.props.addTask(this.state.inputValue);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handlChange} />
                <button onClick={this.handleSubmit}>添加新工作</button>
            </div>
        )
    }
}

export default TaskForm;