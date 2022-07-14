
let currentPlayer = 0;
let moves = 0;
let gameArea = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];
//* Fill the Game Area
function fillGameArea(x, y){
    if(gameArea[x][y] === -1 ){
        gameArea[x][y] = currentPlayer;
        moves ++;
        return true;
    }
    return false;
}

//* Principal function
const resolution = () => {
    let player = currentPlayer;
    //* Resolution vertical
    const horizontalCheck = () => {
        for(const row of gameArea){
            if(row[0] == player && row[1] == player && row[2] == player){
                return true;
            }
        }
        return false;
    }

    //* Resolution horizontal
    const verticalCheck = () => {
        for(let i = 0; i < 3; i++){
            if(gameArea[0][i] == player && gameArea[1][i] == player && gameArea[2][i] == player){
                return true;
            }
        }
        return false;
    }

    //* Resolution diagonal
    const diagonalCheck = () => {
        if(gameArea[0][0] == player && gameArea[1][1] == player && gameArea[2][2] == player){
            return true;
        }
        if(gameArea[0][2] == player && gameArea[1][1] == player && gameArea[2][0] == player){
            return true;
        }
        return false;
    }

    //* LogicalResolution
    
    const winner = diagonalCheck() || verticalCheck () ||  horizontalCheck();
    return winner;
}



// const position = 4;

// console.log(resolution(0))