import React, { useState, Fragment } from 'react'

import fondoHeader from '../assets/images/fondo.jpg'
import header from '../assets/images/logoGral.png'
import '../assets/styles/containers/ParticipantNew.scss'

import Participant from '../components/Participant'
import ParticipantForm from '../components/ParticipantForm'

const ParticipantNew = () => {
  const [formData, setformData] = useState({
    firstName : '',
    lastName : '',    
    email : '', 
    jobTitle : '',    
    gravatar : '',  
  })

  const handleChange = e =>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();   
  }


    return (
      <Fragment>
        <div className='ParticipantNew__hero'>
          <img className="id-block w-100" src={ fondoHeader } alt='' />

          <div class="overlay">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 offset-md-6 text-center text-md-right">
                    <img className="img-fluid" src={ header } alt='Logo' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div  className='row'>          
            <div className='col-md-6 col mb-5'>
              <ParticipantForm
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                formData = {formData}
               />
            </div>
            <div className='col-md-6 col mb-5'>
              <Participant
                formData={formData}
                // firstName = {formData.firstName}
                // lastName = {formData.lastName}
                // email = {formData.email}
                // jobTitle = {formData.jobTitle}
                // gravatar = {formData.gravatar}
              />
            </div>
          </div>

        </div>
      </Fragment>
    );
  
}

export default ParticipantNew