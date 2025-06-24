//ColorFlipper-Hex

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Color history management
let colorHistory = ['#F1f5f8']; // Start with initial color
let currentIndex = 0;

document.querySelector('#change').addEventListener('click', nextColor);
// Add event listener for PREV button
document.querySelector('#previous').addEventListener('click', previousColor);

// Add keyboard navigation
document.addEventListener('keydown', handleKeyPress);

function changeColor() {
	let rang = randomRang();
	
	// Add new color to history and update index
    currentIndex++;
    colorHistory = colorHistory.slice(0, currentIndex); // Remove any "future" colors if we were in the middle
    colorHistory.push(rang);
    
    updateDisplay(rang);
}

function previousColor() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay(colorHistory[currentIndex]);
    }
}

function nextColor() {
    if (currentIndex < colorHistory.length - 1) {
        currentIndex++;
        updateDisplay(colorHistory[currentIndex]);
    } else {
        // If at the end, generate a new color
        changeColor();
    }
}

function updateDisplay(color) {
    document.querySelector('#new').textContent = color;
    document.body.style.backgroundColor = color;
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousColor();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextColor();
    }
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
