Array.prototype.myFlat = function flatDeep(deep = 1) {
	return deep > 0
		? this.reduce(
				(prev, cur) =>
					prev.concat(Array.isArray(cur) ? flatDeep.call(cur, deep - 1) : cur),
				[]
		  )
		: this.slice();
};

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.myFlat());
