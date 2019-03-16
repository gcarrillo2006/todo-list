import React, { Component } from 'react'
import Button from 'antd/lib/button';
import '../App.css';

export default class TaskAnt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDescription: "No Description",
            taskStatus: "to-do",
            clicked: 1
        }
        this.onTaskChange = this.onTaskChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus(descriptionText, event){
      console.log("change");
      if (this.state.clicked === 1 ){
          this.setState(state => {
            return {
              clicked: 2, taskStatus: "In Porgress", 
              taskDescription: descriptionText, 
            };
          });
      }
      if (this.state.clicked === 2 ){
        this.setState(state => {
          return {
            clicked: 3, taskStatus: "Done", 
            taskDescription: descriptionText, 
          };
        });
    }
      
    }
    onTaskChange(event) {
        const { value } = event.target;
        console.log(value)
    }
    render() {
        const { taskDescription, taskStatus } = this.state;
        return (
            <div>
                <label htmlFor="TaskDescription">{this.state.taskDescription}   </label>
                <Button onClick={this.changeStatus.bind(this , taskDescription)}>{this.state.taskStatus}</Button>
                <Button type="primary">X</Button>
                <hr></hr>
            </div>
        )
    }
}
