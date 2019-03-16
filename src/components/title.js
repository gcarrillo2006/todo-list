import React, { Component } from 'react'
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom';
import '../App.css';

export default class title extends Component {
  render() {
    return (
      <div>
        <label htmlFor="title">Todo list</label>
        <Link style={{ float: "right", padding: 20 }} to="/task"><Button type="primary">+</Button></Link>
      </div>
    )
  }
}
