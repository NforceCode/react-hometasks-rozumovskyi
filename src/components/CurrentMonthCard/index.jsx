import React from 'react';
import CurrentMonth from './CurrentMonth';
import Weeks from './Weeks';
import './CurrentMonthCard.css';
import { format, startOfMonth, endOfMonth } from 'date-fns';

const CurrentMonthCard = (props) => {
  const {
    date,
    numberOfWeeks,
    startingDayConst,
    monthDays,
    selectDate,
    startOfWeeks,
    endOfWeeks
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
        startingDayConst={startingDayConst}
        numberOfWeeks={numberOfWeeks}
        monthDays={monthDays}
        selectDate={selectDate}
        startOfWeeks={startOfWeeks}
        endOfWeeks={endOfWeeks}
      />
    </div>
  );
};

export default CurrentMonthCard;
