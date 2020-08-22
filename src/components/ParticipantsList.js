import React, { Component, Fragment, useState, useMemo } from 'react'
import '../assets/styles/components/ParticipantsList.scss'
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

class ParticipantsListItem extends Component {
  render() {
    return (
      <div className="ParticipantsListItem">
        <Gravatar
          className="ParticipantsListItem__avatar"
          email={this.props.participant.email}
        />

        <div>
          <strong>
            {this.props.participant.name} {this.props.participant.lastName}
          </strong>
          <br />{this.props.participant.email}
          <br />
          {this.props.participant.job}
          <br />
          <span class="badge badge-info">Editar</span>
        </div>
      </div>
    );
  }
}

function useSearch(participants){

  const [query, setQuery] = useState('')
  const [ filteredParticipants, setfilteredParticipants ] = useState(participants)

  useMemo(()=>{
    const result = participants.filter(participant => {
      return `${participant.name} ${participant.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    setfilteredParticipants(result)
  },[participants,query])

  return { query, setQuery, filteredParticipants }
}

const ParticipantsList = (props) => {
  const participants = props.participants  
 
  const { query,setQuery,filteredParticipants } = useSearch(participants)

  if(filteredParticipants.length === 0){
    return(
      <Fragment>
        <div className="form-group">
          <label>Filtrar Participante :</label>
          <input type='text' className='form-control' 
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>
        <div>
          <h3>No encontramos a nadie registrado</h3>
          <Link className="btn btn-primary" to="/participantes/nuevo">
            Registrar
          </Link>
        </div>
      </Fragment>
    )
  }

    return (
      <div className="ParticipantsList">
        <div className="form-group">
          <label>Filtrar Participante :</label>
          <input type='text' className='form-control' 
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>

        <ul className="list-unstyled">
          {filteredParticipants.map(participant => {
            return (              
              <li key={participant._id}>
                <Link className='text-reset text-decoration-none' to={`/participantes/${participant._id}`}>
                  <ParticipantsListItem participant={participant} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )  
  
}

export default ParticipantsList
