// require esprima node module
var esprima = require('esprima');


// global variables
var $anything;
var $firstVariable;
var $secondVariable;



var userInput = "var i;" +
				"for ( i = 0; i < 10; i++) {" +
				"    console.log(i);" +
				"}";
// var userProgram = JSON.stringify(esprima.parse(userInput), null, 4);	// this format is just to output to console
var userProgram = esprima.parse(userInput);		// this format is for tree traversal


var printFunc = function(value){
	console.log(value);
};

// tree traversal code found on http://sevinf.github.io/blog/2012/09/29/esprima-tutorial/
function traverse(node, calledFunction) {
	// Calling the function for a root node - base of recursion
	console.log("-------------------------------------");
    calledFunction(node);

    // Loop through all properties of a root a node
    for (var key in node) {
    	// Ignore inherited properties of an object
        if (node.hasOwnProperty(key)) {
            var child = node[key];
            // ignore if not an object or if null (typeof null is object)
            if (typeof child === 'object' && child !== null) {
                if (Array.isArray(child)) {
                	// Each child can be either single subnode or array of subnodes. 
                	// If child is an array, call traverse recursively for each subnode in it.
                    child.forEach(function(node) {
                        traverse(node, calledFunction);
                    });
                } else {
                	// If child is not an array, call traverse recurively on it.
                    traverse(child, calledFunction); 
                }
            }
        }
    }
}

var nodeArray = [];
var makeNodeList = function(value){
	nodeArray.push(value);
	console.log("ITEM: ", nodeArray);
};


// traverse(userProgram, printFunc);
traverse(userProgram, makeNodeList);



// MUST HAVE
// function to check that input program DOES have a variable declaration
// "var = x;"
// console.log(JSON.stringify(esprima.parse(userInput), null, 4));
// var something1 = esprima.parse(userInput).body[0].type;
// var something2 = esprima.parse(userInput).body[1].type;
// console.log(something1);
// console.log(something2);

var containsVariableDeclaration = function(userInput){
	var something1 = esprima.parse(userInput).body[1].type;

	// loop through the items in the 'body' array to see if any of them match

		// loop through the items inside of each item to see if any of those match

	if(something1 === "VariableDeclaration"){
		console.log("contains a variable: true");
	}
	else {
		console.log("contains a variable: false");
	}
};

// containsVariableDeclaration(userInput);



// maybe write a search function?
// and a counter function - then if the variableDeclaration count is 1 or greater, it is ok?
var findOne = function(userProgram, toMatch){
	console.log(userProgram);

	for (var i = 0; i < userProgram.length; i++){
		console.log("value of i: ", i);

	}

	// for (var item in userProgram) {
		// console.log(item);
		// console.log(userInputParsed[item]);
		// console.log("--------------");

		// if (body[item] !== null && typeof(body[item]) === "object") {
		// 	console.log("hello");
		// 	findOne(item);
		// }
	// }
};

// findOne(userProgram);



// MUST HAVE
// function to check that input program DOES have a for loop


// MUST NOT HAVE
// function to check that input program DOES NOT have a while loop

// MUST NOT HAVE
// function to check that input program DOES NOT have an if statement


// STRUCTURE
// function to check that there is a for loop with an if statement contained inside of the for loop


