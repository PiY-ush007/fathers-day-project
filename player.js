class Player{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;


    }
    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);

    }

    
}