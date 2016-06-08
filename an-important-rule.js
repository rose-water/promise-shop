var Q = require('q');

function alwaysThrows() {
	throw new Error('OH NOES');
}

function iterate(integer) {
	console.log(integer);
	return integer + 1;
}

Q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);

	// note about the bonus:
	// ran into this same question https://github.com/stevekane/promise-it-wont-hurt/issues/22