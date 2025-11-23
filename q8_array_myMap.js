"use strict";

// Q8: Add Array.prototype.myMap that behaves like Array.prototype.map

if (typeof Array.prototype.myMap === 'undefined') {
  Object.defineProperty(Array.prototype, 'myMap', {
    value: function (callback, thisArg) {
      if (this == null) throw new TypeError('Array.prototype.myMap called on null or undefined');
      if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
      const O = Object(this);
      const len = O.length >>> 0;
      const A = new Array(len);
      for (let k = 0; k < len; k++) {
        if (k in O) {
          A[k] = callback.call(thisArg, O[k], k, O);
        }
      }
      return A;
    },
    writable: true,
    configurable: true,
  });
}

console.log('[1,2,3].myMap(n => n*2) =>', [1, 2, 3].myMap((n) => n * 2));

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {};
}
