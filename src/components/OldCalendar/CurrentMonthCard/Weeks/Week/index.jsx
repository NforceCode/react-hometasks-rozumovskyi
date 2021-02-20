import { format } from 'date-fns';
import React from 'react';
import Day from './Day';
import styles from './Week.module.css';
import cx from 'classnames'

const Week = (props) => {
  const { weekDataType, weekData, selectDate } = props;

  const renderWeek = (typeOfRender, weekData = undefined) => {
    if (typeOfRender === 'daysOfWeek') {
      return (
        <>
          {weekData.map((day) => (
            <Day key={day} className={cx('week-day')} isRendered={true} id={day}>
              {day.charAt(0)}
            </Day>
          ))}
        </>
      );
    }

    return (
      <>
        {weekData.map((day, index) => (
          <Day
            key={day === null ? `Null${index}` : format(day.day, 'dMMM')}
            isSelected={day === null ? false : day.isSelected}
            className={cx('month-day', { 'day-selected': day !== null && day.isSelected })}
            isRendered={day === null ? false : true}
            selectDate={selectDate}
            id={day === null ? undefined : format(day.day, 'd MMMM')}
          >
            {day === null ? ' ' : format(day.day, 'd')}
          </Day>
        ))}
      </>
    );
  };

  return (
    <div className={cx(styles['week-container'])}>
      {renderWeek(weekDataType, weekData)}
    </div>
  );
};

export default Week;
