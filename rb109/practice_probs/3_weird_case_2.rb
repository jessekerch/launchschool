=begin

# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.

# Examples:

p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
  'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
  'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# The tests above should print "true".

Problem:
input: string, sentence
output: string, sentence in weird case
rules:
capitalize every other letter in every 3rd word
leave everything else the same

Example:
'Lorem Ipsum is simply dummy text of the printing' =>
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'

Data:
input: string
output: string
interm: array of words would help, and array of characters too probably

Algo:
define method to weird case to take one parameter "sentence"
set "weird_arr" to empty array []
split sentence into array of words (' ' delim)
word_count = 1
for each word in the string
  if word_count % 3 = 0
    reassign the word to the return value of mapping each character and index in the word
    if the index is odd, capitalize the character, then join characters back into a word
    add modified word to the "weird_arr" array
    word_count + 1
  else
    add word to weird_arr array
    word_count + 1
    
join "weird_arr" word array back into string, weird sentence
return "weird" sentence
=end

def to_weird_case(sentence)
  weird_arr = []
  word_count = 1
  sentence.split.each do |word|
    case word_count % 3 == 0
    when true
      word = word.chars.map.each_with_index { |c, i| i.odd? ? c.upcase : c }.join
      weird_arr << word
      word_count += 1
    when false
      weird_arr << word
      word_count += 1
    end
  end
  weird_arr.join(' ')
end

p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
  'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
  'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'