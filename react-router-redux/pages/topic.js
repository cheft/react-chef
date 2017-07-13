import React, { Component } from 'react'

export default class Topic extends Component {
  render() {
    var id = this.props.params ? this.props.params.id : '0'
    return (
      <div>
        <h1>Topic - {id}</h1>
      </div>
    )
  }
}
