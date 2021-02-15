import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: this.props.isRendered,
    };
    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(e) {
    const{selectDate} = this.props;
    const { id } = e.target;
    selectDate(id);
  }

  render() {
    const { children, className ,id} = this.props;
    const { isRendered } = this.state;
    return (
      <p
        className={isRendered ? className : 'transparent'}
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
