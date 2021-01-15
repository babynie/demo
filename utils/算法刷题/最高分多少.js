// 老师想知道从某某同学当中，分数最高的是多少，
// 现在请你编程模拟老师的询问。当然，老师有时候需要更新某位同学的成绩.

// 输入描述:
// 输入包括多组测试数据。
// 每组输入第一行是两个正整数N和M（0 < N <= 30000,0 < M < 5000）,分别代表学生的数目和操作的数目。
// 学生ID编号从1编到N。
// 第二行包含N个整数，代表这N个学生的初始成绩，其中第i个数代表ID为i的学生的成绩
// 接下来又M行，每一行有一个字符C（只取‘Q’或‘U’），和两个正整数A,B,当C为'Q'的时候, 表示这是一条询问操作，他询问ID从A到B（包括A,B）的学生当中，成绩最高的是多少
// 当C为‘U’的时候，表示这是一条更新操作，要求把ID为A的学生的成绩更改为B。

// 输出描述:
// 对于每一次询问操作，在一行里面输出最高成绩.

while(line = readline()) {
    // 获取输入的第一行数据，n:学生数目；m:操作数目
    let arrTemp = line.trim().split(' ');
    let n = arrTemp[0];
    let m = arrTemp[1];
    if (!(0 < n <= 30000 || 0 < m < 5000)) {
        throw new Error('N或者M超出范围');
    }
    
    // 获取学生的初始成绩数组
    let markArr = readline().trim().split(' ').map(item => +item);
    // 对后面M行进行循环
    for (let i = 0; i < m; i++) {
        // 对操作的行数进行拆分
        let operates = readline();
        let C, A, B;
        if (operates) {
            let temp = operates.trim().split(' ');
            C = temp[0];
            if (C == 'Q') {
                A = +temp[1] >= +temp[2] ? +temp[2] : +temp[1];
                B = +temp[1] >= +temp[2] ? +temp[1] : +temp[2];
            } else {
                A = +temp[1];
                B = +temp[2];
            }
        } else {
            break;
        }
        if (C == 'Q') {
            console.log(maxMark(markArr, A, B));
        }
        if (C == 'U') {
            markArr[A - 1] = B;
        }
    }

    function maxMark(arr, a, b) {
        if (arr.length === 0) {
            return 0;
        }
        if (a > b) {
            return 0;
        }
        let maxRep = 0;
        for (let i = a - 1; i < b; i++) {
            if (arr[i] > maxRep) {
                maxRep = arr[i];
            }
        }
        return maxRep;
    };
}
