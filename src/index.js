// WEB Entry point
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

import './global.scss'

render(<App />, document.getElementById('application'))
