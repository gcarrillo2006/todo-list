import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Title } from './title';

export default class appRouter extends Component {
  render() {
    return (
      <div>
            <Router>
                <React.Fragment>
                    <Route path="/" component={Title} />
                </React.Fragment>
            </Router>
      </div>
    )
  }
}
