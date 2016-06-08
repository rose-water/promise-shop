'use strict';

var promise = new Promise(function (fulfill, reject) {
	setTimeout(function() {
		fulfill('FULFILLED!');
	}, 300);
});

promise.then(function(result) {
	console.log(result);
}, function (err) {	
	console.log('error!');
});