import React, { Component } from 'react'
import '../assets/styles/components/Participant.scss'

import logo from '../assets/images/logo.png'
import Gravatar from './Gravatar';
export default class Participant extends Component {
  render() {
    return (
      <div className="Participant">
        <div className="Participant__header">
          <img src={logo} alt="Piura Clases" />
        </div>

        <div className="Participant__section-name">
          <Gravatar className="Participant__avatar" email={this.props.formData.email} />
          <h1>
            {this.props.formData.name} <br /> {this.props.formData.lastName}
          </h1>
        </div>

        <div className="Participant__section-info">
          <h3>{this.props.formData.job}</h3>
          <div>{this.props.formData.email}</div>
        </div>

        <div className="Participant__footer">Aprendizaje Online</div>
      </div>
    )
  }
}

