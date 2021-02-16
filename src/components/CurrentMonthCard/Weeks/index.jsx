import React from 'react';
import Week from './Week';
import { format } from 'date-fns';

const Weeks = (props) => {
  const { numberOfWeeks, selectDate, monthDays, weekStructure } = props;
  const weekDayMap = new Map();
  for (let i = 0; i < weekStructure.length; i++) {
    if (weekDayMap.get(weekStructure[i])) {
      continue;
    }
    weekDayMap.set(weekStructure[i], i);
  }

  const renderWeeks = (weeksArray, renderType) => {
    return (
      <>
        {weeksArray.map((week, index) => (
          <Week
            weekData={week}
            key={renderType === 'daysOfMonth' ? `week${index}` : `weekHeader${index}`}
            weekDataType={renderType}
            selectDate={renderType === 'daysOfMonth' ? selectDate : undefined}
          />
        ))}
      </>
    );
  };

  const getWeeksArray = (numberOfWeeks, monthDays) => {
    let monthDaysCopy = [...monthDays];

    const weeksArray = Array(numberOfWeeks);

    for (let i = 0; i < numberOfWeeks; i++) {
      //для недель
      let weekArray = Array(7).fill(null);
      let deleteCount = 0;

      for (let j = 0; j < 7; j++) {
        if (monthDaysCopy[j]) {
          // для дней недели
          const currentWeekDay = format(monthDaysCopy[j].day, 'EEEE');

          if (
            weekDayMap.has(currentWeekDay) &&
            weekDayMap.get(currentWeekDay) === j &&
            monthDaysCopy[j].isSelectedMonthName
          ) {
            weekArray[j] = monthDaysCopy[j];
          }
          deleteCount++;
        }
      }

      weeksArray[i] = weekArray;
      monthDaysCopy = monthDaysCopy.splice(deleteCount);
    }

    return weeksArray;
  };

  return (
    <section>
      {renderWeeks([weekStructure], 'daysOfWeek')}
      {renderWeeks(getWeeksArray(numberOfWeeks, monthDays), 'daysOfMonth')}
    </section>
  );
};

export default Weeks;
