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
          padding: '50px',
          fontWeight: '800',
        }}
      >
        {word}
      </Paper>
    </div>
  );
}

export default MemoCard