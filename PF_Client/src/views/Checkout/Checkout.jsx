import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Checkout.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom'
// Auth0
import { useAuth0 } from '@auth0/auth0-react';
// MercadoPago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { fetchSToken } from '../../hooks/fetchMethod';
import { MercadoPago } from './MercadoPago';
import { FormCheckout } from './FormCheckout/FormCheckout';
initMercadoPago('TEST-5a50f864-462e-4e42-89bf-304bce74b5fd');

export const Checkout = () => {
  // Info de Auth0
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const { id } = useParams()

  // Estado para guardar los errores del form
  const [err, setErr]= useState({});
  

  const [state, setState] = useState()
  const [cargar, setCarga] = useState(true)
  const [pagar, setPagar] = useState(false)

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

  const cargarProductos = useCallback(
    async() => {
      const infoProducto = await fetchSToken(`producto/${id}`)
      if (infoProducto.ok) {
        setState(infoProducto)
        setCarga(false)
        return true
      } else {
        return false
      }
    }, [setState, id]
  )

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
        {/* {pagar ? null : <MercadoPago items={input} />}
        <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} /> */}
      </div>
      
    </div>
  )
}
