=begin 
# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to it's position in the alphabet:
# a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

Problem:
input: string, can be separate words
output: string, highest scoring word

Example:
man i need a taxi up to ubud ==> taxi

Data:
input: string
output: string
interm: array of words
range, hash

Algo:
define method "alphabet_score" to take one param, "str"
turn the input string "str" into an array of words (whitespace delim)
"high_score" high score variable set to 0
"highest" variable set that to ""
build a hash of letters and their scores
  score equal to 1
  go through range of a..z, assign each to "letter"
  add current letter to a letter_hash, value equal to score
  score + 1 

  for each word, "word"
    word score = 0
  get the score of the word <= HELPER METHOD
    iterate through each character of word
    add letter score to word score

  if word score of this word is higher than "high_score"
    set highest equal to current word
    set the high score to the current word score

return "highest", highest scoring string

=end

def alphabet_score(str)
  array = str.split(' ')
  high_score = 0
  highest = ""
  array.each do |word|
    word_score = 0
    word.chars.each do |letter|
      word_score += (letter.ord - 96)
    end
    if word_score > high_score
      highest = word
      high_score = word_score
    end
  end
  highest
end

p alphabet_score('man i need a taxi up to ubud') == 'taxi'
p alphabet_score('what time are we climbing up the volcano') == 'volcano'
p alphabet_score('take me to semynak') == 'semynak'
p alphabet_score('aa b') == 'aa'