const playerFactory = (symbol) => {
  let squares = [];
  const addSquare = (sqaureID) => {
    squares.push(sqaureID);
  };
  
  return {
    symbol,
    squares,
    addSquare,
  };
};

const player1 = playerFactory('X')
const player2 = playerFactory('O')
var currentPlayer = player1

const winingCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

const GameBoard = (() => {




})();

const DisplayContoller =(() =>{
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {square.addEventListener('click', (e) => {
    //If the square is empty    
    if (!e.target.textContent){
      //Add the current players mark to the square
      e.target.textContent = currentPlayer.symbol
      //Push the square id to the current players' squares
      currentPlayer.addSquare(square.id)
      checkWinner()       
      currentPlayer = changePlayer()    
    }
    });
  });

  //--- check if current player has the winning numbers
  function checkWinner (){
    if (currentPlayer.squares.length > 4){
        alert("It's a tie")
    }else if (currentPlayer.squares.length > 2) {
        for (let i = 0; i < winingCombinations.length; i++){
            if (checker(currentPlayer.squares, winingCombinations[i]) === true){
                alert(currentPlayer.symbol + "has won!")
                break
            }}}
  }

  let checker = (arr, target) => target.every(v => arr.includes(v));

  function changePlayer () {
    return (currentPlayer == player1 ? player2 : player1)
  }

})();




