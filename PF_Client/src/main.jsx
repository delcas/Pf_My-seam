import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

// Configuración Chakra
import { ChakraProvider } from '@chakra-ui/react'

// Configuración store
import { Provider } from 'react-redux';
import store from './redux/store';

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </StrictMode>
  </Provider>
)

