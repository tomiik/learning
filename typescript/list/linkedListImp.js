"use strict";
var linkedListNode_1 = require("./linkedListNode");
var linkedList_1 = require("./linkedList");
var list = new linkedList_1.default();
var n1 = new linkedListNode_1.default(1);
var n2 = new linkedListNode_1.default(2);
var n3 = new linkedListNode_1.default(3);
var n4 = new linkedListNode_1.default(4);
list.insert(0, n1);
list.insert(1, n2);
list.insert(2, n3);
list.insert(3, n4);
list.print();