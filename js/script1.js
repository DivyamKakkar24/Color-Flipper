//ColorFlipper-Simple

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.querySelector('#change').addEventListener('click', changeColor);

function changeColor() {
	let rang = randomRang();
	document.querySelector('#new').textContent = rang;
	document.body.style.backgroundColor = rang;
}

function randomRang(){
	let randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}
