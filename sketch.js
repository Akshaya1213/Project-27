
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    roof1 = new Roof(250,200,400,20);
	//Create the Bodies Here.
	bob1 = new Bob(200,400,20);
	bob2 = new Bob(220,400,20);
	bob3 = new Bob(240,400,20);
	bob4 = new Bob(260,400,20);
	bob5 = new Bob(280,400,20);
	rope1 = new Rope(bob1.body,roof1.body,100,100);
  rope2 = new Rope(bob2.body,roof1.body,200,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  drawSprites();
 
}



