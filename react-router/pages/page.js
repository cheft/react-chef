import React, { Component } from 'react'

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {pathname: location.pathname}
  }

  componentWillUpdate() {
    this.state.pathname = location.pathname
  }

  componentDidMount() {
    this.props.router.proxyLinks(document.querySelectorAll('a.link'))
  }

  render() {
    return (
      <div>
        <ul>
          <li><a className="link" style={{color: (this.state.pathname === '/' ? '#D2060C' : '#000')}} href="/">Home</a></li>
          <li><a className="link" style={{color: (this.state.pathname === '/about' ? '#D2060C' : '#000')}} href="/about">About</a></li>
          <li><a className="link" style={{color: (this.state.pathname === '/topics-123456' ? '#D2060C' : '#000')}} href="/topics-123456">Topics</a></li>
        </ul>

        <hr/>

        {this.props.content}
      </div>
    )
  }
}
