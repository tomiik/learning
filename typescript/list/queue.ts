import LinkedList from "./linkedList"
import LinkedListNode from "./linkedListNode"

export default class Queue {
  private list : LinkedList;
  private length = 0;
  constructor(){
    this.list = new LinkedList();
  }
  dequeue(){
    if(this.length > 0){
      var data = this.list.head.next.value;
      this.list.delete(0);
      this.length--;
      return data;
    }
  }
  queue(value){
    var newNode = new LinkedListNode(value);
    this.list.insert(this.length,newNode);
    this.length++;
  }
  print(){
    this.list.print();
  }
}
