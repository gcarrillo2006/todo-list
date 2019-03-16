import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './title';
import Task from './task';
import TaskList from './taskList';

export default class appRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={Title} />
                    <Route path="/task" component={Task} />
                    <Route path="/task-list" component={TaskList} />
                </Router>
            </div>
        )
    }
}
