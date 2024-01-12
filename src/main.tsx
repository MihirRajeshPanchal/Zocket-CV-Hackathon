import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './components/SideBar';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <Homepage />
      </ChakraProvider>
    </React.StrictMode>
  );
}
  <React.StrictMode>
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  </React.StrictMode>

