function parsePromised (json) {
	return new Promise(function (fulfill, reject) {
		try {
			fulfill(JSON.parse(json));
		} catch (e) {
			reject(e);
		}
	});
}

parsePromised(process.argv[2])
	.then(function(json) {
		console.log(json);
	}, function(error) {
		console.log(error);
	});

// official:
// parsePromised(process.argv[2]).then(null, console.log);
