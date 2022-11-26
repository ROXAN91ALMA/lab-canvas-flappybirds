class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.bg = new Background(this.ctx, 0, 0);
		this.intervalId = null;
		this.tick = 0;
    }
    
    
    start() {
        
        this.intervalId = setInterval(() => {
            this.clear();
			this.move();
			this.draw();
        }, 1000 / 60);
    }


    draw() {
        console.log("holsss")
        this.background.draw();
    }

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

}
