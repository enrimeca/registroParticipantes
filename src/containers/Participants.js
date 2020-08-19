import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/containers/Participants.scss';
import confLogo from '../assets/images/badge-header.svg';
import ParticipantsList from '../components/ParticipantsList';

import api from '../api'

const Participants = () => {
  const [stateFetch, setstateFetch] = useState({
    loading : true,
    error : null,    
    data : undefined
  })
 
  useEffect(() => {
    fetchData()
  },[])

  async function fetchData (){
    // setstateFetch(true,null,null)
    try {
      const data = await api.participants.list();
      // setstateFetch(false,null,data)
      
    } catch (error) {
      // setstateFetch(false,error,null)
    }
  }

  if(stateFetch.loading === true) {
    return 'Loading...'
  }
  
  return (
    <Fragment>
      <div className="Participants">
        <div className="Participants__hero">
          <div className="Participants__container">
            <img
              className="Participants_conf-logo"
              src={confLogo}
              alt="Conf Logo"
            />
          </div>
        </div>
      </div>

      <div className="Participants__container">
        <div className="Participants__buttons">
          <Link to="/participantes/new" className="btn btn-primary">
            Registrar
          </Link>
        </div>

        {/* <ParticipantsList participants={[]} /> */}
      </div>
    </Fragment>
  );
  
}

export default Participants;