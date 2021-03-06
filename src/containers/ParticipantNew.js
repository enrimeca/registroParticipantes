import React, { useState, Fragment } from 'react'

import '../assets/styles/containers/ParticipantNew.scss'

import Participant from '../components/Participant'
import ParticipantForm from '../components/ParticipantForm'
import api from '../api';
import Loader from '../components/Loader'

const ParticipantNew = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setformData] = useState({
    name : '',
    lastName : '',    
    email : '', 
    twitter: 'twitter',
    job : ''
  })

  const handleChange = e =>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e =>{
    e.preventDefault();  
    setLoading(true)
    setError(null)

    try {
      await api.participants.create(formData);
      setLoading(false)

      props.history.push('/participantes')

    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  if(loading){
    return <Loader />
  }

  return (
    <Fragment>
      <div className='ParticipantNew__hero'></div>

      <div className='container'>
        <div  className='row mt-4'>          
          <div className='col-md mb-5'>
            <h1>Nuevo Participante</h1>
            <ParticipantForm
              handleChange = {handleChange}
              handleSubmit = {handleSubmit}
              formData = {formData}
              error = {error}
            />
          </div>
          <div className='col-md mb-5'>
            <Participant
              formData={formData}
            />
          </div>
        </div>

      </div>
    </Fragment>
  );
  
}

export default ParticipantNew