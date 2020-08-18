import React, { useState, Fragment } from 'react'

import header from '../assets/images/badge-header.svg'
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
    console.log('Form ', formData)    
  }


    return (
      <Fragment>
        <div className='ParticipantNew__hero'>
          <img className="img-fluid" src={ header } alt='Logo' />
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