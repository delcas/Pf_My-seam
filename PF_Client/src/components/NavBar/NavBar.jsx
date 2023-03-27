import React from 'react';
import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo_MySeam_full.png';
import { SearchBar } from './SearchBar/SearchBar';
import { FaMoon, FaSun } from "react-icons/fa";
//Chakra
import { IconButton, useColorMode } from '@chakra-ui/react'

export const NavBar = () => {

  // Cambiar el tema entre oscuro/claro 
  const { toggleColorMode, colorMode } = useColorMode();  
  const currentTheme = useColorMode().colorMode

  return (
    <div>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={currentTheme === "dark" ? "dark" : 'light'}>
        <div className= "container-fluid">
          
          {/* Logo */}
          <a href="/home"><img className={styles.imgLogo} src={Logo} alt='Logo My Seam'/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
            {/* Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/create">Crear producto</a>
              </li>

              {/* Categorías */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Servicios</a></li>
                  <li><a className="dropdown-item" href="#">Productos</a></li>
                  <li><a className="dropdown-item" href="#">Ofertas</a></li>
                </ul>
              </li>

              {/* Mi perfil */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mi perfil
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mis ventas</a></li>
                  <li><a className="dropdown-item" href="#">Mis compras</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Configuración</a></li>
                </ul>
              </li>
            </ul>

            <SearchBar  />

            <IconButton rounded="full" onClick={toggleColorMode} className={styles.buttonTheme}
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} />
        
          </div>
        </div>
      </nav>      
    </div>
  )
}
