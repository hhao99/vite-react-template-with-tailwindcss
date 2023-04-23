import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const ROOT = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(ROOT)
