import startApp from './minrouter'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

// startApp()

// if (module.hot) {
//   module.hot.accept('./minrouter', () => {
//     startApp()
//   })
// }

import configureStore from './configureStore'
import { Provider, connect } from 'react-redux'
import Test from './pages/test'

const store = configureStore()


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

var App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)

var render = function() {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./pages/test', () => {
    render()
  })
}
