/*
* @ Author             : HUANGXI
* @ E-mail             : huangxi0323@gmail.com
* @ Date               : 2017-09-12 10:44:01
* @ Last Modified by   : HUANGXI
* @ Last Modified time : 2017-09-12 15:55:27
*/

// 原始队列
function Queue() {
	var _items = [];
	this.enqueue = function (element) {
		_items.push(element);
	};
	this.dequeue = function () {
		return _items.shift();
	};
	this.front = function () {
		return _items[0];
	};
	this.isEmpty = function () {
		return _items.length === 0;
	};
	this.size = function () {
		return _items.length;
	};
	this.print = function () {
		return _items.join(' ');
	};
}

// 优先队列
function PriorityQueue() {
	var _items = [];
	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function (element, priority) {
		var queueElement = new QueueElement(element, priority);

		if (this.isEmpty()) {
			_items.push(queueElement);
		}
		else{
			var added = false;
			for (var i = 0; i < _items.length; i++) {
				if (queueElement.priority < _items[i].priority) {
					_items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
			if(!add){
				_items.push(queueElement);
			}
		}
	};
	this.dequeue = function () {
		return _items.shift();
	};
	this.front = function () {
		return _items[0];
	};
	this.isEmpty = function () {
		return _items.length === 0;
	};
	this.size = function () {
		return _items.length;
	};
	this.print = function () {
		return _items.join(' ');
	};
}

// 循环队列 —— 击鼓传花
function hotPotato(nameList, num) {
	var queue = new Queue();
	for (var i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while(queue.size() > 1){
		for (var i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated + '在击鼓传花游戏中被淘汰');	
	}
	return queue.dequeue();
}
var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者：' + winner);