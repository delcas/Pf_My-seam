import React from 'react'
import styles from './Error404.module.css'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className={styles.containerError}>
      <h1>Error 404</h1>
      <p>Esta página no se encuentra disponible en estos momentos.</p>
      <p>Disculpa las molestias.</p>
      <Link to= "/home">
        <button>Página principal</button>
      </Link>
    </div>
  )
}
