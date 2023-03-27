=begin

# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

# Examples:

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# The tests above should print "true".

Problem:
input: array of numbers
output: output array of two closest numbers
rules:
  output should be two numbers that are closest together
  input is all positive integers

Examples:
[5, 25, 15, 11, 20]) => [15, 11]
differences = 20, 10, 6, 15, etc.
keep pair [15, 11] that gave me the lowest => 6

Data:
input: Array
output: array 
interm: integer

Algo:
define method closest_numbers to take one array parameter "arr"
set "closest" to array, first pair of numbers in arr (index 0 and 1)
set "difference" var to abs value of 1st number - 2nd number
iterate through input array "arr", assigning each number to "num" param
  iterate through input array, assigning each to "num2" param
    if abs value of num - num2 is less than difference AND num is not equal to num2
      difference =  abs value of num - num2
      closest = array of num, num2

return array, pair of closest numbers

=end

def closest_numbers(arr)
  closest = [arr[0], arr[1]]
  difference = (arr[0] - arr[1]).abs
  for num in arr do
    for num2 in arr do
      if (num - num2).abs < difference && num != num2
        difference = (num - num2).abs
        closest = [num, num2]
      end
    end
  end
  closest
end

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]