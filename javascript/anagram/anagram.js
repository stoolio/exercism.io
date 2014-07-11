function sortLetters(str) {
  return str.toLowerCase().split('').sort().join('');
}

function equalToWithFn(item, fn) {
  var processedItem = fn.call(item, item);
  return function (candidate) {
    return processedItem === fn.call(candidate, candidate);
  };
}

function anagram(word) {
  var isAnagram = equalToWithFn(word, sortLetters),
    sameWord = equalToWithFn(word, String.prototype.toLowerCase);

  function matches() {
    var candidates;

    if (typeof arguments[0] === 'object')
      candidates = arguments[0];
    else
      candidates = Array.prototype.slice.call(arguments);

    return candidates.reduce(function (collection, candidate) {
      if (isAnagram(candidate) && !sameWord(candidate))
        collection.push(candidate);
      return collection;
    }, []);
  }

  return {
    matches: matches
  };
}

module.exports = anagram;
