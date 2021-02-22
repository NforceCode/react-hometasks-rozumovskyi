import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarControls.module.scss';
import { format, addDays ,startOfWeek} from 'date-fns';

const CalendarControls = (props) => {
  const {weekStartsOn,isChecked,changeDay, changeLocale, changeMonthRender, changeStartOfWeek, options} = props;

  const renderWeekOptions = () => {
    return Array(7).fill(null).map((_,index) => {
      return <option key={index} value={index}>{format(addDays(startOfWeek(new Date()) ,index), 'EEEE' , options)}</option>
    })
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={()=>{changeDay(new Date())}}>Go to Today</button>
      <label>Select Language:&nbsp; 
        <select name='locale' onChange={(e)=>{changeLocale(e)}} defaultValue='en'>
          <option value='ru'>ru</option>
          <option value='en'>en</option>
          <option value='uk'>ukr</option>
        </select>
      </label>
      <label>Is other month days rendered:&nbsp;
        <input type='checkbox' checked={isChecked} onChange={changeMonthRender}/>
      </label>
      <label>Select starting Day of week:&nbsp;
      <select name='startOfWeek' onChange={(e)=>{changeStartOfWeek(Number(e.target.value))}} value={weekStartsOn}>
          {renderWeekOptions()}
        </select>
      </label>
    </div>
  );
};


CalendarControls.propTypes = {
  weekStartsOn: PropTypes.number,
  isChecked: PropTypes.bool,
  changeDay: PropTypes.func,
  changeLocale: PropTypes.func,
  changeMonthRenderer: PropTypes.func,
  changeStartOfWeek: PropTypes.func,
  options: PropTypes.shape({
    locale: PropTypes.object,
    weekStartsOn: PropTypes.number
  })
};


export default CalendarControls;
