import React, { useState, Fragment } from 'react'

import fondoHeader from '../assets/images/fondo.jpg'
// import header from '../assets/images/logoGral.png'
import '../assets/styles/containers/ParticipantNew.scss'

import Participant from '../components/Participant'
import ParticipantForm from '../components/ParticipantForm'
import api from '../api';

const ParticipantNew = () => {
  const [formData, setformData] = useState({
    firstName : '',
    lastName : '',    
    email : '', 
    jobTitle : '',    
    gravatar : ''
  })

  const handleChange = e =>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e =>{
    e.preventDefault();  
    this.setState({ loading: true, error: null });

    try {
      await api.participants.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }


    return (
      <Fragment>
        <div className='ParticipantNew__hero'>
          {/* <img className="id-block w-100" src={ fondoHeader } alt='' /> */}
        </div>

        <div className='container'>
          <div  className='row mt-4'>          
            <div className='col-md mb-5'>
              <ParticipantForm
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                formData = {formData}
               />
            </div>
            <div className='col-md mb-5'>
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