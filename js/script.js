this.canvas = document.getElementById('my-canvas');


this.ctx = this.canvas.getContext("2d"); 


const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', () => {
	game.start();
});
 