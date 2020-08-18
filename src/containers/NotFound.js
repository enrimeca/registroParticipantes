import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/containers/NotFound.scss'

function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - No se encuentra la página</h2>
        </div>
        <Link to="/">Ir al Inicio</Link>
      </div>
    </div>
  )
}

export default NotFound
