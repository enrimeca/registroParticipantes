import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/containers/Home.scss'
import LogoPrincipal from '../assets/images/logoGral.jpg';

function Home() {
  return (
        <div className="home">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-4 white-text text-center">
                  <h1>Piura Clases</h1>
                  <h2>Registro de Asistencia</h2>        
                  <Link className="btn btn-primary" to="/participantes/new">Empecemos</Link>
                </div>
              </div>
          </div>
        </div>      
  )
}

export default Home
