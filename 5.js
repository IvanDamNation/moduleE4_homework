class ElectricalDevice {
	constructor(name, power) {
		this.name = name;
		this.voltage = "220V";
		this.power = power;
	}

	getSwitch(activation) {
		return this.name + ' works on ' + this.voltage + ' and activated by ' + activation;
	}
}


class LightningDevice extends ElectricalDevice {
	constructor(name, power, lightPower, activation) {
		super(name, power);
		this.lightPower = lightPower;
		this.activation = activation;
	}

	getLamp() {
		return `The light power of ${this.name} is enough to illuminate ${this.lightPower/150} sq.m`;
	}
}


const table_lamp = new LightningDevice('table lamp', 600, 90);
const computer = new ElectricalDevice('computer', 400);
const conditioner = new ElectricalDevice('air conditioner', 3000);


// For testing purposes
/*
console.log(table_lamp.getSwitch('hand'));
console.log(computer.getSwitch('hand'));
console.log(conditioner.getSwitch('remote controller'));
console.log(table_lamp.getLamp());
*/
