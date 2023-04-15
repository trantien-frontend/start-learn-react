import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const handleSubmitForm = (formValue) => {};
  return (
    <div>
      <RegisterForm onSubmitForm={handleSubmitForm} />
    </div>
  );
}

export default Register;
