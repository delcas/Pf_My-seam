import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'

export const Landing = () => {
  return (
    <div className={styles.containerLanding}>
      <Link to='/home'>
        <button className={styles.buttonToHome}>Go HomePage</button>
      </Link>
    </div>
  )
}
