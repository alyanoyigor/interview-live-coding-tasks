const binaryRecursion = (arr, target, start, end) => {
	let middle = Math.floor((start + end) / 2);
	if (target === arr[middle]) {
		return middle;
	}
	if (target < arr[middle]) {
		return binaryRecursion(arr, target, start, middle - 1);
	} else {
		return binaryRecursion(arr, target, middle + 1, end);
	}
};

function binary(sortedArr, target) {
	let end = sortedArr.length;
	let start = 0;
	let pivot = Math.floor((start + end) / 2);
	let steps = 0;

	for (let i = 0; i < sortedArr.length; i++) {
		if (sortedArr[pivot] === target) return [true, steps];
		else {
			if (target < sortedArr[pivot]) end = pivot;
			else start = pivot;
			pivot = Math.floor((start + end) / 2);
			steps++;
		}
	}
	return false;
}

console.log(
	binary(
		[1, 2, 3, 4, 19, 29, 39, 49, 59, 10, 11, 12, 13, 14].sort((a, b) => a - b),
		2
	)
);

const sortedArr = [1, 2, 3, 4, 19, 29, 39, 49, 59, 10, 11, 12, 13, 14].sort(
	(a, b) => a - b
);
console.log(binaryRecursion(sortedArr, 39, 0, sortedArr.length));
