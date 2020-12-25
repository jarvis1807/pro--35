//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogimg = loadImage("images/Dog.png")
  happyDogimg = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,450,10,10)
  dog.addImage(dogimg)
  dog.scale = 0.25
 // happydog = createSprite(400,450,10,10)
  //happydog.addImage(happyDogimg)//

  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value", readStock)

   
  
}


function draw() {
  background("green")  
  
  if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogimg)
  }
  drawSprites();
  text("food remaining: "+foodS, 150,200)
}
  function readStock(data){
    foodS = data.val()

  }
  function writeStock(x){
    if(x <= 0){
      x=0
    }
    else{
      x=x-1
    }
    database.ref('/').update({
      Food:x
    })
  }


  
  //add styles here


