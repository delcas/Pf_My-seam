import React, { useState, useEffect } from 'react'
import styles from './ButtonCart.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { update_cart } from '../../../redux/actions';
//Chakra
import { Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { Cart } from '../Cart';

export const ButtonCart = () => {

  const dispatch = useDispatch()
  // Estados del reducer
  const stateCart = useSelector(state => state.cart)
  const allProducts = useSelector(state => state.allProducts)

  // Muestra alerta/notificación del producto añadido al carrito de compras/Favoritos
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCart(cartLocalStorage);
  }, []);

  const showNotify = () => {
    setNotify(!notify);
  };

  // Función para actualizar el carrito en el localStorage
  const actualizarLocalStorage = (nuevoCarrito) => {
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  }

    
  // Agregar producto al carrito de compras
  const handleCart =  () => {
    const cartProduct = allProducts.find(el => el.id == id)
    // Validar si ya existe el producto en el carrito de compras
    if (stateCart.find(el => el === cartProduct)) {   
      cartProduct.quantity +=  1 
      let add = 1;
      dispatch(update_cart(add));
    } else {
        cartProduct.quantity = 1 
        let add = 1;
        dispatch(update_cart(add));   
      }
    const nuevoCarrito = [...stateCart, cartProduct];
    setCart(nuevoCarrito);  
    actualizarLocalStorage(nuevoCarrito);  

    showNotify();
  }

  return (
    <div>
       {/* Alerta producto agregado al carrito*/}
       <div onAnimationEnd={() => setNotify(false)} className={notify ? styles.notifySlideIn : styles.hide}>
        <Alert status='success' w={60}  >
          <AlertIcon />
          Producto agregado al carrito de compras
        </Alert>
      </div>

      <Icon 
        as={BsFillCartPlusFill} w={8} h={8} className={styles.buttonCart} 
        onClick={handleCart} title="Agregar al carrito"/>
    </div>
  )
}
