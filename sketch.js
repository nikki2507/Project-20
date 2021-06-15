
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var P1, P2, P3, P4, P5, P6, P7;
var R1, R2, R3;
var B1, B2;
var A1 = 60;
var A2 = 60;
var A3 = 60;
var ground;



function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
    
	var ground_options = {
		isStatic: true
	}
	//Create the Bodies Here.
	ground = Bodies.rectangle(600, height, 1200, 20, ground_options)
    World.add(world, ground)
    B1 = Bodies.rectangle(100, 400, 150, 20, ground_options)
    World.add(world, B1)
	B2 = Bodies.rectangle(400, 400, 150, 20, ground_options)
    World.add(world, B2)

	var p_options = {
		restitution: 0.4,
		friction: 0.02,
	    
	}

	P1 = Bodies.circle(220, 10, 10, p_options)
	World.add(world, P1)
	P2 = Bodies.circle(220, 10, 10, p_options)
	World.add(world, P2)
	P3 = Bodies.circle(230, 10, 10, p_options)
	World.add(world, P3)
	P4 = Bodies.circle(230, 10, 10, p_options)
	World.add(world, P4)
	P5 = Bodies.circle(235, 10, 10, p_options)
	World.add(world, P5)
	P6 = Bodies.circle(240, 10, 10, p_options)
	World.add(world, P6)
	P7 = Bodies.circle(245, 10, 10, p_options)
	World.add(world, P7)

	var r_options = {
		isStatic: true
	}

	R1 = Bodies.rectangle(250, 200, 150, 20, r_options)
	World.add(world, R1)
	R2 = Bodies.rectangle(250, 200, 150, 20, r_options)
	World.add(world, R2)
	R3 = Bodies.rectangle(250, 200, 150, 20, r_options)
	World.add(world, R3)

	fill ("white")
	rectMode(CENTER)
	ellipseMode(RADIUS)

	

  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 1200, 20);
  rect(B1.position.x, B1.position.y, 150, 20);
  rect(B2.position.x, B2.position.y, 150, 20);
  ellipse(P1.position.x, P1.position.y, 10);
  ellipse(P2.position.x, P2.position.y, 10);
  ellipse(P3.position.x, P3.position.y, 10);
  ellipse(P4.position.x, P4.position.y, 10);
  ellipse(P5.position.x, P5.position.y, 10);
  ellipse(P6.position.x, P6.position.y, 10);
  ellipse(P7.position.x, P7.position.y, 10);

  Matter.Body.rotate(R1, A1);
  push ()
  translate (R1.position.x, R1.position.y)
  rotate (A1)
  rect (0, 0, 150, 20)
  pop ()
  A1 = A1+ 0.2;

  Matter.Body.rotate(R2, A2);
  push ()
  translate (R2.position.x, R2.position.y)
  rotate (A2)
  rect (0, 0, 150, 20)
  pop ()
  A2 = A2+ 0.3;

  Matter.Body.rotate(R3, A3);
  push ()
  translate (R3.position.x, R3.position.y)
  rotate (A3)
  rect (0, 0, 150, 20)
  pop ()
  A3 = A3+ 0.4;


  drawSprites();
 
}



