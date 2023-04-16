import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller, useController } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { name, form, label, disabled } = props;
  const { control } = form;

  const {
    field: { ref, ...inputProps },
    meta: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
  });

  console.log(invalid);

  return (
    <TextField
      label={label}
      {...inputProps}
      inputRef={ref}
      fullWidth
      variant='outlined'
      error={invalid}
      disabled={disabled}
    />
  );
}

export default InputField;
