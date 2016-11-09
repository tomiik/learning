"use strict";
var linkedListNode_1 = require("./linkedListNode");
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.head = new linkedListNode_1.default(-1);
    }
    LinkedList.prototype.find = function (index) {
        var point = this.head;
        for (var i = 0; i < index; i++) {
            point = point.next;
        }
        return point;
    };
    LinkedList.prototype.delete = function (index) {
        if (index < this.length) {
            var target = this.find(index + 1);
            console.log("target:" + target.value);
            var pre = this.find(index);
            pre.next = target.next;
            target = null;
            this.length--;
        }
    };
    LinkedList.prototype.insert = function (index, node) {
        if (index > this.length) {
            return false;
        }
        else if (this.length == 0) {
            this.head.next = node;
            this.length++;
        }
        else {
            var pre = this.find(index);
            console.log("pv" + pre.value);
            console.log("pre:" + pre);
            if (pre != undefined) {
                node.next = pre.next;
            }
            pre.next = node;
            this.length++;
        }
    };
    LinkedList.prototype.print = function () {
        var current = this.head.next;
        while (current != undefined) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkedList;
