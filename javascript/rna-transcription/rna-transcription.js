var to = {
  rna: {
    'G' : 'C',
    'C' : 'G',
    'T' : 'A',
    'A' : 'U'
  }
};

module.exports = function (strand) {
  var components = strand.split('');

  return components.map(function (nucleotide) {
    return to.rna[nucleotide];
  }).join('');
};
