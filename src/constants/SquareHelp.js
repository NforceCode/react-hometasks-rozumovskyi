export const USER_TYPE = ['buyer', 'creator'];
export const USER_DATA = [
  {
    type: USER_TYPE[0],
    description:
      'I am looking for a Name, Logo or Tagline for my business, brand or product.',
  },
  {
    type: USER_TYPE[1],
    description:
      'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
  },
];

export const SIGN_UP_DATA = [
  { type: 'text', name: 'firstName', placeholder: 'First name' },
  { type: 'text', name: 'lastName', placeholder: 'Last name' },
  { type: 'text', name: 'displayName', placeholder: 'Display name' },
  { type: 'email', name: 'email', placeholder: 'Email adress' },
  { type: 'password', name: 'password', placeholder: 'Password' },
  {
    type: 'password',
    name: 'passwordConfirmation',
    placeholder: 'Password Confirmation',
  },
];

export const SIGN_UP_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  userType: '',
  isSubscribed: false,
};

export const LOG_IN_INITIAL_VALUES = {
  email: '',
  password: '',
  remebmerUser: false,
};
