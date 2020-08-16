import React, { Component } from 'react'

import '../assets/styles/containers/ParticipantNew.css'
import Participant from '../components/Participant'
import header from '../assets/images/badge-header.svg'

export default class ParticipantNew extends Component {
  render() {
    return (
      <div>
        <div className='ParticipantNew__hero'>
          <img className="img-fluid" src={ header } alt='Logo' />
        </div>

        <div className='container'>
          <div  className='row'>
            <div className='col'>
              <Participant />
            </div>

          </div>

        </div>
      </div>
    )
  }
}
