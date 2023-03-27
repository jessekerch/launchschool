=begin
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Problem:
input: integer
output: integer
rules:
find multiples of 3 and/or 5 below given integer
return sum of all multiples
return 0 if given num is negative

Example:
10 => 23
10 => 3, 5, 6, 9 => 23

Data:
input: integer
output: integer
intermed: ? none I think

Algo:
define method to take one parameter (num)
make variable "sum" = 0
if num <= 0, return sum
iterate "x" from 1 up to num (not including num)
  if x is a multiple of either 3 or 5, add it to sum
return sum of multiples

=end

def solution(num)
  sum = 0
  return sum if num <= 0
  (1...num).each do |x|
    sum += x if x % 3 == 0 || x % 5 == 0
  end
  sum
end

p solution(10) == 23
p solution(20) == 78
p solution(200) == 9168
