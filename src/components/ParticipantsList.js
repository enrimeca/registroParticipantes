import React, { Component } from 'react'
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
        </div>
      </div>
    );
  }
}

class ParticipantsList extends Component {
  render(){

    if(this.props.participants.length === 0){
      return(
        <div>
          <h3>No encontramos a nadie registrado</h3>
          <Link className="btn btn-primary" to="/participantes/nuevo">
            Registrar
          </Link>
        </div>
      )
    }

    return (
      <div className="ParticipantsList">
        <ul className="list-unstyled">
          {this.props.participants.map(participant => {
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
}

export default ParticipantsList
