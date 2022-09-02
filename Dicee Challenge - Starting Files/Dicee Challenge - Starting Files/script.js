"use strict";
document.querySelector(".button").addEventListener("click", function () {
  const rand2 = new Array(
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  );

  const rand3 = new Array(
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  );

  const rand1 = Math.trunc(Math.random() * rand2.length);

  const rand4 = Math.trunc(Math.random() * rand3.length);

  document.querySelector(".img1").src = rand2[rand1];
  document.querySelector(".img2").src = rand3[rand4];

  document.querySelector(".button").disabled = true;
  setTimeout(function () {
    document.querySelector(".button").disabled = false;
  }, 1000);

  if (rand1 > rand4 * 2 + 1) {
    if (highscore1 === 4) {
      overallHs1++;
      document.querySelector(".high").textContent = overallHs1;
      document.querySelector(".winner").style.background = "lightgreen";
      document.querySelector(".winner").textContent = "player 1 wins";
      document.querySelector("body").style.background = "green";
    }

    highscore1++;
    document.querySelector(".score3").textContent = highscore1;
  } else if (rand4 > rand1 * 2 + 1) {
    if (highscore2 === 4) {
      overallHs2++;
      document.querySelector(".high1").textContent = overallHs2;
      document.querySelector(".winner").style.background = "lightgreen";
      document.querySelector(".winner").textContent = "player 2 wins";
      document.querySelector("body").style.background = "green";
    }
    highscore2++;

    document.querySelector(".score4").textContent = highscore2;
  }
});
let highscore1 = 0;
let highscore2 = 0;

let overallHs1 = 0;
let overallHs2 = 0;

document.querySelector(".restart").addEventListener("click", function () {
  highscore1 = 0;
  highscore2 = 0;
  document.querySelector(".high").textContent = overallHs1;
  document.querySelector(".high1").textContent = overallHs2;
  document.querySelector("body").style.background = "#393e46";
  document.querySelector(".score3").textContent = 0;
  document.querySelector(".score4").textContent = 0;
  document.querySelector(".button").disabled = false;
  document.querySelector(".winner").textContent = "?";
  document.querySelector(".winner").style.background = "rgb(236, 202, 133)";
});
