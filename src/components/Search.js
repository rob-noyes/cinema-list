import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const style = {
  col: {
    background: '#ffffff',
    borderRadius: '1rem',
  },
};

export default function Search({ setSearchValue }) {
  return (
    <Box sx={style.col}>
      <TextField
        placeholder='Search Movies'
        onChange={(e) => setSearchValue(e.target.value)}
      ></TextField>
    </Box>
  );
}
