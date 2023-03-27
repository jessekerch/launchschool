class Scrabble
  def initialize(word)
    @word = word ? word : ''
  end
  
  def self.score(word)
    Scrabble.new(word).score
  end
  
  def score
    letters = @word.upcase.gsub(/[^A-Z]/, '').chars
    score = 0
    letters.each do |ch|
      score += letter_score(ch)
    end
    score
  end
  
  def letter_score(ch)
    case
    when ch == ' ' then 0
    when %(A E I O U L N R S T).include?(ch) then 1
    when %w(D G).include?(ch) then 2
    when %w(B C M P).include?(ch) then 3
    when %w(F H V W Y).include?(ch) then 4
    when %w(K).include?(ch) then 5
    when %w(J X).include?(ch) then 8
    when %w(Q Z).include?(ch) then 10
    end
  end
end

p Scrabble.new(" \t\n").score