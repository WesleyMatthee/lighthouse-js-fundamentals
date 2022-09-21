const sayHello = function (name) { // Create a function with a parameter "Name"
  console.log("Hello, " + name); //Log the string within the function
}

sayHello("Wes"); //Delcare the function with a set parameter
sayHello("Lina");//Again
sayHello("Elmtree");//and again!! 

//This is how you return a parameter to a variable the log it to the console.
const returnSayHello = function (name) { // create a function 
  return "Hello, " + name; // return a conditon
}

const greeting = returnSayHello("Peter"); // Create a variable to hold the function return
console.log(greeting); // log the variable 