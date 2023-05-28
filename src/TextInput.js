import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TextInput.css';

function TextInput({ setSettingDoneFlag, setWords, words }) {
    const [inputText, setInputText] = React.useState('');
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            updateWords();
        }
    };
    const handleChange = (event) => {
        setInputText(event.target.value);
    };
    const updateWords = () => {
        setWords(inputText);
        setInputText('');
    }

    return (
        <div>
            <div class="word-list">
                {words.map(ele => {
                    return (<span key={ele}>{ele}</span>)
                })}
            </div>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="단어 입력" variant="standard" onKeyDown={handleEnter} value={inputText}
                    onChange={handleChange} />
            </Box>
            <div>
                <Button variant="text" onClick={() => {
                    updateWords();
                }}>
                    단어 추가
                </Button>
                <div></div>
                <Button variant="text" onClick={() => {
                    if (words.length < 2) {
                        alert('2개 이상 단어 입력');
                        return;
                    }
                    setSettingDoneFlag(true);
                }}>
                    테스트 시작
                </Button>
            </div>
        </div>
    )
}

export default TextInput