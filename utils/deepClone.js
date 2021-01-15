// 深拷贝
function deepClone(p, c) {
  let c1 = c || {};

  // for in 循环p对象里面所有的属性值
  for (let i in p) {
    if (typeof p[i] === 'object' && p[i] !== null) {
      c1[i] = p[i].constructor === 'Array' ? [] : {};
      deepClone(p[i], c1[i]);
    } else {
      c1[i] = p[i];
    }
  }

  return c1;
}

let chinese = {
  nation: 'china',
  cities: ['js', 'zj'],
  language: {
    js: 'njh',
    zj: 'hzh'
  },
  anydata: null
};

let c3 = deepClone(chinese);