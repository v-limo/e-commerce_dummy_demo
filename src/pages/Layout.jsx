import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import './Layout.css'

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
      }}
    >
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
