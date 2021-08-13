
var canvas;
var gameState=0;
var playerCount=0;
var database;
var form,game, player;
var allPlayers;
var distance=0;

function setup(){
    createCanvas(400,400);
    database= firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
if(playerCount===2){
    game.update(1)
}
if(gameState===1){
    clearInterval();
    game.play()
}
}