import React, { Component } from 'react'

export default class HelloMessage extends Component {
  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        {' '}
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}
