import React from 'react';
import { Field, Form, Formik } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';
import InputGroup from 'components/forms/InputGroup';
import RadioGroup from 'components/forms/RadioGroup';
import styles from './SignUpForm.module.scss';
import { Link } from 'react-router-dom';
import {
  USER_DATA,
  SIGN_UP_INITIAL_VALUES,
  SIGN_UP_DATA,
} from 'constants/SquareHelp';
import Checkbox from 'components/forms/Checkbox';

const signupRadioGroup = {
  name: 'userType',
  settings: USER_DATA.map(user => ({
    value: user.type,
    text: `You are ${user.type}`,
    smallText: user.description,
  })),
};

const SignUpForm = props => {
  return (
    <Formik
      initialValues={SIGN_UP_INITIAL_VALUES}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form className={styles.form}>
        <InputGroup
          inputData={SIGN_UP_DATA}
          labelClassNames={styles.inputContainer}
        />
        <RadioGroup radioData={signupRadioGroup} />

        <Checkbox
          name='isSubscribed'
          description='Allow us to send you spam from time to time'
        />

        <Field
          className={styles.submit}
          name='submit'
          type='submit'
          value='Create account'
        />
        <p>
          By clicking this button you agree to our{' '}
          <Link className={styles.inlineLink} to='/squadhelp/tos'>Terms of Service</Link>{' '}
          <span style={{ fontSize: '5px' }}>
            and give us your house, all savings and your soul
          </span>
        </p>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
