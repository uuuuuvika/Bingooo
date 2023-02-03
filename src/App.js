import { useEffect, useState } from 'react';
import './App.css';
import quotes from './quotes.json';

function App() {

  const [board, setBoard] = useState(null);

  useEffect(() => {
    let twoDBoard = [];
    let initBingo = quotes.sort(() => Math.random() - 0.5).slice(0,24).map(quote => {
      return { quote: quote, isClicked: false}
    });
    initBingo.splice(12, 0, { quote: "CONF CALL BINGO", isClicked: true}); //shuffle & insert middle one
    for (let i = 0; i < initBingo.length; i += 5) { //make 2D array
			twoDBoard.push(initBingo.slice(i, i + 5));
		}
    setBoard(twoDBoard);
    console.log(twoDBoard);
  },[])

  return (
    <div className='container text-center grid'>
      <div className='row row-cols-5'>
      {board ? board.flatMap(function (innerArray, row) {
				return innerArray.map(function (element, col) {
					return (
          <button key={''+row+col}>{row}{col} {element.quote}</button>)
				})
			}): null}
      </div>
    </div>
  );
}

export default App;