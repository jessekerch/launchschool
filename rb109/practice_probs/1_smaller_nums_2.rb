=begin

# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.

Problem:
input: array of numbers
output: array of count of numbers less than number at index
rules: input can be one or more numbers
input can be zero, but non-negative
only count unique elements (don't count any number more than once)


# Examples:

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4])
                            == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".

Data:
input: array
output: array
interm: hash? nah

Algo:
define method to take one parameter "arr"
make "smaller" variable set to empty array []
iterate across input arr, assigning each to "num" parameter
  add count of *unique* arr elements less than num to "smaller" array
return "smaller" array

=end

def smaller_numbers_than_current(arr)
  smaller = []
  for num in arr do
    smaller << arr.uniq.count { |x| x < num }
  end
  smaller
end

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]