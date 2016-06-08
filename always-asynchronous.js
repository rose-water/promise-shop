var promise = new Promise(function (fulfill, reject) {
	fulfill('PROMISE VALUE');
});

promise.then(function(result) {
	console.log(result);
}, function() {
	console.error;
});

console.log('MAIN PROGRAM');
