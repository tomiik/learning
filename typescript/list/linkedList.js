"use strict";
var linkedListNode_1 = require("./linkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this.head = new linkedListNode_1.default(null);
    }
    LinkedList.prototype.find = function (index) {
        var point = this.head;
        for (var i = 0; i <= index; i++) {
            point = point.next;
        }
        return point;
    };
    LinkedList.prototype.delete = function (index) {
        var target = this.find(index);
        var pre = this.find(index - 1);
        pre.next = target.next;
        target = null;
    };
    LinkedList.prototype.insert = function (index, node) {
        var pre = this.find(index - 1);
        node.next = pre.next;
        pre.next = node;
    };
    LinkedList.prototype.print = function () {
        var current = this.head.next;
        while (current != undefined) {
            console.log(current.value);
            current = current.next;
        }
        console.log();
    };
    LinkedList.prototype.length = function () {
        var count = 0;
        var current = this.head.next;
        while (current != undefined) {
            current = current.next;
            count++;
        }
        return count;
    };
    return LinkedList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkedList;
