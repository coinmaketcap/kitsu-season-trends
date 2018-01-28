import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import registerServiceWorker from 'poi-preset-sw-precache/register-service-worker'

import App from './components/App'
import NoMatch from './components/NoMatch'
import todoApp from './reducers'
import { season, year } from './util'

import './index.sss'

let store = createStore(todoApp)

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
