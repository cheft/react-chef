import React, { Component } from 'react'

export default class Topic extends Component {
  render() {
    const req = this.props.req
    console.log(req.params, req.query)
    return (
      <div>
        <h1>Topic - {req.params.id} - {req.query.name || ''}</h1>
      </div>
    )
  }
}
