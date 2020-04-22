import React, { useState } from 'react'
import Loadable from 'react-loadable'

//SCSS Modules import
import styles from './junk.module.scss'

const Junk = () => {
  const [dimentionalPortal, setDimentionalPortal] = useState(false)
  const [myHook, setMyHook] = useState('InitialState')

  // const AnotherDimention = lazy(() =>
  //   import('../anotherDimention/anotherDimention')
  // )
  const AnotherDimentionAsync = Loadable({
    loader: () => import('../anotherDimention/anotherDimention'),
    loading() {
      return <h1>LOADABLE MOTHERFUCKER - Home</h1>
    },
  })

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
          <AnotherDimentionAsync />
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

export default Junk
