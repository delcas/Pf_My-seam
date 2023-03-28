import React, {useEffect} from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';


export const Card = () => {

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Me traigo los estados del reducer 
  const products = useSelector((state) => state.products);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getProducts());
  }, [])

  return (
    <div>
     
      <ul className={styles.cardContainer}>
      {
        products.length > 0 ? 
        products.map((el) => {
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
      </ul>  
    </div>
  )
}
