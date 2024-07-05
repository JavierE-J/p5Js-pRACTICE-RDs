let img;
let xPos;
let yPos;
let canvasWidth=800;
let canvasHeight=500;
let xSpeed = 3;
let ySpeed = 3;
let imgWidth = 20;
let imgHeight= 50;

function preload(){
    img = loadImage('./images/RD.jpeg');
  }

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(242, 246, 248);
    xPos = random(0, canvasWidth-imgWidth);
    yPos = random(0, canvasHeight-imgHeight);
}
  
  function draw() {
    let test = image (img, xPos, yPos, imgWidth, imgHeight);
  xPos += xSpeed;
  yPos += ySpeed;
  if(xPos > canvasWidth-imgWidth || xPos < 0){
    xSpeed = xSpeed * -1;
  }
  if(yPos > canvasHeight-imgHeight || yPos <0){
    ySpeed = ySpeed * -1;
  }}