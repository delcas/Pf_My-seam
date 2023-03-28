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
        <div className={styles.containerSections}>

          {/* Imagen 1 */}
          <div className={styles.containerImg}>
            <img className={styles.techImage} src={imgTech} alt='imgCostura'/>
          </div>

          {/* Imagen 2 */}
          <div>
            <img className={styles.homeImage} src={imgHome} alt='imgCostura'/>
          </div>

          {/* Imagen 3 y 4 */}
          <div className={styles.containerSeamImg}>
            <img className={styles.seamImage} src={imgCostura} alt='imgCostura'/>
            <img className={styles.seamImage2} src={imgCostura2} alt='imgCostura'/>
          </div>

        </div>
      </div>
    </div>
  )
}
