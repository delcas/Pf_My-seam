import React from 'react'
import styles from './Checkout.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
// Auth0
import { useAuth0 } from '@auth0/auth0-react';

export const Checkout = () => {
   // Info de Auth0
   const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      <NavBar />
      {/* ¿Tienes una cuenta? */}
      <div className={isAuthenticated ? styles.hide : styles.LogIn}>
        <p>¿Tienes una cuenta?</p>
        <a onClick={loginWithRedirect}><u>Inicia sesión aquí</u> para finalizar tus compras con mayor rapidez.</a>
      </div>
    </div>
  )
}
