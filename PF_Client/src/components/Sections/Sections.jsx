import React from 'react'
import styles from './Sections.module.css'
import imgTech from '../../images/Technology.jpg'
import imgHome from '../../images/home.jpg'
import imgCostura from '../../images/costura.jpg'
import imgCostura2 from '../../images/costura2.jpg'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Sections = () => {
  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);

  return (
    <div className={products.length > 0 ? styles.mainContainer : styles.hideSections}>
      <div><h4 className={styles.titleSections}>Secciones populares</h4>
        <div className={styles.containerSections} title="Haz clic para ver más detalles">

          {/* Imagen 1 */}
          <NavLink to={"/home"}>
            <div className={styles.containerImgTech}>
              <img className={styles.techImage} src={imgTech} alt='imgCostura'/>
              <p className={styles.titleImage}>Vestidos</p>
            </div>
          </NavLink>

          {/* Imagen 2 */}
          <NavLink to={"/home"}>
            <div className={styles.containerImg}>
              <img className={styles.homeImage} src={imgHome} alt='imgCostura'/>
              <p className={styles.titleImage}>Pantalones</p>
            </div>
          </NavLink>

          {/* Imagen 3 */}
          <div className={styles.containerImg3Y4}>
            <NavLink to={"/promotions"}>
              <div className={styles.containerImg}>
                <img className={styles.seamImage} src={imgCostura} alt='imgCostura'/>
                <p className={styles.titleImage}>Faldas</p>
              </div>
            </NavLink>

            {/* Imagen 4 */}
            <NavLink to={"/service"}>
              <div className={styles.containerImg}>
                <img className={styles.seamImage2} src={imgCostura2} alt='imgCostura'/>
                <p className={styles.titleImage}>Servicios</p>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}
