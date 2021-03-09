import * as Yup from 'yup';
import { USER_TYPE } from 'constants/SquareHelp';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Please enter valid Name')
  .required();

export const DISPLAY_NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][\w!#$%^&*-]{1,64}$/, 'Please enter valid Display Name')
  .required('Display name is required');

export const EMAIL_SCHEMA = Yup.string()
  .email('Please enter valid E-mail')
  .required('Email is required');

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Password must be at least 8 letters, with capital letters and special symbols'
  )
  .required('Password is required');

export const LOG_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  rememberUser: Yup.boolean().oneOf([true, false]),
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: DISPLAY_NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('You need to confirm your password'),
  userType: Yup.string()
    .oneOf(USER_TYPE)
    .required('You must choose your role'),
  isSubscribed: Yup.boolean().oneOf([true], 'You must subscribe to spam wave').required(),
});
