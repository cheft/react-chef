import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'

import Router from './minrouter'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Router)

if (module.hot) {
  module.hot.accept('./minrouter', () => { render(Router) })
}
