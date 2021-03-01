import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SquadHelpHeader from '../../components/forms/SquadHelp/Header';
import LoginForm from '../../components/forms/SquadHelp/LoginForm';
import SignUpForm from '../../components/forms/SquadHelp/SignUpForm';
import Login from './SquadHelpLogin';
import SignUp from './SquadHelpSignUp';
import styles from './SquadHelp.module.scss';

class SquadHelp extends Component {
  render () {
    return (
      <div className={styles.body}>
        <SquadHelpHeader />
        <Switch>
          <Route exact path='/squadhelp'>
            <h2>Under Construction</h2>
          </Route>
          <Route path='/squadhelp/signup' component={SignUp} />
          <Route path='/squadhelp/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default SquadHelp;
