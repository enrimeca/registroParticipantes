import React from 'react'
import '../assets/styles/App.scss'
import Layout from '../components/Layout'
import ParticipantNew from '../containers/ParticipantNew'

export default function App() {
    return (
        <Layout>
          <ParticipantNew />
        </Layout>
    )
}
