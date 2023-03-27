=begin
# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.

# Examples:

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4])
                            == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".

Problem:
input: array
output: array
rules:
output array should be number of other numbers smaller than current
check each number in the input array
but only check against unique numbers when comparing

Examples:
[1,4,6,8,13,2,4,5,4] ->
1 -> 0
4 -> 2
6 -> 4... OK so only check unique numbers when comparing

Data:
input: array
ouput: array
interm: none

Steps:
define method to check smaller numbers than each element of an array
initiate smaller numbers array as empty
iterate through each element of input array
  set counter at 0
  for each number
    check each number in the unique number array
    if number is larger, +1 to the counter
  add counter to array of smaller numbers
return new array with smaller numbers count

=end

def smaller_numbers_than_current(array)
  smaller_nums = []
  array.each do |num|
    counter = 0
    array.uniq.each { |n| counter += 1 if num > n }
    smaller_nums << counter
  end
  smaller_nums
end

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]