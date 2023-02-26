import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Navigations</h3>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="categories">Category</Link>
        </p>
        <p>
          <Link to="products">Products</Link>
        </p>
        <p>
          <Link to="about">About</Link>
        </p>
        <p>
          <Link to="contact">Contact</Link>
        </p>
      </div>

      <div>
        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com">Facebook</a>
        </p>
        <p>
          <a href="https://www.twitter.com">Twitter</a>
        </p>
        <p>
          <a href="https://www.instagram.com">Instagram</a>
        </p>
        <p>
          <a href="https://www.youtube.com">Youtube</a>
        </p>
      </div>

      <div>
        <h3>Address</h3>
        <p>1234 Street Name</p>
        <p>City, ST 12345</p>
        <p>123-456-7890</p>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://www.">Company Name</a>. All rights reserved.
        </p>
        <p>
          <a
            href="mailto:limovincenti@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      </div>

      <div>
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter to get the latest updates.</p>
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
