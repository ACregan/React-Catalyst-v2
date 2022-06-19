// WEB BUILD Entry point
// Used for both 'dev' mode and 'production' mode builds
import React from 'react'
import { createRoot } from 'react-dom/client'

// APPLICATION ROOT COMPONENT
import App from './app'

// REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()

// CONTEXT
import ViewportContextProvider from './context/viewportContextProvider'

// RENDER ROOT COMPONENT
const container = document.getElementById('application')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ViewportContextProvider>
        <App />
      </ViewportContextProvider>
    </BrowserRouter>
  </Provider>
)
