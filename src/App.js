import React, { Component } from 'react';
import './App.css';
import CurrentMonthCard from './components/CurrentMonthCard';
import SelectedDayCard from './components/SelectedDayCard';
import {
  format,
  startOfMonth,
  endOfMonth,
  getWeeksInMonth,
  eachWeekOfInterval,
  eachDayOfInterval,
  eachWeekendOfInterval,
} from 'date-fns';

const startingDate = new Date();
const STARTING_DAY = 0;
const WEEKS_IN_MONTH = getWeeksInMonth(startingDate, {
  weekStartsOn: STARTING_DAY,
});

const startWeeksofMonth = eachWeekOfInterval(
  { start: startOfMonth(startingDate), end: endOfMonth(startingDate) },
  { weekStartsOn: STARTING_DAY }
);
const endWeeksofMonth = eachWeekendOfInterval(
  { start: startOfMonth(startingDate), end: endOfMonth(startingDate) },
  { weekStartsOn: STARTING_DAY }
);

const extendedMonth = eachDayOfInterval({
  start: startWeeksofMonth[0],
  end: endWeeksofMonth[endWeeksofMonth.length - 1],
});

const weekStructure = eachDayOfInterval({
  start: extendedMonth[0],
  end: extendedMonth[6],
}).map((day) => format(day, 'EEEE'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: startingDate,
      currentMonth: extendedMonth.map((day) => ({
        day: day,
        isSelected: format(startingDate, 'd M') === format(day, 'd M'),
        isSelectedMonthName:
          format(startingDate, 'MMMM') === format(day, 'MMMM'),
      })),
    };
  }

  updateCurrentMonth = (month) => {
    this.setState({ currentMonth: month });
  };
  selectDate = (id) => {
    const { currentMonth } = this.state;

    const currentMonthCopy = [...currentMonth];

    const newCurrentMonth = currentMonthCopy.map((currentDay) => ({
      ...currentDay,
      isSelected: format(currentDay.day, 'd MMMM') === id ? true : false,
    }));

    this.updateCurrentMonth(newCurrentMonth);

    for (const date of newCurrentMonth) {
      if (date.isSelected) {
        this.setState({ selectedDate: date.day });
        return;
      }
    }
  };

  render() {
    const { selectedDate, currentMonth } = this.state;
    return (
      <>
        <main className='app-container'>
          <SelectedDayCard
            weekday={format(selectedDate, 'iiii')}
            dayNumber={format(selectedDate, 'd')}
          />
          <CurrentMonthCard
            weekStructure={weekStructure}
            numberOfWeeks={WEEKS_IN_MONTH}
            date={selectedDate}
            monthDays={currentMonth}
            selectDate={this.selectDate}
          />
        </main>
      </>
    );
  }
}

export default App;
