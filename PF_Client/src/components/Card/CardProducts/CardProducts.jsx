import React, { useState } from 'react'
import styles from './CardProducts.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

export const CardProducts = ({ id, image, name, price, description }) => {
  // Cambiar , id, image, name, price, d tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode

  // Me traigo el estado del reducer 
  const cart = useSelector(state => state.cart)
  const allProducts = useSelector(state => state.allProducts)
  
  // Muestra alerta/notificación del producto añadido al carrito de compras
  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  // Agregar producto al carrito de compras
  const handleCart = () => {
    const findProduct = allProducts.find(el => el.id == id)
    cart.push(findProduct)
    showNotify();
  }

  return (
    <div>
      {/* Alerta producto agregado */}
      <div onAnimationEnd={() => setNotify(false)} className={notify ? styles.notifySlideIn : styles.hide}>
        <Alert status='success' w={60}  >
          <AlertIcon />
          Producto agregado al carrito de compras 😀
        </Alert>
      </div>

      <div key = {id} >
        <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>          
          <Icon as={BsFillCartPlusFill} w={8} h={8} className={styles.buttonCart} onClick={handleCart} />
          <Icon as={BsFillHeartFill} w={8} h={8} className={styles.buttonFavourites} />
          <Link className={styles.Link} to= {`/ProductDetail/${id}`}>
            {/* Elementos de la card */}
            <img className={styles.imgCenter} src={image[0]} alt={name} width='200px' height='200px'/>
            <h1 className={styles.textBig}>{name}</h1>
            <h2 className={styles.textMedium}> ${price}</h2>
            <h3 className={styles.textSmall}> {description}</h3>
          </Link>
        </li>                      
      </div>
    </div>
  )
}
