//ColorFlipper-Hex

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector('#change').addEventListener('click', changeColor);

function changeColor() {
	let rang = randomRang();
	document.querySelector('#new').textContent = rang;
	document.body.style.backgroundColor = rang;
}

function randomRang(){
	let x = '#';
	let randomIndex;
	for (let i = 0; i < 6; i++) {
		randomIndex = Math.floor(Math.random() * hex.length);
		x += hex[randomIndex];
	}
	return x;
}
