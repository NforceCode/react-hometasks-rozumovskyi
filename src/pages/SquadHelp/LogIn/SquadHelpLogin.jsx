import React, { Component } from 'react';
import LoginForm from 'components/forms/SquadHelp/LoginForm';
import styles from './SquadHelpLogin.module.scss';

const onLoginSubmit = (values, actions) => {
  alert(`You will be successfully logged in when this feature will be completed(probably never).
  Your credentials: 
  \temail: ${values.email}
  \tpassword: ${values.password}`);
  actions.resetForm();
};

const Login = props => {
  document.title = 'Login to the SquadSpace';

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>LOGIN TO YOUR ACCOUNT</h2>
      <LoginForm  onSubmit={onLoginSubmit} />
    </div>
  );
};

export default Login;
