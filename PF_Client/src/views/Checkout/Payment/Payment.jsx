import React from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "../../../hooks/ContextProvider";

const Payment = () => {
  const { preferenceId, orderData } = React.useContext(Context);
  const [isReady, setIsReady] = React.useState(false);

  const handleOnReady = () => {
    setIsReady(true);
  }

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet 
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady} />
      )
  }

  return (
    <div className=''>
      <div className="container_payment">
        <div className="block-heading">
        </div>
        <div className="form-payment">
          <div className="products">
          </div>
          <div className="payment-details">
            <div className="form-group col-sm-12">
              {renderCheckoutButton(preferenceId)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;