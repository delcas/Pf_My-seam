import React from 'react'
import styles from './CardProducts.module.css';
import { Link } from 'react-router-dom';
//Chakra
import { useColorMode } from '@chakra-ui/react'

export const CardProducts = ({ el }) => {
  // Cambiar el tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode

  return (
    <div>
      <div key = {el.id} >
        <li className={currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme}>          
          <Link className={styles.Link} to= {`/details/${el.id}`}>
            {/* Elementos de la card */}
            <img className={styles.imgCenter} src={el.image[0]} alt={el.name} width='200px' height='200px'/>
            <h1 className={styles.textBig}>{el.name}</h1>
            <h2 className={styles.textMedium}> ${el.price}</h2>
            <h3 className={styles.textSmall}> {el.description}</h3>
          </Link>
        </li>                      
      </div>
    </div>
  )
}
