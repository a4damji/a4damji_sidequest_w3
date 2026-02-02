const t1 = {
  x: 140,
  y: 400,
  r: 100,
};

const t2 = {
  x: 350,
  y: 370,
  r: 100,
};

const t3 = {
  x: 160,
  y: 590,
  r: 100,
};
const t4 = {
  x: 350,
  y: 540,
  r: 100,
};
const t5 = {
  x: 230,
  y: 760,
  r: 100,
};
const t6 = {
  x: 390,
  y: 730,
  r: 100,
};

function drawGame() {
  fill("white");
  rect(width / 2 - 50, 100, 1000, 100);

  fill(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Pick one", width / 2, 100);

  drawGameButton(t1);
  drawGameButton(t2);
  drawGameButton(t3);
  drawGameButton(t4);
  drawGameButton(t5);
  drawGameButton(t6);

  cursor(isHoverTom(t1) ? HAND : ARROW);
  cursor(isHoverTom(t2) ? HAND : ARROW);
  cursor(isHoverTom(t3) ? HAND : ARROW);
  cursor(isHoverTom(t4) ? HAND : ARROW);
  cursor(isHoverTom(t5) ? HAND : ARROW);
  cursor(isHoverTom(t6) ? HAND : ARROW);
}

function drawGameButton({ x, y, r }) {
  const hover = isHoverTom({ x, y, r });

  noStroke();

  fill(hover ? color(255, 140, 167) : color("red"));

  // Draw the tomato
  circle(x, y, r);
}

function gameMousePressed() {
  if (isHoverTom(t1)) {
    triggerRandomOutcome();
  } else if (isHoverTom(t2)) {
    triggerRandomOutcome();
  } else if (isHoverTom(t3)) {
    triggerRandomOutcome();
  } else if (isHoverTom(t4)) {
    triggerRandomOutcome();
  } else if (isHoverTom(t5)) {
    triggerRandomOutcome();
  } else if (isHoverTom(t6)) {
    triggerRandomOutcome();
  }
}

function triggerRandomOutcome() {
  if (random() < 0.5) {
    currentScreen = "win";
  } else {
    currentScreen = "lose";
  }
}
