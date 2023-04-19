import React from 'react'
import { NavBar } from "../NavBar/NavBar";
import { FaTshirt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

 // import { FaYarn } from 'react-icons/fa'; // para usar el icono de lana
 import { IoMdCut } from 'react-icons/io'; // para usar el icono de tijeras
import styles from './Iconos.module.css';

export const Iconos = () => {
  // Info de Auth0
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const user = useSelector(state => state.userInfo) 
  const linkMercadoPago = `https://auth.mercadopago.com/authorization?client_id=2799826172514532&response_type=code&platform_id=mp&state=${user.id}&redirect_uri=https://myseam-production.up.railway.app/payment/authcode/`    


  return (
      <div>
        <NavBar /> 
      <div className={ !isAuthenticated || !user.MPAccessToken ? styles.hide : ""}>
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

      {/* Usuario NO registrado */}
      <div className={isAuthenticated ? styles.hide : styles.LogIn}>
        <p>¿Tienes una cuenta?</p>
        <Link onClick={loginWithRedirect}><u>Inicia sesión aquí</u></Link> para poder vender.
      </div>

      {/* Usuario SIN MERCADOPAGO */}
      <div className={!user.MPAccessToken ? styles.LogIn : styles.hide}>
        <p>¿Tienes una cuenta en MercadoPago?</p>
        <Link to={linkMercadoPago}><u>Inicia sesión aquí</u></Link> para poder vender.
      </div>
    </div>

      
      
  )
}
