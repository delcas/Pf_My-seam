import React from 'react'
import styles from './Sections.module.css'
import imgTech from '../../images/Technology.jpg'
import imgHome from '../../images/home.jpg'
import imgCostura from '../../images/costura.jpg'
import imgCostura2 from '../../images/costura2.jpg'
import { useSelector } from 'react-redux';

export const Sections = () => {
  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);

  return (
    <div className={products.length > 0 ? '' : styles.hideSections}>
      <div><h4 className={styles.titleSections}>Secciones populares</h4>
        <div className={styles.containerSections} title="Haz clic para ver más detalles">

          {/* Imagen 1 */}
          <div className={styles.containerImgTech}>
            <img className={styles.techImage} src={imgTech} alt='imgCostura'/>
            <p className={styles.titleImage}>Tecnología</p>
          </div>

          {/* Imagen 2 */}
          <div className={styles.containerImg}>
            <img className={styles.homeImage} src={imgHome} alt='imgCostura'/>
            <p className={styles.titleImage}>Hogar</p>
          </div>

          {/* Imagen 3 */}
          <div className={styles.containerImg3Y4}>
            <div className={styles.containerImg}>
              <img className={styles.seamImage} src={imgCostura} alt='imgCostura'/>
              <p className={styles.titleImage}>Costura</p>
            </div>

            {/* Imagen 4 */}
            <div className={styles.containerImg}>
              <img className={styles.seamImage2} src={imgCostura2} alt='imgCostura'/>
              <p className={styles.titleImage}>Servicios</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
