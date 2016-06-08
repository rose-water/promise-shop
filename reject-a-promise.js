var promise = new Promise(function (fulfill, reject) {
	setTimeout(function() {
		reject(new Error('REJECTED!'));
	}, 300);
});

function onReject (error) {
	console.log(error.message); 
}

promise.then(function (result) {
	console.log('you were not supposed to succeed!');
}, function (error) {
	onReject(error);
});