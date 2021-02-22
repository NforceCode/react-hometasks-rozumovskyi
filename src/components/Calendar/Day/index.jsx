import React from 'react';
import PropTypes from 'prop-types';
import { format , addDays, startOfWeek} from 'date-fns';
import styles from './Day.module.scss';
import cx from 'classnames';

const Day = (props) => {
  const {
    dayDate,
    currentDay,
    changeDay,
    checkMonth,
    isOtherMonthsRendered,
    renderWeekDays,
    index,
    options
  } = props;

  
  if(renderWeekDays) {
    return (
      <div className={cx(styles.day, styles.weekDay)}>
        {format(
          addDays(startOfWeek(dayDate, options), index),
          'EEEEE',
          options
        )}
      </div>
    )
  } 

  const isRendered =
      checkMonth(dayDate) || (isOtherMonthsRendered && !checkMonth(dayDate));
  
    const dayClassNames = cx({
      [styles.day]: true,
      [styles.currentMonthDay]: checkMonth(dayDate),
      [styles.otherMonthDay]: !checkMonth(dayDate) && isOtherMonthsRendered,
      [styles.hiddenDay]: !checkMonth(dayDate) && !isOtherMonthsRendered,
      [styles.selectedDay]: format(dayDate, 'd MMMM') ===format(currentDay, 'd MMMM')
    });

    return (
      <div
        className={dayClassNames}
        onClick={
          isRendered
            ? () => {changeDay(dayDate)}
            : undefined
        }
      >
        {isRendered ? format(dayDate, 'd') : '\u00A0'}
      </div>
    );
};

const optionsPropTypes = PropTypes.shape({
  locale: PropTypes.object,
  weekStartsOn: PropTypes.number
})

Day.propTypes = {
  dayDate: PropTypes.instanceOf(Date),
  currentDay: PropTypes.instanceOf(Date),
  changeDay: PropTypes.func,
  checkMonth: PropTypes.func,
  isOtherMonthsRendered: PropTypes.bool,
  renderWeekDays: PropTypes.bool,
  index: PropTypes.number,
  options: optionsPropTypes,
};

export default Day;
