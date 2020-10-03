class Paper {
  constructor(x, y,r) {
    var options = {
      isStatic : false,
        restitutio:1,
        friction:0,
        density:0.5
    }
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y, this.r , options);
  //  this.radius = r;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    ellipseMode(CENTER);
    //strokeWeight(6);
    //stroke("red")
    fill("blue");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
