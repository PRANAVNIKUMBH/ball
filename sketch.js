
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,685,800,25)
	wall1 = new Ground (450,570.9,10,200)
	wall2 = new Ground (600,570.9,10,200)
    ball = new Ball(550,300,20)
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  wall1.display()
  wall2.display()
  ball.display()
}



