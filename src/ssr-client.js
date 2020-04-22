import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import App from './app'

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('application'))
  })
}
