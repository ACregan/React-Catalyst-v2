import React, { Suspense, useState } from 'react'

//Global SCSS import (no classname transforms)
import './global.scss'
//SCSS Modules import
import styles from './app.module'

const App = () => {
  const [myHook, setMyHook] = useState('InitialState')
  const [dimentionalPortal, setDimentionalPortal] = useState(false)

  const AnotherDimention = React.lazy(() =>
    import('./components/anotherDimention')
  )

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

      <p
        onClick={() => {
          setDimentionalPortal(true)
        }}
      >
        {dimentionalPortal ? (
          <Suspense fallback={<div>Loading...</div>}>
            <AnotherDimention />
          </Suspense>
        ) : (
          `I will take you to another dimention, CLICK ME!`
        )}
      </p>
    </>
  )
}

export default App
