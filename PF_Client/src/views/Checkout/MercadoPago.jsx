import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// MercadoPago
import { fetchCToken } from '../../hooks/fetchMethod'
const FORM_ID = 'payment-form'

export const MercadoPago = ({ items }) => {
  const { id } = useParams()

  const obtenerPreference = useCallback(
   async() => {
     const res = await fetchCToken(`checkout/${id}`, { items }, 'POST')

     if (res.global) {
       const script = document.createElement('script')
       script.type = 'text/javascript'
       script.src = 'https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js'
       script.setAttribute('data-preference-id', res.global)
       const form = document.getElementById(FORM_ID)
       form.appendChild(script)
     }
   }, [id, items],
  )

  useEffect(() => {
   obtenerPreference()
  }, [obtenerPreference])


 return (
     <form id={FORM_ID} method='GET' />
 )
}