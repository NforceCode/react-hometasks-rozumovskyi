import React, { Component } from 'react';
import styles from './Day.module.css';
import cx from 'classnames';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: this.props.isRendered,
    };
    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(e) {
    const { selectDate } = this.props;
    const { id } = e.target;
    selectDate(id);
  }

  render() {
    const { children, className, id ,isSelected} = this.props;
    const { isRendered } = this.state;

    const dayClassNames = cx({
      [styles['month-day']]: isRendered && className.includes('month-day'),
      [styles['week-day']]: isRendered && className.includes('week-day'),
      [styles['day-selected']]: isSelected ,
      [styles['transparent']]: !isRendered,
    })

    return (
      <p
        className={dayClassNames}
        id={id}
        onClick={
          isRendered && className === 'month-day' ? this.selectDay : undefined
        }
      >
        {children || ''}
      </p>
    );
  }
}

export default Day;
