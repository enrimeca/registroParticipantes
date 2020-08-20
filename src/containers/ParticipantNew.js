import React, { useState, Fragment } from 'react'

import '../assets/styles/containers/ParticipantNew.scss'

import Participant from '../components/Participant'
import ParticipantForm from '../components/ParticipantForm'
import api from '../api';
import Loader from '../components/Loader'
// import Error from '../containers/Error';


const ParticipantNew = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [data, setData] = useState([])

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
    // this.setState({ loading: true, error: null });
    setLoading(true)
    setError(null)

    try {
      console.log('enviando data en ParticipantNew.js :', formData)
      await api.participants.create(formData);
      // this.setState({ loading: false });
      setLoading(false)

      props.history.push('/participantes')

    } catch (error) {
      // this.setState({ loading: false, error: error });
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