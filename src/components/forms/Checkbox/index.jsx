import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
  const {name, description} = props;
  return (
    <>
    <label className={styles.container}>
      <Field type='checkbox' name={name}/>
      {` ${description}`}
    <ErrorMessage name={name} component='span' className={styles.errorMessage}/>
    </label>
    </>
  );
}

export default Checkbox;
