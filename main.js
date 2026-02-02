let currentScreen = "start";
let startimg;
let gameimg;
let freshimg;
let rottimg;
let givefimg;
let giverimg;
let count = 0;

function preload() {
  startimg = loadImage("images/startimage.png"); // figure 1
  gameimg = loadImage("images/tomatovine.png"); // figure 2
  freshimg = loadImage("images/fresh tomato.png"); // figure 3
  rottimg = loadImage("images/rottentomato.png"); // figure 4
  givefimg = loadImage("images/freshending.png"); // figure 5
  giverimg = loadImage("images/rotten ending.png"); // figure 6
}

function setup() {
  createCanvas(595, 847);

  textFont("Courier New");
}

function draw() {
  if (currentScreen === "start") {
    image(startimg, 0, 0, width, height);
    drawStart();
  } else if (currentScreen === "game") {
    image(gameimg, 0, 0, width, height);
    drawGame();
  } else if (currentScreen === "win") {
    image(freshimg, 0, 0, width, height);
    drawWin();
  } else if (currentScreen === "lose") {
    image(rottimg, 0, 0, width, height);
    drawLose();
  } else if (currentScreen === "giveF") {
    image(givefimg, 0, 0, width, height);
    drawGiveF();
  } else if (currentScreen === "giveR") {
    image(giverimg, 0, 0, width, height);
    drawGiveR();
  }
}

function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "game") gameMousePressed();
  else if (currentScreen === "win") winMousePressed();
  else if (currentScreen === "lose") loseMousePressed();
  else if (currentScreen === "giveF") giveFMousePressed();
  else if (currentScreen === "giveR") giveRMousePressed();
}

function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "giveF") giveFKeyPressed();
  else if (currentScreen === "giveR") giveRKeyPressed();
}

function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

function isHoverTom({ x, y, r }) {
  return (
    mouseX > x - r / 2 &&
    mouseX < x + r / 2 &&
    mouseY > y - r / 2 &&
    mouseY < y + r / 2
  );
}
