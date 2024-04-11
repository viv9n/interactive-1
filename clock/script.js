let i = 1;
let j = 1;
let k = 1;
let l = 1;

function updateTime() {
  let d = new Date();

  // Date object methods - storing values as variables
  // https://www.w3schools.com/js/js_date_methods.asp
  let year = d.getFullYear();     // year as a four digit number (yyyy)
  let month = d.getMonth() + 1;   // month as a number (0-11), so + 1
  let date = d.getDate();         // day as a number (1-31)
  let hour = d.getHours();        // hour (0-23)
  let min = d.getMinutes();       // minute (0-59)
  let sec = d.getSeconds();       // second (0-59)

  // concatenate all the values for checking and print
  let now = year + "/" + month + "/" + date + ", " + hour + ":" + min + ":" + sec;
  console.log (now);
}

// run the above function every second
setInterval(updateTime, 1000);

function updateSec() {
  let d = new Date();
  let sec = d.getSeconds();
  // update the hand
  document.querySelector(".sechand").style.transform = "rotate(" + sec * 6 + "deg)"; 
}

setInterval(updateSec, 1000);

function updateMin() {
  let d = new Date();
  let min = d.getMinutes();
  // update the hand
  document.querySelector(".minhand").style.transform = "rotate(" + min * 6 + "deg)"; 
}

setInterval(updateMin, 1000);

function updateSquareOne() {
  let d = new Date();
  let min = d.getMinutes();
  if (min % 5 === 0) {
    document.querySelector(".squareone").style.marginTop = "0vw";
} else {
    document.querySelector(".squareone").style.marginTop = "-20vw";
}
}

setInterval(updateSquareOne, 1000);

function updateSquareTwo() {
  let d = new Date();
  let min = d.getMinutes();
  if (min % 5 === 0) {
    document.querySelector(".squaretwo").style.marginTop = "0vw";
} else {
    document.querySelector(".squaretwo").style.marginTop = "40vw";
}
}

setInterval(updateSquareTwo, 1000);

function updateSquareThree() {
  let d = new Date();
  let min = d.getMinutes();
  if (min % 10 === 0) {
    document.querySelector(".squarethree").style.width = "90vh";
} else {
    document.querySelector(".squarethree").style.width = "50vh";
}
}

setInterval(updateSquareThree, 1000);

function updateSquareFour() {
  let d = new Date();
  let min = d.getMinutes();
  if (min % 10 === 0) {
    document.querySelector(".squarefour").style.marginLeft = "51vw";
} else {
    document.querySelector(".squarefour").style.marginLeft = "72vw";
}
}

setInterval(updateSquareFour, 1000);

function updateDiamondOne() {
  let d = new Date();
  let sec = d.getSeconds();
  if (sec === 15 || sec === 0 || sec === 30 || sec === 45) {
    document.querySelector(".diamondone").style.transform = "rotate(" + 180 * i + "deg)";
    i++;
}
}

setInterval(updateDiamondOne, 1000);

function updateDiamondTwo() {
  let d = new Date();
  let sec = d.getSeconds();
  if (sec === 15 || sec === 0 || sec === 30 || sec === 45) {
    document.querySelector(".diamondtwo").style.transform = "rotate(" + 180 * j + "deg)";
    j++;
}
}

setInterval(updateDiamondTwo, 1000);

function updateDiamondThree() {
  let d = new Date();
  let sec = d.getSeconds();
  if (sec === 15 || sec === 0 || sec === 30 || sec === 45) {
    document.querySelector(".diamondthree").style.transform = "rotate(" + 180 * k + "deg)";
    k++;
}
}

setInterval(updateDiamondThree, 1000);

function updateDiamondFour() {
  let d = new Date();
  let sec = d.getSeconds();
  if (sec === 15 || sec === 0 || sec === 30 || sec === 45) {
    document.querySelector(".diamondfour").style.transform = "rotate(" + 180 * l + "deg)";
    l++;
}
}

setInterval(updateDiamondFour, 1000);