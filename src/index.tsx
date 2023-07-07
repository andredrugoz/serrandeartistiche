import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import './assets/styles.css'
import './assets/custom.scss'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
