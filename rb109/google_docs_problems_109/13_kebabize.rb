=begin
13. Kebabize
(https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/ruby)
6 kyu
=begin
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

Problem:
convert camelcase input to kebab case
input has capital letters to delim separate words
input first word is not capitalized
output should separate words with "-"
rules:
output should only have lowercase letters
add "-" to output before a capital letter in the input string

Example:
myCamelCasedString == my-camel-cased-string
myCamelCasedString

Data:
input: string
output: new string
interm: array of strings

Algo:
define method kebabize to take one param "str"
remove all characters that are non-alpha 
break the input str into an array of chars
make "kebab" var set array to empty array
make "word" var set to first char of array
iterate through array of characters "char"
  if char is lowercase
    add char to the "word" string
  if char is uppercase
    add word to the kebab array
    word = char

add last word to kebab array
return "kebab", joined together into a string with "-" as a delim

=end

def kebabize(str)
  str.gsub!(/[^A-Za-z]/, "")
  arr = str.chars
  kebab = []
  word = arr.shift
  arr.each do |char|
    if ("a".."z").include?(char)
      word << char.downcase
    else
      kebab << word
      word = char.downcase
    end
  end
  kebab << word
  kebab.join("-")
end

p kebabize('myCamelCasedString') == 'my-camel-cased-string'
p kebabize('myCamelHas3Humps') == 'my-camel-has-humps'


