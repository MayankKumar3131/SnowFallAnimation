class Snow {
  constructor(x, y, width, height){

    this.image = loadImage("sprites/sling2.png")

    var options = {
      'friction' : 0.5,
      'density' : 0.0004
    }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);

  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white");
    //fill(255);
    ellipse(0,0,this.width,this.height);
    pop();
  }
};