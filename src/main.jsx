import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createGlobalStyle, ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const theme = {
  colors: {
    primary: "green",
    backgroundPrimary: "black",
    secondary: "black",
    backgroundSecondary: "white",
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
