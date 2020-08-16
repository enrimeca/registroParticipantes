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
            src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            alt="Avatar"
          />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div className="Participant__section-info">
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className="Participant__footer">#platziconf</div>
      </div>
    )
  }
}
