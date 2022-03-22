const merge = (left, right) => {
	const arr = [];
	while ((left.length, right.length)) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	return [...arr, ...left, ...right];
};
const mergeSort = (arr) => {
	if (arr.length < 2) return arr;
	const half = arr.length / 2;
	const left = arr.splice(0, half);
	return merge(mergeSort(left), mergeSort(arr));
};

console.log(new Set(mergeSort([2, 19, 3, 11, 1, 48, 4, 8, 3, 8, 9, 19, 49])));