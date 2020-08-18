import React, { Component } from 'react'
import '../assets/styles/components/Participant.scss'

import confLogo from '../assets/images/badge-header.svg'

export default class Participant extends Component {
  render() {
    return (
      <div className="Participant">
        <div className="Participant__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Participant__section-name">
          <img
            className="Participant__avatar"
            // src={this.props.avatarUrl}
            src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            alt="Avatar"
          />
          <h1>
            {this.props.formData.firstName} <br /> {this.props.formData.lastName}
          </h1>
        </div>

        <div className="Participant__section-info">
          <h3>{this.props.formData.jobTitle}</h3>
          <div>{this.props.formData.email}</div>
        </div>

        <div className="Participant__footer">#platziconf</div>
      </div>
    )
  }
}

