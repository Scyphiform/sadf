const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,stone;
var ground,ground2,ground3,ground4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(190,100,50,50);
    ground = new Ground(200,390,400,20)
    ground.shapeColor = "red"
    stone = new Stone(130,100,50,50)
    rubber = new Bouncy(90,100,10,10)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    stone.display();
    rubber.display();

   
}