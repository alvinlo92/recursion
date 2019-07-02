// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if ((json[0] === '[' && json[json.length - 1] !== ']') || (json[0] === '{' && json[json.length - 1] !== '}')) {
		throw SyntaxError('Unexpected end of JSON input');
  }

  // removes brackets & quotes from the beginning and endings
  var remover = function(str) {
  	str = str.slice(1, -1);
  	return str;
  }

  if (json[0] === '[') {
  	var results = [];
  	if (json.length === 2) {
  		return results;
  	}

  	json = remover(json).split(', ');
  	
  	for (var i = 0; i < json.length; i++) {
  		if (json[i][0] === '"') {
  			json[i] = remover(json[i]);
  		}
  		results.push(json[i]);
  	}

  	return results;
  }

  if (json[0] === '{') {
  	var results = {};
  	if (json.length === 2) {
  		return results;
  	}

  	
  	return results;
  }
};