import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SquadHelpHeader extends Component {
  render () {
    return (
      <nav>
        <ul>
          <Link to='/'>
            <span>HOME</span>
          </Link>
          {document.location.pathname === '/' ? (
            <Link to='/signup'>
              <span>Sign Up</span>
            </Link>
          ) : (
            <Link to='/'>
              <span>Login</span>
            </Link>
          )}
        </ul>
      </nav>
    )
  }
}

export default SquadHelpHeader
