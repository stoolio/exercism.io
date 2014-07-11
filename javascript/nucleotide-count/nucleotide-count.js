var nucleotides = ['A','C','G','T'];

function DNA(dna) {
  var nucleotideCounts = {};

  var validDNA = new RegExp('[' + nucleotides.join('') + ']');
  if (!validDNA.test(dna) && dna.length > 0)
    throw 'Invalid Nucleotide';

  nucleotides.forEach(function (nucleotide) {
    var matches = dna.match(new RegExp(nucleotide, 'g')),
      count = (matches && matches.length) || 0;
    nucleotideCounts[nucleotide] = count;
  });

  this.nucleotideCounts = nucleotideCounts;
}

DNA.prototype.count = function(nucleotide) {
  if (nucleotides.indexOf(nucleotide) === -1 && nucleotide !== 'U')
    throw 'Invalid Nucleotide';
  return this.nucleotideCounts[nucleotide] || 0;
};

module.exports = DNA;
