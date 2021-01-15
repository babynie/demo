/**
  有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
  最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
  问：原来那堆牌的顺序，用函数实现。
 */

//const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function Pai(list) {
  console.log(list);
  console.log('----------------');
  // 最初的数组
  let init = [];
  let index = 1;

  while(list.length) {
    if (index % 2) {
      init.unshift(list.pop());
    } else {
      init.unshift(init.pop());
    }
    index++;
  }
  
  return init;
}

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(Pai(list));
// [ 1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7 ]