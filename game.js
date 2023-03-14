// Get the canvas element and its context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Define the grid variables
const cellSize = 100;
const grid = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

// Define the current player variable
let currentPlayer = 'X';

// Define the game over variable
let gameOver = false;

// Define the game loop function
function gameLoop() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the grid
	drawGrid();

	// If the game is not over, request the next animation frame
	if (!gameOver) {
		requestAnimationFrame(gameLoop);
	}
}

// Define the draw grid function
function drawGrid() {
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 5;

	// Draw the vertical lines
	for (let x = 1; x < 3; x++) {
		ctx.beginPath();
		ctx.moveTo(cellSize * x, 0);
		ctx.lineTo(cellSize * x, canvas.height);
		ctx.stroke();
	}

	// Draw the horizontal lines
	for (let y = 1; y < 3; y++) {
		ctx.beginPath();
		ctx.moveTo(0, cellSize * y);
		ctx.lineTo(canvas.width, cellSize * y);
		ctx.stroke();
	}

	// Draw the X's and O's
	for (let x = 0; x < 3; x++) {
		for (let y = 0; y < 3; y++) {
			if (grid[x][y] === 'X') {
				drawX(x, y);
			} else if (grid[x][y] === 'O') {
				drawO(x, y);
			}
		}
	}
}

// Define the draw X function
function drawX(x, y) {
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(x * cellSize + 10, y * cellSize + 10);
	ctx.lineTo((x + 1) * cellSize - 10, (y + 1) * cellSize - 10);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(x * cellSize + 10, (y + 1) * cellSize - 10);
	ctx.lineTo((x + 1) * cellSize - 10, y * cellSize + 10);
	ctx.stroke();
}

// Define the draw O function
function drawO(x, y) {
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize / 2 - 10, 0, 2 * Math.PI);
	ctx.stroke();
}

// Define the handle click function
