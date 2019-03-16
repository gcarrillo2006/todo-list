import React, { Component } from 'react'

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData: false,
        }
        this.onTaskChange = this.onTaskChange.bind(this);
    }
    onTaskChange(event) {
        const { value } = event.target;
        if (value.trim().length > 0) {
            this.setState({ hasData: true });
        } else {
            this.setState({ hasData: false });
        }
    }
    render() {
        const { hasData } = this.state;
        return (
            <div>
                <label htmlFor="firstName">Task:</label>
                <input name="task" onChange={this.onTaskChange} />
                <button disabled={!hasData}>Add</button>
                <button>Cancel</button>
            </div>
        )
    }
}
