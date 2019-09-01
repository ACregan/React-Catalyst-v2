// WEB BUILD Entry point
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

// REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom'

const basenameVar =
  process.env.NODE_ENV == 'development' ? '/' : '/projects/catalyst2/'

render(
  <BrowserRouter basename={basenameVar}>
    <App />
  </BrowserRouter>,
  document.getElementById('application')
)
