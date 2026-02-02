function drawWin() {
  const giveBtn = {
    x: width / 2,
    y: 600,
    w: 240,
    h: 80,
    label: "GIVE",
  };

  const repickBtn = {
    x: width / 2,
    y: 700,
    w: 240,
    h: 80,
    label: "REPICK",
  };

  drawButton(giveBtn);
  drawButton(repickBtn);

  const over = isHover(giveBtn) || isHover(repickBtn);
  cursor(over ? HAND : ARROW);
}

function winMousePressed() {
  currentScreen = "start";
  const giveBtn = { x: width / 2, y: 600, w: 240, h: 80 };
  const repickBtn = { x: width / 2, y: 700, w: 240, h: 80 };

  if (isHover(giveBtn)) {
    count = count + 1;
    currentScreen = "giveF";
  } else if (isHover(repickBtn)) {
    currentScreen = "game";
  }
}

function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill("pink");

    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill("gold");

    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14);

  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
