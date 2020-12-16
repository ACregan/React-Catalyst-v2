import React from 'react'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.cubeContainer}>
      <div className={styles.cube}>
        <div className={styles.front}></div>
        <div className={styles.back}></div>
        <div className={styles.right}></div>
        <div className={styles.left}></div>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  )
}

export default Home
