import { useEffect, useState } from 'react';
import './App.css';
import BingoCell from './BingoCell/BingoCell';
import quotes from './quotes.json';
import checkVictory from './checkVictory';
import * as Tone from 'tone';
import clickSound from './Assets/psi-004.wav';
import victorySound from './Assets/psi-009.wav';
import playSound from './makeSound';

function App() {

  const [board, setBoard] = useState(null);
  const [numWinningCombinations, setNumWinningCombinations] = useState(0);
  const [mute, setMute] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setNumWinningCombinations(checkVictory(board));
  }, [board]);

  useEffect(() => {
    let startingBoard = [];
    let cells = quotes.sort(() => Math.random() - 0.5).slice(0, 24).map(quote => {
      return { quote: quote, isClicked: false }
    });
    cells.splice(12, 0, { quote: "CONF CALL BINGO", isClicked: true }); //shuffle & insert middle one
    for (let i = 0; i < cells.length; i += 5) { //split cells into rows and put them in 2D array
      startingBoard.push(cells.slice(i, i + 5));
    }
    setBoard(startingBoard);
  }, []);

  useEffect(() => { //play victory sound
    if (numWinningCombinations != 0 && !mute) {
      playSound(victorySound);
    }
  }, [numWinningCombinations]);

  function handleClick(row, col) {
    console.log(`text[${row}][${col}] = ` + board[row][col].quote);
    board[row][col].isClicked = true;
    setBoard([...board]); //on click rerender the component
    //play click sound effect
    if (!mute) {
      playSound(clickSound);
    }
  }

  async function handleSound() { //mute-unmute
    await Tone.start();
    setMute(!mute);
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className={numWinningCombinations === 0 ? 'container text-center grid' : 'container text-center winning-buzz'} key={numWinningCombinations}>
        <div className='row row-cols-5'>
          {board ? board.flatMap(function (innerArray, row) {
            return innerArray.map(function (quoteObj, col) {
              return (
                <BingoCell
                  key={'' + row + col}
                  index={'' + row + col}
                  quoteObj={quoteObj}
                  onClick={() => { handleClick(row, col) }}>
                </BingoCell>
              )
            })
          }) : null}
        </div>
        <button className='btn btn-dark bottom' onClick={() => {setDarkMode(!darkMode)}}>Dark Mode</button>
        <button className='btn btn-dark bottom' onClick={handleSound}>{mute ? 'Sound' : 'Mute'}</button>
      </div>
    </div>
  );
}

export default App;