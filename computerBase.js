class ComputerBase {
    constructor( x,y,width ,height , options) {
        var options = {
            isStatic:True 
        }


    this.body = Bodies.rectangle (x,y,width ,height , options);
    this.width = width
    this.height = height
    this.image = loadImage ("./assets/base2.png");
}
display() {
    var pos = this.body.position ; 
    var angle = this.body.angle ;

    push()
    translate(pos.x , pos.y)
    rotate(angle);
    imagemode(CENTER)
    image(This.image ,0,0  ,this.width , this.height)
    pop();
    
}
}