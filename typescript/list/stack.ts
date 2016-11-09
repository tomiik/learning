import LinkedList from "./linkedList"
import LinkedListNode from "./linkedListNode"

export default class Stack {
  private list : LinkedList;
  constructor(){
    this.list = new LinkedList();
  }
  pop(){
    var data = this.list.head.next.value;
    this.list.delete(0);
    return data;
  }
  push(value){
    var newNode = new LinkedListNode(value);
    this.list.insert(0,newNode);
  }
  print(){
    this.list.print();
  }
}
