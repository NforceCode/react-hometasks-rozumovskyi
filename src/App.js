import React, { Component } from 'react';
import styles from './App.module.scss';
import Calendar from './components/Calendar';
import SquadHelp from './pages/SquadHelp';

class App extends Component {

  render() {
    return (
      <div>
        <Calendar/>
        {/* <SquadHelp/> */}
      </div>
    );
  }
}

export default App;
