import React, { useState, useEffect, useContext } from 'react'
import styles from './Checkout.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { FormCheckout } from './FormCheckout/FormCheckout';
import { Context } from "../../hooks/ContextProvider";
// Auth0
import { useAuth0 } from '@auth0/auth0-react';
// MercadoPago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(VITE_PUBLIC_KEY);

export const Checkout = ({ onClick, cart  }) => {

  const [isVisible, setIsVisible] = useState(true);
  const { preferenceId, isLoading: disabled } = useContext(Context);

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId])


  // Auth0
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Estado para guardar los errores del form
  const [err, setErr]= useState({});
  
  // Estado de los campos del registro de domicilio
  const [input, setInput] = useState({
    codigo_postal: '',
    estado: '',
    ciudad: '',
    colonia: '',
    calle: '',
    numero_exterior: '',
    entre_calles: '',
    telefono: '',
    referencia_direccion: '',
    recordar_direccion: false,
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
        <FormCheckout err={err} setErr={setErr} input={input} setInput={setInput} cart={cart} />
        <Wallet initialization={{ preferenceId: preferenceId }} />
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={onClick}
          id="checkout-btn"
          disabled={disabled || cart.length < 1}
        >
          Pagar
        </button>
      </div>
      
    </div>
  )
}
