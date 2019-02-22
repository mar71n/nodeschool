function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    console.log(cache);
    if (cache.has(x)) { // if the result is in the map
      return cache.get(x); // return it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) is cached
console.log( "Again: " + slow(1) ); // the same muestra el resultado cacheado

console.log( slow(2) ); // slow(2) is cached
console.log( "Again: " + slow(2) ); // the same as the previous line
