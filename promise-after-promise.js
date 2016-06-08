first().then(function (secretValue) {
	return second(secretValue);
}).then(function (result) {
	console.log(result);
});

// official solution

// 'use strict';

// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
// 	return second(val);
// });

// secondPromise.then(console.log);