import React from 'react'
import styles from './Sections.module.css'
import imgVestidos from '../../assets/images/Vestido.jpg'
import imgPantalones from '../../assets/images/Pantalones.jpg'
import imgFaldas from '../../assets/images/Falda.jpg'
import imgServicios from '../../images/costura2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterByCategory } from '../../redux/actions';

export const Sections = () => {
  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  const handleFilterByCategory = (e) => {
    const category = e.target.id;
    dispatch(filterByCategory(category));
}

  return (
    <div className={products.length > 0 ? styles.mainContainer : styles.hideSections}>
      <div><h4 className={styles.titleSections}>Secciones populares</h4>
        <div className={styles.containerSections} title="Haz clic para ver más detalles">

          {/* Imagen 1 */}
          <a href="#categories">
            <div className={styles.containerImgVestidos}>
              <img className={styles.vestidosImg} id={'Vestidos'} onClick={(e) => handleFilterByCategory(e)} src={imgVestidos} alt='imgVestidos'/>
              <p className={styles.titleImage}>Vestidos</p>
            </div>
          </a>

          {/* Imagen 2 */}
          <a href="#categories">
            <div className={styles.containerImg}>
              <img className={styles.pantalonesImg} id={'Pantalones'} onClick={(e) => handleFilterByCategory(e)} src={imgPantalones} alt='imgPantalones'/>
              <p className={styles.titleImage}>Pantalones</p>
            </div>
          </a>

          {/* Imagen 3 */}
          <div className={styles.containerImg3Y4}>
          <a href="#categories">
              <div className={styles.containerImg}>
                <img className={styles.faldasImg} id={'Faldas'} onClick={(e) => handleFilterByCategory(e)} src={imgFaldas} alt='imgFaldas'/>
                <p className={styles.titleImage}>Faldas</p>
              </div>
            </a>

            {/* Imagen 4 */}
            <NavLink to={"/service"}>
              <div className={styles.containerImg}>
                <img className={styles.serviciosImg} src={imgServicios} alt='imgServicios'/>
                <p className={styles.titleImage}>Servicios</p>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}
