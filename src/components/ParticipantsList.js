import React, { Component } from 'react'
import '../assets/styles/components/ParticipantsList.scss'

class ParticipantsList extends Component {
  render() {
    return (
      <div className="ParticipantsList">
        <ul className="list-unstyled">
          {this.props.participants.map(participant => {
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
}

class ParticipantsListItem extends Component {
  render() {
    return (
      <div className="ParticipantsListItem">
        <img
          className="ParticipantsListItem__avatar"
          src={this.props.participant.avatarUrl}
          alt={`${this.props.participant.firstName} ${this.props.participant.lastName}`}
        />

        <div>
          <strong>
            {this.props.participant.firstName} {this.props.participant.lastName}
          </strong>
          <br />{this.props.participant.email}
          <br />
          {this.props.participant.jobTitle}
        </div>
      </div>
    );
  }
}

export default ParticipantsList
