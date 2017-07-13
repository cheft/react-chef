import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 此路由代码可兼容 node，可为 node 中间件
import router from 'minrouter'

router.get('/', function(req, res) {
  res.view('home', req.params)
})

router.get('/about', function(req, res) {
  res.view('about', req.params)
})

router.get('/topics-:id', function(req, res) {
  res.view('topic', req.params)
})

export default class MinRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {pathname: location.pathname}
  }

  componentWillUpdate() {
    this.state.pathname = location.pathname
  }

  componentDidMount() {
    this.handleRouter()
  }

  handleRouter() {
    var _this = this
    
    router.addResMethod('view', function (cname, params) {
      switch (cname) {
        case 'about':
          require.ensure([], function(require) {
            const About = require('./pages/about').default
            ReactDOM.render(<About />, _this.refs.content)
          })
          break

        case 'topic':
          require.ensure([], function(require) {
            const Topic = require('./pages/topic').default
            ReactDOM.render(<Topic params={params} />, _this.refs.content)
          })
          break
        default:
          require.ensure([], function(require) {
            const Home = require('./pages/home').default
            ReactDOM.render(<Home />, _this.refs.content)
          })
          break
      }
      _this.forceUpdate()
    })

    router.proxyLinks(document.querySelectorAll('a.link'))
    router()
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

        <div ref="content"></div>
      </div>
    )
  }
}
