/*
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
	// const num = Number(value);
	// return isNaN(num) ? num : def;
	if (Number.isNaN(+value)) {
		return def;
	}
	return +value;
}

console.log(toNumber(null, 0));
console.log(toNumber('test', 0));
console.log(toNumber('1', 0));
console.log(toNumber(42, 0));
console.log(toNumber(new Number(42), 0));
