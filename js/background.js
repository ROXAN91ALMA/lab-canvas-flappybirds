class Background {
    constructor(ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = "images/bg.png";
        this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};
    }

    

    draw() {
        if (this.isReady) {
             
			this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
			this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
	
        }   
     }

	move() {
		this.x -= this.vx;
    	}

}