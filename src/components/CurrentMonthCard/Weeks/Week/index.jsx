import { format } from 'date-fns';
import React from 'react';
import Day from './Day';
import './week.css';

const Week = (props) => {
  const { weekDataType, weekData, selectDate } = props;

  const renderWeek = (typeOfRender, weekData = undefined) => {
    if (typeOfRender === 'daysOfWeek') {
      return (
        <>
          {weekData.map((day) => (
            <Day key={day} className='week-day' isRendered={true} id={day}>
              {day.charAt(0)}
            </Day>
          ))}
        </>
      );
    }

    const [day] = weekData;

    return (
      <>
        {weekData.map((day, index) => (
          <Day
            key={day === null ? `Null${index}` : format(day.day, 'dMMM')}
            isSelected={day === null ? false : day.isSelected}
            className={`month-day${
              day !== null && day.isSelected ? ' day-selected' : ''
            }`}
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
    <div className='week-container'>
      {renderWeek(weekDataType, weekData)}
    </div>
  );
};

export default Week;
