import React from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';

const InputGroup = props => {
  const { inputData, labelClassNames } = props;
  return (
    <>
      {inputData.map(input => (<Input key={input.name} type={input.type} name={input.name} labelClassNames={labelClassNames} {...input}/>))}
    </>
  );
};

InputGroup.propTypes = {
  inputData : PropTypes.array,
};


export default InputGroup;



