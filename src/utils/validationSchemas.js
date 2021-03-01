import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Please enter valid Name')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Please enter valid E-mail')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Password must contain 8 char and so on...'
  )
  .required();

export const LOG_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});