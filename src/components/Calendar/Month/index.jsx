import React from 'react';
import PropTypes from 'prop-types';
import { addWeeks, format } from 'date-fns';
import Week from '../Week';

const Month = (props) => {
  const {
    firstDay,
    currentDay,
    weeksInMonth,
    isOtherMonthsRendered,
    changeDay,
    checkMonth,
  } = props;

  const buildMonth = (numberOfWeeks) => {
    return Array(numberOfWeeks)
      .fill(null)
      .map((_, index) => {
        return (
          <Week
            key={`Week-${index}-${format(firstDay, 'MMM')}`}
            currentDay={currentDay}
            startDate={addWeeks(firstDay, index)}
            isOtherMonthsRendered={isOtherMonthsRendered}
            changeDay={changeDay}
            checkMonth={checkMonth}
          />
        );
      });
  };

  return (
    <>
      {buildMonth(weeksInMonth)}
    </>
  );
};

Month.propTypes = {
  firstDay: PropTypes.object,
  currentDay: PropTypes.object,
  weeksInMonth: PropTypes.number,
  isOtherMonthsRendered: PropTypes.bool,
  changeDay: PropTypes.func,
  checkMonth: PropTypes.func,
};

export default Month;
