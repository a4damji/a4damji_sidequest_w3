function drawGiveF() {
  const backBtn = {
    x: width / 2 + 160,
    y: 400,
    w: 220,
    h: 70,
    label: "RESTART",
  };

  drawgiveFButton(backBtn);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function giveFMousePressed() {
  const backBtn = { x: width / 2 + 160, y: 400, w: 220, h: 70 };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

function giveFKeyPressed() {
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }

  if (key === "b" || key === "B") {
    currentScreen = "start";
  }
}

function drawgiveFButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  fill(hover ? color(226, 250, 185) : color(255, 238, 140));

  rect(x, y, w, h, 12);

  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
