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

// CONTEXT
import ViewportContextProvider from './context/viewportContextProvider'

const basenameVar = process.env.NODE_ENV == 'production' ? '/projects/catalyst2/' : '/'
{
  /* <BrowserRouter basename={basenameVar} history={customHistory}> */
}
render(
  <Provider store={store}>
    <BrowserRouter>
      <ViewportContextProvider>
        <App />
      </ViewportContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('application')
)
