import React, { useRef, useState, useEffect } from 'react'
import styles from './Cart.module.css'
import EmptyCart from '../../images/empty-cart.png'
import { useSelector } from 'react-redux';
import { CartProducts } from './CartProducts/CartProducts';
// Chakra
import { BsFillCartFill } from "react-icons/bs";
import { Icon, useDisclosure, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent } from '@chakra-ui/react'

export const Cart = () => {
  // Menú desplegable Chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  
  // Me traigo el estado del reducer 
  let cart = useSelector(state => state.cart)

  // Estado del precio total del carrito de compras
  const [totalPrice, setTotalPrice] = useState(0);
  // Estado de la cantidad de productos en el carrito de compras
  const [quantity, setQuantity] = useState(0);

  const calculatePriceQuantity = () => {
    let totalPrice = 0
    let totalQuantity = 0

    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity
      totalQuantity += cart[i].quantity
    } 
    setTotalPrice(totalPrice)
    setQuantity(totalQuantity)
    onOpen()
  }
  
  return (
    <div>
      {/* Ícono NavBar */}
      <button type="button" className={`${styles.containerIconCart} position-relative`}>
        <Icon as={BsFillCartFill} onClick={calculatePriceQuantity} boxSize='2em' className={styles.buttonCart} />
        <span className={`${styles.notificationsCart} position-absolute translate-middle badge rounded-pill bg-danger`}>
          {quantity}
        </span>
      </button>
      
      {/* Menú Desplegable */}
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} size='sm'>
        <DrawerOverlay />
        <DrawerContent>

          {/* Header */}
          <DrawerHeader>
            <p className={styles.titleCart}>Tu carrito de compras ({quantity}) 
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
              <div className={cart.length === 0 ? styles.hide : styles.cartContainer}>
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
                        quantity = {quantity}
                        setQuantity = {setQuantity}
                        el = {el}
                      />
                    )
                  }) 
                  : <span className={styles.loader}></span>
                }
                </ul>
                <div>
                  <p><b>Total: ${totalPrice}</b></p>
                </div>

                <div>
                  <Button className={cart.length === 0 ? styles.hide : ''} onClick={onClose}>Comprar ahora</Button>
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
