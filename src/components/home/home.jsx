import React from 'react'
import Cube from './cube/cube'
import styles from './home.module.scss'
import SvgImg from '../common/svgIcon/svgIcon'
import packageJson from '../../../package.json'

const Home = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerIconContainer}>
          <SvgImg image="CatalystLogo" />
        </div>
        <div className={styles.headerTextContainer}>
          <h3>
            React <strong>Catalyst </strong>
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
        <div className={styles.cubeComponentContainer}>
          <Cube />
          <h1>
            <strong>Lets Develop!</strong>
          </h1>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <h6>Welcome</h6>
            <p>
              <em>
                React <strong>Catalyst </strong>
              </em>
              is a fully featured web application development environment designed to enable the
              rapid production and bundling of React.js based web applications and websites.
            </p>

            <h6>Features</h6>
            <ul>
              <li>React Router</li>
              <li>SCSS Support</li>
              <li>Viewport Information Helper</li>
              <li>Optimised Production Build Process</li>
            </ul>

            <h6>Documentation</h6>
            <p>
              Full Documentation of the built-in features and capabilities of React Catalyst can be
              found{' '}
              <a
                href="https://react-catalyst.perpetualsummer.ltd/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className={styles.rightContainer}>
            <h6>Quick Start</h6>
            <p>
              To start building your application simply replace the <code>HomeContent </code>
              component in the <code>src/app.jsx</code> file with your own components. The
              <code>src/home/home.jsx</code> component can be deleted once replaced, it is simply
              the code for this landing page and can be safely removed.
            </p>

            <h6>React Catalyst UI</h6>
            <p>
              You can use <b>React Catalyst UI</b> to to further ease and aid the development
              process. This library provides a number of configurable react components such as Input
              Fields, Table components, Layout components and much more. For a full list of the
              available components, click Here.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href={'https://perpetualsummer.ltd'}>
          <SvgImg image="PerpetualSummer" />
        </a>
      </footer>
    </article>
  )
}

export default Home
