import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense, useState, useContext } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import HomeContent from './components/home/home'

import './public/css/normalize.css'
import './public/css/scrollbars.scss'
import './public/css/typography.scss'
import './global.scss'
import packageJson from '../package.json'

import styles from './app.module'
import SvgImg from './components/common/svgIcon/svgIcon'

const App = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerIconContainer}>
          <SvgImg image="CatalystLogo" />
        </div>
        <div className={styles.headerTextContainer}>
          <h3>
            React <strong>Catalyst</strong>
            <sup>
              <i>
                <small> v.</small>
                {packageJson.version}
              </i>
            </sup>
          </h3>
        </div>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={HomeContent} />
        </Switch>
      </main>
      <footer className={styles.footer}>
        <SvgImg image="PerpetualSummer" />
        <NavLink to={'/'}>Perpetual Summer Ltd.</NavLink>
        <NavLink to={'/junk'}>Documentation</NavLink>
      </footer>
    </article>
  )
}

export default hot(App)
