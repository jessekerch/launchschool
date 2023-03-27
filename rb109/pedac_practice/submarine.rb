=begin
# Given an array of n positive integers and a positive integer, find the minimal length of a contiguous subarray for which the sum >= integer.

# p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
# p minSubLength([1, 10, 5, 2, 7], 9) == 2
# p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
# p minSubLength([1, 2, 4], 8) == 0

input: array, integer elements representing available buttons and depths
	- target depth
output: how many buttons pushed, smallest possible subarray of continuous buttons
rules: 



=begin JESSE
Problem:
input:
  - array of integers, representing buttons and depths
  - positive integer, target depth
output: integer, representing length of shortest possible array of buttons pressed 
rules: output subarray total count must add up to target depth
  - subarray must be a contiguous section of the input array
  - integers are always positive in the given Array
  - output result can be zero, if no option is available
  
Examples:
([1, 2, 3, 4], 3) == 1
1 => false 
2 => false 
3 => true, return [3], and the count is 1

([1, 2, 3, 3], 6) == 2
1 => false 
2 => false 
3 => false 
3 => false 
1, 2 => false 
2, 3 => false 
3, 3 => true, return [3, 3], and the count is 2

Data Structure:
input: array of integers
input 2: integer, target Integer
intermediate: subarry to hold integers which add up to the target integer

=begin
Algorithm:
- Iterate from 1 up to the size of the given array
=> Use parameter "length" to represent a number of elements in the given array

- Iterate from 0 up to the size of the given array -1
=> Use parameter “start” to reference indices in the given array

  - Reference a subarray with two arguments start and length (0,1; 1,1; 2,1; etc)
  - Calculate sum of subarray # (array[start, length].sum)
  - if sum is >= target, return length integer of current iteration (shorted possible size will be returned)

Code:
=end

def minSubLength(array, target)
  1.upto(array.size) do |length|
    0.upto(array.size - 1) do |start|
      return length if array[start,length].sum >= target
    end
  end
  0
end

p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
p minSubLength([1, 10, 5, 2, 7], 9) == 1
p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
p minSubLength([1, 2, 4], 8) == 0
