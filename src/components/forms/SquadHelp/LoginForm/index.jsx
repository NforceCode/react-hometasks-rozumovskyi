import React from 'react';
import { Field, Form, Formik } from 'formik';
import Input from 'components/forms/Input';
import { LOG_IN_SCHEMA } from 'utils/validationSchemas';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { LOG_IN_INITIAL_VALUES } from 'constants/SquareHelp';
import Checkbox from 'components/forms/Checkbox';

const LoginForm = props => {
  return (
    <Formik
      initialValues={LOG_IN_INITIAL_VALUES}
      validationSchema={LOG_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form className={styles.form}>
        <Input type='email' placeholder='Email Adress' name='email' />
        <Input type='password' placeholder='Password' name='password' />
        <div className={styles.loginHelpers}>
          <Checkbox name='rememberUser' description='Remember Me' />
          <Link className={styles.inlineLink} to='/squadhelp/passwordrecovery'>
            {' '}
            forgot password
          </Link>
        </div>
        <Field
          className={styles.submit}
          name='submit'
          type='submit'
          value='Login'
        />
      </Form>
    </Formik>
  );
};

export default LoginForm;
