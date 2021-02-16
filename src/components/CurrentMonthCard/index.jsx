import React from 'react';
import CurrentMonth from './CurrentMonth';
import Weeks from './Weeks';
import styles from './CurrentMonthCard.module.css';
import { format } from 'date-fns';
import cx from 'classnames'

const CurrentMonthCard = (props) => {
  const {
    date,
    numberOfWeeks,
    weekStructure,
    monthDays,
    selectDate,
  } = props;

  return (
    <div className={cx(styles['current-month-card'])}>
      <CurrentMonth
        date={{
          month: `${format(date, 'MMMM')}`,
          year: `${format(date, 'yyyy')}`,
        }}
      />
      <Weeks
        weekStructure={weekStructure}
        numberOfWeeks={numberOfWeeks}
        monthDays={monthDays}
        selectDate={selectDate}
      />
    </div>
  );
};

export default CurrentMonthCard;
