import LinkedListNode from "./linkedListNode"

export default class LinkedList {
  length: number;
  head: LinkedListNode;

  constructor() {
    this.length = 0;
    this.head = new LinkedListNode(-1);
  }

  find(index: number) {
    var point = this.head;
    for(let i = 0 ; i < index; i++){
      point = point.next;
    }
    return point;
  }

  delete(index: number){
    if(index < this.length){
      var target = this.find(index+1);
      console.log("target:" + target.value);
      var pre = this.find(index);
      //console.log(":" + pre.next.value)
      pre.next = target.next;
      target = null;
      this.length--;
    }
  }

  insert(index: number, node: LinkedListNode){
    if(index > this.length){
      return false;
    }else if(this.length == 0){
      this.head.next = node;
      this.length++;
    }
    else{
      var pre = this.find(index);
      console.log("pv"+pre.value);
      console.log("pre:" + pre)
    if(pre !=undefined){
        node.next = pre.next;
      }
      pre.next = node;
      this.length++;
    }
  }

  print(){
    var current = this.head.next;
    while(current != undefined){
      console.log(current.value);
      current = current.next;
    }
  }
}
