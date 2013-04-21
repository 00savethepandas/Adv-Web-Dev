// take and array with 6 or 7 hrefs. The array gets passed into a function
// (createLinks) iterates through the array, instatiates linkList, loops
// through the array. linkList.push 
// array for links:

var someLinks = ["www.kayak.com", "www.google.com", "www.facebook.com"];

// factory container
function linkFactory() {}

linkFactory.prototype.createLinks = function(mylinks) {
	links = []; //
	// iterates through the array
	for(var i = 0; i < someLinks.length, i++) {
	var link = document.getElementById('a');
	links.href = someLinks[i];
	links.textContent = i;
	links.push(links);
	}
     return links;
}

var lFactory = new linkFactory();
var list = lFactory.createLinks(someLinks);
	
console.log(list);	

//------------------- Factory ----------------------


