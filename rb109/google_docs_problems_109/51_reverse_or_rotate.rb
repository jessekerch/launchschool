=begin

51. Reverse or rotate?
(https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)
6 kyu
Reverse or rotate?
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Problem:
reverse or rotate; depending on whether chunk is divis by 2 or not
input: string, and sz chunk size
output: string
rules:
1st input is string of numbers (str)
2nd input is chunk size (sz)
if chunk sum of squares of digits is div by 2, reverse
otherwise rotate one digit (remove from front and push to back)
if chuck size <= 0, return ""
return "" if chunk sz is > total string size

Examples:
revrot("123456987654", 6) --> "234561876549"

Data:
input: string, and integer
output: string
interm: arrays I think 

Algo:
define helper method rotate 
turn string into an array and reverse it
pop off the last element of the array (first in reverse)
reverse the array back, turn into string, add on the popped element
return array joined back into a string

define method revrot to take two params, str and sz
return "" if sz is 0 or if sz is greater than input str size
left_idx index = 0
right_idx index = sz size - 1
while right_idx <= string size - 1
  substr = substring from left_idx to right_idx
  change substr to an array of digits
  check sum of squares of each digit
  if divis by 2, reverse the substr
  left_idx + sz
  right_idx + sz

return modified string

=end

# def rotate(str)
#   arr = str.chars.reverse
#   first_char = arr.pop
#   str = arr.reverse.join + first_char
# end

def revrot(str, sz)
  mod_str = ""
  return mod_str if sz < 1 || sz > str.size
  left_idx = 0
  right_idx = sz - 1
  while right_idx <= str.size - 1 do
    substr = str[left_idx..right_idx]
    left_idx += sz
    right_idx += sz
    if substr.to_i.digits.map{|n|n*n}.sum % 2 == 0
      mod_str << substr.reverse
    else
      mod_str << substr[1..-1] + substr[0]
    end
  end
  mod_str
end

p revrot("1234", 0) == ""
p revrot("", 0) == ""
p revrot("1234", 5) == ""
p revrot("733049910872815764", 5) == "330479108928157"
p revrot("123456987654", 6) == "234561876549"
p revrot("123456987653", 6) == "234561356789"
p revrot("66443875", 4) == "44668753"
p revrot("66443875", 8) == "64438756"
p revrot("664438769", 8) == "67834466"
p revrot("123456779", 8) == "23456771"
p revrot("", 8) == ""
p revrot("123456779", 0) == ""
p revrot("563000655734469485", 4) == "0365065073456944"



