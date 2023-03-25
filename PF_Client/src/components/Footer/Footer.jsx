import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';

export const Footer = () => {
  // Me traigo los estados del reducer 
  const allProducts = useSelector((state) => state.products);

  return (
    <div className={allProducts.length > 0 ? '' : styles.hideFooter}>
      <footer className="d-flex flex-column align-items-center justify-content-center">
        <div className={styles.containerFooterIcons}>
          {/* Linkedin */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          {/* Github */}
          <a href="https://github.com/delcas/Pf_My-seam" target="_blank" rel="noopener noreferrer" >
            <i className="bi bi-github"></i>
          </a>
          {/* Correo */}
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        {/* Derechos de autor */}
        <div className={styles.footerDerechosAutor}>
          Created by Team-10A (2023) 
          <p className='text-center'>All rights reserved &#169;</p>
        </div>
      </footer>
    </div>
  )
}