import { ErrorMessage } from 'formik';
import React from 'react';
import Radio from '../Radio';
import styles from './RadioGroup.module.scss';

const createRadio = (name, settings) => settings.map(elem => <Radio key={elem.value} name={name} {...elem} />);


const RadioGroup = props => {
  const {
    radioData: { name, settings },
  } = props;
  return (
    <>
      <label className={styles.container}>
        {createRadio(name, settings)}
        <ErrorMessage
          name={name}
          component='span'
          className={styles.errorMessage}
        />
      </label>
    </>
  );
};

export default RadioGroup;
