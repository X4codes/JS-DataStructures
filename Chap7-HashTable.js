/*
* @Author             : Huang
* @E-mail             : huangxi0323@gmail.com
* @Date               : 2017-09-29 11:21:22
* @Last Modified by   : HX
* @Last Modified time : 2017-09-29 16:34:24
*/

// 散列表基础实现
function HashTable() {
	var table = [];
	var count = 0;
	// 散列函数
	var loseloseHashCode = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	this.put = function (key, value) {
		var position = loseloseHashCode(key);
		console.log(position + '-' + key);
		table[position] = value;
		count++;
	};
	this.get = function (key) {
		var position = loseloseHashCode(key);
		return table[position];
	};
	this.remove = function (key) {
		var position = loseloseHashCode(key);
		table[position] = undefined;
		count--;
	};
	this.size = function () {
		return count;
	};
	this.clear = function () {
		table = [];
		count = 0;
	};
}


// 散列表冲突解决 —— 分离链接
function LinkedList() {
	var Node = function (element) {
		this.element = element;
		this.next = null;
	};

	var length = 0,
		head   = null;

	this.append = function (element) {
		var current,
			node = new Node(element);

		if (length === 0) {
			head = node;
		}
		else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	this.removeAt = function (position) {
		if (position >-1 && position < length) {
			var previous,
				index   = 0,
				current = head;
			if (position === 0) {
				head = current.next;
			}
			else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.element;
		}
		else{
			return null;
		}
	};
	this.insert = function (position, element) {
		if (position > -1 && position < length) {
			var previous,
				current = head,
				index   = 0,
				node    = new Node(element);
			if (position === 0) {
				node = head;
				node.next = current;
			}
			else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
			}
			length ++;
			return true;
		}
		else{
			return false;
		}
	};
	this.toString = function () {
		var current = head,
			string  = '';

		while(current) {
			string += current.element + '-';
			current = current.next;
		}
		return string.slice(0,string.length-1);
	};
	this.indexOf = function (element) {
		var current = head,
			index   = 0;
		while(current){
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};
	this.remove = function (element) {
		var position = this.indexOf(element);
		return this.removeAt(index);
	};
	this.isEmpty = function () {
		return length === 0;
	};
	this.size = function () {
		return length;
	};
	this.getHead = function () {
		return head;
	};
}

function HashTable2() {
	var table = [];
	var count = 0;
	// 散列函数
	var loseloseHashCode = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};
	var ValuePair = function (key, value) {
		this.key = key;
		this.value = value;
		this.toString = function () {
			return '[' + this.key + '-' + this.value + ']';
		};
	};

	this.put = function (key, value) {
		var position = loseloseHashCode(key);

		if (table[position] === undefined) {
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key, value));
		count++;
	};
	this.get = function (key) {
		var position = loseloseHashCode(key);
		if (table[position] !== undefined) {
			var current = table[position].getHead();
			
			// 遍历链表
			while(current.next){
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
			// 只有一个节点的情况
			if (current.element.key === key) {
				return current.element.value;
			}
		}
		return undefined;
	};
	this.remove = function (key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			var current = table[position].getHead();

			while(current.next !== null){
				if (current.element.key === key) {
					table[position].remove(current.element);
					if (table[position].isEmpty()) {
						table[position] = undefined;
					}
					count--;
					return true;
				}
				current = current.next;
			}
			if (current.element.key === key) {
				table[position].remove(current.element);
				if (table[position].isEmpty()) {
					table[position] = undefined;
				}
				count--;
				return true;
			}
		}
		return false;
	};
	this.size = function () {
		return count;
	};
	this.clear = function () {
		table = [];
		count = 0;
	};
}

function HashTable3() {
	var table = [];
	var count = 0;
	// 散列函数
	var loseloseHashCode = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};
	var ValuePair = function (key, value) {
		this.key = key;
		this.value = value;
		this.toString = function () {
			return '[' + this.key + '-' + this.value + ']';
		};
	};

	this.put = function (key, value) {
		var position = loseloseHashCode(key);

		if (table[position] == undefined) {
			table[position] = new ValuePair(key, value);
		}
		else{
			var index = ++position;
			while(table[index] != undefined){
				index++;
			}
			table[index] = new ValuePair(key, value);
		}
		count++;
	};
	this.get = function (key) {
		var position = loseloseHashCode(key);

		if (table[position] != undefined) {
			if (table[position].key === key) {
				return table[position].value;
			}
			else{
				var index = ++position;
				while (table[index] == undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {
					return table[index].value;
				}
			}
		}
		return undefined;
	};
	this.remove = function (key) {
		var position = loseloseHashCode(key);

		if (table[position] != undefined) {
			if (table[position].key === key) {
				table[position] = undefined;
				count--;
				return true;
			}
			else{
				var index = ++position;
				while (table[index] == undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {
					table[index] =  undefined;
					count--;
					return true;
				}
			}
		}
		return false;
	};
	this.size = function () {
		return count;
	};
	this.clear = function () {
		table = [];
		count = 0;
	};
}

//  其他散列函数
var djb2HashCode = function (key) {
	var hash = 5381;
	for (var i = 0; i < key.length; i++) {
		hash = hash*33 + key.charCodeAt(i);
	}
	return hash % 1013; // 取比散列表长度大的质数
};

// test
var personInfo = new HashTable3();
personInfo.put('Gandalf', 'Gandalf@email.com');
personInfo.put('John', 'John@email.com');
personInfo.put('Tyrion', 'Tyrion@email.com');
personInfo.put('Aoron', 'Aoron@email.com');
personInfo.put('Donnie', 'Donnie@email.com');
personInfo.put('Ana', 'Ana@email.com');
personInfo.put('Jonathan', 'Jonathan@email.com');
personInfo.put('Jamie', 'Jamie@email.com');
personInfo.put('Sue', 'Sue@email.com');
personInfo.get('Donnie');
personInfo.size();
personInfo.remove('Sue');
personInfo.size();
personInfo.get('John')
