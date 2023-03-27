=begin

Your goal is to write the group_and_count method,
which should receive and array as unique parameter and return a hash.
Empty or nil input must return nil instead of a hash.
This hash returned must contain as keys the unique values of the array,
and as values the counting of each value.

Example usage:

input = [1,1,2,2,2,3]

group_and_count(input)# == {1=>2, 2=>3, 3=>1}

The following methods were disabled:

Array#count
Array#length

Problem:
input: array of numbers
output: hash of nums and qtys
rules:
output hash should have only unique elements of array as keys, and qty as values
cannot use count or length
return nil if empty or nil input

Example:
[1,1,2,2,2,3] => {1=>2, 2=>3, 3=>1}
[1, 2, 3] => each of these 
1 => 2, 2 => 3, 3 => 1

Data:
input array
output hash

Algo:
define method group_and_count to take one parameter
initialize new hash, blank
for each full array element
  if hsh contains the element already, +1 to the value
  otherwise, set the key to value 1
return hash

=end

def group_and_count(arr)
  return nil if arr == nil || arr.empty?
  hsh = {}
  arr.each do |num|
    !!hsh[num] ? hsh[num] += 1 : hsh[num] = 1
  end
  hsh
end

p group_and_count([0,1,1,0]) #== {0=>2, 1=>2}