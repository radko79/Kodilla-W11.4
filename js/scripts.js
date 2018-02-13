//scripts.js

var iPhone6s = new Phone("Apple", 2250, "white", "6S", "5\"", "1080p"),
	SamsungGalaxyS6 = new Phone("Samsung", 2500, "silver", "Galaxy S6", "5.5\"", "1080p"),
	OnePlusOne = new Phone("One+", 1100, "black", "One", "5.2\"", "720p");

function Phone(brand, price, color, model, display, resolution) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.model = model;
	this.display = display;
	this.resolution = resolution;
}

Phone.prototype.printInfo = function() {
	console.log("Phone specs:" + '\n' + "Brand: " + this.brand + '\n'+ "Model: " + this.model + '\n' + "Screen size: " + this.display + '\n' + "Resolution: " + this.resolution + '\n' + "Color: " + this.color + '\n' + "Price: " + this.price + '\n');
}

iPhone6s.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();