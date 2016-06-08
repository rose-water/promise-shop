function attachTitle(name) {
	return 'DR. ' + name;
}

// var promise = new Promise(function (fulfill, reject) {
// 	fulfill('MANHATTAN');
// });

// promise.then(function(lastName) {
// 	return attachTitle(lastName);
// }).then(console.log);

function attachTitle(name) { return 'DR. ' + name; }
var promise = new Promise(function (fulfill, reject) { fulfill('MANHATTAN'); });
promise.then(attachTitle).then(console.log);