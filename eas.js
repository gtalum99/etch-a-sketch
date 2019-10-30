// set default variables and build reset button
let container = document.querySelector('#container'); // container for grid
let gridSize = 16; // default grid size
let buttonContainer = document.querySelector('#buttons')
let resetButton = document.createElement('button');
let resetButtonText = document.createTextNode('Reset Grid');
resetButton.appendChild(resetButtonText)
buttonContainer.appendChild(resetButton)

//add listener for reset button 
resetButton.addEventListener('click', resetGrid)

// create a div for each block (gridSize * gridSize)
function makeDivs (gridSize) {
  for (square = 1; square <= (gridSize * gridSize); square++) {
      let newBlock = document.createElement('div');
      container.appendChild(newBlock).className="block";
  };
};

// create square grid with divs from makeDivs function
function makeGrid (gridSize) {
  document.getElementById('container').style.gridTemplateRows = `repeat( ${gridSize}, 1fr)`;
  document.getElementById('container').style.gridTemplateColumns = `repeat( ${gridSize}, 1fr)`;
};

function buildGrid (gridSize){
  // invoke makeDivs and MakeGrid functions to create initial 16 x 16 grid
  makeDivs(gridSize);
  makeGrid(gridSize);
};

// color squares on mouseover
function draw(e) {
  e.target.style.background = 'black';
};

// add listener for mouseover of grid squares, call draw function
function setListener() {
  let touchSquare = document.querySelectorAll('.block');  
  for (i=0; i<(gridSize*gridSize); i++) {
    touchSquare[i].addEventListener('mouseover', draw);
  };
};

//clear grid on reset button press, create new grid of size of player's choice
function resetGrid() {
  let gridBlocks = document.getElementsByClassName('block');
  while(gridBlocks[0]) {
    gridBlocks[0].parentNode.removeChild(gridBlocks[0]);
  };
    //ask for new grid size
    gridSize = prompt ("How many squares would you like per side?", "16");

    //call functions to rebuild grid and reset listener
    buildGrid(gridSize);
    setListener()
};

// call functions to build grid and set listener
buildGrid(gridSize)
setListener()


