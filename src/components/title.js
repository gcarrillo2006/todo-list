import React, { Component } from 'react'
import Button from 'antd/lib/button';
import '../App.css';

export default class title extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo list <span><Button className={{ float: "right" }} type="primary">+</Button></span></h1>     
      </div>
    )
  }
}
