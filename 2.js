function checkProperty(propString, objectInput) {
	let result = false;

	for (let prop in objectInput) {
		if (propString == prop) {
			result = true;
		};
	};

	return result;
};


/*
let someObj = {
	height: 157,
	width: 12,
	mass: 1121
};

let someStr = "monkey";

console.log(checkProperty(someStr, someObj));  //true or false
*/
