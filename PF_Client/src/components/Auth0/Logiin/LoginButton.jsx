import React from "react";
import styles from './LoginButton.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button title="Iniciar sesión" className={styles.LoginButton} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
