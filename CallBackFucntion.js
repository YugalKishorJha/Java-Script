let i = 'mahesh';

function a() {
	return function ba() { console.log(i) }
}



setTimeout((function a() {
	console.log("hi i am call back function")
}), 1000)


a()();

for (let x = 0; x <= 5; x++) {
	console.log(x);
}
console.log(`-----------------------------------------`)

for (var x = 0; x <= 5; x++) {
	console.log(x);
}


