
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innderWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var barStatus;
var openNum = (//import opening number);
var closeNum = (//import closing number);
var change = (openNum - closeNum)*-1;

// Note: integrate a factory pattern to render new bars


// Render Information: Google, Amazon, Facebook, Microsoft, Apple
// Generate links...


//bar color:
if (change === //positive) {
    barStatus = #ff1f3f;
} else {
    barStatus = #1fbf2f;
}

// Render the background
// ???

// Render Title on background
// Render text on background

// make the bar, set the color and height
// Need to figure out how to import the data and set values
var barHeight; // import data. figure out how to convert numbers
var barWidth;
var barDepth;
var wSegments;
var hSegments;
var dSegments;

var geometry = new THREE.CubeGeometry(barWidth, barHeight, barDepth, wSegments, hSegments, dSegments);
var Shape = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: barStatus}));
scene.add(shape);
camera.position.z = 5;
