const quickSort = (arr) => {
	if (arr.length < 1) {
		return arr;
	}

	const pivotIndex = Math.floor(arr.length / 2);
	const pivot = arr[pivotIndex];
	const less = [];
	const greater = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === pivotIndex) continue;
		if (arr[i] > pivot) {
			greater.push(arr[i]);
		} else {
			less.push(arr[i]);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
};

const quickSortFirstEl = (arr) => {
	if (arr.length < 2) return arr;
	const start = arr[0];
	const less = [];
	const greater = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > start) {
			greater.push(arr[i]);
		} else {
			less.push(arr[i]);
		}
	}

	return quickSortFirstEl(less).concat(start, quickSortFirstEl(greater));
};

console.log(quickSort([1, 20, 4, 6, 2, 19, 5, 10, 46, 24]));
console.log(quickSortFirstEl([1, 20, 4, 6, 2, 19, 5, 10, 46, 24]));
