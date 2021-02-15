import React from 'react';
import CurrentMonth from './CurrentMonth';
import Weeks from './Weeks';
import './CurrentMonthCard.css';
import { format } from 'date-fns';

const CurrentMonthCard = (props) => {
  const {
    date,
    numberOfWeeks,
    weekStructure,
    monthDays,
    selectDate,
  } = props;

  // console.log(monthDays)
  return (
    <div className='current-month-card'>
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
