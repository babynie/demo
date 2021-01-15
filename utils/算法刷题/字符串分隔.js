// •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

// 输入描述:
// 连续输入字符串(输入2次,每个字符串长度小于100)

// 输出描述:
// 输出到长度为8的新字符串数组

while(line = readline()) {
    let i = 0;
    while(i < line.length) {
        if (line.length - i < 8) {
            let subLength = line.length - i;
            let lastStr = line.substr(i, line.length);
            for (let n = 0; n < 8 - subLength; n++) {
                lastStr += '0';
            }
            print(lastStr);
            break;
        }
        print(line.substr(i, 8));
        i = i + 8;
    }
}