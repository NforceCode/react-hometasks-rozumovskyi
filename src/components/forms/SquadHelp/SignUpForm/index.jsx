import React from 'react';
import { Field, Form, Formik } from 'formik';
import Input from '../../Input';
import Radio from '../../Radio';
import { SIGN_UP_SCHEMA } from '../../../../utils/validationSchemas';

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  role: '',
};

const SignUpForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form>
        <Input type='text' name='firstName' placeholder='First name' />
        <Input type='text' name='lastName' placeholder='Last name' />
        <Input type='text' name='displayName' placeholder='Display name' />
        <Input type='text' name='email' placeholder='Email adress' />
        <Input type='text' name='password' placeholder='Password' />
        <Input
          type='text'
          name='passwordConfirmation'
          placeholder='Password Confirmation'
        />

        <Radio
          name='role'
          text='You are buyer'
          smallText='lorem lorem lorem'
          value='creative'
        />
        <Radio
          name='role'
          text='You are creator'
          smallText='merol merol merol'
          value='buyer'
        />

        <label>
          <input type='checkbox' /> Allow us to send you spam
        </label>
        <Field name='submit' type='submit' value='Create account' />
        <p>
          By clicking this button you agree to our <a>Terms of Service</a>{' '}
          <span style={{ fontSize: '5px' }}>and your soul</span>
        </p>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
