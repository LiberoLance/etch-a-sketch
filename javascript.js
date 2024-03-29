const container = document.querySelector('#grid-container');
const gridBtn = document.querySelector('.grid-btn');
let n = 8;

//helper functions
function random(number) {
  return Math.floor(Math.random()*number);
}

function randomBGC() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return randomColor;
}

//prompt
gridBtn.addEventListener('click', () => {
	n = prompt('Enter the dimension for the grid, 100 is the max, 16 is the default.');

	if(n  === null || n > 100) {
	n = 16;
}

//clear board
container.innerHTML = '';

//build grid
for(let i = 0; i < (n * n); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
}
//set correct nxn style for grid
container.style.setProperty('grid-template-columns', `repeat(${n}, auto)`);
container.style.setProperty('grid-template-rows', `repeat(${n}, auto)`);
});


//add mouse over event
container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = randomBGC();
});

