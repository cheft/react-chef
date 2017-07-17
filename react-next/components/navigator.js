import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    console.log(Router, 888, req)
  }
  /**
   * 刷新时会报错
   */
  getActive(url) {
    console.log(this.props, 2222);
    var pathname = ''
    if (Router && Router.router) {
      var pathname = Router.router.pathname
    }
    return pathname == url ? 'active' : ''
  }

  render() {
    return <div className="nav">
      <ul>
        <li><Link href={`/index`}><a className={this.getActive('/index')}>趋势贴</a></Link></li>
        <li><Link href={`/post`}><a className={this.getActive('/post')}>贴子榜</a></Link></li>
        <li><Link href={`/user`}><a className={this.getActive('/user')}>用户榜</a></Link></li>
        <li><Link href={`/about`}><a className={this.getActive('/about')}>个人</a></Link></li>
      </ul>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 46px;
          border-bottom: 1px solid rgba(0,0,0,0.15);
          background: #ffffff;
          z-index: 9999;
        }

        ul {
          display: inline-flex;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 42px;
          line-height: 42px;
        }

        a {
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          color: #66757F;
          text-decoration: none;
          padding: 0 8px;
          border-bottom: 1px solid #FFFFFF;
          transition: all .2s ease-in-out;
        }

        a.active, a:hover {
          color: #FAB81E;
          border-bottom: 5px solid #FAB81E
        }
      `}
      </style>

      <style global jsx>{`
        html, body {
          margin: 0;
          padding: 0;
        }

        .container {
          margin-top: 46px;
        }
      `}
      </style>
    </div>
  }
}
