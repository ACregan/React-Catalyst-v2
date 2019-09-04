import React, { lazy, Suspense, useState } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import HomeContent from './components/home/home'
import JunkContent from './components/junk/junk'

import './public/css/normalize.css'
import './public/css/typography.scss'
import './global.scss'

import styles from './app.module'

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
        <Route exact path="/" component={HomeContent} />
        <Route path="/junk" component={JunkContent} />
      </Switch>
    </main>
    <footer className={styles.footer}>
      <NavLink to={'/'}>HOME</NavLink>
      <NavLink to={'/junk'}>JUNK</NavLink>
    </footer>
  </article>
)

export default App
