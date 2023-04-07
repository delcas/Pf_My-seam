import React, { useState, useEffect } from 'react'
import styles from './Checkout.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { FormCheckout } from './FormCheckout/FormCheckout';
import { Context } from '../../hooks/ContextProvider'
// Auth0
import { useAuth0 } from '@auth0/auth0-react';
// MercadoPago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago('TEST-adb5c9d4-6417-4432-8c36-d350d1439274');

export const Checkout = ({ onClick }) => {
  // Auth0
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [isVisible, setIsVisible] = React.useState(true);
  const { preferenceId, isLoading: disabled, orderData, setOrderData } = React.useContext(Context);

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId])

  const updatePrice = (event) => {
    const quantity = event.target.value;
    const amount = parseInt(orderData.price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  }

  // Estado para guardar los errores del form
  const [err, setErr]= useState({});
  
  // Estado de los campos del registro de domicilio
  const[input, setInput] = useState({
    codigo_postal: '',
    estado: '',
    ciudad: '',
    colonia: '',
    calle: '',
    numero_exterior: '',
    entre_calles: '',
    telefono: '',
    referencia_direccion: '',
    recordar: false,
  })

  return (
    <div>
      <NavBar />
      
      {/* Usuario NO registrado */}
      <div className={isAuthenticated ? styles.hide : styles.LogIn}>
        <p>¿Tienes una cuenta?</p>
        <Link onClick={loginWithRedirect}><u>Inicia sesión aquí</u></Link> para finalizar tus compras con mayor rapidez.
      </div>
      
      {/* Usuario Registrado */}
      <div className={!isAuthenticated ? styles.hide : ''}>
        <FormCheckout err={err} setErr={setErr} input={input} setInput={setInput} />
        {/* <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'self' }} />  */}
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={onClick}
          id="checkout-btn"
          disabled={disabled}
        >
          Checkout
        </button>
      </div>
      
    </div>
  )
}
