import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import "./plain/components/css/style.css"
// import './index2.css'
// import './plain/components/css/style.css'
// import App from './wednesday/App'
import App from './plain/App'
// import App from './challenge2/app'
// import App from './challenge/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics /> 
    </BrowserRouter>
  </StrictMode>
)