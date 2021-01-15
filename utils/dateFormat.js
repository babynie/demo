function dateFormat(timestamp, fmt) {
    const date = new Date(timestamp);
    const timeObj = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'D+': date.getDay(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    };
    for (key in timeObj) {
        if (new RegExp(`(${key})`).test(fmt)) {
            if (key === 'y+') {
                fmt = fmt.replace(RegExp.$1, ('' + timeObj[key]).substr(4 - RegExp.$1.length));
            } else if (key === 'S+') {
                const lenS = RegExp.$1.length;
                lenS = lenS === 1 ? 3 : lenS;
                fmt = fmt.replace(RegExp.$1, ('00' + timeObj[key]).substr(('' + timeObj[key]).length - 1, lenS));
            } else {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? timeObj[key] : ('00' + timeObj[key]).substr(('' + timeObj[key]).length)
                );
            }
        }
    }
    return fmt;
}

console.log(dateFormat(Date.now(), 'yyyy-MM-DD HH:mm:ss.S'));