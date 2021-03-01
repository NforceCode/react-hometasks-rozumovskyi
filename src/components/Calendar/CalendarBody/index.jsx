import React from 'react';
import styles from './CalendarBody.module.scss';
import PropTypes from 'prop-types';
import { format, addDays, startOfWeek, startOfMonth } from 'date-fns';
import Month from '../Month';
import Day from '../Day';
import { mdiForward } from '@mdi/js';
import Icon from '@mdi/react';

const WeekHeadings = (props) => {
  const { startDate, options } = props;

  const buildWeekHeading = () => {
    return Array(7)
      .fill(startDate)
      .map((date, index) => {
        return (
          <Day key={index} renderWeekDays dayDate={date} index={index} options={options}/>
        );
      });
  };

  return (
    <div className={styles.weekHeadingsContainer}>{buildWeekHeading()}</div>
  );
};

const CalendarBody = (props) => {
  const {
    currentDay,
    isOtherMonthsRendered,
    weeksInMonths,
    changeDay,
    changeMonth,
    checkMonth,
    options,
  } = props;
  // первый день недели в первой недели месяца с учетом изменяемого первого дня недели
  const firstDayOfWeekInMonth = startOfWeek(startOfMonth(currentDay), options);
  return (
    
    <div className={styles.calendarWrapper}>
      <button onClick={()=>{changeMonth(-1)}} className={styles.btn}>
        <Icon path={mdiForward} size={1} horizontal/>
      </button>
      <div className={styles.calendarBody}>
        <h2 className={styles.heading}>{format(currentDay, 'LLLL yyyy', options)}</h2>
        <WeekHeadings
          startDate={addDays(firstDayOfWeekInMonth, 0)}
          options={options}
        />
        <Month
          currentDay = {currentDay}
          firstDay={firstDayOfWeekInMonth}
          weeksInMonth={weeksInMonths}
          isOtherMonthsRendered={isOtherMonthsRendered}
          changeDay={changeDay}
          checkMonth={checkMonth}
        />
      </div>
      <button onClick={()=>{changeMonth(1)}} className={styles.btn}>
        <Icon path={mdiForward} size={1}/>
      </button>
    </div>
  );
};



const optionsPropTypes = PropTypes.shape({
  locale: PropTypes.object,
  weekStartsOn: PropTypes.number
})

WeekHeadings.propTypes = {
  startDate: PropTypes.object,
  options: optionsPropTypes
}

CalendarBody.propTypes = {
  currentDay: PropTypes.object,
  isOtherMonthsRendered: PropTypes.bool,
  weeksInMonths: PropTypes.number,
  changeDay: PropTypes.func,
  changeMonth: PropTypes.func,
  checkMonth: PropTypes.func,
  options: optionsPropTypes,
};

export default CalendarBody;
