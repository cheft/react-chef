import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'

import ReactRouter from './react-router'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(ReactRouter)

if (module.hot) {
  module.hot.accept('./react-router', () => { render(ReactRouter) })
}
