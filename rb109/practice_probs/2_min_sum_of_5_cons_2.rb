=begin

# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.

Problem:
input: array
output: minimum sum of 5 cons numbers
rules:
return nil if less than 5 elements
numbers must be consecutive

# Examples:
p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".

Algo:
define method to take one parameter "arr"
if size of arr < 5, return nil
make "sums" variable set to blank array []
iterate "idx" index from 0 to array size - 5
  get sum of 5 elements starting from index
  add sum to "sums" array

return minimum number from sums array

=end

def minimum_sum(arr)
  return nil if arr.size < 5
  sums = []
  0.upto(arr.size - 5) do |idx|
    sums << arr[idx, 5].sum
  end
  sums.min
end

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10
