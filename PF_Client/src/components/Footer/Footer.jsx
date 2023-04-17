import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Footer = () => {
  // Me traigo los estados del reducer 
  const allProducts = useSelector((state) => state.products);

  return (
    <div className={allProducts.length > 0 ? '' : styles.hideFooter}>
  <footer className="d-flex flex-column align-items-center justify-content-center">
    
    <div className={styles.containerFooterIcons}>
      {/* Linkedin */}
      <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </Link>
      {/* Github */}
      <Link to="https://github.com/delcas/Pf_My-seam" target="_blank" rel="noopener noreferrer" >
        <i className="bi bi-github"></i>
      </Link>
      {/* Correo */}
      <Link to="mailto:" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-envelope"></i>
      </Link>
    </div>
    {/* Derechos de autor */}
    <div className={styles.footerDerechosAutor}>
      Creado por Equipo-10A (2023) 
      <p className='text-center'>Todos los derechos reservados &#169;</p>
    </div>
  </footer>
</div>







  )
}