import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/InputField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoFormRoute.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

function TodoFormRoute({ onSubmitForm }) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Please field not Empty')
      .min(4, 'Title is short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    console.log(value);
  };

  const handleErrors = (errors) => {};

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm, handleErrors)}>
      <InputField name='title' label='todos' form={form} />
    </form>
  );
}

export default TodoFormRoute;
