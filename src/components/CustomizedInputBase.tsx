import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: { lg: '400px', xs: '100vw' },
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: 'Open Sans Condensed',
          fontSize: '18px',
        }}
        placeholder='Search Products'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
