import React, { Component } from 'react'

export default class Test extends Component {

  render() {
    return (
      <div>
        <h1>2222 Count: {this.props.value}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}