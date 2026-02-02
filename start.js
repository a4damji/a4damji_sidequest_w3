function drawStart() {
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("Get him a tomato", width / 2, 50);

  fill(30, 50, 60);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Likeability: " + count, width / 2 + 130, 300);

  const startBtn = {
    x: width / 2 + 150,
    y: 200,
    w: 240,
    h: 80,
    label: "START",
  };

  drawButton(startBtn);

  const over = isHover(startBtn);
  cursor(over ? HAND : ARROW);
}

function startMousePressed() {
  const startBtn = { x: width / 2 + 150, y: 200, w: 240, h: 80 };

  if (isHover(startBtn)) {
    currentScreen = "game";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }
}

function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill("red");

    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill("green");

    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(255, 245, 201);
  }

  rect(x, y, w, h, 14);

  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
