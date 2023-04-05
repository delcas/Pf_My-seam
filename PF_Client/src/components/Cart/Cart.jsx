import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
import { useSelector } from 'react-redux';
import EmptyCart from '../../images//empty-cart.png'
import { CartProducts } from './CartProducts/CartProducts';
import { Loading } from '../Loading/Loading'
import { UseLocalStorage } from '../../hooks/UseLocalStorage';
// Chakra
import { BsFillCartFill } from "react-icons/bs";
import { Icon, useDisclosure, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent } from '@chakra-ui/react'

export const Cart = () => {
  // Menú desplegable Chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  
  // Estado del Local Storage del Carrito de compras
  const [cartLocalStorage, setCartLocalStorage] = UseLocalStorage('cart', []);
  let cart = useSelector(state => state.cart)
  const allProducts = useSelector(state => state.allProducts)

  // Estado del precio total del carrito de compras
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Estado de la cantidad de productos en el carrito de compras
  const [totalQuantity, setTotalQuantity] = useState(0);  
  const disabled = cart.find(el => el.quantity < 1)
  
  // Guardar carrito de compras en Local Storage
/*   useEffect(() => {
    if (cartLocalStorage.length > 0) {
      const findProducts = allProducts.filter(el => el.id == cartLocalStorage.id)      
      cart.push(findProducts)
      window.localStorage.clear()
    }
  }, [])     */ 

  const calculatePriceQuantity = () => {
    let totalPrice = 0
    let totalQuantity = 0

    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity
      totalQuantity += cart[i].quantity
    } 
    setTotalPrice(totalPrice)
    setTotalQuantity(totalQuantity)
    onOpen()
  }
  
  return (
    <div>
      {/* Ícono NavBar */}
      <button type="button" className={`${styles.containerIconCart} position-relative`}>
        <Icon as={BsFillCartFill} onClick={calculatePriceQuantity} boxSize='2em' className={styles.buttonCart} title="Ver carrito"/>
        <span className={`${styles.notificationsCart} position-absolute translate-middle badge rounded-pill bg-danger`}>
          {totalQuantity}
        </span>
      </button>
      
      {/* Menú Desplegable */}
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} size='sm'>
        <DrawerOverlay />
        <DrawerContent>

          {/* Header */}
          <DrawerHeader>
            <p className={styles.titleCart}>Tu carrito de compras ({totalQuantity}) 
            <Button className={styles.buttonClose} onClick={onClose}>X</Button></p>
          </DrawerHeader>
          
          {/* Body */}
          <DrawerBody>
            <div className={styles.containerBody} >
              {/* Imagen Carrito y Titulo */}
              <div className={cart.length === 0 ? styles.imgCarrito : styles.hide}>
                <img src={EmptyCart} alt='Carrito de compras' width='150px' height='150px' />
                <p><b>Tu carrito esta vacío</b></p>
              </div>

              {/* Productos en el carrito */}
              <div className={cart.length === 0 ? styles.hide : ''}>
                <ul className={styles.cartContainer}>
                {
                  cart.length > 0 ? 
                  cart.map((el) => {
                    return ( 
                      <CartProducts 
                        key = {el.id}
                        cart = {cart}
                        totalPrice = {totalPrice}
                        setTotalPrice = {setTotalPrice}
                        totalQuantity = {totalQuantity}
                        setTotalQuantity = {setTotalQuantity}
                        el = {el}
                      />
                    )
                  }) 
                  : <Loading />
                }
                </ul>
                <div>
                  <h4 className={disabled ? '' : styles.hide}>Todos los productos deben tener al menos 1 unidad</h4>
                  -----------------------------------------------
                </div>
                <div>
                  <p><b>Total: ${totalPrice}</b></p>
                </div>

                <div>
                  <Link to={'/checkout'}>
                    <Button isDisabled={disabled} className={cart.length === 0 ? styles.hide : ''} onClick={onClose}>Comprar ahora</Button>
                  </Link>
                  <Button className={styles.buttonKeepBuying} onClick={onClose}>Seguir comprando</Button>
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
