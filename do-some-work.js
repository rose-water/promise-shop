var http = require("q-io/http");

http.read('http://localhost:7000')
.then(function(id) {
	return http.read("http://localhost:7001/" + id); 
})
.then(function (json) {
	return JSON.parse(json);
})
.then(function (value) {
	console.log(value);
}, function (error) {
	console.log(error);
});

// official solution

// http.read('http://localhost:7000/')
// .then(function (id) {
// 	return http.read('http://localhost:7001/' + id);
// })
// .then(function (json) {
// 	console.log(JSON.parse(json));
// })
// .then(null, console.error)
// .done();