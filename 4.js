function ElectricalDevice(name, power) {
	this.name = name,
	this.voltage = "220V",
	this.power = power,
	this.getSwitch = function(activation) {
		console.log(this.name + ' works on ' + this.voltage + ' and activated by ' + activation);
	}
}


function LightningDevice(name, power, lightPower, activation) {
	this.name = name,
	this.lightPower = lightPower,
	this.activation = activation,
	this.getLamp = function() {
		console.log(`The light power of ${name} is enough to illuminate ${lightPower/150} sq.m`);
	}
}


LightningDevice.prototype = new ElectricalDevice();

const table_lamp = new LightningDevice('table lamp', 600, 90);
const computer = new ElectricalDevice('computer', 400);
const conditioner = new ElectricalDevice('air conditioner', 3000);

table_lamp.getSwitch('hand');
computer.getSwitch('hand');
conditioner.getSwitch('remote controller');
table_lamp.getLamp();
