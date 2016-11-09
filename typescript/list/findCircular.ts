export default function findCircular(list){
  var faster = list.head.next;
  var slower = list.head.next;
  var circular = false;
  var count = 0;

  while(faster != undefined && faster.next){
    slower = slower.next;
    faster = faster.next;
    faster = faster.next;
    if(faster == slower){
      circular = true;
      break;
    }
  }

  if(circular == false){
    return -1;
  }

  faster = list.head.next;
  while(true){
    if(faster == slower){
      break;
    }
    slower = slower.next;
    faster = faster.next;
    count++;
  }

  return count;
}
