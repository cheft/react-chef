import React, { Component } from 'react'
import HelloMessage from '../components/hello-message'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {time: 0}
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) =>{time: prevState.time++})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>Home222</h1>
        <div style={{color: '#D2060C'}}>{this.state.time}</div>
        <HelloMessage name="cheft" />
      </div>
    )
  }
}
