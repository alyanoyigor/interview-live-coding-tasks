// 'hello world'.repeating(3) // 'hello world hello world hello world'

String.prototype.repeating = function (num) {
	return (this + ' ').repeat(num);
};
console.log('hello world'.repeating(3));
