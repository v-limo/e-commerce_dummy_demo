import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="categories">Category</Link>
        </li>

        <li>
          <Link to="products">Products</Link>
        </li>

        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  )
}

export default NavBar
