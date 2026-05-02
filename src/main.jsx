import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/index'
import Licenses from './pages/licenses'
import Privacidad from './pages/privacidad'
import Terminos from './pages/terminos'
import './styles/globals.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname
      if (path === '/licenses') {
        setCurrentPage('licenses')
      } else if (path === '/privacidad') {
        setCurrentPage('privacidad')
      } else if (path === '/terminos') {
        setCurrentPage('terminos')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handleRouteChange)
    handleRouteChange()

    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  if (currentPage === 'licenses') return <Licenses />
  if (currentPage === 'privacidad') return <Privacidad />
  if (currentPage === 'terminos') return <Terminos />
  return <Home />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
