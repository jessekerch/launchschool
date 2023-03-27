=begin

In this kata, you've to count lowercase letters in a given string
and return the letter count in a hash with 'letter' as key and
count as 'value'.
The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.


Problem:
input: string object
output: hash object
rules:
input lowercase letters only
output hash with symbol keys and letter count values
output in alphabetical order

Example:
'arithmetics' #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

Data:
string input
hash output
array interm for chars  

Steps:
make an empty hash object, "chars_and_count"
make an array of sorted unique letters from the string, "char_array"
for each letter
  add a new hash key, a symbol of the letter, and value as letter count from input string
return hash

=end

def letter_count(string)
  count = {}
  string.chars.sort.uniq.each { |char| count[char.to_sym] = string.count(char) }
  count
end


p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
