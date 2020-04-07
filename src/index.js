// WEB BUILD Entry point
// Used for both 'dev' mode and 'production' mode builds
import React from 'react'
import { render } from 'react-dom'
import App from './app'

// REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()

const basenameVar = process.env.NODE_ENV == 'production' ? '/projects/catalyst2/' : '/'

render(
  <Provider store={store}>
    <BrowserRouter basename={basenameVar}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('application')
)
