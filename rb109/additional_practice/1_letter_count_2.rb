=begin

In this kata, you've to count lowercase letters in a given string
and return the letter count in a hash with 'letter' as key and
count as 'value'.
The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Problem:
return hash with symbols and letter counts
input: String, looks like all lowercase
output: hash
rules: 
input is lowercase alphabet
output hash keys should be symbols, not letters

Example:
letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

Data:
input: String
output: hash
interm: array of characters in the String

Algo:
define method "letter_count" to take one parameter "str"
make "hash" variable set to empty hash {}
for each character in the str String, assign to "char" parameter
  change char to a symbol
  if char is already a key in hash, add +1 to the value
  else set char as key, and value to 1
return hash

=end

def letter_count(str)
  hash = {}
  str.chars.each do |char|
    hash[char.to_sym] ? hash[char.to_sym] += 1 : hash[char.to_sym] = 1
  end
  hash
end

p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
