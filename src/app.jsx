import React, { lazy, Suspense, useState } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

//import HomeContent from './components/home/home'
//import JunkContent from './components/junk/junk'

import './public/css/normalize.css'
import './public/css/typography.scss'
import './global.scss'

import styles from './app.module.scss'

const HomeContentAsync = Loadable({
  loader: () => import('./components/home/home'),
  loading() {
    return <h1>LOADABLE MOTHERFUCKER - Home</h1>
  },
})
const JunkContentAsync = Loadable({
  loader: () => import('./components/junk/junk'),
  loading() {
    return <h1>LOADABLE MOTHERFUCKER - Junk</h1>
  },
})

const App = () => (
  <article className={styles.container}>
    <nav className={styles.sidebarNav}>
      <p>nav</p>
    </nav>
    <header className={styles.header}>
      <h1>
        <strong>React</strong> Catalyst <sup>v.2</sup>
      </h1>
    </header>
    <main className={styles.application}>
      <Switch>
        <Route exact path="/" component={HomeContentAsync} />
        <Route path="/junk" component={JunkContentAsync} />
      </Switch>
    </main>
    <footer className={styles.footer}>
      <NavLink to={'/'}>HOME</NavLink>
      <NavLink to={'/junk'}>JUNK</NavLink>
    </footer>
  </article>
)

export default App
