import React from 'react'
import ReactDOM from 'react-dom'

import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'

import Home from './pages/home'


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Home)

if (module.hot) {
  module.hot.accept('./pages/home', () => { render(Home) })
}
