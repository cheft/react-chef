import React, { Component } from 'react'

export default class Topic extends Component {
  updatePost() {
    this.state.data.info.bio += '，那我就开始剽窃了...'
    this.forceUpdate()
  }

  render() {
    const req = this.props.req
    this.state = {data: this.props.data || window.__INITDATA}
    return (
      <div>
        <h1>Topic - {req.query.name || ''} - {req.params.id} </h1>
        <div>发表于22222：{this.state.data.info.updated_at} | <button onClick={this.updatePost.bind(this)}>更新文章</button></div>
        <p>
          {this.state.data.info.bio}
        </p>
      </div>
    )
  }
}
