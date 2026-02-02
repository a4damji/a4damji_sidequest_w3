function drawGiveR() {
  const backBtn = {
    x: width / 2 + 150,
    y: 320,
    w: 220,
    h: 70,
    label: "RESTART",
  };

  drawgiveRButton(backBtn);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function giveRMousePressed() {
  const backBtn = { x: width / 2 + 150, y: 320, w: 220, h: 70 };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

function giveRKeyPressed() {
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }

  if (key === "b" || key === "B") {
    currentScreen = "start";
  }
}

function drawgiveRButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  rect(x, y, w, h, 12);

  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
