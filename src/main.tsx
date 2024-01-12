import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Homepage from './components/SideBar.tsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  </React.StrictMode>,
)
