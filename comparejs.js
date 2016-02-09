// for command line / working with node only - not for use in web browser
// require esprima node module
// var esprima = require('esprima');

// sample code that the user would type in, to check if our functions our working
var practiceCode = "var i;" +
				"var lindsay;" +
				"for ( i = 0; i < 10; i++) {" +
				"    console.log(i);" +
				"}" +
				"for ( i = 0; i < 10; i++) {" +
				"    console.log(i);" +
				"}";

// to check that this file is loading in the console
console.log("hello from comparejs.js file");

// this format is just to output to console
// var userProgram = JSON.stringify(esprima.parse(practiceCode), null, 4);
// this format is for tree traversal
// var userProgram = esprima.parse(practiceCode);

// for testing purposes in the console
var printFunc = function(value){
	console.log(value);
};

// tree traversal code found on http://sevinf.github.io/blog/2012/09/29/esprima-tutorial/
// traverse each node in the tree and apply a funtcion to it
function traverse(node, calledFunction) {
	// Calling the function for a root node - base of recursion
	// console.log("-------------------------------------");
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

// create empty object to hold node count,
// traverse the program
// if node is found, increase count for that node by 1
// display pass or fail message
var analyzeProgram = function(userProgram, targetNode, passPhrase, failPhrase){
	var nodeCount = {};

	// If node does not yet exist in our object, create it.
	var createCountEntry = function(funcName) { //2
        if (!nodeCount[funcName]) {
            nodeCount[funcName] = {count: 0, type: targetNode};
        }
    };

    traverse(userProgram, function(node){
    	// Type of a node we are looking for is VariableDeclaration
    	if (node.type === targetNode) {
    		createCountEntry(node.type);
    		// Increase the count of this node in our object by one.
    		nodeCount[node.type].count++;
    	} 
    });

    var checkResults = function(result){
		if (result[targetNode]){
			// console.log(passPhrase);
			return passPhrase;
		} else {
			// console.log(failPhrase);
			return failPhrase;
		}
	};

    // printFunc(nodeCount);
    return checkResults(nodeCount);

};


// MUST HAVE:
// function to check that input program DOES have a variable declaration
// "var = x;"
var nodeVariableDeclaration = "VariableDeclaration";
var msgVariableDeclarationPass= "&check; Good job! You have at least one variable declaration in your program.";
var msgVariableDeclarationFail = "&cross; Not quite there...try adding a variable using the 'var' keyword.";
// analyzeProgram(userProgram, nodeVariableDeclaration, msgVariableDeclarationPass, msgVariableDeclarationFail);

// MUST HAVE:
// function to check that input program DOES have a for loop
var nodeForLoop = "ForStatement";
var msgForLoopPass = "&check; Good job! You have at least one for loop in your program.";
var msgForLoopFail = "&cross; Not quite there...try adding a for loop to your program.";
// analyzeProgram(userProgram, nodeForLoop, msgForLoopPass, msgForLoopFail);

// MUST NOT HAVE:
// function to check that input program DOES NOT have a while loop
var nodeWhileLoop = "WhileStatement";
var msgWhileLoopPass = "&check; Good job! We do NOT want to be using a while loop here.";
var msgWhileLoopFail = "&cross; Not quite there...remember, we do NOT want to be using a while loop. Try something else?";
// switch the order of the pass & fail messaging, since a pass would occur when there is no node by this name found
// analyzeProgram(userProgram, nodeWhileLoop, msgWhileLoopFail, msgWhileLoopPass);

// MUST NOT HAVE:
// function to check that input program DOES NOT have an if statement
var nodeIfStatement = "IfStatement";
var msgIfStatementPass = "&check; Good job! We do NOT want to be using an if statement here.";
var msgIfStatementFail = "&cross; Not quite there...remember, we do NOT want to be using an if statement. Try something else?";
// switch the order of the pass & fail messaging, since a pass would occur when there is no node by this name found
// analyzeProgram(userProgram, nodeIfStatement, msgIfStatementFail, msgIfStatementPass);

// STRUCTURE:
// function to check that there is a for loop with an if statement contained inside of the for loop



// Do stuff on page load
$(document).ready(function(){

	var feedbackArea = $("#feedback_area");
	var textArea = $("#user_input");
	
	textArea.keyup(function(){
		// console.log("keyup handler called");
		console.log(textArea.val());
		var userProgram = esprima.parse(textArea.val());
		var feedbackA = analyzeProgram(userProgram, nodeVariableDeclaration, msgVariableDeclarationPass, msgVariableDeclarationFail);
		var feedbackB = analyzeProgram(userProgram, nodeForLoop, msgForLoopPass, msgForLoopFail);
		var feedbackC = analyzeProgram(userProgram, nodeWhileLoop, msgWhileLoopFail, msgWhileLoopPass);
		var feedbackD = analyzeProgram(userProgram, nodeIfStatement, msgIfStatementFail, msgIfStatementPass);

		feedbackArea.html("<p>" + feedbackA + "</p>" + 
						  "<p>" + feedbackB + "</p>" +
						  "<p>" + feedbackC + "</p>" +
						  "<p>" + feedbackD + "</p>" );
	});

});


