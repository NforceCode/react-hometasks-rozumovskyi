import React, { Component } from 'react';
import styles from './App.module.scss';
import Calendar from './components/Calendar';

class App extends Component {

  render() {
    return (
      <div className={styles.appContainer}>
        <Calendar/>
      </div>
    );
  }
}

export default App;
