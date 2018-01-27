import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from 'poi-preset-sw-precache/register-service-worker';
import {AppContainer} from 'react-hot-loader';
import './index.sss'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}

registerServiceWorker();
