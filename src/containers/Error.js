import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/containers/NotFound.scss'

function Error(props) {
  return (
      <Fragment>
        <div className="notfound">
            <h1>Ooops!!</h1>
              <h2>{props.error.message}</h2>        
            <Link className="btn btn-primary" to="/">Ir al Inicio</Link>
        </div>
      </Fragment>           
  )
}

export default Error
