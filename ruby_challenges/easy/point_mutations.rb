=begin
Problem
  input: two strings representing DNA sequences
  outpoint: integer representing number of point mutations
  rules: check shortest length

Example
  GAGCCTACTAACGGGAT and CATCGTAATGACGGCCT # => 7
  
Data
  input: two strings
  output: one integer
  interm? Nah
  
Algo
  set mutations to 0
  set dna_seq as DNA state
  set check_seq as input argument from method call
  set points = shortest length of two input strings
  increment index from 0 to points - 1 
    if dna_seq and check_seq are NOT the same, +1 to mutations
  return mutations

Code

=end

class DNA
  attr_reader :dna_seq, :length
  
  def initialize(dna_seq)
    @dna_seq = dna_seq
  end
  
  def hamming_distance(check_seq)
    mutations = 0
    points = check_seq.size >= dna_seq.size ? dna_seq.size : check_seq.size
    0.upto(points - 1) do |idx|
      mutations += 1 if check_seq[idx] != dna_seq[idx]
    end
    mutations
  end
end

strand_1 = DNA.new('GAGCCTACTAACGGGAT')
p strand_1.hamming_distance('CATCGTAATGACGGCCT')
