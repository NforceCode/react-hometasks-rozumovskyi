import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Calendar from './components/Calendar';
import SquadHelp from './pages/SquadHelp/SquadHelp';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav >
            <ul className={styles.navLinks}>
              <li>
                <Link to='/calendar'>calendar</Link>
              </li>
              <li>
                <Link to='/squadhelp'>form</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/'>
            </Route>
            <Route exact path='/calendar' component={Calendar} />

            <Route path='/squadhelp' component={SquadHelp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
