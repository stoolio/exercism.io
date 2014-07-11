module.exports = function (dna) {
  return {
    hammingDistance: function (other) {
      var len = Math.min(dna.length, other.length),
        distance = 0,
        i = 0;

      for (;i < len; i++) {
        if (dna[i] !== other[i])
          distance++;
      }

      return distance;
    }
  };
};
