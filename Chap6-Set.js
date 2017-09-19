/*
* @ Author             : HUANGXI
* @ E-mail             : huangxi0323@gmail.com
* @ Date               : 2017-09-19 19:11:11
* @ Last Modified by   : HUANGXI
* @ Last Modified time : 2017-09-19 21:03:13
*/

function Set() {
	var items = {};
	this.has = function (value) {
		return items.hasOwnProperty(value);
	};
	this.add = function (value) {
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};
	this.remove = function (value) {
		if (this.has(value)) {
			delete items[value];
			return true;
		}
		return false;
	};
	this.clear = function () {
		items = {};
	};
	this.size = function () {
		return Object.keys(items).length;
	};
	this.sizeLegacy = function () {
		var count = 0;
		for (var prop in items) {
			if (items.hasOwnProperty(prop)) {
				count++;
			}
		}
		return count;
	};
	this.values = function () {
		return Object.keys(items);
	};
	this.valuesLegacy = function () {
		var keys = [];
		for (var key in items) {
			keys.push(key);
		}
		return keys;
	};
	// 集合的并集
	this.union = function (otherSet) {
		var unionSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		values = otherSet.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		return unionSet;
	};
	// 集合的交集
	this.intersection = function (otherSet) {
		var intersectionSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};
	// 集合的差集
	this.difference = function (otherSet) {
		var differenceSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	};
	// 集合的子集
	this.subset = function (otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}
		else{
			var values = this.values();
			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
			return true;
		}
	};

}