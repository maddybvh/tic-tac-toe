const DisplayContoller =(() =>{

})();

const GameBoard = (() => {
  const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  let tiles = [
    ['', '', ''], // 0, 1, 2
    ['', '', ''], // 3, 4, 5
    ['', '', '']  // 6, 7, 8
  ];
  let isGameOver = false;

  const gameOver = () => {
    isGameOver = true;
  }

})();




const Player = (playerSymbol) => {
  let symbol = playerSymbol;
  let score = 0;
  
  return {
      side,
      name,
      score
  };
};