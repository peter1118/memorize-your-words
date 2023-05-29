import React from 'react'
import { Paper } from '@mui/material';

function MemoCard({ word }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={3}
        sx={{
          width: '50vw',
          height: '10vh',
          fontWeight: '800',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          paddingTop: '3.5vh',
        }}
      >
        {word}
      </Paper>
    </div>
  );
}

export default MemoCard