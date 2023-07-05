import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
// Configuración Auth0
import { Auth0Provider } from "@auth0/auth0-react";
// Configuración Chakra
import { ChakraProvider } from "@chakra-ui/react";
// Configuración store
import { Provider } from "react-redux";
import store from "./redux/store";
// Configuracion servidor para axios
import axios from 'axios';

const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENTID = import.meta.env.VITE_CLIENTID;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Comprobar si la dirección del backend es válida
const isBackendUrlValid = async (url) => {
  try {
    let c = await fetch(url);
    console.log(c);
    return true; // La dirección del backend es válida
  } catch (error) {
    return false; // La dirección del backend no es válida
  }
};

// Definir la URL del backend predeterminada
let apiUrl = 'http://localhost:3001';

// Verificar si la dirección del backend definida en .env.local es válida
BACKEND_URL && await isBackendUrlValid(BACKEND_URL) && (apiUrl = BACKEND_URL);

axios.defaults.baseURL = apiUrl;

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENTID}
        backendUrl={apiUrl}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </Auth0Provider>
    </StrictMode>
  </Provider>
);
