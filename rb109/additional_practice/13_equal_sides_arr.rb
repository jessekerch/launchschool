=begin

Problem:
input: array of numbers
output: index position where sides are balanced
interm: arrays
rules:
numbers are all integers, can be negative
return -1 if there is no index to balance
return first index option if multiple are available (i.e. work from the left)

Example:
[1,100,50,-51,1,1] => 1

Data:
input: array
output: integer
interm: arrays

Algo:
define method to take one parameter "arr"
iterate "idx" index from 0 up to arr size - 1
  if arr index 0 to idx is equal to idx up to end of array (-1)
    return current idx

return -1
=end

def find_even_index(arr)
  0.upto(arr.size - 1) do |idx|
    return idx if arr[0...idx].sum == arr[(idx + 1)..-1].sum
  end
  -1
end  

p find_even_index([1,2,3,4,3,2,1]) == 3
p find_even_index([1,100,50,-51,1,1]) == 1
p find_even_index([1,2,3,4,5,6]) == -1
p find_even_index([20,10,30,10,10,15,35]) == 3
p find_even_index([20,10,-80,10,10,15,35]) == 0
p find_even_index([10,-80,10,10,15,35,20]) == 6
p find_even_index(Array(1..100)) == -1
p find_even_index([0,0,0,0,0]) == 0
p find_even_index([-1,-2,-3,-4,-3,-2,-1]) == 3
p find_even_index(Array(-100..-1)) == -1
