import React, { useRef,useState } from 'react'
import styles from './Cart.module.css'
import EmptyCart from '../../images/empty-cart.png'
import { useSelector } from 'react-redux';
import { CardProducts } from '../Card/CardProducts/CardProducts';
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Chakra
import { Icon, useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, 
  DrawerContent } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";

export const Cart = () => {
  // Menú desplegable Chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  // Auth0
  const { loginWithRedirect, isAuthenticated } = useAuth0(); 
  
  // Me traigo el estado del reducer 
  const cart = useSelector(state => state.cart)


  return (
    <div>
      {/* Ícono NavBar */}
      <button type="button" className={`${styles.containerIconCart} position-relative`}>
        <Icon as={BsFillCartFill} onClick={onOpen} boxSize='2em' className={styles.buttonCart} />
        <span className={`${styles.notificationsCart} position-absolute translate-middle badge rounded-pill bg-danger`}>
          {cart && cart.length === 0 ? '' : cart.length}
        </span>
      </button>
      
      {/* Menú Desplegable */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>

          {/* Header */}
          <DrawerHeader>
            <p className={styles.titleCart}>Tu carrito de compras ({cart.length}) 
            <Button className={styles.buttonClose} onClick={onClose}>X</Button></p>
          </DrawerHeader>
          
          {/* Body */}
          <DrawerBody>
            <div className={styles.containerBody} >

              {/* ¿Tienes una cuenta? */}
              <div className={isAuthenticated ? styles.hide : styles.LogIn}>
                <p>¿Tienes una cuenta?</p>
                <a onClick={loginWithRedirect}><u>Inicia sesión </u> para finalizar tus compras con mayor rapidez</a>
              </div>

              {/* Imagen Carrito y Titulo */}
              <div className={cart.length === 0 ? '' : styles.hide}>
                <img src={EmptyCart} alt='Carrito de compras' width='150px' height='150px' />
                <p><b>Tu carrito esta vacío</b></p>
              </div>

              {/* Productos en el carrito */}
              <div className={cart.length === 0 ? styles.hide : ''}>
                {
                  cart.length > 0 ? 
                  cart.map((el) => {
                    return ( 
                      <CardProducts 
                        id = {el.id} 
                        key = {el.id}
                        image = {el.image}
                        name = {el.name} 
                        price = {el.price}
                        description = {el.description}
                      />
                    )
                  }) 
                  : <span className={styles.loader}></span>
                }
              </div>
              <Button onClick={onClose}>Seguir comprando</Button>
            </div>
          </DrawerBody>

          {/* Footer */}
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
