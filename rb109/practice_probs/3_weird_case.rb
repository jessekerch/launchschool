=begin
# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.

Problem:
input: string
output: string
rules:
Every other character of every third word should be capitalized (odd index)
(in the exampmles they're all lowercase in those positions)
Input is sentence case

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

Data:
input: string
ouput: string
interm: array

Steps:
define method to take one parameter, "string"
split sentence string into array of substring words
Set "counter" variable to 1
Iterate through words and choose every 3rd word
  is counter % 3 = 0 ? => make it weird case
  else => increment counter by 1
  WEIRD CASE: Make every 3rd word weird case
    => iterate through each character index position, capitalize character if index is odd
Put words back together into a sentence
return string object (sentence)

=end

def weird_fix(str)
  str.chars.each_with_index { |char, idx| char.upcase! if idx.odd? }.join
end

def to_weird_case(string)
  weird_arr = []
  counter = 1
  string.split.each do |word|
    if counter % 3 == 0
      weird_arr << weird_fix(word)
    else
      weird_arr << word
    end
    counter += 1
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