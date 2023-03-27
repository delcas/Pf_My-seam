import React from 'react'
import styles from './CardProducts.module.css';
import { Link } from 'react-router-dom';
//Chakra
import { useColorMode } from '@chakra-ui/react'

export const CardProducts = ({ id, image, name, price, description }) => {
  // Cambiar , id, image, name, price, d tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode

  return (
    <div>
      <div key = {id} >
        <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>          
          <Link className={styles.Link} to= {`/details/${id}`}>
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
