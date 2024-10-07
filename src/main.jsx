import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, extendTheme, textDecoration } from '@chakra-ui/react'
import '@fontsource/comic-mono';
import '@fontsource/chilanka';

const theme = extendTheme({
  styles: {
    global: {
      body: { bg: "black", color: "white" },
      html: { scrollBehavior: "smooth" }
    }
  },
  fonts: {
    body: "'Chilanka', cursive"
  },
  components: {
    Link: {
      baseStyle: {
        fontFamily: "'Comic Mono', monospace",
        _hover: { textDecoration: "none" }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
