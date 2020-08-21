import React, { useState, useEffect, Fragment } from 'react'

import '../assets/styles/containers/ParticipantEdit.scss'

import Participant from '../components/Participant'
import ParticipantForm from '../components/ParticipantForm'
import api from '../api';
import Loader from '../components/Loader'

const ParticipantEdit = (props) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [formData, setformData] = useState({
    name : '',
    lastName : '',    
    email : '', 
    twitter: 'twitter',
    job : ''
  })

  useEffect(() => {
    
    setLoading(true)
    setError(null)

    const fetchData = async e => {
      try {
        const data = await api.participants.read(props.match.params.participanteId)
        
        setLoading(false)
        setformData({
          ...formData,
          name : data.name,
          lastName : data.lastName,    
          email : data.email, 
          twitter :'twitter',
          job : data.job
        })
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }

    fetchData()
  }, [])

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
      await api.participants.update(props.match.params.participanteId,formData);
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
      <div className='ParticipantEdit__hero'></div>

      <div className='container'>
        <div  className='row mt-4'>          
          <div className='col-md mb-5'>
            <h1>Editar Participante</h1>
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

export default ParticipantEdit