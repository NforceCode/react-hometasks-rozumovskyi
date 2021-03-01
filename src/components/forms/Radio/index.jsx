import React from 'react';
import { Field } from 'formik';
import styles from './Radio.module.scss';

const Radio = props => {
  const { name, text, smallText, value } = props;
  return (
    <label className={styles.radioContainer}>
      <span>
        <Field type='radio' name={name} value={value} />{' '}
        <span className={styles.text}>{text}</span>
      </span>
      <span className={styles.smallText}>{smallText}</span>
    </label>
  );
};

export default Radio;
