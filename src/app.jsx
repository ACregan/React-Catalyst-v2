import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeContent from './components/home/home'

import './public/css/normalize.css'
import './public/css/scrollbars.scss'
import './public/css/typography.scss'
import './global.scss'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeContent />} />
    </Routes>
  )
}

export default hot(App)
