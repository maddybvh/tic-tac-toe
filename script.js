const DisplayContoller =(() =>{
  const sqaures = document.querySelectorAll('.sqaure');
  squares.forEach((sqaure) => {square.addEventListener('click', (e) => {
    //If the square is empty    
    if (!e.target.textContent){
      //Add the current players mark to the square
      e.target.textContent = currentplayer.symbol
      //Push the square id to the current players' squares
      currentplayer.addSqaure(square.id)
      checkWinner()       
      changePlayer()    
    }
    });
  });
})();

const GameBoard = (() => {
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

  const player1 = playerFactory('X')
  const player2 = playerFactory('O')
  let currentPlayer = player1
  
  //--- check if current player has the winning numbers
  function checkWinner (){
    if (currentPlayer.squares.length > 4){
        alert("It's a tie")
    }else if (currentPlayer.squares.length > 2) {
        for (let i = 0; i < winingCombinations.length; i++){
            if (checker(currentplayer.squares, winingCombinations[i]) === true){
                alert(currentplayer.symbol + "has won!")
                break
            }}}
  }

  let checker = (arr, target) => target.every(v => arr.includes(v));

  function changePlayer () {
    currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player2
  }

})();

const playerFactory = (symbol) => {
  let squares = [];
  const addSquare = (sqaureID) => {
    squares.push(parseInt(item.dataset.number));
  };
  
  return {
    symbol,
    squares,
    addSquare,
  };
};
