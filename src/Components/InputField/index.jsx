import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { name, form, label, disabled } = props;

  const { formState, errors } = form;

  console.log('formState: ', formState);
  console.log('errors: ', errors);

  return (
    <Controller
      as={TextField}
      name={name}
      fullWidth
      control={form.control}
      label={label}
      variant='outlined'
    />
  );
}

export default InputField;
