import React, { useState} from "react";
import Payment from "./Payment/Payment";
import { Checkout } from "./Checkout";
import InternalProvider from "../../hooks/ContextProvider";
import { Loading } from '../../components/Loading/Loading'
// MercadoPago
import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago('TEST-5a50f864-462e-4e42-89bf-304bce74b5fd');

export const MercadoPago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({ quantity: "1", price: "10", amount: 10, description: "Some book" });
  
  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:3001/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <Loading />
      )
    }
  }

  return (
    <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} />
        {/* <Payment /> */}
      </main>
    </InternalProvider>
  );
};

