import { format } from 'date-fns';
import React from 'react';
import Day from './Day';
import './week.css';

const Week = (props) => {
  const { weekDataType, weekData, selectDate } = props;

  const renderWeek = (typeOfRender, weekData = undefined) => {
    // console.log('weekData', weekData);
    if (typeOfRender === 'dayOfWeek') {
      return (
        <>
          <Day className='week-day' isRendered={true}>
            S
          </Day>
          <Day className='week-day' isRendered={true}>
            M
          </Day>
          <Day className='week-day' isRendered={true}>
            T
          </Day>
          <Day className='week-day' isRendered={true}>
            W
          </Day>
          <Day className='week-day' isRendered={true}>
            T
          </Day>
          <Day className='week-day' isRendered={true}>
            F
          </Day>
          <Day className='week-day' isRendered={true}>
            S
          </Day>
        </>
      );
    }

    const [day] = weekData;
    // console.log(day);

    return (
      <>
        {weekData.map((day, index) => (
          <Day
            key={index} 
            className='month-day'
            isRendered={day === null ? false : true}
            selectDate={selectDate}
            isSelected={day === null ? false : day.isSelected}
          >
            {day === null? ' ':format(day.day,'d')}
          </Day>
        ))}
        {/* <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          1
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          2
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          3
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          4
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          5
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          6
        </Day>
        <Day className='month-day' isRendered={weekData===null? false : true} selectDate={selectDate}>
          7
        </Day> */}
      </>
    );
  };

  return (
    <div className='week-container'>
      {weekDataType === 'daysOfWeek'
        ? renderWeek('dayOfWeek')
        : renderWeek('dayOfMonth', weekData)}
    </div>
  );
};

export default Week;
