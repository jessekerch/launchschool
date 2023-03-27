=begin

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Problem:
input: array of numbers
output: integer that appears odd number of times
rules: 
there will always be one integer that appears an odd number of times
no empty input array

Examples:
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Data:
input: array
output: integer

Algo:
define method to find_it, with one parameter "arr"
iterate through unique digits of input array
if count of that digit count in input array is odd, return digit
=end

def find_it(arr)
  arr.uniq.each { |digit| return digit if arr.count(digit).odd? }
end

p find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) == 5
p find_it([1,1,2,-2,5,2,4,4,-1,-2,5]) == -1
p find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]) == 5
p find_it([10]) == 10
p find_it([1,1,1,1,1,1,10,1,1,1,1]) == 10
