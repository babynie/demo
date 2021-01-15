var currying = function(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  }
}

function simpleUrl(protocol, domain, path) {
  return protocol + '://' + domain + '/' + path;
}

var myUrl = currying(simpleUrl, 'http', 'www.baidu.com');
console.log(myUrl('index.js'));




