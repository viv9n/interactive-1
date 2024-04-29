let x = myFunction(32, 3);

function myFunction(a,b) {
	let temp = a * b;
	let y = Math.random()*100;
	let someOtherTemp = temp * y;
	console.log(y);
	return someOtherTemp / temp;
}

console.log(x);