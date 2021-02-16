import React from 'react';
import styles from './CurrentMonth.module.css'

const CurrentMonth = (props) => {
  const {date: {month, year}} = props;
  return (
    <h2>{`${month} ${year}`}</h2>
  );
}

export default CurrentMonth;