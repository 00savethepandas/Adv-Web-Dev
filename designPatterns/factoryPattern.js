//Types of cars
// Constructor defines new cars:
function Car(options) {
	//some defaults:
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
	this.year = options.year || "2007";
	this.size = options.size || "Sedan";
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
// take the VehicleFactory skeleton, copy it into vehicleClass, fill vehicleClass with Car function.

//Creating new Vehicle instances:
// Take the vehicle skeleton, copy it into createVehicle,
// make it hold the function "if the vehicle options.vehicleType is car,
// this vehicle class is call-car function. otherwise its a truck, call truck function.
// return new object of this vehicle class and all car parts.
VehicleFactory.prototype.createVehicle = function(options){
	if(options.vehicleType === "car"){  // how and where was vehicleType defined??
		this.vehicleClass = Car;
		}else{
			this.vehicleClass = Truck;
		}

		return new this.vehicleClass(options);
	};

// Create and instance of our factory that makes cars
// Vehicle factory is the building, createVehicle is what happens inside
var carFactory = new VehicleFactory(); // create new instance of factory skeleton.
var car = carFactory.createVehicle( {  //calls the create vehicle function
	vehicleType: "car",
	color: "yellow",
	doors: 6 });
// Test to confirm our car was created using the vehicleClass/prototype Car

// tests if car is an instance of Car
console.log(car instanceof Car);

//Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);

var movingTruck = carFactory.createVehicle( {
	vehicleType: "truck",
	state: "like new",
	color: "red",
	wheelSize: "small" });

console.log(movingTruck instanceof Truck);
console.log(movingTruck);

// Subclass vehicleFactory to create a fctory class for trucks:

function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( {
	state: "omg.. so bad.",
	color: "pink",
	wheelSize: "so big" });

console.log( myBigTruck instanceof Truck);
console.log(myBigTruck);
	

// DECORATOR: DESIGN
// A vehicle constructor:
function vehicle( vehicleType ){
    // some sane defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
}

// Test instance for a basic vehicle

var testInstance = new vehicle( "car" );
console.log( testInstance );
// Outputs:
// vehicle: car, model:default, license: 00000-000
// Lets create a new instance of vehicle, to be decorated
var truck = new vehicle( "truck" );
// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};
truck.setColor = function( color ){
    this.color = color;
};
// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );
console.log( truck );
// Outputs:
// vehicle:truck, model:CAT, color: blue
// Demonstrate "vehicle" is still unaltered
var secondInstance = new vehicle( "car" );
console.log( secondInstance );
