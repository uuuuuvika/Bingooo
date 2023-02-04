import './BingoCell.css';

function BingoCell({ index, onClick, quoteObj, darkMode }) {
    const className = (index === "22"
        ? "btn cell btn-warning central" 
        : darkMode && !quoteObj.isClicked
            ? "btn reversed cell"
            : (quoteObj.isClicked
                ? "btn btn-warning cell"
                : "btn cell"));
    return (
        <button className={className} onClick={onClick}>
            {quoteObj.quote}
        </button>

    )
}

export default BingoCell;