function isGTten(el) {
	return el > 10;
}

function isEven(el) {
	return el % 2 === 0;
}

const multiFilter = (...func) => {
	return (el) => {
		if (!func.length) return true;
		return func.map((func) => func(el)).reduce((prev, cur) => prev && cur);
	};
};

console.log(
	[1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten))
);
