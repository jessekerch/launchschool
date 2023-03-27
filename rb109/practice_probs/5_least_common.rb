=begin
# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

# Examples:

# The tests above should print "true".

Problem:
input: string, long
output: string, one character
rules: return least common characters
case insensitive
return first character of all least common characters

Data:
input: string
output: string
interm:
array of characters,
nested array of characters and their occurences

Steps:
define method which takes one argument, string
make an empty array, letter_counts
make string characters all lowercase
make an array of characters, and keep only the unique ones
iterate through unique arrays, and look at each character count in the sorted string
  add an array object element containing char and count to the letter_counts array
  
sort letter counts array by index 0 element (count)
return index 0 of index 1 element of nested letter counts array (least char)


=end

def least_common_char(string)
  letter_counts = []
  string.downcase!
  unique = string.chars.uniq
  unique.each { |char| letter_counts << [string.count(char), char] }
  letter_counts.sort_by { |q, c| q }[0][1]
end

p least_common_char("Hello World") == "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") == "t"
p least_common_char("Mississippi") == "m"
p least_common_char("Happy birthday!") == ' '
p least_common_char("aaaaaAAAA") == 'a'