exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    return Object.keys(obj).map(key => `${key}: ${obj[key]}`)
    // Or we can use for-in with hasOwnProperty method but
    //   it takes more cognitive tension so we will on current version
  }
};
