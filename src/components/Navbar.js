import React, { Component } from 'react'
import logo from '..//assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top navbar-custom">
          <div className="container">

            <img src={ logo } alt='logo' />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/participantes/new">Registrar</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/participantes">Participantes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Link</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}
