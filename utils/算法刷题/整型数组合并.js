// 将两个整型数组按照升序合并，并且过滤掉重复数组元素[注: 题目更新了。输出之后有换行]
// 详细描述：
// 接口说明
// 原型：
// voidCombineBySort(int* pArray1,intiArray1Num,int* pArray2,intiArray2Num,int* pOutputArray,int* iOutputNum);
// 输入参数：
// int* pArray1 ：整型数组1
// intiArray1Num：数组1元素个数
// int* pArray2 ：整型数组2
// intiArray2Num：数组2元素个数
// 输出参数（指针指向的内存区域保证有效）：
// int* pOutputArray：合并后的数
// int* iOutputNum：合并后数组元素个数
// 返回值：void

// 输入描述:
// 输入说明，按下列顺序输入：
// 1 输入第一个数组的个数
// 2 输入第一个数组的数值
// 3 输入第二个数组的个数
// 4 输入第二个数组的数值

// 输出描述:
// 输出合并之后的数组

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];
rl.on('line', function(line) {
    data.push(line);
    if (data.length === 4) {
        let arr1 = data[1].split(' ');
        let arr2 = data[3].split(' ');
        let arr = arr1.concat(arr2);
        let result = unique(arr);
        result = result.sort((a, b) => {
            return a - b;
        });
        console.log(result.join(''));
        data = [];
    }
});

function unique(array){
    let obj=[];
    let end =[]
    for(let j = 0; j < array.length; j++){
        if(!obj[array[j]]){
            end.push(array[j]);
            obj[array[j]]=1;
        }
    }
   return end;
}