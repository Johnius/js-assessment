exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(fn, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function (str2) {
      return `${str}, ${str2}`
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(num => () => fn(num))
  },

  partial: function(fn, str1, str2) {
    return ending => fn.call(fn, str1, str2, ending)
  },

  useArguments: function() {
    return Array.prototype.slice.call(arguments)
      .reduce((memo, next) => memo + next)
  },

  callIt: function(fn) {
    return fn.apply(fn, Array.prototype.slice.call(arguments, 1))
  },

  partialUsingArguments: function(fn) {
    const partialArgs = Array.prototype.slice.call(arguments, 1)

    return function () {
      const args = Array.prototype.slice.call(arguments)

      return fn.apply(fn, Array.prototype.concat.call(partialArgs, args))
    }
  },

  curryIt: function(fn) {
    return a => b => c => fn.call(fn, a, b, c)
  }
};
