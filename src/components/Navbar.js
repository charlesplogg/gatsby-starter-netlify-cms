import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar has-shadow is-spaced">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to={`/`}>
            Home
          </Link>
          <Link className="navbar-item" to={`/`}>
            Explore
          </Link>
          <Link className="navbar-item" to={`/`}>
            About
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to={`/`}>
            Login
          </Link>
          <div className="navbar-item">
            <p className="control">
              <a className="button is-primary">
                <span>Publish an event</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
