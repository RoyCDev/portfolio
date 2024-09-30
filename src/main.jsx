import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/quicksand';  // Supports weights 300-700
import '@fontsource/comic-mono';

const theme = extendTheme({
  fonts: {
    body: "Comic Mono, monospace",
    ul: "Quicksand Variable, sans-serif"
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
