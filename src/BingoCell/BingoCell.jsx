import './BingoCell.css';

function BingoCell({ index, onClick, quoteObj }) {
    const className = (index === "22"
        ? "btn cell btn-warning central"
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