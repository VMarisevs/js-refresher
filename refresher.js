// int variable a
var a = 1;
// string variable b
var b = "Hello, world!";
// float variable c
var c = 1.234;
// null variable d
var d = null;

// print all variables in console
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// defining function test1 that takes 2 params and returning them
function test1(x, y) {
	return (x + y) * (x - y);
}

// print result of the function test1 with params 2 and 3
console.log(test1(2, 3));

// defining function test2 that takes 2 params x and y and returning the result of
var test2 = function(x, y) {
	return (x + y) / (x - y);
}

// prints the result of test2 function with params 2 and 3
console.log(test2(2, 3));

// defining array object "car" with param "make" and "model"
var car = {
	make: "Skoda"
	, model: "Octavia"
};

// print concatinated string that contains car's params make and model 
console.log("The car is a " + car.make + " " + car.model + ".");

// defining object var with params make,model and function full_name that returns concatenated string of make and model
var van = {
	make: "Ford"
	, model: "Transit"
	, full_name: function() {
		return this.make + " " + this.model;
	}
};

// prints concatenated string with van's function result
console.log("\nThe van is a " + van.full_name() + 	".");

// defining array of int
var numbers = [1,2,3,4];

// looping through array and displaying counter multiplied by counter
for (var i = 0; i < numbers.length; i++) {
	console.log(i * i);
}

// constant if result = true, because 1<2 and as the result of if statement output "The world is OK."
if (1 < 2) {
	console.log("\nThe world is OK.");
} else {
	console.log("\nThe world is not OK.");
}


/* My code */

// Exercise 5
	function exercise5(x){
		var result = ((x*x) + 2);
		return result;
	}
	
	console.log( "\nExercise 5 result: " + exercise5(8));

// Exercise 6
var list_event_nubers = [];

for (var i = 1 ; i <= 60; i++){
	if (i%2 == 0)
		list_event_nubers.push(i);
}
// To check the list, uncomment next line:
// console.log(list_event_nubers);

// Exercise 7
for (var i = 0; i < list_event_nubers.length; i++){
	console.log("List Item: " + (i) + " Result of func: " + exercise5(list_event_nubers[i] ));
}

// exercise 8
var connection = {
	ip_address: "127.0.0.1",
	port: "80",
	
	change_port: function(port){
		return this.port = port;
	},
	
	connection: function (ip,port){
		this.ip_address = ip;
		this.port = port;
	},
	
	// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	randomIP: function(){
		var ip = "";
		for (var i = 0; i < 4; i++){

			ip += (Math.floor(Math.random() * (255 - 1 + 1)) + 1);
			
			if (i < 3)
				ip +=".";
		}
		return ip;
	},
	
	randomPort: function(){
		// port range 0 to 65536, but only ports numbers 0 to 1024 are reserved for privileged services
		var port = Math.floor(Math.random() * (65536 - 1024 + 1)) + 1024;
		
		return port;
	}
	
};

// exercise 9,10
console.log("\nDefault port was "+ connection.port 
			+", changed to " + connection.change_port(8888));

		
/* Advanced */
// To test random ip generator please uncomment:
//console.log("\nIp "+ connection.randomIP());	

// To test random port generator please uncomment:
//console.log("\nPort "+ connection.randomPort());

var connections = [];
for (var i = 0; i < 100; i++){	
	connections.push(new connection.connection(
								connection.randomIP(),
								connection.randomPort()));	
}
// To display created ip addresses and ports uncomment:
console.log("\n");
console.log(connections);