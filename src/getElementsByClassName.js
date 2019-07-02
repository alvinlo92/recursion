// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
var a = document.body;
var b = document.body.childNodes.length;
var c = document.body.childNodes[30];
var d = document.body.childNodes[30].classList;
var e = document.body.childNodes[30].classList[0];
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

var test = [document.body.childNodes[30]];
[div.gb_hc]
<div class="gb_hc">Main menu</div>
*/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var collection = [];
  var bodyNode = document.body;

  var getElements = function(node) {
    if (node.classList !== undefined && node.classList.contains(className)) {
	    collection.push(node);
	  }
	  if (node.hasChildNodes()) {
	      for (var i = 0; i < node.childNodes.length; i++) {
	          getElements(node.childNodes[i]);
	      }
	  }
  }
  getElements(bodyNode);

  return collection;
};

	// if (node.classList[0] === className)
	// {
	// 	collection.push(node);
	// }

	// for (var i = 0; i < node.childNodes.length; i++) {
	// 	if (node.childNodes[i].childNodes.length > 0) {

	// 	}
	// 	if (node.childNodes[i].classList === className) {
	// 		collection.push(node.childNodes[i]);
	// 	}
 //  }

  // console.log(document.body.childNodes[3].classList[0]);
  // console.log(collection);