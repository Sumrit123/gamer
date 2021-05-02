
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world;


function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(360,540,1900,10);
	dustbinObj1=new Dust(1000,495,10,100);
	dustbinObj2=new Dust(900,540,200,10);
	dustbinObj3=new Dust(800,495,10,100)
	paperObject=new Paper(200,300,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paperObject.display();
  dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();

}
	function keyPressed(){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-10})
		}
	}
