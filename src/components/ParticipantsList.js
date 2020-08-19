import React, { Component } from 'react'
import '../assets/styles/components/ParticipantsList.scss'
import { Link } from 'react-router-dom';

const ParticipantsList = ({stateFetch}) => {
  
  console.log(stateFetch)

    // if(stateFetch.data.length === 0){
    //   return(
    //     <div>
    //       <h3>No encontramos a nadie registrado</h3>
    //       <Link className="btn btn-primary" to="/participantes/nuevo">

    //       </Link>
    //     </div>
    //   )
    // }


    return (
      <div className="ParticipantsList">
        <ul className="list-unstyled">
          {stateFetch.map(participant => {
            return (
              <li key={participant.id}>
                <ParticipantsListItem participant={participant} />
              </li>
            );
          })}
        </ul>
      </div>
    )  
}

class ParticipantsListItem extends Component {
  render() {
    return (
      <div className="ParticipantsListItem">
        <img
          className="ParticipantsListItem__avatar"
          src={participant.avatarUrl}
          alt={`${participant.firstName} ${participant.lastName}`}
        />

        <div>
          <strong>
            {participant.firstName} {participant.lastName}
          </strong>
          <br />{participant.email}
          <br />
          {participant.jobTitle}
        </div>
      </div>
    );
  }
}

export default ParticipantsList
