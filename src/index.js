import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import GlobalStyles from './styles/GlobalStyles'
import { LoadingProvider } from './context/loading'
import { ForecastProvider } from './context/forecast'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <ForecastProvider>
          <GlobalStyles />
          <App />
        </ForecastProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
