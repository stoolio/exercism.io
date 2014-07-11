module.exports = {
  compute: function(dna1, dna2) {
    var length = Math.min(dna1.length, dna2.length),
      distance = 0;

    for (var i = length - 1; i >= 0; i--) {
      if (dna1.charAt(i) !== dna2.charAt(i))
        distance++;
    }

    return distance;
  }
};
