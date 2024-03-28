let apples = 2;
let oranges = 10;
let message = "";

if (apples>oranges) {
	message = "There are more apples than oranges"
}
else {
	message = "There are more oranges than apples"
}

document.getElementById('text').innerText = message;