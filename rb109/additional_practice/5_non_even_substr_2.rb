=begin

Given a string of integers, return the number of odd-numbered substrings that can be formed.
rules:
input is string (not integer!)
input contains only numeric characters

Example:
"1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers

Data:
input: String
output: integer, count of odd substrings

Algo:
define method solve to take one string param "str"
set "count" variable to 0
iterate "long" from 1 to arr.size 
  iterate "index" 0 to arr.size - "long"
    convert substr of "long" characters " from index to Integer, and add to ints array
    if it is odd, + 1 to count

return count, of odd numbered substrings


=end

def solve(str)
  count = 0
  1.upto(str.size) do |long|
    0.upto(str.size - long) do |idx|
      count += 1 if str[idx, long].to_i.odd?
    end
  end
  count
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28