import React from 'react'
import '../assets/styles/App.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout'
import Home from '../containers/Home'
import Participants from '../containers/Participants'
import ParticipantNew from '../containers/ParticipantNew'
import ParticipantEdit from '../containers/ParticipantEdit'
import ParticipantDetails from '../containers/ParticipantDetails'
import NotFound from '../containers/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch> 
          <Route exact path="/" component = { Home } />
          <Route exact path="/participantes" component = { Participants } />
          <Route exact path="/participantes/new" component = { ParticipantNew } /> 
          <Route exact path="/participantes/:participanteId" component = { ParticipantDetails } /> 
          <Route exact path="/participantes/:participanteId/edit" component = { ParticipantEdit } /> 
          <Route component = {NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App
