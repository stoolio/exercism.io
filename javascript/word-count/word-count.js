module.exports = function(str) {
  var words = str.toLowerCase().split(/\s|\n/).map(function (word) {
    return word.replace(/[:?!@#$%^&*()_\-,.¿¡]/g,'');
  }),
    counts = {};

  words.forEach(function(word) {
    if (word.length === 0 ) return;
    if (counts.hasOwnProperty(word))
      counts[word]++;
    else
      counts[word] = 1;
  });

  return counts;
};
