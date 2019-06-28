// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  if (obj === null) {
  	return 'null';
  }
  if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();
  }
  if (Array.isArray(obj) === true) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';
  }
  if (typeof obj === 'object') {
  	var newArr = [];
    for (var prop in obj) {
    	if (typeof obj[prop] !== "function" && obj[prop] !== undefined) {
    	  newArr.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
      }
    }
    return '{' + newArr + '}';
  }
};