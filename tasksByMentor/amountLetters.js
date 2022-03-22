const amountLetters = (str) => {
	const obj = {};

	str.split('').forEach((item) => {
		if (!obj[item]) {
			obj[item] = 1;
		} else {
			obj[item]++;
		}
	});

	return Object.keys(obj)
		.map((item) => obj[item] + item)
		.join('');
};

const amountLetters2 = (str) => {
	return str.split('').reduce((prev, value, index, arr) => {
		if (prev.includes(value)) return prev;
		const num = arr.filter((item) => item === value).length;
		return (prev += num + value);
	}, '');
};

console.log(amountLetters2('aabbbcccc')); //2a3b4c
console.log(amountLetters2('aaaaaaa')); //7a
