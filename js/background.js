class Background {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
		this.h = this.ctx.canvas.height;
        this.img = new Image();
        this.img.src = "images/bg.png";
        this.isReady = false;
		this.img.onload = () => {
		  this.isReady = true;

        }
    }


    

    draw() {
        if (this.isReady) {
            console.log("entro")
			this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
			this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
        }
     
     }

	move() {
		this.x -= this.vx;
    }

}