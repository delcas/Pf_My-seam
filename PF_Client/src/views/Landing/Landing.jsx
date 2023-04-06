import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
import BackgroundVideo from "../../assets/images/MySeamVideo.mp4"
import { getUserByEmail, getUsers } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const Landing = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, user}= useAuth0();
  console.log(user, isAuthenticated);

  if (isAuthenticated){
    console.log("Entro a este condicional");
    const post={
      name:user.name,
      email: user.email,
      username: user.nickname,
      image: user.picture
    }
   axios.post("/users", post);
   console.log(post);
   dispatch(getUserByEmail(user.email));
  }

  



  return (
    <div className={styles.containerLanding}>
      <video className={styles.landingVideo} autoPlay muted id="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <Link to='/home'>
        <button className={styles.buttonToHome} onClick={()=>dispatch(getUsers())}>Go HomePage</button>
      </Link>
    </div>
  )
}
