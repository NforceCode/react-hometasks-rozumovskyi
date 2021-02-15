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

const startOfCurrentMonth = startOfMonth(startingDate);
const endOfCurrentMonth = endOfMonth(startingDate);
const weeksInMonth = getWeeksInMonth(startingDate, {
  weekStartsOn: STARTING_DAY,
});

const fullCurrentMonth = eachDayOfInterval({
  start: startOfCurrentMonth,
  end: endOfCurrentMonth,
});

const startWeeksofMonth = eachWeekOfInterval(
  { start: startOfCurrentMonth, end: endOfCurrentMonth },
  { weekStartsOn: STARTING_DAY }
);
const endWeeksofMonth = eachWeekendOfInterval(
  { start: startOfCurrentMonth, end: endOfCurrentMonth },
  { weekStartsOn: STARTING_DAY }
);

const extendedMonth = eachDayOfInterval({
  start: startWeeksofMonth[0],
  end: endWeeksofMonth[endWeeksofMonth.length-1],
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: startingDate,
      currentMonth: extendedMonth.map((day) => ({
        day: day,
        isSelected: format(startingDate, 'd M') === format(day, 'd M'),
        isSelectedMonthName: format(startingDate, 'MMMM') === format(day, 'MMMM'),
        dayString: format(day, 'd'),
      })),
    };
  }
  
  updateCurrentMonth = (month) =>{
    this.setState({currentMonth: month});
  }
  selectDate = (id) => {
    const { currentMonth } = this.state;

    const currentMonthCopy = [...currentMonth];

    const newCurrentMonth = currentMonthCopy.map((currentDay) => ({
      ...currentDay,
      isSelected: currentDay.dayString === id ? true : false,
    }));

    this.updateCurrentMonth(newCurrentMonth);

    for (const date of newCurrentMonth) {
      if (date.isSelected) {
        this.setState({ selectedDate: date.day });
        return;
      }
    }
  };

  // this.state.day===this.state.selectedDate? true: false


  render() {
    // this.updateCurrentMonth();
    // console.log(this.state.currentMonth);
    // console.log(endWeeksofMonth);
    const { selectedDate, currentMonth } = this.state;
    return (
      <>
        <main className='app-container'>
          <SelectedDayCard
            weekday={format(selectedDate, 'iiii')}
            dayNumber={format(selectedDate, 'd')}
          />
          <CurrentMonthCard
            startOfWeeks={startWeeksofMonth}
            endOfWeeks={endWeeksofMonth}
            startingDayConst={STARTING_DAY}
            numberOfWeeks={weeksInMonth}
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
