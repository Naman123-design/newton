
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1;

function setup() {
	createCanvas(550, 700);


	engine = Engine.create();
	world = engine.world;


	bob1 = new Paper(170,400,5);
	bob2 = new Paper(220,400,5);
	bob3 = new Paper(270,400,5);
	bob4 = new Paper(320,400,5);
	bob5 = new Paper(370,400,5);
	roof = createSprite(275,200,400,30);
	roof.shapeColor="red";

	Engine.run(engine);
	
	//rope1 = new Rope(bob1.body,{x:170, y:200});
	chain1 = new Rope(bob1.body,roof.body,10,0);

}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 chain1.display();
}
