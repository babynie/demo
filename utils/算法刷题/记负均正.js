// 首先输入要输入的整数个数n，然后输入n个整数。输出为n个整数中负数的个数，和所有正整数的平均值，结果保留一位小数。

// 输入描述:
// 首先输入一个正整数n，
// 然后输入n个整数。

// 输出描述:
// 输出负数的个数，和所有正整数的平均值。

while(line = readline()) {
    let nun = readline();
    let arr = nun.split(' ');
    let positiveNum = 0;
    let negtiveNum = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
        if (arr[i] < 0) {
            negtiveNum++;
        }
        if (arr[i] > 0) {
            positiveNum++;
            total += arr[i];
        }
    }
    console.log(negtiveNum, (total/positiveNum).toFixed(1));
}