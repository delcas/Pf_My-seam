import React from 'react'
import styles from './SectionsAdmin.module.css'
import imgTech from '../../images/Technology.jpg'
import imgHome from '../../images/home.jpg'
import imgCostura from '../../images/costura.jpg'
import imgCostura2 from '../../images/costura2.jpg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const SectionsAdmin = () => {
  // Me traigo los estados del reducer 
  // let products = useSelector((state) => state.products);

  return (
    <div /*className={products.length > 0 ? '' : styles.hideSections}*/>
      <div><h4 className={styles.titleSections}>DASHBOARD ADMIN</h4>
        <div className={styles.containerSections} title="Haz clic para ver más detalles">

          {/* Imagen 1 */}
          <div className={styles.containerImg}>
            <img className={styles.techImage} src={imgTech} alt='imgCostura'/>
            <Link to="/users">
              <p className={styles.titleImage}>Usuarios Registrados</p>
            </Link>
          </div>

          {/* Imagen 2 */}
          <div className={styles.containerImg}>
            <img className={styles.homeImage} src={imgHome} alt='imgCostura'/>
            <p className={styles.titleImage}>Publicaciones</p>
          </div>

          {/* Imagen 3 */}
          <div className={styles.containerImg3Y4}>
            <div className={styles.containerImg}>
              <img className={styles.seamImage} src={imgCostura} alt='imgCostura'/>
              <p className={styles.titleImage}>PQR's</p>
            </div>

            {/* Imagen 4 */}
            <div className={styles.containerImg}>
              <img className={styles.seamImage2} src={imgCostura2} alt='imgCostura'/>
              <p className={styles.titleImage}>Estadísticas</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
