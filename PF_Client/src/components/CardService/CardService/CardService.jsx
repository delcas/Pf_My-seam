import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from "./CardService.module.css"

import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";


export const CardService =({name, description,price,image,id})=>{
     // Me traigo el estado del reducer 
    const services = useSelector(state=>state.services)
    const cart = useSelector(state=>state.cart)

    const { toggleColorMode, colorMode } = useColorMode();  
    const currentTheme = useColorMode().colorMode

    // Muestra alerta/notificación del producto añadido al carrito de compras
    const [notify, setNotify] = useState(false);

    const showNotify = () => {
        setNotify(!notify);
      };

      // Agregar producto al carrito de compras
  const handleCart = () => {
    const newService = services.find(el => el.id == id)
    // Validar si ya existe el producto en el carrito de compras
    if (cart.find(el => el === newService)) {   
        newService.quantity +=  1 
    } else {
        newService.quantity = 1 
        cart.push(newService)
      }
    showNotify();
  }

    return(
                <div>
      {/* Alerta producto agregado */}
      <div onAnimationEnd={() => setNotify(false)} className={notify ? styles.notifySlideIn : styles.hide}>
        <Alert status='success' w={60}  >
          <AlertIcon />
          Servicio agregado al carrito de compras 😀
        </Alert>
      </div>
            <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>   
            <div key={id}>
            <Link  to= {`/ServiceDetail/${id}`}>
            <img className={styles.imgCenter} src={image} alt={name} width='200px' height='200px' />
            </Link>
            <Icon as={BsFillCartPlusFill} w={8} h={8} className={styles.buttonCart} onClick={handleCart} title="Agregar al carrito"/>
          <Icon as={BsFillHeartFill} w={8} h={8} className={styles.buttonFavourites} title="Agregar a favoritos"/>
            <Link>
            <h1 className={styles.textMedium}>{name}</h1>
            <h2 className={styles.textMedium}> ${price}</h2>
            <h3 className={styles.textSmall}> {description}</h3>
            </Link>
            </div>
            </li>
        </div>
    )
}