// WEB BUILD Entry point
// Used for both 'dev' mode and 'production' mode builds
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './app'

// REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom'

const basenameVar = process.env.NODE_ENV == 'production' ? '/projects/catalyst2/' : '/'

render(
  <BrowserRouter basename={basenameVar}>
    <App />
  </BrowserRouter>,
  document.getElementById('application')
)
