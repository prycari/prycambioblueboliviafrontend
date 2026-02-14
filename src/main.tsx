import './index.css'
import 'leaflet/dist/leaflet.css';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { StyledEngineProvider } from '@mui/material'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>,
)
