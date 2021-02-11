const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ball=Bodies.circle(100,100,50,{restitution:0.5});
  ground=Bodies.rectangle(400,390,800,20,{isStatic:true})
  World.add(world,ball)
  World.add(world,ground)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,20)
}