const allObjectKeys = function(objectInput) {
	for (let key in objectInput) {
		if (objectInput.hasOwnProperty(key)) {
			console.log(key);
		};
	};
};

// For testing purposes
/*
const user = {
	name: 'Ivan',
	surname: 'Ivanov',
};

const userAdvanced = Object.create(user);

userAdvanced.age = 15;
userAdvanced.city = "Kaliningrad";

allObjectKeys(userAdvanced);  // age, city
*/
