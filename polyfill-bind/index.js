const obj = {
	name: 'Igor',
	age: 21,
};

const showInfo = function (city) {
	return `${this.name}, ${this.age}, ${city}`;
};

Function.prototype.myBind = function (obj, ...args) {
	return (...bindArgs) => this.call(obj, ...args, ...bindArgs);
};

const func = showInfo.myBind(obj);
console.log(func('Mykolaiv'));
