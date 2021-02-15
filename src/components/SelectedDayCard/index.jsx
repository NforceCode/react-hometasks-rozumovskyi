import React from 'react';
import './SelectedDayCard.css'

const SelectedDayCard = (props) => {
  const {weekday, dayNumber} = props;
  return (
    
    <div className='selected-day-card'>
      <h2>{weekday}</h2>
      <p>{dayNumber}</p>
    </div>
  );
}

export default SelectedDayCard;
