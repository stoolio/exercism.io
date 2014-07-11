# Calculates the Hamming Distance between two DNA strands
module Hamming
  class << self
    def compute(dna1, dna2)
      hamm = 0
      length = [dna1.length, dna2.length].min
      1.upto(length).reduce do |a, i|
        a + 1 if dna1[i] != dna2[i]
      end
      hamm
    end
  end
end
