import React from 'react'
import promo1 from '../../images/promociones1.jpg'
import promo2 from '../../images/promociones2.jpg'
import promo3 from '../../images/promociones3.jpg'
import fintemporada from "../../assets/images/finTemporada.png"
import styles from './Carousel.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Carousel = () => {
  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);

  return (
    <div className={products.length > 0 ? styles.containerPromotion : styles.hideCarousel}>
      <div id="carousel" className="carousel slide carousel-dark " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

          {/* Imagen 1 */}
          <Link to= {'/promotions'}>
            <div className= "carousel-item active">
              <img src={promo1} className={styles.imgCarousel} alt="promo1" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
                <h5 className={styles.promocion1}>ENVÍOS EN <p className={styles.descuento1}>24 HORAS</p></h5>
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>
          </Link>

          {/* Imagen 2 */}
          <Link to= {'/promotions'}>
            <div className="carousel-item">
              <img src={fintemporada} className={styles.imgCarousel} alt="promo2" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
                <p className={styles.terminosCondiciones}>Aplican términos y condiciones.</p>
              </div>
            </div>
          </Link>

          {/* Imagen 3 */}
          <Link to= {'/promotions'}>
            <div className="carousel-item">
              <img src={promo3} className={styles.imgCarousel} alt="promo3" title="Haz clic para ver más detalles"/>
              <div className="carousel-caption d-md-block">
              </div>
            </div>
          </Link>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  )
}
