class block{
  constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.color = color(random(0,0),random(100,255),random(100,255));
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill(this.color);
      rect(this.x, this.y, this.width*2, this.height*2);
      pop();
    }
}