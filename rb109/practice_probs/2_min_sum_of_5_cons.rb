=begin
# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.

# The tests above should print "true".

Problem:
input: array, array of integers
output: integer, sum 
rules:
output is minimum sum of 5 consecutive integers 
if less than 5 elements in input, return nil
input can contain negative numbers or 0

Example:
[55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
55, 2, 6, 5, 1 -> 69
2, 6, 5, 1, 2 -> 16

Data:
input: array
output: integer
interm: none?

Scratchpad:
array[idx, 5].sum => should give me what I want
sums.min => return minimum

Steps:
define method to check minimum sum
return nil if array size is less than 5
initialize empty array to hold all sums
iterate from 0 up to array size - 5  (aka 5 index positions from end) "idx"
  take sum of 5 elements of input array starting at idx
  add sum to array of sums

return minimum sum (the lowest number in the sums array)

=end


def minimum_sum(array)
  return nil if array.size < 5
  sums = []
  0.upto(array.size - 5) do |idx|
    sums << array[idx, 5].sum
  end
  sums.min
end

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10