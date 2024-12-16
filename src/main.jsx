import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Bmi } from './Component/Bmi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Bmi />
  </StrictMode>,
)
