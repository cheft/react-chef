import startApp from './minrouter'

startApp()

if (module.hot) {
  module.hot.accept('./minrouter', () => { startApp() })
}
