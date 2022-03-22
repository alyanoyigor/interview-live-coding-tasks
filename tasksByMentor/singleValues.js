const singleValues = (arr) => {
	// return [...new Set(arr)];
	// return arr.filter((item, index) => arr.indexOf(item) === index);
	return arr.reduce(
		(prev, item) => (prev.includes(item) ? prev : [...prev, item]),
		[]
	);
};

console.log(singleValues([2, 2, 3, 5, 4, 5, 9, 9]));
