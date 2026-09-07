import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../css/global.css'
import '../css/sobre.css'
import '../css/projetos.css'
import '../css/artigos.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
