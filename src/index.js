import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import React from 'react'
import registerServiceWorker from 'poi-preset-sw-precache/register-service-worker'

import { season, year } from './util'
import App from './components/App'
import NoMatch from './components/NoMatch'
import reducers from './reducers'

import './index.sss'

const thunk = store => {
  const dispatch = store.dispatch
  const getState = store.getState

  return next => action => {
    if (typeof action === 'function') return action(dispatch, getState)
    return next(action)
  }
}
const logger = createLogger()
const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
)

const Render = () => render(
  <Provider store={store}>
    <AppContainer>
      <Router className='App'>
        <Switch>
          {/* Redirect homepage to current season */}
          <Route exact path='/' render={() => (
            <Redirect to={`/${year()}/${season()}`} />
          )} />
          {/* Redirect fall to autumn */}
          <Route path='/:year/fall' render={({match}) => (
            <Redirect to={`/${match.params.year}/autumn`} />
          )} />
          <Route path='/:year/:season' component={App} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

Render()

if (module.hot) {
  module.hot.accept('./components/App', () => { Render() })
}

registerServiceWorker()
