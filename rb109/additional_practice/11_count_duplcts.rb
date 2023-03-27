=begin

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic
characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase)
and numeric digits.

Problem:
input: string
output: integer
rules:
input is alphanumeric (caps and lowercase)
output integer is number of characters with duplicates (2+) in input string
case insensitive when counting

Example
"aabbcde" -> 2 # 'a' and 'b'
aabbcde => abcde => 2, 2, 1, 1, 1 => 2 with 2+ count

Data:
input: string
output: integer
interm: none I think, could use array or hash but unnecessary 

Algo:
define method duplicate_count to take one param, text
=> not needed #if text is blank, return 0
make input text all lowercase
make a "count" variable w/ value 0
make an array of unique characters from input text
for each character
  if input text count of character is 2+, add +1 to "count"

return count (integer)

=end


def duplicate_count(text)
  count = 0
  text.downcase!
  text.chars.uniq.each do |char|
    count += 1 if text.count(char) >= 2
  end
  count
end

p duplicate_count("") == 0
p duplicate_count("abcde") == 0
p duplicate_count("abcdeaa") == 1
p duplicate_count("abcdeaB") == 2
p duplicate_count("Indivisibilities") == 2
