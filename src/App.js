import { useEffect, useState } from 'react';
import './App.css';
import BingoCell from './BingoCell/BingoCell';
import quotes from './quotes.json';

function App() {

  const [board, setBoard] = useState(null);

  useEffect(() => {
    let twoDBoard = [];
    let initBingo = quotes.sort(() => Math.random() - 0.5).slice(0, 24).map(quote => {
      return { quote: quote, isClicked: false }
    });
    initBingo.splice(12, 0, { quote: "CONF CALL BINGO", isClicked: true }); //shuffle & insert middle one
    for (let i = 0; i < initBingo.length; i += 5) { //2D array
      twoDBoard.push(initBingo.slice(i, i + 5));
    }
    setBoard(twoDBoard);
  }, []);

  function whenCellClicked(row, col) {
    console.log(`text[${row}][${col}] = ` + board[row][col].quote);
    board[row][col].isClicked = true;
    setBoard([...board]);

    console.log(board[row][col]);
  }

  return (
    <div className='container text-center grid'>
      <div className='row row-cols-5'>
        {board ? board.flatMap(function (innerArray, row) {
          return innerArray.map(function (quoteObj, col) {
            return (
              <BingoCell
                key={'' + row + col}
                index={'' + row + col}
                quoteObj={quoteObj}
                onClick={() => {whenCellClicked(row, col)}}>
              </BingoCell>
            )
          })
        }) : null}
      </div>
    </div>
  );
}

export default App;