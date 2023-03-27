=begin

There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.

Problem:
input: array of numbers (ints and floats)
output: the one number that occurs only once
rules:
array will have at least 3 elements
numbers can be integers and/or floats
can be very large array

Examples:
find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

Data:
input: array
output: integer

Algo:
# this timed out! so I went with .uniq.each
#define method "find_uniq" to take one parameter "arr"
#select element of array that has a count of 1
#return index 0 element of returned array from select

define method "find_uniq" to take one parameter "arr"
iterate through unique numbers in array
return number that has a count of 1 in the input array

=end

def find_uniq(arr)
  arr.uniq.each { |num| return num if arr.count(num) == 1 }
end  

p find_uniq([1,1,1,1,0]) == 0
p find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
p find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55