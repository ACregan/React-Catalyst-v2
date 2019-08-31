import React from 'react'

import humanoid from '../static/images/Anon.jpg'
import humanoidInMotion from '../static/videos/SampleVideo_360x240_1mb.mp4'

import styles from './anotherDimention.module'

const obj = {
  foo: {
    bar: {
      baz: 'BAZZY BAZ BAZ!',
    },
  },
}
const baz = obj?.foo?.bar?.baz
console.log(baz)

const AnotherDimention = () => {
  return (
    <>
      <img src={humanoid} />
      <h3 className={styles.eyeMeltingMagenta}>
        YOU ARE NOW IN ANOTHER DIMENTION!
      </h3>
      <video width="360" height="240" controls>
        <source src={humanoidInMotion} type="video/mp4"></source>
      </video>
    </>
  )
}

export default AnotherDimention
