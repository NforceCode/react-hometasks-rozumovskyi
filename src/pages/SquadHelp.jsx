import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SquadHelpHeader from '../components/forms/SquadHelp/Header'
import LoginForm from '../components/forms/SquadHelp/LoginForm'

class SquadHelp extends Component {
  render () {
    return (
      <Router>
        <SquadHelpHeader />

        <article>
          <Switch>
            <Route exact path='/'>
              <h2>Log in to your account</h2>
              <LoginForm />
            </Route>
            <Route exact path='/signup'>
              <h2>Create your account</h2>
              {/* <SignUpForm /> */}
            </Route>
          </Switch>
        </article>
      </Router>
    )
  }
}

export default SquadHelp
