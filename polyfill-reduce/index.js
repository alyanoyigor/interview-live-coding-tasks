Array.prototype.myReduce = function(fn, initial) {
	let values = this;

	values.forEach(item => {
			initial = initial !== undefined ? fn(initial, item) : item
	})

	return initial;
}