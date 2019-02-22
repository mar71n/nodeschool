# JavaScript Decorators

https://www.sitepoint.com/javascript-decorators-what-they-are/

https://javascript.info/call-apply-decorators

## Transparent caching

https://javascript.info/call-apply-decorators#transparent-caching

Si slow(x) es muy pesada, y además es estable (para un mismo valor regresa un mismo resultado), se puede cachear los resultados y si se consulta por el mismo, devolver el guardado en lugar de evaluar nuevamente la pesada slow(x)

``` JavaScript
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) { // if the result is in the map
      return cache.get(x); // return it
    }
    let result = func(x); // otherwise call func
    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}
slow = cachingDecorator(slow);
alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same, devuelve el valor cacheado
alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line
```

## fun.call() for the context

https://javascript.info/call-apply-decorators#using-func-call-for-the-context

The caching decorator mentioned above is not suited to work with object methods.
There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.

https://javascript.info/call-apply-decorators#going-multi-argument-with-func-apply
