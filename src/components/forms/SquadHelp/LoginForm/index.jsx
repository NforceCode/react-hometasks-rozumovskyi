import React, { Component } from 'react'
import { Field, Form, Formik } from 'formik'
import Input from './../../Input'
import { LOG_IN_SCHEMA } from '../../../../utils/validationSchemas'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOG_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {() => {
        return (
          <Form>
            <Input type='email' placeholder='Email Adress' name='email'/>
            <Input type='password' placeholder='Password' name='password'/>
            <div>
             <label><input type='checkbox'/>Remember me</label>
             <a href='#'> forgot password</a>
            </div>
            <Field name='submit' type='submit' value='Login' />
          </Form>
        )
      }}
    </Formik>

  )
}

export default LoginForm
