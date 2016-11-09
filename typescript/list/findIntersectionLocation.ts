export default function findInterSectionLocation(list1, list2){
  var list1len = list1.length();
  var list2len = list2.length();
  var longer;
  var shorter;
  var count = 0;
  var lendiff = Math.abs(list1len - list2len);
  var find = false;

  if(list1len > list2len){
    longer = list1.head.next;
    shorter = list2.head.next;
  }else{
    longer = list2.head.next;
    shorter = list1.head.next;
  }

  for(let i = 0; i < lendiff; i++){
    longer = longer.next;
  }

  while(longer != undefined){
    if(longer == shorter){
      find = true;
      break;
    }
    longer = longer.next;
    shorter = shorter.next;
    count++;
  }

  if(find){
    if(list1len > list2len){
      return [(count + lendiff), count];
    }else {
      return [count, (count + lendiff)];
    }
  }else{
    return -1;
  }
}
