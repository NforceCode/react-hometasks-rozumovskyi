import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './logo.png';
const SquadHelpHeader = props => {
  const { pageLink } = props;
  return (
    <nav>
      <ul className={styles.nav}>
        <Link to='/squadhelp'>
          <img src={logo} alt='Squad Help' />
        </Link>

        {pageLink}
      </ul>
    </nav>
  );
};

export default SquadHelpHeader;
