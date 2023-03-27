=begin

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples
[1, 2, 5, 6, 5, 2] => [6, 5, 5, 2, 2, 1]
1 == 2 no
[2, 2] yes, pairs = 1
[5, 5] yes, pairs = 2
[6] not enough numbers, so no
return 2

Data:
array input
integer output
no interm hash or anything else

Algo:
define method find_pairs to take one param "arr"
set pairs = 0
sort input array in reverse order
while array size >= 2 loop
  current = last element of array popped off
  next = last element of array
  if current = next
    +1 to pairs
    pop off the last element of array (discard)
  else
return pairs

=end

def find_pairs(arr)
  pairs = 0
  arr = arr.sort.reverse
  while arr.size >= 2 do
    if arr.pop == arr.last
      pairs += 1
      arr.pop
    end
  end
  pairs
end

p find_pairs([1, 2, 5, 6, 5, 2]) == 2
p find_pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p find_pairs([0, 0, 0, 0, 0, 0, 0]) == 3
p find_pairs([1000, 1000]) == 1
p find_pairs([]) == 0
p find_pairs([54]) == 0
