
var MyCircularDeque = function (k) {
    this.deque = []
    this.size = k
};

MyCircularDeque.prototype.insertFront = function (value) {
    if (this.deque.length < this.size) {
        this.deque.unshift(value)
        return true
    }
    return false
};

MyCircularDeque.prototype.insertLast = function (value) {
    if (this.deque.length < this.size) {
        this.deque.push(value)
        return true
    }
    return false
};

MyCircularDeque.prototype.deleteFront = function () {
    if (this.deque.length > 0) {
        this.deque.shift()
        return true
    }
    return false
};

MyCircularDeque.prototype.deleteLast = function () {
    if (this.deque.length > 0) {
        this.deque.pop()
        return true
    }
    return false
};
 
MyCircularDeque.prototype.getFront = function () {
    if (this.deque.length > 0) {
        return this.deque[0];
    }
    return -1;
};

MyCircularDeque.prototype.getRear = function () {
    if (this.deque.length > 0) {
        return this.deque[this.deque.length - 1];
    }
    return -1;

};


MyCircularDeque.prototype.isEmpty = function () {
    return this.deque.length == 0
};

MyCircularDeque.prototype.isFull = function () {
    return this.deque.length == this.size
};
