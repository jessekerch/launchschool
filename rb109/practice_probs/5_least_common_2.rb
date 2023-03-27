=begin
# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

Problem:
input: String
output: string, one character that occurs least often
rules:
case insensitive
input can contain uppercase, spaces, symbols
output lowercase if alpha, but can be space (or symbol?)

Example:
"Hello World" => "h"

Data:
input: String
output: String
intermediate: array of unique characters

Algo:
define method least_common_char to take one string obj param, "str"
make str all lowercase (mutate the object)
set "least_common" to 1st character in str (index 0)
set "arr" array to unique characters of input str
for each character of unique character "arr"
  if character count in arr is < least_common count in arr
    set least_common equal to character
return "least_common" string
=end

def least_common_char(str)
  str.downcase!
  least_common = str[0]
  str.chars.uniq.each do |char|
    if str.count(char) < str.count(least_common)
      least_common = char
    end
  end
  least_common
end

p least_common_char("Hello World") == "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") == "t"
p least_common_char("Mississippi") == "m"
p least_common_char("Happy birthday!") == ' '
p least_common_char("aaaaaAAAA") == 'a'