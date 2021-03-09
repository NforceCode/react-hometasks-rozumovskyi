import React, { Component } from 'react';
import SignUpForm from 'components/forms/SquadHelp/SignUpForm';
import styles from './SquadHelpSignUp.module.scss';
import { Link, useHistory } from 'react-router-dom';



const SignUp = props => {

  const  history = useHistory();

  const submitSignup = (values, actions) => {
    history.push('/squadhelp');
    alert(`Signup complete!`);
  }

  document.title = 'SignUp';

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>create an account</h2>
        <p className={styles.subHeading}>Dont worry, we have your data already.</p>
        <SignUpForm onSubmit={submitSignup} />
      </div>
    </>
  );
};

export default SignUp;
