import LinkedListNode from "./linkedListNode"
import LinkedList from "./linkedList"
import findIntersectionLocation from "./findIntersectionLocation"
import findCircular from "./findCircular"
import Stack from "./stack"
import Queue from "./queue"
/*
var list1 = new LinkedList();
var list2 = new LinkedList();
var n1 = new LinkedListNode(1);
var n2 = new LinkedListNode(2);
var n3 = new LinkedListNode(3);
var n4 = new LinkedListNode(4);
var n5 = new LinkedListNode(5);
var n6 = new LinkedListNode(6);
var n7 = new LinkedListNode(7);
var n8 = new LinkedListNode(8);
var n9 = new LinkedListNode(9);
var na = new LinkedListNode("a");
var nb = new LinkedListNode("b");
var nc = new LinkedListNode("c");

list1.insert(0,n1);
list1.insert(0,n2);
list1.insert(0,n3);
list1.insert(0,n4);
list1.insert(0,n5);
list1.insert(0,n6);
list1.insert(0,n7);
list1.insert(0,n8);
list1.insert(0,n9);

list2.insert(0,na);
list2.insert(0,nb);
list2.insert(0,nc);
na.next = n4;

list1.print();
list2.print();

console.log(list1.length())
console.log(list2.length())

console.log(findIntersectionLocation(list2,list1))

var list3 = new LinkedList();
var n31 = new LinkedListNode(1);
var n32 = new LinkedListNode(2);
var n33 = new LinkedListNode(3);
var n34 = new LinkedListNode(4);
var n35 = new LinkedListNode(5);
var n36 = new LinkedListNode(6);
var n37 = new LinkedListNode(7);
list3.insert(0,n31);
list3.insert(0,n32);
list3.insert(0,n33);
list3.insert(0,n34);
list3.insert(0,n35);
list3.insert(0,n36);
list3.insert(0,n37);
console.log("list3");
list3.print();
n31.next = n32;
console.log(findCircular(list3))
*/

var st = new Stack();

st.push(1);
st.push(2);
st.push(3);
st.push(4);
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());

var cue = new Queue();
cue.queue(1);
cue.queue(2);
cue.queue(3);
cue.queue(4);
cue.queue(5);
cue.queue(6);
console.log(cue.dequeue());
console.log(cue.dequeue());
console.log(cue.dequeue());
cue.queue(7);
console.log(cue.dequeue());
cue.queue(8);
console.log(cue.dequeue());
console.log(cue.dequeue());
console.log(cue.dequeue());
console.log(cue.dequeue());
