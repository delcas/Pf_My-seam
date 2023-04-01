import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
import BackgroundVideo from "../../assets/images/MySeamVideo.mp4"

export const Landing = () => {
  return (
    <div className={styles.containerLanding}>
      <video className={styles.landingVideo} autoPlay muted id="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <Link to='/home'>
        <button className={styles.buttonToHome} onClick={()=>dispatch()}>Go HomePage</button>
      </Link>
    </div>
  )
}
