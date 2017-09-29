/*
* @Author             : Huang
* @E-mail             : huangxi0323@gmail.com
* @Date               : 2017-09-29 11:20:54
* @Last Modified by   : Huang
* @Last Modified time : 2017-09-29 15:11:19
*/
/*
* @ Author             : HUANGXI
* @ E-mail             : huangxi0323@gmail.com
* @ Date               : 2017-09-15 10:12:14
* @ Last Modified by   : HUANGXI
* @ Last Modified time : 2017-09-15 16:43:57
*/

// 链表
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

//  双向链表
function DoublyLinkedList() {
	var Node = function (element) {
		this.element = element;
		this.prev = null;
		this.next = null;
	};

	var length = 0,
		head   = null,
		tail   = null;

	this.insert = function (position, element) {
		if (position > -1 && position < length) {
			var previous,
				current = head,
				index   = 0,
				node    = new Node(element);
			if (position === 0) {
				if (length === 0) {
					head = node;
					tail = node;
				}
				else{
					node.next = head;
					current.previous = node;
					head = node;
				}
			}
			else if (position === length-1) {}{
				current = tail;
				current.next = node;
				node.previous = current;
				tail = node;
			}
			else{
				// 插入位置小于总长一半，从前遍历
				if ((2*position) < length) {
					while(index++ < position){
						previous = current;
						current = current.next;
					}
					previous.next = node;
					node.prev = previous;
					node.next = current;
					current.prev = node;
				}
				// 插入位置大于总长一半，从后遍历
				else{
					index = length-1;
					current = tail;
					previous = tail.prev;
					while(index-- > position){
						current = previous;
						previous = previous.prev;
					}
					previous.next = node;
					node.prev = previous;
					node.next = current;
					current.prev = node;
				}
					
			}
			length ++;
			return true;
		}
		else{
			return false;
		}
	};
	this.removeAt = function (position) {
		if (position > -1 && position < length) {
			var previous,
				current = head,
				index = 0;

			if (position === 0) {
				head = current.next;
				if (length === 1) {
					tail = null;
				}
				else{
					head.prev = null;
				}
			}
			else if (position === length-1) {
				current = tail;
				tail = current.prev;
				tail.next = null;
			}
			else{
				// 插入位置小于总长一半，从前遍历
				if ((2*position) < length) {
					while(index++ < position){
						previous = current;
						current = current.next;
					}
					previous.next = current.next;
					current.next.prev = previous;
				}
				// 插入位置大于总长一半，从后遍历
				else{
					index = length-1;
					current = tail;
					previous = tail.prev;
					while(index-- > position){
						current = previous;
						previous = previous.prev;
					}
					previous.next = current.next;
					current.next.prev = previous;
				}
			}
			length --;
			return current.element;
		}
		else{
			return null;
		}
	};

}
