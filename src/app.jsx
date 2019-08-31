import React, { lazy, Suspense, useState } from 'react'

//Global SCSS import (no classname transforms)
import './global.scss'
//SCSS Modules import
import styles from './app.module'

const App = () => {
  const [dimentionalPortal, setDimentionalPortal] = useState(false)
  const [myHook, setMyHook] = useState('InitialState')

  const AnotherDimention = lazy(() => import('./components/anotherDimention'))

  return (
    <>
      <p
        onClick={() => {
          setMyHook('Updated')
        }}
        className={styles.red}
      >
        {`CLICK ME: Hook State is ${myHook}`}
      </p>

      <div>
        {dimentionalPortal ? (
          <Suspense fallback={<div>Loading...</div>}>
            <AnotherDimention />
          </Suspense>
        ) : (
          <p
            onClick={() => {
              setDimentionalPortal(true)
            }}
          >
            {`I will take you to another dimention, CLICK ME!`}
          </p>
        )}
      </div>
    </>
  )
}

export default App
