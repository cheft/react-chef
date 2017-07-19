import React, { Component } from 'react'

export default class About extends Component {
  render() {
    var data = this.props.data || window.__INITDATA
    return (
      <div>
        <h1>About Cheft</h1>
        <h5>{data.platform} - {data.date}</h5>
      </div>
    )
  }
}
