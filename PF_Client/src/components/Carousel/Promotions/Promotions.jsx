import React, { useEffect } from 'react'
import styles from './Promotions.module.css'
import { NavBar } from '../../NavBar/NavBar'
import { CardProducts } from '../../Card/CardProducts/CardProducts';
import { useSelector, useDispatch } from 'react-redux';
import { getPromotions } from '../../../redux/actions';

export const Promotions = () => {
  // Me traigo los estados del reducer 
  let promotions = useSelector((state) => state.promotions);
  const allProducts = useSelector((state) => state.allProducts);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getPromotions());
  }, [])

  return (
    <div>
      <NavBar />

      {/* Promotions Products*/}
      <h1 className={promotions.length > 0 ? styles.tituloPromocion : styles.hidePromotions}>HASTA <b className={styles.resaltarTituloPromocion}>33%</b> DE DESCUENTO SOLO <b className={styles.resaltarTituloPromocion}>HOY</b></h1>
      <ul className={styles.cardContainer}>
      {
        promotions.length > 0 ? 
        promotions.map((el) => {
          return ( 
            <CardProducts
              id = {el.id} 
              key = {el.id}
              image = {el.image}
              name = {el.name} 
              price = {el.price * .8}
              description = {el.description}
            />
          )
        }) 
        : <span className={styles.loader}></span>
       }
      </ul>  
    </div>
  )
}
