import React from 'react'
import styles from './cube.module.scss'
import SvgIcon from '../../common/svgIcon/svgIcon'

const Cube = (): JSX.Element => {
  return (
    <div className={styles.cubeContainer}>
      <div className={styles.cube}>
        <div className={styles.front}>
          <SvgIcon image={'webpack'} />
        </div>
        <div className={styles.back}>
          <SvgIcon image={'react'} />
        </div>
        <div className={styles.right}>
          <SvgIcon image={'javascript'} />
        </div>
        <div className={styles.left}>
          <SvgIcon image={'sass'} />
        </div>
        <div className={styles.top}>
          <SvgIcon image={'css3'} />
        </div>
        <div className={styles.bottom}>
          <SvgIcon image={'html5'} />
        </div>
      </div>
    </div>
  )
}

export default Cube
