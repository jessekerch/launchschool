=begin
# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

Problem:
input: array, of integer objects
output: array, two closest integers
rules:
input is positive integers
output order doesn't matter
difference between two smallest SO absolute value of a - b
arrays always more than 2 numbers

Example:
[5, 25, 15, 11, 20]) == [15, 11]
5 => 0, 20, 10, 6, 15
25 => 20, 0, 

Data:
input: array
output: array
interm: arrays

Steps:
define method to take one array parameter
min_array variable to array of 1st and 2nd elements of array
gap variable to absolute value of array 1st element - array 2nd element
iterate through array of numbers, check each num1
  for each num1, iterate through array of numbers, check each num2
    if absolute value of num1 - num2 is < gap and not equal to 0
      gap = this new number
      min_array = [num1, num2]
    end if
  end nested iteration
end iteration

return min_array of two numbers

=end

def closest_numbers(array)
  min_array = [array[0], array[1]]
  gap = (array[0] - array[1]).abs
  array.each do |num1|
    array.each do |num2|
      if (num1 - num2).abs < gap && (num1 - num2).abs != 0
        gap = (num1 - num2).abs
        min_array = [num1, num2]
      end
    end
  end
  min_array
end

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]
