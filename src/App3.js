import React from 'react';
import ReactDOM from 'react-dom';

export default class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: 'red' };
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}
