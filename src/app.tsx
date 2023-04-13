import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeContent from './components/home/home'

import './public/css/normalize.css'
import './public/css/scrollbars.scss'
import './public/css/typography.scss'
import './global.scss'

const App = ():JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
    </Routes>
  )
}

export default App
