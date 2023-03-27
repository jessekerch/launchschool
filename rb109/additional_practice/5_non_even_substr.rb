=begin

Given a string of integers, return the number of odd-numbered substrings that can be formed.

Example:
"1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers

Data:
input: string
output: integer

Algo:
define method to take one string object parameter
initialize odds to 0
initialize str_size to string size
iterate length from 1 up to str_size
  iterate index from 0 up to length of string - length
    if integer version of substring at index index length of length is odd, +1 to odds
return odds
=end

def solve(str)
  odds = 0
  1.upto(str.size) do |length|
    0.upto(str.size - length) do |idx|
      odds += 1 if str[idx, length].to_i.odd?
    end
  end
  odds
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28
