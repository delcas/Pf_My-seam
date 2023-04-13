import React from 'react';
import styles from './BotonIrInicio.module.css';
import botonArriba from '../../images/circle-up-solid.svg'
import { Link } from "react-router-dom";


export const BotonIrInicio = () => {

  // Posicionarse en el inicio de la página con un botón
  const irArriba = (pxPantalla) => {
    window.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop;
      let botonArriba = document.getElementById('botonArriba');
      if(botonArriba) {
        if(scroll > pxPantalla) {
          botonArriba.className = styles.botonArriba
        } else {
            botonArriba.className = styles.hideBotonArriba
          }
      }
    })
  };

  irArriba(500);

  return (
    <div>
      <Link hrefLang="#home">
        <img 
          src={botonArriba} 
          id='botonArriba' 
          className={styles.hideBotonArriba}  
          width='28px' 
          height='28px' 
          alt='BotonArriba'
        />        
      </Link>
    </div>
  )
}
