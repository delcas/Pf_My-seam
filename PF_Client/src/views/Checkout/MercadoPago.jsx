import React, { useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import Payment from "./Payment/Payment";
import { Checkout } from "./Checkout";
import InternalProvider from "../../hooks/ContextProvider";
import { Loading } from '../../components/Loading/Loading'
// MercadoPago
import { initMercadoPago } from "@mercadopago/sdk-react";
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(VITE_PUBLIC_KEY);

export const MercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  let cart = useSelector(state => state.cart)

  const [orderData, setOrderData] = useState({
    "external_reference": "default",
    "preference_id": "Preference identification",
    "payer": {
      "id": 123,
      "nickname": "JOHN"
    },
    "items": cart.map(el => {
      return {
        "id": el.id,
        "name":el.name,
        "unit_price": el.price,
        "quantity": el.quantity
      }
    })
  });


  const handleClick = () => {
    setIsLoading(true);  
    axios.post('/payment', orderData, {
      headers: {
        'Content-Type': 'application/json',
        'grant_type': 'refresh_token',
        'client_id': '$APP_ID',
        'client_secret': '$SECRET_KEY',
        'refresh_token': '$REFRESH_TOKEN',
      }
    })
      .then(response => {
        setPreferenceId(response.data.global);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderSpinner = () => {
     if (isLoading) {
      return (
          <Loading />
        )
     }
  }

  return (
    <div>
      <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
        <main>
          {renderSpinner()}
          <Checkout onClick={handleClick} description cart={cart}/>
          <Payment />
        </main>
      </InternalProvider>
    </div>
  )
}
