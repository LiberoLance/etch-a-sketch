const container = document.querySelector('#grid-container');
const gridBtn = document.querySelector('.grid-btn');
let n = 8;

//prompt
gridBtn.addEventListener('click', () => {
	n = prompt('Enter the dimension for the grid, 100 is the max, 16 is the default.');

	if(n  === null || n > 100) {
	n = 16;
}

//clear board
container.innerhtml = "";

//build grid
for(let i = 0; i < (n * n); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = i + 1;
        container.appendChild(square);
}
//set correct nxn style for grid
container.style.setProperty('grid-template-columns', `repeat(${n}, auto)`);
container.style.setProperty('grid-template-rows', `repeat(${n}, auto)`);
});


//add mouse over event
container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'yellow';
});

