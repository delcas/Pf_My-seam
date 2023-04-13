import React from 'react'
import { NavBar } from "../NavBar/NavBar";
import { FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 // import { FaYarn } from 'react-icons/fa'; // para usar el icono de lana
 import { IoMdCut } from 'react-icons/io'; // para usar el icono de tijeras
import styles from './Iconos.module.css';


export const Iconos = () => {
  return (
      <div>
        <NavBar /> 
    
      <div className={styles.container}>
         <div className={styles.title}>
              <h3>¡Hola! My Seam te da la bienvenida!
               
          ¿Podrias indicarnos que vas a publicar?</h3>
        </div>

       <div className={styles.icono1}>
              <Link to="/createProduct">
                <FaTshirt className={styles.producto} title="Click aquí para publicar un producto"/>
                <span className={styles.spanes} title="Click aquí para publicar un producto">Productos</span>
              </Link>
       </div>

      <div className={styles.icono2}>
          <Link to="/createService">
            <IoMdCut className={styles.servicio} title="Click aquí para publicar un servicio"/>
            <span className={styles.spanes} title="Click aquí para publicar un servicio">Servicios</span>
          </Link>
      </div>
     </div>
    </div>

      
      
  )
}
