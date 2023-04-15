import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

function TodoForm({ onSubmitForm = null }) {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      title: value,
    };

    onSubmitForm?.(newValue);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
