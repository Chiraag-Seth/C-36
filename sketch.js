var gameState;
var playerCount;
var database;
var form;
var game;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
  form = new Form();
  form.display();

 
}

function draw(){
  background("white");
  
  
  drawSprites();
}

