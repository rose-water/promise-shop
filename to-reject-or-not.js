var promise = new Promise(function (fulfill, reject) {
	fulfill('I FIRED');

	reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
	console.log(error.message);
}

promise.then(function(result) {
	console.log(result);
}, function(error) {
	onReject(error);
});

// can also be:
// promise.then(console.log, onReject);