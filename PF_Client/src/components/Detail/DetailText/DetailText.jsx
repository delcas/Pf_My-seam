import React, { useEffect, useState } from "react";
import txtstyle from "./DetailText.module.css";
import { useSelector, useDispatch } from "react-redux";
import Review from '../../../components/Review/Review';
import { update_cart, getProducts } from '../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
//Chakra
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import { AlertIcon, Alert, Icon } from '@chakra-ui/react'

export default function DetailText({
    details,
    InputHandler,
    SendCange,
    EditionPDetail,
    edit,
    setTotalPrice,
    totalQuantity,
    setTotalQuantity,
    el
  }){
    // Info de Auth0
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const cart = useSelector(state => state.cart);
    const [itemsPerProduct, setItemsPerProduct] = useState(cart.quantity)
      const prodDetails = useSelector((state) => state.details);
      const favourites = useSelector(state => state.favourites)
      const indexProduct = favourites.findIndex(el => el.id == prodDetails.id)
      const dispatch = useDispatch()
      // Muestra alerta/notificación del producto añadido al carrito de compras/Favoritos
    const [notify, setNotify] = useState(false);
    const [notifyFav, setNotifyFav] = useState(false);
    const [notifyDeleteFav, setNotifyDeleteFav] = useState(false);

    const showNotify = () => {
      setNotify(!notify);
    };

    const showNotifyFav = () => {
      setNotifyFav(!notifyFav);
    };
  
    const showNotifyDeleteFav = () => {
      setNotifyDeleteFav(!notifyDeleteFav);
    };
    
      const handleCart =  () => {    
        // Validar si ya existe el producto en el carrito de compras
        if (cart.find(el => el === prodDetails)) {   
          prodDetails.quantity +=  1 
          let add = 1;
          dispatch(update_cart(add));
        } else {
          prodDetails.quantity = 1 
            cart.push(prodDetails)
            let add = 1;
            dispatch(update_cart(add));
          }
        
          localStorage.setItem("cart", JSON.stringify(cart))       
          showNotify();
      };
            // Agregar producto a favoritos
     const handleFavourites =  () => { 
      if (isAuthenticated) {
        // Validar si ya existe el producto en favoritos
        if (indexProduct >= 0) {   
          favourites.splice(indexProduct, 1)
          showNotifyDeleteFav()
        } else {
          favourites.push(prodDetails)   
          showNotifyFav()
          dispatch(getProducts())
          }
      } else {
        loginWithRedirect()
      }
    }
 
    return <td className={txtstyle.main}>
    <tr>
      <h1>
        <td>
          {edit.s === "name" ? (
            <span>
              <input
                type="text"
                name="name"
                onChange={InputHandler}
              />
              <button onClick={SendCange}>OK</button>
            </span>
          ) : (
            <p className={txtstyle.name}>{details.name}</p>
          )}
        </td>
      </h1>
      <td>
        {edit.e ? (
          <button name="name" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>
      <h4>
      <td>
        {edit.s === "description" ? (
          <span>
            <input
              type="text"
              name="description"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.description
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="description" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
          )}
      </td>
          </h4>
      </tr>
       <tr>
      <td>
     Ropa de:
        {edit.s === "gender" ? (
          <span>
            <input
              type="text"
              name="gender"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.gender
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="gender" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>

       <tr>
      <td>
      Categoria:
        {edit.s === "category" ? (
          <span>
            <input
              type="text"
              name="category"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.category
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="category" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>

    <tr>
      <td>
       $
        {edit.s === "price" ? (
          <span>
            <input
              type="text"
              name="price"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.price
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="price" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>
      <td>
        Stock:
        {edit.s === "stock" ? (
          <span>
            <input
              type="text"
              name="stock"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.stock
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="stock" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>Vendedor: {details.userid}</tr>
    {/* <tr>Disponible: NYI</tr> */}
    <div>
         {/* Alerta producto agregado al carrito*/}
         <div onAnimationEnd={() => setNotify(false)} className={notify ? txtstyle.notifySlideIn : txtstyle.hide}>
           <Alert status='success' w={60}  >
             <AlertIcon />
             Producto agregado al carrito de compras
           </Alert>
         </div>

        {/* Alerta producto agregado a favoritos*/}
        <div onAnimationEnd={() => setNotifyFav(false)} className={notifyFav ? txtstyle.notifySlideIn : txtstyle.hide}>
          <Alert status='success' w={60}  >
            <AlertIcon />
            Producto agregado a Favoritos 
          </Alert>
        </div>

        {/* Alerta producto eliminado de favoritos*/}
        <div onAnimationEnd={() => setNotifyDeleteFav(false)} className={notifyDeleteFav ? txtstyle.notifySlideIn : txtstyle.hide}>
          <Alert status='error' w={60}  >
            <AlertIcon />
            Producto eliminado de Favoritos 
          </Alert>
        </div>

        <Icon as={BsFillCartPlusFill} w={8} h={8} className={txtstyle.buttonCart} onClick={handleCart} title="Agregar al carrito"/>
        <Icon as={BsFillHeartFill} color={indexProduct >= 0  ? 'red' : ''} w={8} h={8} className={indexProduct >= 0  ? txtstyle.favItem : txtstyle.buttonFavourites} onClick={handleFavourites} title="Agregar a favoritos"/>
      </div>
      <Review/>
  </td>
}