import React, { useEffect } from 'react'
import styles from './Promotions.module.css'
import { NavBar } from '../../NavBar/NavBar'
import { CardProducts } from '../../Card/CardProducts/CardProducts';
import promo1 from '../../../images/promociones1.jpg'
import promo2 from '../../../images/promociones2.jpg'
import promo3 from '../../../images/promociones3.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { getPromotions } from '../../../redux/actions';

export const Promotions = () => {
  // Me traigo los estados del reducer 
  let promotions = useSelector((state) => state.promotions);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getPromotions());
  }, [])

  return (
    <div>
      <NavBar />
      <div id="carouselExampleDark" className={`${styles.containerCarousel} carousel carousel-dark slide`}>
        <div className="carousel-indicators">
        </div>
        <div className="carousel-inner">

          {/* Imagen 1 */}
            <div className= "carousel-item active" data-bs-interval="1" >
              <img src={promo1} className={styles.imgCarousel} alt="promo1" />
              <div className="carousel-caption  d-md-block">
                <h5 className={styles.promocion1}>ENVÍOS EN <p className={styles.descuento1}>24 HORAS</p></h5>
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>

          {/* Imagen 2 */}
            <div className="carousel-item" data-bs-interval="10">
              <img src={promo2} className={styles.imgCarousel} alt="promo2" />
              <div className="carousel-caption d-md-block">
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>

          {/* Imagen 3 */}
            <div className="carousel-item" data-bs-interval="10">
              <img src={promo3} className={styles.imgCarousel} alt="promo3" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          
        </div>
      </div>
      {/* Promotions Products*/}
      <h1 className={styles.tituloPromocion}>OFERTA SOLO POR HOY</h1>
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
        : ''
       }
      </ul>  
    </div>
  )
}
