import LinkedListNode from "./linkedListNode"

export default class LinkedList {
  head: LinkedListNode;

  constructor() {
    this.head = new LinkedListNode(null);
  }


  find(index: number) {
    var point = this.head;
    for(let i = 0 ; i <= index; i++){
      point = point.next;
    }
    return point;
  }

  delete(index: number){
    var target = this.find(index);
    var pre = this.find(index-1);
    pre.next = target.next;
    target = null;
  }

  insert(index: number, node: LinkedListNode){
    var pre = this.find(index-1);
    //console.log("i-pv"+pre.value);
    node.next = pre.next;
    pre.next = node;
  }

  print(){
    var current = this.head.next;
    while(current != undefined){
      console.log(current.value);
      current = current.next;
    }
    console.log();
  }

  length(){
    var count = 0;
    var current = this.head.next;
    while(current != undefined){
      current = current.next;
      count++;
    }
    return count;
  }
}
