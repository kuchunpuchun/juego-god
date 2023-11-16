var personaje
var ground, invisibleGround, groundImage;
var group, groupTrue, group2
var puntos = 0
var hola
function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  personaje = createSprite(windowWidth/2,windowHeight-50,20,50);


  
  //crear sprite de suelo
  ground = createSprite(windowWidth/2,windowHeight,windowWidth,40);
  group = new Group(); 
  groupTrue = new Group(); 
  group2 = new Group(); 
}


function draw() {
  background("black");

 
  //hacer que el Trex salte al presionar la barra espaciadora
  if(personaje.collide(ground)) {
    personaje.velocity.y = -20;
  }
  if(personaje.collide(groupTrue)) {
    personaje.velocity.y = -20;
    hola = 1
  }
  if(keyIsDown(68)) {
    personaje.position.x -= -5;
  }
  if(keyIsDown(65)) {
    personaje.position.x -= +5;
  }
  if(personaje.position.x >= windowWidth) {
    personaje.position.x = windowWidth/200
  }
  if(personaje.position.x <= 0) {
    personaje.position.x = windowWidth-1
  }
  if(personaje.collide(ground) && hola == true) {
    
  }
  if(personaje.collide(group2)) {
    puntos += 13
    group2.destroyEach();

  }
  if (hola == 1){
    puntos += 1
    ground.visible = false
    ground.position.y = windowHeight*-2

  }
  if (hola == 0){
    ground.position.y = windowHeight
  }
  personaje.velocityY = personaje.velocityY + 0.8
  
  if (personaje.position.y >= windowHeight){
    hola = 0
    personaje.position.x = windowWidth*2
    fill("white")
    textSize(23)
    text("perdiste :(",windowWidth/2,windowHeight/2+30)
    group.destroyEach()
    group2.destroyEach()
    groupTrue.destroyEach()
  }
 
 //evitar que el Trex caiga
  CB(group,groupTrue)
  CM(group2)
  
  personaje.collide(group)
  personaje.collide(ground)

  fill("white")
  textSize(23)
  text("puntaje: "+puntos,windowWidth/2,windowHeight/2)

  drawSprites();


}

function CB(group,groupTrue){
  if (frameCount % 50 === 0) {
    var base = createSprite(random(65, windowWidth - 65), 0, 60,5);
    var baseTrue = createSprite(base.position.x, -5,55, 5);
    base.shapeColor = color(random(0,255),random(0,255),random(0,255))
    baseTrue.visible = false
    base.velocityY = 3
    baseTrue.velocityY = base.velocityY
    base.life = 1000
    baseTrue.life = 1000
    groupTrue.add(baseTrue);
    group.add(base)
}
  }
  function CM(group2){
    if (frameCount % 50 === 0) {
      var money = createSprite(random(65, windowWidth - 65), 0,  20,20);
      money.shapeColor = color("yellow")
      money.velocityY = random(1,4)
      money.life = 1000;
      group2.add(money)
  }
}