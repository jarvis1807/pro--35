//Create variables here
var dog, happydog, database, foodS, foodStock

function preload()
{
  dog = loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,450,10,10)
  dog.addImage("images/Dog.png")
  happydog = createSprite(400,450,10,10)
  happydog.addImage("images/happydog.png")

  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value", readStock)

   
  
}


function draw() {  
  background((46, 139, 87)
  function UP_ARROW()
  if(keyWentDown(UP_ARROW))
  

  drawSprites();
  //add styles here

}



