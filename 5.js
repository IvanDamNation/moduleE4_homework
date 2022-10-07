class ElectricalDevice {
	constructor(name, power) {
		this.name = name;
		this.voltage = "220V";
		this.power = power;
	}

	getSwitch(activation) {
		console.log(this.name + ' works on ' + this.voltage + ' and activated by ' + activation);
	}
}


class LightningDevice extends ElectricalDevice {
	constructor(name, power, lightPower, activation) {
		super(name, power);
		this.lightPower = lightPower;
		this.activation = activation;
	}

	getLamp() {
		console.log(`The light power of ${name} is enough to illuminate ${this.lightPower/150} sq.m`);
	}
}


const table_lamp = new LightningDevice('table lamp', 600, 90);
const computer = new ElectricalDevice('computer', 400);
const conditioner = new ElectricalDevice('air conditioner', 3000);

table_lamp.getSwitch('hand');
computer.getSwitch('hand');
conditioner.getSwitch('remote controller');
table_lamp.getLamp();
