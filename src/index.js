import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import registerServiceWorker from 'poi-preset-sw-precache/register-service-worker'

import App from './components/App'
import todoApp from './reducers'

import './index.sss'

let store = createStore(todoApp)

const Render = () => render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

Render()

if (module.hot) {
  module.hot.accept('./components/App', () => { Render() })
}

registerServiceWorker()
