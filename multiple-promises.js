// this exercise was super confusing in its wording!

function all (promise1, promise2) {
	var counter = 0;
	var values = [];

	var myPromise = new Promise (function (resolve, reject) {
		
		promise1.then(function (value) {
			values[0] = value;
			counter++;

			if (counter >= 2) {
				resolve(values);
			}
		});

		promise2.then(function (value) {
			values[1] = value;
			counter++;

			if (counter >=2) {
				resolve(values);
			}
		});
	});

	return myPromise;
}

all(getPromise1(), getPromise2())
	.then(function (values) {
		console.log(values);
	}, function (error) {
		console.log(error);
	});