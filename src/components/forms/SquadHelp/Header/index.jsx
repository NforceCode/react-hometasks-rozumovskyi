import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss';
import logo from './logo.png';
class SquadHelpHeader extends Component {
  render () {
    return (
      <nav>
        <ul className={styles.nav}>
          <Link to='/squadhelp'>
            <img src={logo} alt='Squad Help'/>
          </Link>

          <Link to='/squadhelp/signup'>Sign Up</Link>

          <Link to='/squadhelp/login'> Login</Link>
        </ul>
      </nav>
    )
  }
}

export default SquadHelpHeader
