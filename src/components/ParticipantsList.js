import React, { Component } from 'react'
import '../assets/styles/components/ParticipantsList.scss'
import { Link } from 'react-router-dom';


class ParticipantsListItem extends Component {
  render() {
    return (
      <div className="ParticipantsListItem">
        <img
          className="ParticipantsListItem__avatar"
          // src={participant.avatarUrl}
          src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
          alt={`${this.props.participant.name} ${this.props.participant.lastName}`}
        />

        <div>
          <strong>
            {this.props.participant.name} {this.props.participant.lastName}
          </strong>
          <br />{this.props.participant.email}
          <br />
          {this.props.participant.jobTitle}
        </div>
      </div>
    );
  }
}

class ParticipantsList extends Component {
  render(){
  console.log('estando en la lista :', this.props.participants)

    if(this.props.participants.length === 0){
      return(
        <div>
          <h3>No encontramos a nadie registrado</h3>
          <Link className="btn btn-primary" to="/participantes/nuevo">
            asdfad
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
                <ParticipantsListItem participant={participant} />
              </li>
            );
          })}
        </ul>
      </div>
    )  
  }
}

export default ParticipantsList
