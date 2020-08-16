import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Fragment>      
        <Navbar />
        { children }
      </Fragment>
    </div>
  )
}
