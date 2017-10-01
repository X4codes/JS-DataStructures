/*
* @Author             : Huang
* @E-mail             : huangxi0323@gmail.com
* @Date               : 2017-09-30 10:37:30
* @Last Modified by   : HX
* @Last Modified time : 2017-10-01 13:13:52
*/

function BinarySearchTree() {
	var _root = null;
	var _Node = function (key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};
	var _insertNode = function (node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			}
			else{
				_insertNode(node.left, newNode);
			}
		}
		else{
			if (node.right === null) {
				node.right = newNode;
			}
			else{
				_insertNode(node.right, newNode);
			}
		}
	};
	var _inOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			_inOrderTraverseNode(node.left, callback);
			callback(node.key);
			_inOrderTraverseNode(node.right, callback);
		}
	};
	var _preOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			callback(node.key);
			_preOrderTraverseNode(node.left, callback);
			_preOrderTraverseNode(node.right, callback);
		}
	};
	var _postOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			_postOrderTraverseNode(node.left, callback);
			_postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};
	var _searchNode = function (node, key) {
		if (node === null) {
			return false;
		}

		if (key < node.key) {
			return _searchNode(node.left, key);
		}
		else if(key > node.key){
			return _searchNode(node.right, key);			
		}
		else{
			return true;
		}
	};
	var _findMinNode = function (node) {
		if (node) {
			while(node && node.left !== null){
				node = node.left;
			}
			return node;
		}
		return null
	}
	var _removeNode = function (node, key) {
		if (node === null) {
			return null;
		}

		if (key < node.key) {
			node.left = _removeNode(node.left, key);
			return node;
		}
		else if(key > node.key){
			node.right = _removeNode(node.right, key);
			return node;
		}
		else{
			// 叶子节点
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			// 只有一个子节点的节点
			if (node.left === null) {
				node = node.right;
				return node;
			}
			else if(node.right === null){
				node = node.left;
				return node;
			}
			// 有两个子节点的节点
			var aux = _findMinNode(node.right);
			node.key = aux.key;
			node.right = _removeNode(node.right, aux.key);
			return node;
		}
	}


    //插入新节点 
	this.insert = function (key) {
		var newNode = new _Node(key);

		if(_root === null){
			_root = newNode;
		}
		else{
			_insertNode(_root, newNode);
		}
	};
	this.search = function (key) {
		return _searchNode(_root, key);
	};
	// 中序遍历 —— 针对二叉搜索树即从小到大排序
	this.inOrderTraverse = function (callback) {
		_inOrderTraverseNode(_root, callback);  //callback回调函数，
	};
	// 先序遍历 —— 打印结构化文档
	this.preOrderTraverse = function (callback) {
		_preOrderTraverseNode(_root, callback);
	};
	// 后序遍历 —— 计算目录和子目录所有文件所占空间的大小
	this.postOrderTraverse = function (callback) {
		_postOrderTraverseNode(_root, callback);		
	};
	this.min = function () {
		var node = _root;
		if (node) {
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null
	};
	this.max = function () {
		var node = _root;
		if (node) {
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null
	};
	this.remove = function (key) {
		_root = _removeNode(_root, key);
	};

}

// test
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){
	console.log(value);
}
tree.postOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(20));
console.log(tree.search(26));
tree.remove(3);
console.log(tree.min());
