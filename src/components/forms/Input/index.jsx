import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';
import cx from 'classnames';

const Input = ({ name, type,labelClassNames,  ...rest }) => {

  const container = cx (styles.inputContainer, labelClassNames)
  return (
    <label className={container}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.invalidInput]: meta.touched && meta.error,
          });

          return (
            <input type={type} {...field} className={classNames} {...rest} />
          );
        }}
      </Field>
      <ErrorMessage name={name} component='span' className={styles.errorMessage} />
    </label>
  );
};

export default Input;
