(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.map = factory();
  }
})(this, function () {
  function reduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    if (!initialValue) {
      accumulator = arr[0];
      for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }
    return accumulator;
  }

  function map(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = callback(arr[i], i, arr);
    }
    return newArr;
  }

  function filter(arr, callback) {
    let newArr = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        newArr[index] = arr[i];
        index++;
      }
    }
    return newArr;
  }

  function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  function take(arr, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  }

  function skip(arr, n) {
    let newArr = [];
    let newIndex = 0;
    for (let i = n; i < arr.length; i++) {
      newArr[newIndex] = arr[i];
      newIndex++;
    }
    return newArr;
  }

  function some(arr, callback) {
    let value = false;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        value = true;
        return value;
      }
    }
    return value;
  }

  function every(arr, callback) {
    let value = false;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        value = true;
      } else {
        value = false;
        return value;
      }
    }
    return value;
  }

  function max(arr) {
    let maxValue = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  }

  function min(arr) {
    minValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
    return minValue;
  }

  function keys(obj) {
    let result = [];
    let i = 0;
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        result[i] = prop;
        i++;
      }
    }
    return result;
  }

  function values(obj) {
    let result = [];
    let i = 0;
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result[i] = obj[prop];
        i++;
      }
    }
    return result;
  }

  function pairs(obj) {
    let result = [];
    let i = 0;
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result[i] = [prop, obj[prop]];
        i++;
      }
    }
    return result;
  }

  function fromPairs(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }

  return {
    map: map,
    reduce: reduce,
    filter: filter,
    forEach: forEach,
    take: take,
    skip: skip,
    some: some,
    every: every,
    max: max,
    min: min,
    keys: keys,
    values: values,
    pairs: pairs,
    fromPairs: fromPairs,
    chain: chain,
  };
});
