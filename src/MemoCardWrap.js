import React from 'react'
import MemoCard from './MemoCard';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';

function MemoCardWrap({ words, deleteWord }) {
  const [wordIdx, setIdx] = React.useState(Math.floor(Math.random() * (words.length)));
  const moveNext = () => {
    var next = wordIdx;
    while (next == wordIdx)
    {
      next = Math.floor(Math.random() * (words.length));
    }
    setIdx(next);
  }
  const onDeleteClick = () => {
    deleteWord(wordIdx);
    setIdx(Math.floor(Math.random() * (words.length - 1)));
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', width: '50vw', height: '100%', marginTop: '10%' }}>
      {words.length === 0 ? <h1>다 외웠다.!</h1> : <MemoCard word={words[wordIdx]} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginTop: '10%' }}>
        <IconButton variant="text" size="large" onClick={() => {
          onDeleteClick();
          // moveNext();
        }}>
          <DeleteIcon />
        </IconButton>
        <IconButton variant="text" size="large" onClick={() => {
          moveNext();
        }}>
          <ReplayIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default MemoCardWrap