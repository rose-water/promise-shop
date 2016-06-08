var firstPromise = new Promise(function (fulfill, reject) {
	reject('THERE IS AN ERROR');
});

firstPromise.catch(function (err) {
	console.log(err);
});

var promise = Promise.resolve('SECRET VALUE');
var secondPromise = Promise.reject(new Error ('SECRET VALUE!'));
