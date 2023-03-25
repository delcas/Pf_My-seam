import React, {useEffect} from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/actions';
//Chakra
import { useColorMode } from '@chakra-ui/react'

export const Card = () => {

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Me traigo los estados del reducer 
  const products = useSelector((state) => state.products);

  // Cambiar el tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getProducts());
  },[dispatch])

  return (
    <div>
      <ul className={styles.cardContainer}>

      {
        products.length > 0 ? 
        products.map((el) => {
          return ( 
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
          )
        }) 
        : <span className={styles.loader}></span>
       }

      </ul>  
    </div>
  )
}
