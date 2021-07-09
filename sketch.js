const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var  polygon, strings,platform, platform2, floor;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, boxX,
boxX1, boxX2, boxX3, boxX3, boxX4, boxX5, boxX5, boxX6, boxX7,
boxX8, boxX9, boxXX, boxXX1, boxXX2, boxXX3, boxXX4, boxXX5;

function preload(){
    polygonImg = loadImage('polygon.png')
}

function setup(){
    createCanvas(1440,900);
    engine = Engine.create();
    world = engine.world;

    floor = new Floor();
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon)

    strings = new Chain(this.polygon,{x:100,y:200})

    platform = new Ground(390, 576.5, 200, 10);

    platform2 = new Ground(800, 626.5, 300, 10);

    box1 = new Box(330, 560, 30, 40);
    box2 = new Box(360, 560, 30, 40);
    box3 = new Box(390, 560, 30, 40);
    box4 = new Box(420, 560, 30, 40);
    box5 = new Box(450, 560, 30, 40);

    box6 = new Box(360, 520, 30, 40);
    box7 = new Box(390, 520, 30, 40);
    box8 = new Box(420, 520, 30, 40);

    box9 = new Box(390, 480, 30, 40);

    
    boxX = new Box(710, 610, 30, 40);
    boxX1 = new Box(740, 610, 30, 40);
    boxX2 = new Box(770, 610, 30, 40);
    boxX3 = new Box(800, 610, 30, 40);
    boxX4 = new Box(830, 610, 30, 40);
    boxX5 = new Box(860, 610, 30, 40);
    boxX6 = new Box(890, 610, 30, 40);
    
    boxX7 = new Box(740, 570, 30, 40);
    boxX8 = new Box(770, 570, 30, 40);
    boxX9 = new Box(800, 570, 30, 40);
    boxXX = new Box(830, 570, 30, 40);
    boxXX1 = new Box(860, 570, 30, 40);
    
    boxXX2 = new Box(770, 530, 30, 40);
    boxXX3 = new Box(800, 530, 30, 40);
    boxXX4 = new Box(830, 530, 30, 40);
    
    boxXX5 = new Box(800, 490, 30, 40);


    

    Engine.run(engine);


}

function draw(){
    background(56, 44, 44)
    Engine.update(engine);
    //console.log(polygon)
    strings.display();
    imageMode(CENTER)
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)

    floor.display();

    platform.display();
    platform2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    boxX.display();
    boxX1.display();
    boxX2.display();
    boxX3.display();
    boxX4.display();
    boxX5.display();
    boxX6.display();
    boxX7.display();
    boxX8.display();
    boxX9.display();
    boxXX.display();
    boxXX1.display();
    boxXX2.display();
    boxXX3.display();
    boxXX4.display();
    boxXX5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    strings.fly();
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon,{x:200,y:20})
       strings.attach(this.polygon);
    }
}