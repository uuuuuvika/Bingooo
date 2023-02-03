import './BingoCell.css';

function BingoCell({index, onClick, quoteObj}) {

    return (
        <>
        <button className={index === "22" ? "btn cell btn-warning central" : quoteObj.isClicked ? "btn btn-warning cell" :"btn cell"} onClick={onClick}>
            {index} {quoteObj.quote}
        </button>
        </>
    )
}

export default BingoCell;