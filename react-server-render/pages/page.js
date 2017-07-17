import React, { Component } from 'react'

export default class Page extends Component {

  componentDidMount() {
    this.props.router.proxyLinks(document.querySelectorAll('a.link'))
  }

  render() {
    return (
      <div>
        <ul>
          <li><a className="link" style={{color: (this.props.pathname === '/' ? '#D2060C' : '#000')}} href="/">Home</a></li>
          <li><a className="link" style={{color: (this.props.pathname === '/about' ? '#D2060C' : '#000')}} href="/about">About</a></li>
          <li><a className="link" style={{color: (this.props.pathname === '/topics-123456' ? '#D2060C' : '#000')}} href="/topics-123456?name=cheft">Topics</a></li>
        </ul>

        <hr/>

        {this.props.content}
      </div>
    )
  }
}
