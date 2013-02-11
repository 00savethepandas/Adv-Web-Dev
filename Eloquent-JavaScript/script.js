/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var cat = {color: "gray", name: "Spot", size: 46};
cat.size;
alert(cat.size);
delete cat.size;

var empty = {};
empty.notReally = 1000;
alert(empty);

var thing = {"gabba gabba": "hey", 5:10};
alert(thing["5"]); // Similar to dictionaries

thing[2+3];
delete thing["gabba gabba"];

// Using variables to name properties
var propertyName = "length";
var text = "coco";
alert(text[propertyName]); // text[length]; 4

// Operator in can be used to test whether an object
// has a certain property. Produces a boolean:

var chineseBox = {};
chineseBox.content = chineseBox;
"content" in chineseBox;
// displays true
"content" in chineseBox.content;
// displays trues

//Create a set containing only "Spot", add "White Fang"
// delete "Spot", test whether Asoka is in it.

var set = {"Spot" : true}; // declare set, add value
set["White Fang"] = true; // adds White Fang
delete set["Spot"]; // delete Spot
"Asoka" in set; // returns false.

//MUTABILITY
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 == object2;
//true
object1 == object3;
//false

object1.value = 15;
object2.value;
//15
object3.value;
//10

//ARRAYS
// You can create empty arrays by just using [] brackets.
var mailArch = {"first email" : "Dear nephew...", "second email" : "..."};

var mailArchive = {0: "Dear Nephew....",
                   1: "mail 2",
                   2: "mail 3"};
for(var current = 0; current in mailArchive; current++)
        print("Processing email #", current, ":", mailArchive[current]);

//Array version:
var mailArchive = ["mail one", "mail two", "mail three"];
for(var current = 0; current < mailArchive.length; current++)
	print("Processing email #", current, ": ", mailArchive[current]);

function range(upto){
	var result = [];
	for(var i =0; i <= upto; i++)
		result[i] = i;
	return result;
	}
	range(4);
	//[0,1,2,3,4]
//METHODS

var doh = "Doh";
typeof doh.toUpperCase;
// "function"

doh.toUpperCase();
//"DOH"

// Some methods of array objects:

var mack = [];
mack.push("Mack"); //push appends to end of array
mack.push("the");
mack.push("knife");
mack;
//Should return ["Mack", "the", "knife"]
mack.join;
// returns "Mack the knife"
mack.pop();
// takes "knife"
mack;
//what's left: ["Mack", "the"]

