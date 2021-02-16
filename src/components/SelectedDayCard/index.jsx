import React from 'react';
import styles from './SelectedDayCard.module.css'
import cx from 'classnames'

const SelectedDayCard = (props) => {
  const {weekday, dayNumber} = props;
  return (
    
    <div className={cx(styles['selected-day-card'])}>
      <h2 className={cx(styles.weekday)}>{weekday}</h2>
      <p className={cx(styles.day)}>{dayNumber}</p>
    </div>
  );
}

export default SelectedDayCard;
