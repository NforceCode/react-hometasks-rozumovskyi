import React from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import styles from './SelectedDay.module.scss';


const SelectedDay = (props) => {
  const {currentDay, options} = props;

  return (
    <div className={styles.selectedDay}>
      <h2 className={styles.month}>{format(currentDay, 'EEEE', options)}</h2>
      <p className={styles.day}>{format(currentDay, 'd', options)}</p>
    </div>
  );
};

SelectedDay.defaultProps = {
  currentDay : new Date()
}

SelectedDay.propTypes = {
  currentDay: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.object.isRequired
};


export default SelectedDay;
