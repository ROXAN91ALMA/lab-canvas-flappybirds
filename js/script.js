
const ctx = document.getElementById('my-canvas').getContext('2d')

const game = new Game(ctx);

const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', () => {
	game.start();
});
