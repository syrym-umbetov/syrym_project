import React, { useContext, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { Auth } from '../../context/Auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(Auth);

  const validateForm = (e: any) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    sendUserData(data);
  };

  function sendUserData(userData: any) {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyA0LeB1ceoO5rAmyZgk-rMY2vTcVbSWaSE`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      )
      .then((data) => {
        setToken(data.data.idToken);
        localStorage.setItem('idToken', data.data.idToken);
      })
      .catch((error) => {
        alert(
          `Failed to Authorize. Error message: ${error.response.data.error.message}`
        );
      });
  }
  console.log(token);
  return (
    <form
      onSubmit={validateForm}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Open Sans Condensed',
      }}
    >
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: '5%', fontFamily: 'Open Sans Condensed' }}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id='filled-basic'
        label='Password'
        variant='filled'
        type='password'
        required
        sx={{ marginBottom: '5%' }}
      />
      <div
        style={{
          display: 'flex',

          alignItems: 'center',
          marginBottom: '5%',
        }}
      >
        <div>
          <Button
            type='submit'
            variant='contained'
            sx={{ fontFamily: 'Open Sans Condensed', marginRight: '50px' }}
          >
            Sign In
          </Button>
        </div>

        <div>
          <Button
            type='submit'
            variant='contained'
            sx={{ fontFamily: 'Open Sans Condensed' }}
            onClick={() => {
              localStorage.clear();
              window.location.href = '/';
            }}
          >
            Log out
          </Button>
        </div>
      </div>
      <Typography sx={{ fontFamily: 'Open Sans Condensed' }}>
        {token ? 'AUTHORISED' : 'NOT AUTHORISED'}
      </Typography>
    </form>
  );
};

export default SignInForm;
