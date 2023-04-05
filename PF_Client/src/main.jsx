import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
// Configuración Auth0
import { Auth0Provider } from "@auth0/auth0-react";
const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENTID = import.meta.env.VITE_CLIENTID;

// Configuración Chakra
import { ChakraProvider } from "@chakra-ui/react";

// Configuración store
import { Provider } from "react-redux";
import store from "./redux/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENTID}
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
