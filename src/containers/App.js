import React from 'react'
import '../assets/styles/App.scss'

// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Participants from '../containers/Participants'
// import ParticipantNew from '../containers/ParticipantNew'

export default function App() {
    return (
      // <BrowserRouter>
      //   <Switch>
          <Layout>
            <Participants />
          </Layout>
      // </Switch>        
     // </BrowserRouter> 
    )
}
