exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value)
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.people.map(person => person.name).sort())
  }
};
