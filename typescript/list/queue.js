"use strict";
var linkedList_1 = require("./linkedList");
var linkedListNode_1 = require("./linkedListNode");
var Queue = (function () {
    function Queue() {
        this.length = 0;
        this.list = new linkedList_1.default();
    }
    Queue.prototype.dequeue = function () {
        if (this.length > 0) {
            var data = this.list.head.next.value;
            this.list.delete(0);
            this.length--;
            return data;
        }
    };
    Queue.prototype.queue = function (value) {
        var newNode = new linkedListNode_1.default(value);
        this.list.insert(this.length, newNode);
        this.length++;
    };
    Queue.prototype.print = function () {
        this.list.print();
    };
    return Queue;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Queue;
