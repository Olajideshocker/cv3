// let level = 0;
// const gamePttern = [];
// const userClickedButton = [];

// const buttonColours = ["red", "blue", "green", "yellow"];
// const nextSequence = function () {
//   const randomNumber = Math.trunc(Math.random() * 4);
//   console.log(randomNumber);
//   const randomChoosenColour = buttonColours[randomNumber];
//   console.log(randomChoosenColour);
//   gamePttern.push(randomChoosenColour);
//   $("button").css("background-color", randomChoosenColour);
//   //   setInterval(() => {
//   //     $("#yellow").fadeIn();
//   //     $("#yellow").fadeOut();
//   //   }, 1500);
//   level++;
// };
// nextSequence();
// const back = function () {
//   $("#red").click(function () {
//     setInterval(() => {
//       $(this).fadeIn();
//       $(this).fadeOut();
//     }, 1000);

//     const playSound = function () {
//       const audio = new Audio(
//         "Juice WRLD - Haha (unreleased) (lyrics) ( 128kbps ).mp3"
//       );
//       $("h1").text(`level ${level}`);

//       audio.play();
//     };

//     playSound();
//   });

//   $("#blue").click(function () {
//     setInterval(() => {
//       $(this).fadeIn();
//       $(this).fadeOut();
//     }, 1000);
//     const audio = new Audio("Game ( 128kbps ).mp3");
//     audio.play();
//     $("h1").text(`level ${level}`);
//   });

//   $("#green").click(function () {
//     setInterval(() => {
//       $(this).fadeIn();
//       $(this).fadeOut();
//     }, 1000);
//     const audio = new Audio(
//       "Juice WRLD - So Low (Unreleased)_prod. dfk_ ( 128kbps ).m4a"
//     );
//     audio.play();
//     $("h1").text("level 0");
//   });

//   $("#yellow").click(function () {
//     setInterval(() => {
//       $(this).fadeIn();
//       $(this).fadeOut();
//     }, 1000);
//     const audio = new Audio("Juice_WRLD_-_Legends_talkglitz.tv.mp3");
//     audio.play();
//     $("h1").text(`level ${level}`);
//   });

//   $("#red, #blue,#green,#yellow").one("keydown", function () {
//     nextSequence();
//     $("h1").text(`level ${level}`);
//   });
// };

// back();

const checkAnswer = function (currentLevel) {};
