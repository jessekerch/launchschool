=begin

46. Sum of Digits / Digital Root
(https://www.codewars.com/kata/541c8630095125aba6000c00/train/ruby)
6 kyu
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2

Problem: Digital sums
input: integer
output: integer

Example:
digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2

Data:
input: integer
output: integer
interm: array for sure, maybe strings

Algo:
define method to take one integer parameter "num"
loop until size of digits of num == 1 
  make input "num" into an array of single digits
  reassign "num" to the sum of the digits

return sum, once it's down to one digits

=end

def digital_root(num)
  until num.digits.size == 1 do
    num = num.digits.sum
  end
  num
end

p digital_root(16) == 7
p digital_root(456) == 6
p digital_root(493193) == 2
