
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

	//Create the Bodies Here.


	Engine.run(engine);
papers = new Paper(100,100)
ground = new Ground(600,height,1200,20)

Side1 = new Bin(700,690,120,150)
Side2 = new Bin(440,655,10,80);
Side3 = new Bin(560,655,10,80)


  
}




function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  drawSprites();
  papers.display();
  ground.display();
  Side1.display();
  Side2.display();
  Side3.display();
 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papers.body,papers.body.position,{x:16,y:-16})
	}
}



