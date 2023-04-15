import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/InputField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  avartar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing(2, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm({ onSubmitForm }) {
  const classes = useStyles();
  const schema = yup.object().shape({});

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    console.log('Todo', value);
  };

  const handleErrors = (errors) => {
    console.log('Error Message: ', errors);
  };

  return (
    <div>
      <Avatar className={classes.avartar}>
        <LockOutlined />
      </Avatar>

      <Typography className={classes.title}>Create Account</Typography>

      <form onSubmit={form.handleSubmit(handleSubmitForm, handleErrors)}>
        <InputField name='fullName' label='Full Name' form={form} />
        <InputField name='email' label='Email' form={form} />
        <InputField name='password' label='Password' form={form} />
        <InputField name='retypePassword' label='Retype Password' form={form} />
        <Button
          className={classes.submit}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
