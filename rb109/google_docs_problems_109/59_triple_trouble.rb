=begin

https://www.codewars.com/kata/55d5434f269c0c3f1b000058



=begin

Problem: Triple double
input: number, Integer
output: 0 or 1 (integer)
rules:
Return 1 if 1st input contains a triple number, which also has a double in the 2nd Interrupt
Return 0 if not
Triple and double mean consecutive

Example:
451999277 => 451, 518, 199, 999 => triple
41177722899 => 41, 11, 77 ... 99 => double
return 1

Data:
input: Integer
output: Integer
interm: Array

Algo:
define method "triple_double" to take 2 params "num1" and "num2"
make arr1 a array version of num1
make arr2 a array version of num2
iterate from 0 up to size of arr1 - 3 : "idx", or index
  check array of 3 elements long from index "idx"
  if all of them are the same as the first one
  
  iterate from 0 up to size of arr2 - 2 : "idx2", or index
    check array of 2 elements long from index "idx2"
    if all of them are the current index of arr1
      return 1
  0
=end

def triple_double(num1, num2)
  arr1 = num1.digits
  arr2 = num2.digits
  0.upto(arr1.size - 3) do |idx|
    if arr1[idx, 3].all?(arr1[idx])
      0.upto(arr2.size - 2) do |idx2|
        return 1 if arr2[idx2, 2].all?(arr1[idx])
      end
    end
  end
  0
end

p triple_double(451999277, 41177722899) == 1
p triple_double(1222345, 12345) == 0
p triple_double(12345, 12345) == 0
p triple_double(666789, 12345667) == 1
