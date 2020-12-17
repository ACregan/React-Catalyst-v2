import React from 'react'
import Cube from './cube/cube'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cubeComponentContainer}>
        <Cube />
      </div>
      <div className={styles.contentContainer}>
        <h1>
          <strong>Lets Develop!</strong>
        </h1>
        <h5>I am also some content, pleased to meet you.</h5>
        <p>Well, isnt this nice. All us content elements all in one place!</p>
      </div>
    </div>
  )
}

export default Home
