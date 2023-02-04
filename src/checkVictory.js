function checkVictory(grid) {
    if (grid === null || grid.length === 0) {
        return false;
    }
    let winningCombinations = 0;
    //check rows
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].every(cell => cell.isClicked)) {
            winningCombinations++;
        }
    }
    //check columns
    for (let j = 0; j < grid[0].length; j++) {
        let columnVictoryFlag = true;
        for (let i = 0; i < grid.length; i++) {
            if (!grid[i][j].isClicked) {
                columnVictoryFlag = false;
            }
        }
        if (columnVictoryFlag) {
            winningCombinations++;
        }
    }
    //check diagonals
    let mainDiagonalVictoryFlag = true;
    let secondaryDiagonalVictoryFlag = true;
    for (let i = 0; i < grid.length; i++) {
        // Check main diagonal (top left to bottom right)
        if (!grid[i][i].isClicked) {
            mainDiagonalVictoryFlag = false;
        }
        // Check secondary diagonal (top right to bottom left)
        if (!grid[i][grid.length - 1 - i].isClicked) {
            secondaryDiagonalVictoryFlag = false;
        }
    }
    if (mainDiagonalVictoryFlag) {
        winningCombinations++;
    }
    if (secondaryDiagonalVictoryFlag) {
        winningCombinations++;
    }
    return winningCombinations;
}

export default checkVictory;