import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeContent from './components/home/home'

import './public/css/normalize.css'
import './public/css/scrollbars.scss'
import './public/css/typography.scss'
import './global.scss'

import styles from './app.module'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContent} />
    </Switch>
  )
}

export default hot(App)
