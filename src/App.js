import logo from './logo.svg';
import React from 'react';
import './App.css';
import TextInput from './TextInput';
import MemoCardWrap from './MemoCardWrap';

function App() {
  const [didSettingDone, setDidSettingDone] = React.useState(false);
  const [words, setWords] = React.useState([]);
  function setDidSettingDoneFlag(flag) {
    setDidSettingDone(flag);
  }
  const addWords = (word) => {
    if (words.includes(word) || word == '') return;
    setWords(words => [...words, word]);
  }
  const deleteWord = (idx) => {
    console.log("del :", idx);
    setWords(words.filter((num, i) => i !== idx));
  }
  return (
    <div className="App">
      <div class="title-container">
        <h1 class="title">Memorize-Your-Words</h1>
      </div>
      {!didSettingDone ? <TextInput setSettingDoneFlag={setDidSettingDoneFlag} setWords={addWords} words={words} /> : <MemoCardWrap words={words} deleteWord={deleteWord}/>}
    </div>
  );
}

export default App;
