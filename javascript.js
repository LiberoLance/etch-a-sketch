const container = document.querySelector('#grid-container');
const rows = 8;
const columns = 8;

for(let i = 0; i < (rows * columns); i++){
	const square = document.createElement('div');
	square.classList.add('square');
	square.textContent = i + 1;
	container.appendChild(square); 
}
//set correct nxn style for grid
container.style.setProperty('grid-template-columns', `repeat(${columns}, auto)`);
container.style.setProperty('grid-template-rows', `repeat(${rows}, auto)`);

//add mouse over event
container.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'yellow';
});

