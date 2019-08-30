import React from 'react'

import humanoid from '../static/images/Anon.jpg'

import styles from './anotherDimention.module'

const AnotherDimention = () => {
  return (
    <>
      <img src={humanoid} />
      <h3 className={styles.eyeMeltingMagenta}>
        YOU ARE NOW IN ANOTHER DIMENTION!
      </h3>
    </>
  )
}

export default AnotherDimention
