import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Homepage from './components/SideBar.tsx';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, 
  },
});

ColorModeScript.initialColorMode = { initialColorMode: 'dark' };

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    {/* <Navbar/>
    <App/> */}
    <Homepage />
    </ChakraProvider>

  </React.StrictMode>,
)
