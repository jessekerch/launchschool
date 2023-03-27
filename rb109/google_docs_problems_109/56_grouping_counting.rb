=begin
56. Grouping and Counting
(https://www.codewars.com/kata/53a452dd0064085711001205)
6 kyu
Your goal is to write the group_and_count method, which should receive an array
as a unique parameter and return a hash.
Empty or nil input must return nil instead of a hash.
This hash returned must contain as keys the unique values of the array,
and as values the counting of each value.

The following methods were disabled:
Array#count
Array#length

Problem:
input: array of numbers
output: hash of numbers and counts
rules:
can't use #length or #count methods
empty or nil input should return nil (not a hash)

Example usage:
input = [1,1,2,2,2,3]
group_and_count(input)# == {1=>2, 2=>3, 3=>1}

Data:
array input
hash output

Algo:
define method to take one array parameter "arr"
make a hash variable "hsh"
if input is nil or empty array, return nil
iterate through the array, assign each number to "num"
  if there is a key "num" in "hsh" already, add +1 to the value
  otherwise create a "num" key with value 1
  
return hash of numbers and counts

=end

def group_and_count(arr)
  hsh = {}
  return nil if arr == nil || arr.empty?
  for num in arr do
    if hsh[num]
      hsh[num] += 1
    else
      hsh[num] = 1
    end
  end
  hsh
end


p group_and_count([1,1,2,2,2,3]) == {1=>2, 2=>3, 3=>1}
p group_and_count([]) == nil
p group_and_count(nil) == nil
p group_and_count([1, 7, 5, -1]) == {1=>1, 7=>1, 5=>1, -1=>1}
