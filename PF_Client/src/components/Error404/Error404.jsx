import React from 'react'
import styles from './Error404.module.css'
import { Link } from 'react-router-dom'
import image404 from '../../assets/images/404.png'

export const Error404 = () => {
  return (
    <div className={styles.containerError}>
      <h1>Error 404</h1>
      <p>Esta página no se encuentra disponible en estos momentos.</p>
      <p>Disculpa las molestias.</p>
      <img className={styles.image404} src={image404} alt="404" />
      <Link to= "/home">
        <button>Página principal</button>
      </Link>
    </div>
  )
}
