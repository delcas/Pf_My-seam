import React, { useState, useEffect } from 'react'
import styles from './CardProducts.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { getProducts, addCart, getUserByEmail, update_cart, update_cart_set } from '../../../redux/actions';
//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import StarRank from "../../StarRank/StarRank.jsx"
import { ButtonCart } from '../../Cart/ButtonCart/ButtonCart';

export const CardProducts = ({ id, image, name, price, description }) => {
  // Cambiar , id, image, name, price, d tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode
  if (name.length > 20){
    name = name.slice(0,19) + "..."    
  }
   
  const dispatch = useDispatch()

  // Info de Auth0
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Me traigo los estado del reducer 
  const allProducts = useSelector(state => state.allProducts)
  let cart = useSelector(state => state.cart)
  const favourites = useSelector(state => state.favourites)
  
  
  // Buscar si el producto esta en favoritos
  const favProduct = allProducts.find(el => el.id == id)
  const indexProduct = favourites.findIndex(el => el.id == favProduct.id)
  
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

  
  // Agregar producto al carrito de compras
  const handleCart =  () => {
    const cartProduct = allProducts.find(el => el.id == id)
    dispatch(addCart(cartProduct));
    dispatch(update_cart());
    showNotify();
  }


  // Agregar producto a favoritos
  const handleFavourites =  () => { 
    if (isAuthenticated) {
      // Validar si ya existe el producto en favoritos
      if (indexProduct >= 0) {   
        favourites.splice(indexProduct, 1)
        showNotifyDeleteFav()
      } else {
        favourites.push(favProduct)   
        showNotifyFav()
        dispatch(getProducts())
        }
    } else {
      loginWithRedirect()
    }
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

      {/* Alerta producto eliminado de favoritos*/}
      <div onAnimationEnd={() => setNotifyDeleteFav(false)} className={notifyDeleteFav ? styles.notifySlideIn : styles.hide}>
        <Alert status='error' w={60}  >
          <AlertIcon />
          Producto eliminado de Favoritos 
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
          <Icon as={BsFillHeartFill} color={indexProduct >= 0  ? 'red' : ''} w={8} h={8} className={indexProduct >= 0  ? styles.favItem : styles.buttonFavourites} onClick={handleFavourites} title="Agregar a favoritos"/>
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