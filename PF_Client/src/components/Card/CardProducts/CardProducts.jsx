import React, { useState } from 'react'
import styles from './CardProducts.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import StarRank from "../../StarRank/StarRank.jsx"

export const CardProducts = ({ id, image, name, price, description }) => {
  // Cambiar , id, image, name, price, d tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode
  if (name.length > 20){
    name = name.slice(0,19) + "..."    
  }
   
  // Me traigo el estado del reducer 
  const allProducts = useSelector(state => state.allProducts)
  const cart = useSelector(state => state.cart)

  // Muestra alerta/notificación del producto añadido al carrito de compras/Favoritos
  const [notify, setNotify] = useState(false);
  const [notifyFav, setNotifyFav] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  const showNotifyFav = () => {
    setNotifyFav(!notifyFav);
  };

  // Agregar producto al carrito de compras
  const handleCart =  () => {
    const cartProduct = allProducts.find(el => el.id == id)
    // Validar si ya existe el producto en el carrito de compras
    if (cart.find(el => el === cartProduct)) {   
      cartProduct.quantity +=  1 
    } else {
        cartProduct.quantity = 1 
        cart.push(cartProduct)   
      }
      
    localStorage.setItem("cart", JSON.stringify(cart))       
    showNotify();
  }

  // Agregar producto a favoritos
  const handleFavourites =  () => {
    const favProduct = allProducts.find(el => el.id == id)
    // Validar si ya existe el producto en favoritos
    if (cart.find(el => el === newProduct)) {   
      favProduct.quantity +=  1 
    } else {
        favProduct.quantity = 1 
        cart.push(favProduct)   
      }
      
    localStorage.setItem("cart", JSON.stringify(cart))       
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

      {/* Alerta producto agregado a favoritos*/}
      <div onAnimationEnd={() => setNotifyFav(false)} className={notifyFav ? styles.notifySlideIn : styles.hide}>
        <Alert status='success' w={60}  >
          <AlertIcon />
          Producto agregado a Favoritos 
        </Alert>
      </div>

      <div key = {id} >
        <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>          
          <Link className={styles.Link} to= {`/ProductDetail/${id}`}>
            {/* Elementos de la card */}
            <img className={styles.imgCenter} src={image[0]} alt={name} width='200px' height='210px' title="Haz clic para ver más detalles" />
            <StarRank />
          </Link>
          <Icon as={BsFillCartPlusFill} w={8} h={8} className={styles.buttonCart} onClick={handleCart} title="Agregar al carrito"/>
          <Icon as={BsFillHeartFill} w={8} h={8} className={styles.buttonFavourites} onClick={handleFavourites} title="Agregar a favoritos"/>
          <Link className={styles.Link} to= {`/ProductDetail/${id}`}>
            <h1 className={styles.textMedium} title="Haz clic para ver más detalles">{name}</h1>
            <h2 className={styles.textMedium} title="Haz clic para ver más detalles"> ${price}</h2>
            <h3 className={styles.textSmall}> {description}</h3>
          </Link>
        </li>                      
      </div>
    </div>
  )
}
