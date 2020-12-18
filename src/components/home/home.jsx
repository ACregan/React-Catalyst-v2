import React, { Fragment, lazy, Suspense, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Cube from './cube/cube'
import styles from './home.module.scss'
import SvgImg from '../common/svgIcon/svgIcon'
import packageJson from '../../../package.json'
import Accordion from './accordion/accordion'

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState('Introduction')

  const accordionClick = (id) => {
    id === activeAccordion ? setActiveAccordion('') : setActiveAccordion(id)
  }

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
        <div className={styles.cubeComponentContainer}>
          <Cube />
          <h1>
            <strong>Lets Develop!</strong>
          </h1>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}></div>
          <div className={styles.accordionContainer}>
            {/* Create and AccordionWrapper component that maps the following to its children:
                const [activeAccordion, setActiveAccordion] = useState('Introduction')

                const accordionClick = (id) => {
                  id === activeAccordion ? setActiveAccordion('') : setActiveAccordion(id)
                }
          
              https://frontarm.com/james-k-nelson/passing-data-props-children/#cloning-props-onto-children
           */}
            <Accordion
              summary="Introduction"
              clickFunction={accordionClick}
              id="Introduction"
              activeAccordion={activeAccordion}
            >
              <p>
                React Catalyst is a fully featured web application development environment designed
                to enable the rapid production and bundling of React.js based web applications and
                websites.
              </p>
            </Accordion>
            <Accordion
              summary="Built-in Features"
              clickFunction={accordionClick}
              id="Features"
              activeAccordion={activeAccordion}
            >
              <p>React Router</p>
              <p>SCSS Support</p>
              <p>Viewport Information Helper</p>
              <p>Optimised Production Build Process</p>
            </Accordion>
            <Accordion
              summary="Getting Started"
              clickFunction={accordionClick}
              id="GettingStarted"
              activeAccordion={activeAccordion}
            >
              <p>Requirements:</p>
              <ul>
                <li>Git</li>
                <li>Node & NPM</li>
              </ul>
              <p>
                Clone React Catalyst by creating a directory and running the following command:{' '}
                <br />
                <code>git clone whateverTrevor .</code>
              </p>
              <p>
                Install the dependancies:
                <br />
                <code>npm install</code>
              </p>
              <p>
                Start the development environment with:
                <br />
                <code>npm start</code>
              </p>
              <p>
                Once you have written your app you can produce a build with the following command:
                <br />
                <code>npm run build</code>
              </p>
            </Accordion>
            <Accordion
              summary="Documentation"
              clickFunction={accordionClick}
              id="Documentation"
              activeAccordion={activeAccordion}
            >
              <p>
                Full Documentation of the built-in features and capabilities of React Catalyst can
                be found here.
              </p>
              <p></p>
            </Accordion>
            <Accordion
              summary="Add-on Modules"
              clickFunction={accordionClick}
              id="AddonModules"
              activeAccordion={activeAccordion}
            >
              <p>
                You can use <b>React Catalyst UI</b> to to further ease and aid the development
                process. This library provides a number of configurable react components such as
                Input Fields, Table components, Layout components and much more. For a full list of
                the available components, click Here.
              </p>
            </Accordion>
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
