var http = require("q-io/http");
var fetchLocation = "http://localhost:1337";

http.read(fetchLocation)
	.then(function (res, err) {
		return JSON.parse(res);
	}, function (err) {
		console.log(err);
	}).then(console.log);

// official solution
// http.read(fetchLocation)
// 	.then(function (json) {
// 		console.log(JSON.parse(json));
// 	}).then(null, console.error)
// 	.done()