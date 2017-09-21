/*
* @ Author             : HUANGXI
* @ E-mail             : huangxi0323@gmail.com
* @ Date               : 2017-09-21 14:37:15
* @ Last Modified by   : HUANGXI
* @ Last Modified time : 2017-09-21 15:50:32
*/

function Dictionary() {
	var items =  {};

	this.has = function (key) {
		return items.hasOwnProperty(key);
	};
	this.set = function (key, value) {
		items[key] = value;
	};
	this.remove = function (key) {
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};
	this.get = function (key) {
		return this.has(key) ? items[key] : undefined;
	};
	this.keys = function () {
		return Object.keys(items);
	};
	this.keysLegacy = function () {
		var keys = [];
		for (var key in items) {
			keys.push(key);
		}
		return keys;
	};
	this.values = function () {
		var values = [];
		for (var key in items) {
			if (this.has(key)) {
				values.push(items[key]);
			}
		}
		return values;
	};
	this.getItems = function () {
		return items;
	};
	this.size = function () {
		return Object.keys(items).length;
	};
	this.sizeLegacy = function () {
		var count = 0;
		for (var prop in items) {
			if (items.has(prop)) {
				count++;
			}
		}
		return count;
	};
	this.clear = function () {
		items = {};
	}
}
