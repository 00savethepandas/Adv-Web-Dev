//Types of cars
// Constructor defines new cars:
function Car(options) {
	//some defaults:
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}
// Truck constructor
function Truck(options){
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
	this.model = options.model || "Sequoia";
}

// Factory:
// Skeleton
function VehicleFactory() {}

//Define prototypes
// default vehicleClass will be car
VehicleFactory.prototype.vehicleClass = Car;

//Creating new Vehicle instances:
VehicleFactory.prototype.createVehicle = function(options){
	if(options.vehicleType === "car"){
		this.vehicleClass = Car;
		}else{
			this.vehicleClass = Truck;
		}

		return new this.vehicleClass(options);
	};

// Create and instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
	vehicleType: "car",
	color: "yellow",
	doors: 6 });
// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(car instanceof Car);

//Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);

`
