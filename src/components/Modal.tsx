import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SignInForm from './Auth/SignInForm';
import SignUpForm from './Auth/SignUpForm';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '60%',
  overflowY: 'scroll',
};
export type ModalProps = {
  openModal: boolean;
  handleClose: () => void;
};

export default function BasicModal({ handleClose, openModal }: ModalProps) {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ fontFamily: 'Open Sans Condensed' }}
          >
            Sign in
          </Typography>
          <SignInForm />
          {signUp ? (
            <div id='signup'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Button
                  onClick={() => setSignUp(!signUp)}
                  variant='contained'
                  sx={{ marginBottom: '5%', fontFamily: 'Open Sans Condensed' }}
                >
                  I have an account
                </Button>
              </div>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h2'
                sx={{ fontFamily: 'Open Sans Condensed' }}
              >
                Sign up
              </Typography>
              <SignUpForm />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Open Sans Condensed', marginBottom: '2%' }}
              >
                Don't have an account?
              </Typography>
              <Button
                href='#signup'
                variant='contained'
                sx={{ fontFamily: 'Open Sans Condensed' }}
                onClick={() => setSignUp(!signUp)}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
