import React from 'react';
import PropTypes from 'prop-types';
import { format, addDays } from 'date-fns';
import styles from './Week.module.scss';
import Day from '../Day';

const Week = (props) => {
  const {
    startDate,
    currentDay,
    isOtherMonthsRendered,
    checkMonth,
    changeDay,
  } = props;

  const buildWeek = () => {
    return Array(7)
      .fill(null)
      .map((_, index) => {
        const day = addDays(startDate, index);
        return (
          <Day
            key={format(day, 'dMMM')}
            currentDay={currentDay}
            dayDate={addDays(startDate, index)}
            changeDay={changeDay}
            checkMonth={checkMonth}
            isOtherMonthsRendered={isOtherMonthsRendered}
          />
        );
      });
  };

  return <div className={styles.weekContainer}>{buildWeek()}</div>;
};

Week.propTypes = { 
  startDate: PropTypes.instanceOf(Date),
  currentDay: PropTypes.instanceOf(Date),
  isOtherMonthsRendered: PropTypes.bool,
  checkMonth: PropTypes.func,
  changeDay: PropTypes.func,
};

export default Week;
