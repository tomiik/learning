"use strict";
var linkedList_1 = require("./linkedList");
var linkedListNode_1 = require("./linkedListNode");
var Stack = (function () {
    function Stack() {
        this.list = new linkedList_1.default();
    }
    Stack.prototype.pop = function () {
        var data = this.list.head.next.value;
        this.list.delete(0);
        return data;
    };
    Stack.prototype.push = function (value) {
        var newNode = new linkedListNode_1.default(value);
        this.list.insert(0, newNode);
    };
    Stack.prototype.print = function () {
        this.list.print();
    };
    return Stack;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stack;
