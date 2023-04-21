import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo_MySeam_full.png';
import { SearchBar } from './SearchBar/SearchBar';
import { Cart } from '../Cart/Cart';
// Chakra
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
// Auth0
import LoginButton from '../Auth0/Logiin/LoginButton';
import LogoutButton from '../Auth0/Logout/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserByEmail } from '../../redux/actions';

export const NavBar = () => {
  // Cambiar el tema entre oscuro/claro
  const { toggleColorMode, colorMode } = useColorMode();
  const currentTheme = useColorMode().colorMode;
  const dispatch = useDispatch();

  // Info de Auth0
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(getUserByEmail(user?.email));
    // dispatch(getProductById(id));
  }, [dispatch]);

  // Estado para mostar elementos de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.mainContainer}>
    {/* NavBar */}
    <nav
      className="navbar navbar-expand-xl bg-body-tertiary"
      data-bs-theme={currentTheme === "dark" ? "dark" : "light"}
    >
    <div className="container-fluid">
      {/* Logo */}
      <Link to={"/home"}>
        <img className={styles.imgLogo} src={Logo} alt="Logo My Seam" />
      </Link>

       {isSmallScreen && <Cart />}
       {isSmallScreen && <SearchBar />}

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

        {/* Vender */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" title="Publicar producto">
            <NavLink className="nav-link active" to="/create">Vender</NavLink>
          </li>

          {/* Categorías */}
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorías
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="/service">
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/home">
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/promotions">
                  Ofertas
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Mi perfil */}
          <li
            className={
              isAuthenticated ? "nav-item dropdown" : styles.hideMiPerfil
            }
          >
            <NavLink
              className="nav-link dropdown-toggle active"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mi perfil
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="/profile">
                  Mi Perfil
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Mis ventas
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Mis compras
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/favourites">
                  Mis favoritos
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Configuración
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink style={{ textDecoration: "none" }} to="/profile">
              {isAuthenticated ? (
                <>
                  <Avatar
                    size="xs"
                    name={user.name}
                    src={user.picture}
                    marginLeft="10px"
                    marginRight="10px"
                  />
                  <u className={styles.userName}> {user.name}</u>
                </>
              ) : (
                ""
              )}
            </NavLink>

               
              </li>
            </ul>

            {!isSmallScreen && <SearchBar />}

            <IconButton
              title= "Cambiar tema"
              rounded= "full"
              onClick={toggleColorMode}
              className={styles.buttonTheme}
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />

            {!isSmallScreen && <Cart />}

            {isAuthenticated ? (
              <>
                {/* <Profile /> */}
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </nav>

    </div>
  );
};







 