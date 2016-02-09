// require esprima node module
var esprima = require('esprima');


// global variables
var $anything;
var $firstVariable;
var $secondVariable;



var userInput = "var i;" +
				"var lindsay;" +
				"for ( i = 0; i < 10; i++) {" +
				"    console.log(i);" +
				"}" +
				"for ( i = 0; i < 10; i++) {" +
				"    console.log(i);" +
				"}";

// this format is just to output to console
// var userProgram = JSON.stringify(esprima.parse(userInput), null, 4);
// this format is for tree traversal
var userProgram = esprima.parse(userInput);


var printFunc = function(value){
	console.log(value);
};

// tree traversal code found on http://sevinf.github.io/blog/2012/09/29/esprima-tutorial/
// traverse each node in the tree and apply a funtcion to it
function traverse(node, calledFunction) {
	// Calling the function for a root node - base of recursion
	console.log("-------------------------------------");
    calledFunction(node);

    // Loop through all properties of a root a node
    for (var key in node) {
    	// Ignore inherited properties of an object
        if (node.hasOwnProperty(key)) {
            var child = node[key];
            // ignore if not an object or if null (typeof null is an object)
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


// MUST HAVE:
// function to check that input program DOES have a variable declaration
// "var = x;"
var searchVariableDeclaration = function(userProgram){
	var variableDeclarationCount = {};

	// If node does not yet exist in our object, create it.
	var createCountEntry = function(funcName) { //2
        if (!variableDeclarationCount[funcName]) {
            variableDeclarationCount[funcName] = {count: 0, type: "VariableDeclarator"};
        }
    };

    traverse(userProgram, function(node){
    	// Type of a node we are looking for is VariableDeclarator, which is a subnode of VariableDeclaration
    	if (node.type === "VariableDeclarator") {
    		// Identifier is stored in id subnode and name of the function is in a name property of this idz node.
    		createCountEntry(node.id.name);
    		// Increase the count of this node in our object by one.
    		variableDeclarationCount[node.id.name].count++;
    	} 
    });

    printFunc(variableDeclarationCount);

};

// searchVariableDeclaration(userProgram);


// MUST HAVE:
// function to check that input program DOES have a for loop
var searchForLoop = function(userProgram){
	var forLoopCount = {};

	// If node does not yet exist in our object, create it.
	var createCountEntry = function(funcName) { //2
        if (!forLoopCount[funcName]) {
            forLoopCount[funcName] = {count: 0, type: "ForStatement"};
        }
    };

	traverse(userProgram, function(node){
		if (node.type === "ForStatement") {
    		createCountEntry(node.type);
    		// Increase the count of this node in our object by one.
    		forLoopCount[node.type].count++;
    	} 
    });

    var checkResults = function(result){
		if (result["ForStatement"]){
			console.log("good job! you have at least one for loop in your program");
		} else {
			console.log("not quite there...try adding a for loop to your program");
		}
	};

	// printFunc(forLoopCount);
    checkResults(forLoopCount);

};

searchForLoop(userProgram);





// MUST NOT HAVE:
// function to check that input program DOES NOT have a while loop
searchWhileLoop = function(userProgram){

};


// MUST NOT HAVE:
// function to check that input program DOES NOT have an if statement
searchIfStatement = function(userProgram){

};


// STRUCTURE:
// function to check that there is a for loop with an if statement contained inside of the for loop
containsForLoopWithIfStatement = function(userProgram){

};





