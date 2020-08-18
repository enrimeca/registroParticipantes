import React from 'react'
import '../assets/styles/App.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Participants from '../containers/Participants'
import ParticipantNew from '../containers/ParticipantNew'
import NotFound from '../containers/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch> 
          <Route exact path="/participantes" component = { Participants } />
          <Route exact path="/participantes/new" component = { ParticipantNew } /> 
          <Route component = {NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App
