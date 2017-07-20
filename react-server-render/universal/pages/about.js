import React, { Component } from 'react'

export default class About extends Component {
  render() {
    var data = this.props.data || window.__INITDATA
    return (
      <div>
        <img src={data.info.avatar_url} style={{width: '100px', height: '100px'}}/>
        <h1>{data.info.name}</h1>
        <h5>{data.info.location}</h5>
      </div>
    )
  }
}
