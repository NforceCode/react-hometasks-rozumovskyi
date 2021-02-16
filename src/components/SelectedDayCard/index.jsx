import React from 'react';
import styles from './SelectedDayCard.module.css'
import cx from 'classnames'

const SelectedDayCard = (props) => {
  const {weekday, dayNumber} = props;
  return (
    
    <div className={cx(styles['selected-day-card'])}>
      <h2>{weekday}</h2>
      <p>{dayNumber}</p>
    </div>
  );
}

export default SelectedDayCard;
