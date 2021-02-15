import React from 'react';
import Week from './Week';
import { format } from 'date-fns';

// const weekDayMap = new Map([
//   ['Sunday', 0],
//   ['Monday', 1],
//   ['Tuesday', 2],
//   ['Wednesday', 3],
//   ['Thursday', 4],
//   ['Friday', 5],
//   ['Saturday', 6],
// ]);

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
    // console.log(weeksArray);
    return (
      <>
        {weeksArray.map((week, index) => (
          <Week
            weekData={week}
            key={index}
            weekDataType={renderType}
            selectDate={renderType === 'daysOfMonth' ? selectDate : undefined}
          />
        ))}
      </>
    );
  };

  const getWeeksArray = (
    numberOfWeeks,
    monthDays,
  ) => {
    let monthDaysCopy = [...monthDays];

    const weeksArray = Array(numberOfWeeks);

    for (let i = 0; i < numberOfWeeks; i++) {
      //для недель
      let weekArray = Array(7).fill(null);
      let deleteCount = 0;

      for (let j = 0; j < 7; j++) {
        if(monthDaysCopy[j]) {
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

    // return Array(numberOfWeeks)
    // .fill(0)
    // .map((week, index) => (
    //   <Week
    //     key={index}
    //     weekDataType='daysOfMonth'
    //     selectDate={selectDate}
    //     weekStart={startingDate}
    //     weekEnd={endingDate}
    //   />
    // ));
  };

  // const weeksToRender = Array(numberOfWeeks)
  //   .fill(0)
  //   .map((week, index) => (
  //     <Week
  //       key={index}
  //       weekDataType='daysOfMonth'
  //       selectDate={selectDate}
  //       weekStart={startOfWeeks}
  //       weekEnd={endOfWeeks}
  //     />
  //   ));
  return (
    <section>
      {renderWeeks([weekStructure], 'daysOfWeek')}
      {renderWeeks(getWeeksArray(numberOfWeeks, monthDays), 'daysOfMonth')}
    </section>
  );
};

export default Weeks;
