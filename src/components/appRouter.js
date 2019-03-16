import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './title';
import Task from './task';
import TaskList from './taskList';

export default class appRouter extends Component {
  render() {
    return (
      <div>
            <Router>
                <Switch>
                    <Route path="/" component={Title} />
                    <Route path="/task" component={Task} />
                    <Route path="/task-list" component={TaskList} />
                </Switch>
            </Router>
      </div>
    )
  }
}
