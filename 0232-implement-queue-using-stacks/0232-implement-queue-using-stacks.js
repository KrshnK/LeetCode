
var MyQueue = function () {
    queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let pop = queue.shift()
    return pop
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return queue.length > 0 ? false : true
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */