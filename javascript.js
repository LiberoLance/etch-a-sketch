const container = document.querySelector('#grid-container');
const row = 4;
const column = 8;

for(let i = 0; i < row; i++){
	for(let j = 0; j < column; j++){
		const square = document.createElement('div');
		square.classList.add('square');
		square.textContent = 'x';
		container.appendChild(square);
	} 
}
