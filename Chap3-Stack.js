/*
* @ Author             : HUANGXI
* @ E-mail             : huangxi0323@gmail.com
* @ Date               : 2017-08-31 17:39:21
* @ Last Modified by   : HUANGXI
* @ Last Modified time : 2017-09-12 10:43:23
*/


function Stack() {
	var _items = [];
	this.push = function (element) {
		_items.push(element);
	};
	this.pop = function () {
	 	return _items.pop();
	};
	this.peek = function () {
		return _items[_items.length-1];
	};
	this.isEmpty = function () {
		return _items.length === 0;
	};
	this.size = function () {
		return _items.length;
	};
	this.clear = function () {
		_items = [];
	};
	this.print = function () {
		return _items.join(' ');
	};
}

function baseConverter(decNumber, base) {
	var remStack   = new Stack(),
		rem,
		digits     = '0123456789ABCDEF'
		baseString = '';

	while(decNumber>0){
		rem = decNumber % base;
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()];
	}
	return baseString;
}
