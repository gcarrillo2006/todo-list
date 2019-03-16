import React, { Component } from 'react'
import Button from 'antd/lib/button';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [{ name: "Hola", status: "Mundo" }, { name: "Patricio", status: "Estrella" }],
        }
        //this.removeFromList = this.removeFromList.bind(this);
    }
    removeFromList(key) {
        const { taskList } = this.state;
        const newList = [...taskList];
        newList.splice(key, 1);
        this.setState({ taskList: newList });
        console.log(newList);
    }
    renderTaskList() {
        const { taskList } = this.state;
        return taskList.map((valor, key) => {
            return (
            <tr key={key}>
                <td><label>{valor.name}</label></td>
                <td><Button>{valor.status}</Button></td>
                <td><Button onClick={this.removeFromList.bind(this, key)}>X</Button></td>
            </tr>
            )
        });
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.renderTaskList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
