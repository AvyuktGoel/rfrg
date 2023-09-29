
var rocket;
var stars, meteorite;
function preload(){

}

function setup() {
 createCanvas(400,400)
 var rocket = createSprite(200,390)
 var stars = createSprite(1,1)
 var meteorites = createSprite(80,80)
}

function draw() {
 drawSprites();
}