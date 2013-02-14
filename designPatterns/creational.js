/*  CREATIONAL DESIGN PATTERNS

CLASS:

Factory method: Makes and instance of several derived classes based on
interfaces data or events.

OBJECT:

Abstract factory: creates an instance of several families of classes without
detailing concrete classes.

Builder: Separates object construction from its representation, always creates
the same type of object.

Prototype: A fully initialized instance used for copying or cloning.

Singleton: Only a single instance with global access.


CONSTRUCTOR PATTERN:

- Constructor is used to initialize newly created object once memory has been allocated for it. 
- Used to create specific types of objects; preparing for use and accepting
arguements.

Object creation - 3 common methods to create a new empty list:

// 1.
var newObject = {}; 

// 2.
var newObject = Object.create(null);

// 3. Creates an object wrapper for special value. No value, empty object. 
var newObject = newObject();

// Assigning values

//Dot syntax:

newObject.someKey = "Hello World"; // Set properties
var key = newObject.someKey; // Get properties

//Square bracket syntax:
newObject["someKey"] = "Hello World"; // Set properties
var key = newObject["someKey"]; // Get properties

// Create a new empty person object:
var person = Object.create(null);

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

// Create a race car driver that inherits from the person object
var driver = Object.create(person);

// Set some properties for the driver
defineProp(driver, "topSpeed", 100mph");

//get an inherited property(1981)

console.log(driver.dateOfBirth);

// get the property we set (100mph);
console.log(driver.topSpeed);

*/

//USAGE:

var driver = Object.create(person); // Create a racecar driver

defineProp(driver, "topSpeed", "100mph"); // Set properties for the driver

console.log(driver.dateOfBirth); // Get inherited property (1981)

console.log(driver.topSpeed);


/* JavaScript doesn't support concept of classes but it supports constructor 
functions that work with objects. Prefixing a call to a constructor function 
with the keyword new tells JavaScript that the functions should behave like
a constructor and instantiate a new object with the members defined by that 
function. */


function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

this.toString = function() {
	return this.model+"has done"+this.miles+" miles";
  	};
}

// 'this' references the new object that's being created. 


// Create new instances of the car
var civic = new Car("Honda Civic", 2009, 200000);
var mondeo = new Car("Ford Mondeo", 2010, 453049);

// console view of output of the toString() method:
console.log(civic.toString);
console.log(mondeo.toString());


