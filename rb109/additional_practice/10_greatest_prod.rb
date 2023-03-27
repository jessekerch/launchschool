=begin

Complete the greatestProduct method so that it'll find the greatest product
of five consecutive digits in the given string of digits.

For example:
greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Problem:
input: string (digits in string form)
output: integer (product)
rules:
output should be greatest possible product of 5 cons digits of number
input has all digits, including 0, which can be included no problem

Example:
12383 45393 27238 23958 3 == 3240

Data:
input: string 
output: integer
interm: array

Algo:
define method to take one parameter (string object)
make "greatest" variable = 0
make "current" variable = 1
iterate "idx" from 0 upto string size - 6
  inspect substring of string from index to length of 5
  convert to array of characters
  convert each character to integer
  get product of integer array  (current * integer)
  if current > greatest, set greatest = current

return greatest
=end

def greatest_product(string)
  greatest = 0
  current = 1
  0.upto(string.size - 5) do |idx|
    string[idx, 5].chars.each { |ch| current *= ch.to_i }
    greatest = current if current > greatest
    current = 1
  end
  greatest  
end

p greatest_product("123834539327238239583") == 3240
p greatest_product("395831238345393272382") == 3240
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("02494037820244202221011110532909999") == 0
