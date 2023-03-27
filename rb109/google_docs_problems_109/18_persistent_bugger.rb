=begin

18. Persistent Bugger.
(https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/ruby)
6 kyu
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

Problem:
Return mult pers for the input num, which is the number of times to multiple its digits until I get to a single digit
rules:
return 0 if input is already a single digit

For example:
39
1. 3*9=27
2. 2*7=14
3. 1*4=4
4 single
=> 3

Data:
input: integer
output: integer

Algo:
define method persistence takes one param, "num"
times = 0
while number of digits in num is > 1
  reassign num to product of its digits
  times + 1
return "times"

Scratchpad:
num.digits.size => get this down to 1 and return 
num.digits.reduce(:*)

=end

def persistence(num)
  times = 0
  while num.digits.size > 1 do
    num = num.digits.reduce(:*)
    times += 1
  end
  times
end

p persistence(39) == 3
p persistence(4) == 0
p persistence(25) == 2
p persistence(999) == 4
